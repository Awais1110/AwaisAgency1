const $=s=>document.querySelector(s), C=CONFIG;
const esc=s=>String(s).replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
const rs=n=>'Rs '+(+n).toFixed(2), fmt=n=>(+n).toLocaleString();
function toast(m){const t=$('#toast');t.textContent=m;t.style.display='block';setTimeout(()=>t.style.display='none',3000)}

/* ---- parse services (name may contain "|", so read numbers from the right) ---- */
const SV=[];let cat0='';
RAW.split('\n').forEach(l=>{l=l.trim();if(!l)return;
 if(l[0]=='#'){cat0=l.slice(1).trim();return}
 const f=l.split('|'),avg=f.pop().trim(),max=+f.pop(),min=+f.pop(),rate=+f.pop(),id=+f.shift();
 SV.push({id,cat:cat0,name:f.join('|').trim(),rate:+(rate*(1+C.MARGIN/100)).toFixed(4),min,max,avg})});
const getOrders=()=>JSON.parse(localStorage.getItem('orders')||'[]');
let pre=null;

/* ---- layout / routing ---- */
function render(){
 const v=location.hash.slice(1)||'order';
 $('#app').innerHTML=`<header><b class="logo">${esc(C.SITE_NAME)}</b><nav>${[['order','New Order'],['services','Services'],['track','My Orders'],['help','How to Pay']]
 .map(t=>`<a href="#${t[0]}" class="${v==t[0]?'on':''}">${t[1]}</a>`).join('')}</nav></header><main id="view"></main>`;
 ({order:vOrder,services:vServices,track:vTrack,help:vHelp}[v]||vOrder)()}
window.onhashchange=render;

/* ---- new order ---- */
function vOrder(){
 const cats=[...new Set(SV.map(s=>s.cat))],cur0=pre?SV.find(s=>s.id==pre):null;
 $('#view').innerHTML=`<h2>New Order</h2><div class="card">
 <label>Category</label><select id="cat" onchange="fillSvc()">${cats.map(c=>`<option ${cur0&&cur0.cat==c?'selected':''}>${esc(c)}</option>`).join('')}</select>
 <label>Service</label><select id="svc" onchange="calc()"></select><div class="info" id="meta"></div>
 <label>Link (video / profile URL)</label><input id="link" placeholder="https://www.tiktok.com/...">
 <label>Quantity</label><input id="qty" type="number" oninput="calc()">
 <div class="charge" id="chg"></div></div>
 <div class="card"><label>Your Name</label><input id="nm">
 <label>Your WhatsApp Number</label><input id="ph" placeholder="03001234567">
 <label>Payment Method</label><select id="pm" onchange="payInfo()">${C.PAYMENTS.map((p,i)=>`<option value="${i}">${esc(p.name)}</option>`).join('')}</select>
 <div class="pay" id="pay"></div>
 <label>Transaction ID (payment karne ke baad)</label><input id="tid">
 <button id="sb" onclick="submitOrder()">Place Order</button>
 <p class="info">Order WhatsApp par admin ko jayega. Payment verify hote hi order start ho jata hai.</p></div><div id="done"></div>`;
 fillSvc(pre);payInfo();pre=null}
function fillSvc(id){
 const l=SV.filter(s=>s.cat==$('#cat').value);
 $('#svc').innerHTML=l.map(s=>`<option value="${s.id}" ${s.id==id?'selected':''}>${s.id} - ${esc(s.name)} - ${rs(s.rate)}/1000</option>`).join('');calc()}
const cur=()=>SV.find(s=>s.id==$('#svc').value);
function calc(){const s=cur();if(!s)return;
 $('#meta').textContent=`Rate: ${rs(s.rate)} per 1000 | Min: ${fmt(s.min)} | Max: ${fmt(s.max)} | Avg Time: ${s.avg}`;
 $('#chg').textContent='Total: '+rs((+$('#qty').value||0)/1000*s.rate)}
function payInfo(){const p=C.PAYMENTS[$('#pm').value];
 $('#pay').innerHTML=`Send payment to <b>${esc(p.name)}</b>: <b>${esc(p.acc)}</b><br>Title: ${esc(p.title)}`}

