// components/FloatingActionButtons.jsx
import React from "react";
import { FaWhatsapp, FaPhoneAlt } from "react-icons/fa";

const phoneNumber = "+919517083101"; // Your contact number
const whatsappMessage = "Hi, I would like to book an appointment."; // Custom message

const FloatingActionBtn = () => {
  return (
    <div className="fixed bottom-6 right-4 flex flex-col items-end gap-4 z-50">
      {/* Call Button */}
      <a
        href={`tel:${phoneNumber}`}
        className="group relative bg-gradient-to-tl from-[#d82114] to-[#2b2593]  text-white rounded-full p-4 shadow-xl hover:scale-110  transition-all duration-300"
      >
        <FaPhoneAlt className="text-lg" />
        <span className="absolute right-full mr-2 opacity-0 group-hover:opacity-100 transition duration-300 bg-black text-white text-xs rounded px-2 py-1 whitespace-nowrap">
          Connect
        </span>
      </a>

      {/* WhatsApp Button */}
      <a
        href={`https://wa.me/${phoneNumber}?text=${encodeURIComponent(
          whatsappMessage
        )}`}
        target="_blank"
        rel="noopener noreferrer"
        className="group relative bg-green-500 text-white rounded-full p-4 shadow-xl hover:scale-110 hover:bg-green-600 transition-all duration-300"
      >
        <FaWhatsapp className="text-xl" />
        <span className="absolute right-full mr-2 opacity-0 group-hover:opacity-100 transition duration-300 bg-black text-white text-xs rounded px-2 py-1 whitespace-nowrap">
          Book Now
        </span>
      </a>
    </div>
  );
};

export default FloatingActionBtn;
