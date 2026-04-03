# Twilio Smart Call Routing System

A cloud-based call routing system built with Twilio Functions that intelligently handles incoming calls, forwards them, and manages voicemail.

## 🚀 Features
- Incoming call routing
- Call forwarding to personal phone
- Voicemail fallback if no answer
- Custom Twilio Functions

## 📁 Project Structure
- /functions/incoming-call.js → Handles inbound calls
- /functions/voicemail.js → Handles voicemail recording
- /functions/hangup.js → Ends call after voicemail

## ⚙️ How It Works
1. Incoming call hits Twilio number
2. Call is routed using Twilio Function
3. If no answer, voicemail is triggered
4. Call ends cleanly after recording

## 🛠️ Tech Stack
- Twilio Functions
- Node.js (JavaScript)

## 📦 Deployment
Deploy using Twilio CLI or Twilio Console Functions.

## 📌 Status
In Progress (building step-by-step)