async function submitOrder(){
 const s=cur(),q=+$('#qty').value,link=$('#link').value.trim(),name=$('#nm').value.trim(),
 ph=$('#ph').value.trim(),m=C.PAYMENTS[$('#pm').value],tid=$('#tid').value.trim();
 if(!/^https?:\/\//i.test(link))return toast('Valid link do (https://...)');
 if(!(q>=s.min&&q<=s.max))return toast(`Quantity ${fmt(s.min)} se ${fmt(s.max)} ke beech ho`);
 if(!name||ph.replace(/\D/g,'').length<10)return toast('Naam aur sahi WhatsApp number do');
 if(!tid)return toast('Payment ki Transaction ID do');
 const o={id:'PK'+Date.now().toString(36).toUpperCase(),date:new Date().toLocaleString(),name,phone:ph,sid:s.id,
 service:s.name,link,qty:q,charge:+(q/1000*s.rate).toFixed(2),method:m.name,tid,status:'Pending'};
 const btn=$('#sb');btn.disabled=true;btn.textContent='Sending...';
 if(C.WORKER_URL){
  try{const r=await fetch(C.WORKER_URL,{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({action:'create',order:o})});
   const d=await r.json();if(!d.id)throw 0;o.id=d.id}
  catch(e){btn.disabled=false;btn.textContent='Place Order';return toast('Order send nahi hua, dobara try karo')}
 }
 const all=getOrders();all.unshift(o);localStorage.setItem('orders',JSON.stringify(all));
 btn.disabled=false;btn.textContent='Place Order';
 const url=waLink(o);
 $('#done').innerHTML=`<div class="card ok"><h2>Order Received - ${o.id}</h2>
 <p class="info">Payment verify hote hi order start ho jayega. Order ID sambhaal kar rakho. "My Orders" mein status dekh sakte ho.</p>
 <a class="btn wa" href="${url}" target="_blank" rel="noopener">WhatsApp par bhi bhejo (optional)</a></div>`;
 $('#done').scrollIntoView({behavior:'smooth'})}
function waLink(o){
 const t=`*New Order ${o.id}*\nName: ${o.name}\nPhone: ${o.phone}\nService ID: ${o.sid}\n${o.service}\nLink: ${o.link}\nQty: ${o.qty}\nTotal: ${rs(o.charge)}\nPayment: ${o.method}\nTID: ${o.tid}`;
 return `https://wa.me/${C.WHATSAPP}?text=${encodeURIComponent(t)}`}

/* ---- services ---- */
function vServices(){
 $('#view').innerHTML=`<h2>Services</h2><div class="card"><input id="q" placeholder="Search (e.g. likes, followers, pakistan)..." oninput="listSvc()">
 <div class="wrap" style="margin-top:12px"><table id="st"></table></div></div>`;listSvc()}
function listSvc(){
 const q=$('#q').value.toLowerCase();
 $('#st').innerHTML='<tr><th>ID</th><th>Service</th><th>Rate/1000</th><th>Min</th><th>Max</th><th>Avg Time</th><th></th></tr>'+
 SV.filter(s=>(s.name+s.cat+s.id).toLowerCase().includes(q)).map(s=>
 `<tr><td>${s.id}</td><td>${esc(s.name)}</td><td>${rs(s.rate)}</td><td>${fmt(s.min)}</td><td>${fmt(s.max)}</td><td>${esc(s.avg)}</td>
 <td><button class="sm" onclick="pre=${s.id};location.hash='order';render()">Order</button></td></tr>`).join('')}

/* ---- my orders (this browser only) ---- */
async function syncStatus(){
 if(!C.WORKER_URL)return;const all=getOrders();let ch=0;
 await Promise.all(all.filter(o=>!/Completed|Rejected|Cancel/i.test(o.status)).map(async o=>{
  try{const d=await(await fetch(C.WORKER_URL,{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({action:'track',id:o.id})})).json();
  if(d.status&&d.status!=o.status){o.status=d.status;ch=1}}catch(e){}}));
 if(ch){localStorage.setItem('orders',JSON.stringify(all));if(location.hash=='#track')vTrack(1)}}
function vTrack(skip){
 $('#view').innerHTML=`<h2>My Orders</h2><div class="card wrap"><table><tr><th>ID</th><th>Date</th><th>Service</th><th>Qty</th><th>Total</th><th>Status</th><th></th></tr>
 ${getOrders().map(o=>`<tr><td>${o.id}</td><td>${o.date}</td><td>${esc(o.service)}</td><td>${fmt(o.qty)}</td><td>${rs(o.charge)}</td>
 <td class="${o.status=='Pending'?'Pending':''}">${esc(o.status)}</td><td><a href="https://wa.me/${C.WHATSAPP}?text=${encodeURIComponent('Order status: '+o.id)}" target="_blank" rel="noopener">Status</a></td></tr>`).join('')||'<tr><td colspan=7>Abhi koi order nahi</td></tr>'}</table>
 <p class="info">Ye list sirf isi browser mein save hoti hai. Status khud update hota hai.</p></div>`;if(!skip)syncStatus()}

/* ---- help ---- */
function vHelp(){
 $('#view').innerHTML=`<h2>How to Pay</h2><div class="card"><p class="info" style="font-size:15px">1. Service chuno, link aur quantity daalo.<br>2. Total amount neeche diye account par bhejo.<br>3. Transaction ID likh kar Place Order dabao.<br>4. WhatsApp khulega - message send karo.<br>5. Payment verify hote hi order start.</p>
 ${C.PAYMENTS.map(p=>`<div class="pay"><b>${esc(p.name)}</b>: ${esc(p.acc)} (${esc(p.title)})</div>`).join('')}</div>`}
render();