import React, { useState } from 'react'
//import ChatBot from "../pages/Chatbot"
import ChatBot from "../pages/chatbot";
import { assets } from '../assets/assets'

const Header = () => {
  const [chatOpen, setChatOpen] = useState(false)
  const openChatbot = () => setChatOpen(true)
  const closeChatbot = () => setChatOpen(false)

  return (
    <>
      <div className="flex flex-col md:flex-row bg-primary rounded-lg px-6 md:px-10 lg:px-20 overflow-hidden">
        {/* --------- Header Left --------- */}
        <div className="md:w-1/2 flex flex-col justify-center gap-6 py-12 md:py-[10vw]">
      <h1 className="text-3xl md:text-4xl lg:text-5xl text-white font-bold leading-snug">
            Book Appointment <br /> With Trusted Doctors
          </h1>

          <div className="flex items-center gap-4 text-white text-sm font-light">
            <img className="w-28 rounded-full shadow-lg" src={assets.group_profiles} alt="Group of doctors" />
            <p>
              Browse our extensive list of top-rated doctors, <br className="hidden sm:block" /> and schedule your
              appointment instantly.
            </p>
          </div>

          <div className="flex flex-wrap gap-4">
            {/* Book Appointment Link */}
            <a
              href="#speciality"
              className="flex items-center gap-2 bg-white px-8 py-3 rounded-full text-[#595959] text-sm
                         font-medium hover:scale-105 transition-transform duration-300 shadow-md"
            >
              Book Appointment
              <img className="w-4" src={assets.arrow_icon} alt="Arrow icon" />
            </a>

            {/* Chat with Us Button */}
            <button
              onClick={openChatbot}
              className="flex items-center gap-2 bg-gradient-to-r from-teal-400 to-blue-500
                         text-white px-6 py-3 rounded-full text-sm font-medium shadow-lg
                         hover:from-teal-500 hover:to-blue-600 transition-all duration-300"
            >
              <img className="w-5 h-5" src={assets.chatbotIcon} alt="Chat icon" />
              Chat With Us
            </button>
          </div>
        </div>

        {/* --------- Header Right --------- */}
        <div className="md:w-1/2 relative">
          {/* High-quality hero image */}
          <img
            className="w-full h-auto rounded-lg shadow-xl"
            src={assets.header_img}
            alt="Doctor consultation"
          />
        </div>
      </div>

      {/* Chatbot Overlay */}
      {chatOpen && <ChatBot onClose={closeChatbot} />}
    </>
  )
}

export default Header