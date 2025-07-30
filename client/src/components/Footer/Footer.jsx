import React from "react";
import { Link } from "react-router-dom";
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt, FaInstagram, FaFacebookF, FaLinkedinIn } from "react-icons/fa";
import logo from "../../assets/logo-brown.png";
import { IoMail } from "react-icons/io5";
const Footer = () => {
  const phoneNumber = "+919517083101"; // Your contact number
  const whatsappMessage = "Hi, I would like to book an appointment."; // Custom message

  return (
   <footer className="bg-[#ffca98] text-[#582f21] py-10 px-4 mt-10">
  <div className="max-w-7xl mx-auto grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
    {/* Logo & Tagline */}
    <div className="flex flex-col items-center lg:items-start text-center lg:text-left gap-3">
      <img src={logo} alt="Logo" className="h-12 object-contain" />
      <p className="text-sm italic max-w-xs">
        Empowering beauty & confidence through elegant makeup artistry.
      </p>
    </div>

    {/* Navigation Links */}
    <div className="flex flex-col items-center lg:items-start">
      <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
      <ul className="space-y-2 flex gap-3 md:flex-col flex-wrap lg:text-left">
        {["Home", "About", "Services", "Faqs", "Contact"].map((item) => (
          <li className="hover:scale-110" key={item}>
            <Link
              to={`/${item.toLowerCase()}`}
              className="hover:text-[#ad7159]  transition-colors "
            >
              {item}
            </Link>
          </li>
        ))}
      </ul>
    </div>

    {/* Contact Info */}
    <div className=" flex flex-col items-center lg:items-start text-center lg:text-left">
      <h4 className="text-lg font-semibold mb-4">Contact</h4>
      <ul className="flex  flex-col gap-4 text-sm">
        <a href="tel:+919517083101">
          <li className="flex items-center justify-center lg:justify-start gap-3 hover:scale-105">
            <FaPhoneAlt className="text-[#8d4b2f] " />
            +91 9517083101
          </li>
        </a>
        <a href="mailto:beyondblushbytamanna@gmail.com" target="_blank">
          <li className="flex items-center justify-center lg:justify-start gap-3 hover:scale-105">
            <FaEnvelope className="text-[#8d4b2f]" />
            beyondblushbytamanna@gmail.com
          </li>
        </a>
        <a href="https://maps.app.goo.gl/D14JcTpb2ZL1KWaAA" target="_blank">
          <li className="flex items-center justify-center lg:justify-start gap-2 hover:scale-105">
            <FaMapMarkerAlt className="text-[#8d4b2f] text-xl" />
            <span className="max-w-xs">
              3rd Floor, Balaji Apartment, Street No 7, Vasant Vihar Enclave, Dehradun, Uttarakhand – 248006
            </span>
          </li>
        </a>
      </ul>
    </div>

    {/* Social Section */}
    <div className=" text-center lg:text-left">
      <h4 className="text-lg font-semibold mb-4 text-[#582f21]">Stay Connected</h4>
      <p className="text-sm mb-4 text-[#784d33]">
        Follow us on social platforms for latest updates and styles.
      </p>
      <div className="mt-5 flex justify-center lg:justify-start gap-4">
        <a
          href="https://www.facebook.com/share/1CNvmNQTo2/?mibextid=wwXIfr"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:scale-110 text-white bg-[#df8365] p-2 rounded-full transition"
          aria-label="Facebook"
        >
          <FaFacebookF size={18}  />
        </a>
        <a
          href="https://www.instagram.com/beyondblushbytamanna?igsh=MXQxOTd2Y3B3OGRrMg%3D%3D&utm_source=qr"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:scale-110 text-white bg-[#df8365] hover:brightness-110 p-2 rounded-full transition"
          aria-label="Instagram"
        >
          <FaInstagram size={18} />
        </a>
        <a
          href="https://www.linkedin.com/in/tamanna-srivastav-41162416b/"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:scale-110 text-white bg-[#df8365] hover:brightness-110 p-2 rounded-full transition"
          aria-label="Instagram"
        >
          <FaLinkedinIn  size={18} />
        </a>
        <a
          href="mailto:beyondblushbytamanna@gmail.com"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:scale-110 text-white bg-[#df8365] hover:brightness-110 p-2 rounded-full transition"
          aria-label="Instagram"
        >
          <IoMail size={18} />
        </a>
      </div>
    </div>
  </div>

  {/* Bottom Bar */}
  <div className="border-t border-[#d9a87c] mt-10 pt-6 text-center text-sm px-4">
    &copy; {new Date().getFullYear()} Beyond Blush by Tamanna. All rights reserved.&nbsp;&nbsp;<br/>
    <br className="sm:hidden" />
   <div className="mt-1"> Developed by <span className=" font-semibold hover:cursor-pointer hover:underline">
   <Link
   to="https://www.linkedin.com/in/aniket-srivastava-0141b22b8"
   target="_blank"
   >
   Aniket Srivastava
   </Link>
   </span> </div>
  </div>
</footer>

  );
};

export default Footer;
