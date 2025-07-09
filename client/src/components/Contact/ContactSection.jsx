import React from "react";
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";

const ContactSection = () => {
  return (
    <section className="w-full bg-gradient-to-br from-[#fff3f0] to-[#f9d5c8] text-[#4a2e2e] py-24 px-6 sm:px-10 lg:px-20">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
        {/* Left Info Column */}
        <div>
          <h2 className="text-4xl sm:text-5xl font-bold mb-6">Contact Us</h2>
          <p className="text-lg font-medium mb-4">Beyond Blush by Tamanna</p>
          <p className="text-base italic leading-relaxed mb-6">
            We’d love to hear from you! Reach out to us for bookings, inquiries, or
            simply to say hello. Let’s make your big day unforgettable!
          </p>

          <div className="space-y-4 text-sm sm:text-base">
            <div className="flex items-center gap-4">
              <FaPhoneAlt className="text-pink-500" />
              <span>+91 80044 46666</span>
            </div>
            <div className="flex items-center gap-4">
              <FaEnvelope className="text-pink-500" />
              <span>beyondblush@domain.com</span>
            </div>
            <div className="flex items-center gap-4">
              <FaMapMarkerAlt className="text-pink-500" />
              <span>515 West Ave, Makeup City, IN 400001</span>
            </div>
          </div>
        </div>

        {/* Right Form Column */}
        <form className="bg-white rounded-xl shadow-lg p-6 sm:p-10 space-y-6">
          <div>
            <label htmlFor="name" className="block mb-1 font-medium text-[#4a2e2e]">
              Full Name
            </label>
            <input
              type="text"
              id="name"
              placeholder="Your Name"
              className="w-full border-b border-pink-300 outline-none py-2 px-1 focus:border-pink-500 transition-all bg-transparent"
              required
            />
          </div>

          <div>
            <label htmlFor="email" className="block mb-1 font-medium text-[#4a2e2e]">
              Email
            </label>
            <input
              type="email"
              id="email"
              placeholder="your@email.com"
              className="w-full border-b border-pink-300 outline-none py-2 px-1 focus:border-pink-500 transition-all bg-transparent"
              required
            />
          </div>

          <div>
            <label htmlFor="message" className="block mb-1 font-medium text-[#4a2e2e]">
              Message
            </label>
            <textarea
              id="message"
              rows="4"
              placeholder="Your message..."
              className="w-full border-b border-pink-300 outline-none py-2 px-1 focus:border-pink-500 transition-all bg-transparent resize-none"
              required
            />
          </div>

          <button
            type="submit"
            className="bg-pink-500 hover:bg-pink-600 transition text-white px-6 py-2 rounded-lg font-semibold tracking-wide shadow-md"
          >
            Submit
          </button>
        </form>
      </div>
    </section>
  );
};

export default ContactSection;
