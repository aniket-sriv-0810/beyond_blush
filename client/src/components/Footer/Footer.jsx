import React from "react";
import { Link } from "react-router-dom";
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt, FaInstagram, FaFacebookF } from "react-icons/fa";
import logo from "../../assets/logo-brown.png";

const Footer = () => {
  const phoneNumber = "+919517083101"; // Your contact number
  const whatsappMessage = "Hi, I would like to book an appointment."; // Custom message

  return (
    <footer className="bg-[#f3d2b3] text-[#582f21] -mb-6 py-10 px-4">
      <div className="max-w-7xl mx-auto grid gap-10 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
        {/* Logo & Tagline */}
        <div className="flex flex-col items-center gap-3">
          <img src={logo} alt="Logo" className="h-12 object-contain" />
          <p className="text-sm italic max-w-xs">
            Empowering beauty & confidence through elegant makeup artistry.
          </p>
        </div>

        {/* Navigation Links */}
        <div>
          <h4 className="text-lg font-semibold mb-4 text-center lg:text-left">
            Quick Links
          </h4>
          <ul className="space-y-2 flex gap-4 justify-center lg:flex-col">
            {["Home", "About", "Services", "Faqs", "Contact"].map((item) => (
              <li key={item}>
                <Link
                  to={`/${item.toLowerCase()}`}
                  className="hover:text-[#8d4b2f] transition-colors"
                >
                  {item}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h4 className="text-lg font-semibold text-center mb-4">Contact</h4>
          <ul className="flex flex-col gap-4 text-sm">
            <a href={`tel: ${phoneNumber}`}>
              <li className="flex items-center  gap-3">
                <FaPhoneAlt className="text-[#8d4b2f]" />
                +91 9517083101
              </li>
            </a>
            <a href={`mailto:beyondblushbytamanna@gmail.com`} target="_blank">
              <li className="flex items-center  gap-3">
                <FaEnvelope className="text-[#8d4b2f]" />
                beyondblushbytamanna@gmail.com
              </li>
            </a>
            <a 
            href="https://maps.app.goo.gl/D14JcTpb2ZL1KWaAA"
            target="_blank"
            >
            <li className="flex items-center  gap-3">
              <FaMapMarkerAlt className="text-[#8d4b2f] text-2xl" />
              3rd floor, Balaji apartment, Street no 7, Vasant Vihar Enclave ,
              Dehradun, Uttarakhand  Pin - 248006
            </li>
            </a>
          </ul>
        </div>

        {/* Newsletter or Social/Extra */}
       <div className="text-center sm:text-left">
  <h4 className="text-lg font-semibold text-center mb-4 text-[#582f21]">
    Stay Connected
  </h4>
  <p className="text-sm mb-4 text-[#784d33]">
    Follow us on social platforms for latest updates and styles.
  </p>

  {/* Social Icons */}
  <div className="flex justify-center sm:justify-center gap-4 mt-2">
    <a
      href="https://www.facebook.com/share/1CNvmNQTo2/?mibextid=wwXIfr" // Replace with actual link
      target="_blank"
      rel="noopener noreferrer"
      className="text-white bg-[#4267B2] hover:bg-[#365899] p-2 rounded-full transition"
      aria-label="Facebook"
    >
      <FaFacebookF size={18} />
    </a>
    <a
      href="https://www.instagram.com/beyondblushbytamanna?igsh=MXQxOTd2Y3B3OGRrMg%3D%3D&utm_source=qr" // Replace with actual link
      target="_blank"
      rel="noopener noreferrer"
      className="text-white bg-gradient-to-tr from-pink-500 via-red-500 to-yellow-500 hover:brightness-110 p-2 rounded-full transition"
      aria-label="Instagram"
    >
      <FaInstagram size={18} />
    </a>
  </div>
</div>
      {/* Bottom Bar */}
      <div className="border-t  border-[#d9a87c] mt-10 pt-6 text-center text-sm">
        &copy; {new Date().getFullYear()} Beyond Blush. All rights reserved.{" "}
        <br className="sm:hidden" />
        Developed with ❤️ by{" "}
        <span className="font-semibold">Aniket Srivastava</span>
      </div>
      </div>
    </footer>
  );
};

export default Footer;
