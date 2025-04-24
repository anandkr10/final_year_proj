import React, { useState } from "react";
import { FaPaperPlane, FaTimes } from "react-icons/fa";


const responses = {
  en: {
    "hi": "Hi there! How can I help you today? 😊",
    "hello": "Hello! Ready to book your doctor appointment?",
    "book appointment": "Sure—what specialty are you looking for?",
    "appointment book": "Sure—what specialty are you looking for?",
    "cardiologist": "Cardiologist selected. What date/time works for you?",
    "pediatrician": "Pediatrician selected. When would you like to come in?",
    "dentist": "Dentist selected. Please share your preferred slot.",
    "orthopedic": "Orthopedic selected. Which day suits you?",
    "Oncology appointment": "Okay, please provide your appointment ID to cancel.",
    "reschedule": "Sure—please tell me your appointment ID and new date/time.",
    "thank you": "You're welcome! Anything else I can do for you?",
    "bye": "Goodbye! Take care 😊",
    "hours": "Our clinic is open 8 AM–6 PM, Mon–Sat.",
    "insurance": "Yes, we accept most major insurance plans.",
    "location": "We’re located at near B.N College, Ashokrajpath.",
    "contact": "You can reach us at 748867XXXX.",
    "payment": "We accept cash, card, and digital wallets.",
    "online consult": "We offer telehealth visits via secure video link.",
    "follow-up": "Follow‑up appointments can be booked up to 6 months ahead.",
    "urgent": "For urgent concerns, please call us directly.",
    "lab tests": "We have on‑site lab services for blood work and imaging.",
    "referral": "If you need a referral, let us know your insurance details.",
    "first visit": "For first visits, please arrive 15 minutes early for paperwork.",
    "forms": "All patient forms are available on our website.",
    "covid": "We follow strict COVID‑19 protocols for your safety.",
    "wheelchair": "Yes, our facility is wheelchair accessible.",
    "parking": "Free patient parking is available in the rear lot.",
    "emergency": "In case of emergency, dial 911 immediately.",
    "default":
      "I’m not sure I understand. Could you please rephrase or try another question?",
  },
  hi: {
    "नमस्ते": "नमस्ते! मैं आपकी कैसे मदद कर सकता हूँ? 😊",
    "हैलो": "नमस्ते! क्या आप अपॉइंटमेंट बुक करना चाहते हैं?",
    "अपॉइंटमेंट बुक करें": "बिल्कुल—किस स्पेशियलिस्ट की जरूरत है?",
    "कार्डियोलॉजिस्ट": "कार्डियोलॉजिस्ट चुना गया। कौन सी तारीख/समय उपयुक्त है?",
    "पेडियाट्रिशन": "पेडियाट्रिशन चुना गया। आप कब आना चाहेंगे?",
    "दंत चिकित्सक": "दंत चिकित्सक चुना गया। कृपया अपना समय बताएं।",
    "ऑर्थोपेडिक": "ऑर्थोपेडिक चुना गया। कौन सा दिन ठीक रहेगा?",
    "अपॉइंटमेंट रद्द करें": "ठीक है, कृपया अपना अपॉइंटमेंट आईडी साझा करें।",
    "पुनर्निर्धारित करें": "कृपया अपना आईडी और नई तारीख/समय बताएं।",
    "धन्यवाद": "कोई बात नहीं! कुछ और चाहिए?",
    "बाय": "अलविदा! ध्यान रखें 😊",
    "समय": "हम सुबह 8–शाम 6 बजे, सोमवार–शनिवार खुले रहते हैं।",
    "बीमा": "हाँ, हम अधिकांश प्रमुख बीमा योजनाएँ स्वीकार करते हैं।",
    "स्थान": "हमारा पता 123 मेन स्ट्रीट, सुइट 200 है।",
    "संपर्क": "हमें (555) 123‑4567 पर कॉल करें।",
    "भुगतान": "हम नकद, कार्ड, और डिजिटल वॉलेट स्वीकार करते हैं।",
    "ऑनलाइन कंसल्ट": "हम सुरक्षित वीडियो लिंक के माध्यम से टेलीहेल्थ सेवाएं देते हैं।",
    "फॉलो-अप": "फॉलो‑अप 6 महीने पहले तक बुक किए जा सकते हैं।",
    "आपातकाल": "आपात स्थिति में, कृपया तुरंत 112 पर कॉल करें।",
    "प्रयोगशाला परीक्षण": "हम साइट पर ब्लड वर्क और इमेजिंग करते हैं।",
    "रेफरल": "यदि रेफरल चाहिए, तो कृपया अपने बीमा विवरण भेजें।",
    "पहली मुलाकात": "पहली मुलाकात के लिए 15 मिनट पहले आएँ।",
    "फॉर्म": "सभी फॉर्म हमारी वेबसाइट पर उपलब्ध हैं।",
    "कोविड": "हम COVID‑19 प्रोटोकॉल का पालन करते हैं।",
    "व्हीलचेयर": "हाँ, हमारी सुविधा व्हीलचेयर एक्सेसिबल है।",
    "पार्किंग": "मुफ्त पार्किंग पिछले लॉट में उपलब्ध है।",
    "आपातकालीन": "आपात स्थिति में, तुरंत 112 डायल करें।",
    "डिफ़ॉल्ट":
      "मुझे समझ नहीं आया—कृपया फिर से पूछें या कोई अन्य प्रश्न करें।",
  },
};

const detectLanguage = (text) => {
  return /[ऀ-ॿ]/.test(text) ? "hi" : "en";
};

const Chatbot = ({ onClose }) => {
  const [messages, setMessages] = useState([
    { text: "Hi there! How can I assist you today?", sender: "bot" },
  ]);
  const [input, setInput] = useState("");

  const handleSend = () => {
    if (!input.trim()) return;
    const userText = input.trim();
    const lang = detectLanguage(userText);
    setMessages((m) => [...m, { text: userText, sender: "user" }]);
    setInput("");

    setTimeout(() => {
      const key = userText.toLowerCase();
      const reply =
        responses[lang][key] || responses[lang].default;
      setMessages((m) => [...m, { text: reply, sender: "bot" }]);
    }, 1000);
  };

  return (
    <div className="fixed bottom-4 right-4 w-80 h-[500px] bg-white shadow-xl rounded-lg flex flex-col">
      {/* Header */}
      <div className="flex justify-between items-center bg-blue-600 text-white p-3 rounded-t-lg">
        <h2 className="font-semibold">QuickDocVisit Doctor ChatBot</h2>
        <FaTimes className="cursor-pointer" onClick={onClose} />
      </div>

      {/* Messages */}
      <div className="flex-1 overflow-y-auto p-3 space-y-2 bg-gray-50">
        {messages.map((m, i) => (
          <div
            key={i}
            className={`flex ${
              m.sender === "user" ? "justify-end" : "justify-start"
            }`}
          >
            <div
              className={`px-3 py-2 rounded-lg max-w-xs ${
                m.sender === "user"
                  ? "bg-blue-500 text-white"
                  : "bg-white text-gray-800"
              }`}
            >
              {m.text}
            </div>
          </div>
        ))}
      </div>

      {/* Input */}
      <div className="p-3 border-t flex items-center">
        <input
          type="text"
          className="flex-1 p-2 border rounded-lg focus:outline-none"
          placeholder="Type a message..."
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && handleSend()}
        />
        <button
          onClick={handleSend}
          className="ml-2 text-blue-600 hover:text-blue-800"
        >
          <FaPaperPlane />
        </button>
      </div>
    </div>
  );
};

export default Chatbot;