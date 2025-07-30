import React from "react";
import { Link } from "react-router-dom";
import showcase from "../../../assets/admin-cover-nobg.png";
import { motion } from "framer-motion";
const HeroSection = () => {
  const fadeInUp = {
    hidden: { opacity: 0, y: -50 },
    visible: { opacity: 1, y: 0, transition: { duration: 1 } },
  };
  const fadeInDown = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 1 } },
  };
  return (
    <section className="w-full bg-gradient-to-tl from-[#ea8b85] to-[#dba05b] pt-24 md:pt-32 pb-12 lg:pb-0">
      <div className="max-w-7xl mx-auto px-4 md:px-8 flex flex-col-reverse md:flex-row items-center justify-between gap-10">
        {/* Left Text Content */}
        <div className="w-full md:w-1/2 text-center md:text-left text-[#582f21]">
          <motion.h1   
          initial="hidden"
            whileInView="visible"
            viewport={{ once: false }}
            variants={fadeInDown}
             className="text-2xl sm:text-4xl md:text-3xl lg:text-5xl font-extrabold leading-tight font-serif">
            Tamanna Srivastav
          </motion.h1>
          <motion.h2
          initial="hidden"
            whileInView="visible"
            viewport={{ once: false }}
            variants={fadeInDown}
          className="mt-2 text-lg md:text-lg lg:text-xl font-medium">
            Makeup Artist | Hair Stylist | Nail Artist
          </motion.h2>
          <p 
          className="w-[90%] md:w-full m-auto mt-4 font-serif text-base md:text-lg italic">
            Hello , I’m your trusted stylist — passionate about enhancing
            natural beauty through expert makeup and hairstyling. With years of
            experience, I’m here to help you look and feel your best for any
            occasion.
          </p>
          <div className="mt-6">
            <Link
              to="/about"
              className="inline-block px-6 py-3 bg-[#743d2b] text-white rounded-2xl shadow hover:bg-[#3f2b25] transition-all duration-300"
            >
              View Profile
            </Link>
          </div>
        </div>

        {/* Right Image */}
        <div
          id="owner"
          className="w-full  md:w-1/2 flex justify-center md:justify-end"
        >
          <motion.img
            src={showcase}
            alt="Makeup showcase"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false }}
            variants={fadeInUp}
            className="w-[80%]   sm:w-[70%] md:w-[90%] max-w-xs  md:bg-none md:shadow-none sm:max-w-sm md:max-w-md lg:max-w-xl  object-contain shadow-xl rounded-4xl "
          />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
