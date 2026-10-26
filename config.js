// ====== SIRF YE FILE EDIT KARO ======
const CONFIG = {
  SITE_NAME: "AwaisAgency",
  // Apna WhatsApp number: country code ke saath, + aur dashes ke baghair (orders yahan aayenge)
  WHATSAPP: "923093260743",
  // Prices data.js mein already 1.8x kar di gayi hain, isliye yahan 0 rakho (extra % chahiye to number badlo)
  MARGIN: 0,
  // Optional: Google Sheet webhook URL (README mein steps hain). Khali chhorna theek hai.
  WEBHOOK_URL: "",
  // Payment accounts jahan customer paisay bhejega
  PAYMENTS: [
    { name: "JazzCash",  acc: "0309-3260743", title: "Nazakat Ali Khoso" },
    { name: "Easypaisa", acc: "0333-2739910", title: "Nazakat Ali Khoso" },
    ]
};
