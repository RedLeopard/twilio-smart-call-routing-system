🚀 I built this so you don’t have to.

A complete Twilio-based smart call routing system with voicemail fallback, call screening, and modular function architecture ready to deploy and customize.

⭐ If this project helps you, consider giving it a star!

---

# Twilio Smart Call Routing System

A cloud-based call routing system built with Twilio Functions that intelligently handles incoming calls, forwards them, screens callers, and manages voicemail without looping or broken call flows.

---

## 🚀 Features
- Smart call routing
- Call forwarding to personal phone
- Voicemail fallback if no answer
- Call screening system
- Answering Machine Detection (AMD)
- Clean call termination (no replay issues)
- Modular Twilio Functions architecture

---

## 📁 Project Structure
/functions
  amd_handler.js      → Answering machine detection handler  
  join.js             → Connects incoming calls to your phone  
  no_answer.js        → Handles unanswered calls  
  voicemail.js        → Records voicemail messages  
  welcome.js          → Initial greeting handler  
  screen.js           → Call screening logic  
  screen_result.js    → Handles screening results  

README.md

---

## ⚙️ How It Works
1. Incoming call hits your Twilio number  
2. Call is routed through the welcome handler  
3. Call is screened (optional)  
4. Call is connected using join function  
5. If no answer, no_answer function triggers  
6. Caller is sent to voicemail  
7. Call ends cleanly after recording  

---

## 🛠️ Tech Stack
- Twilio Functions  
- Node.js (JavaScript)  

---

## 📦 Deployment
Deploy using:
- Twilio CLI  
- Twilio Console (Functions & Assets)

---

## 📌 Status
🚧 In Progress — actively being built and tested

---

## 💡 Use Cases
- Business call routing  
- Lead intake systems  
- Call screening automation  
- Voicemail handling systems  

---

## 🤝 Contributing
Feel free to fork the repo and customize for your own use case.

---

## ⭐ Support
If this project helped you or saved you time, drop a star on the repo.