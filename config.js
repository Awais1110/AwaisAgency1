// ====== SIRF YE FILE EDIT KARO ======
const CONFIG = {
  SITE_NAME: "PakSMM",
  // Apna WhatsApp number: country code ke saath, + aur dashes ke baghair (orders yahan aayenge)
  WHATSAPP: "923001234567",
  // Prices data.js mein already 1.8x kar di gayi hain, isliye yahan 0 rakho (extra % chahiye to number badlo)
  MARGIN: 0,
  // Optional: Google Sheet webhook URL (README mein steps hain). Khali chhorna theek hai.
  WEBHOOK_URL: "",
  // Payment accounts jahan customer paisay bhejega
  PAYMENTS: [
    { name: "JazzCash",  acc: "0300-0000000", title: "Account Title" },
    { name: "Easypaisa", acc: "0300-0000000", title: "Account Title" },
    { name: "Bank Transfer", acc: "IBAN PK00XXXX0000000000000000", title: "Account Title" }
  ]
};
