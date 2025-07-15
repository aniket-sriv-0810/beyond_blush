import React from "react";
import img1 from "../../assets/admin-pic1.jpg"; // Portrait image
import award1 from "../../assets/award1.jpg"; // Landscape
import award2 from "../../assets/admin-pic2.jpg"; // Landscape
import {motion} from 'framer-motion';
const AboutSection = () => {
  const fadeInUp = {
    hidden: { opacity: 0, y: -50 },
    visible: { opacity: 1, y: 0, transition: { duration: 1 } },
  };

  return (
    <section className="pt-24 bg-[#fff6ed] py-16 px-4 sm:px-6 lg:px-20 xl:px-28 text-[#582f21]">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-12">
        {/* Left Text + Awards */}
        <div className="flex-1">
          <h2 className="text-2xl sm:text-4xl md:text-5xl text-center md:text-center lg:text-left font-bold font-serif mt-2">
            Tamanna Srivastav
          </h2>
          <h5 className="uppercase mt-4 text-xs text-center lg:text-left md:text-sm tracking-widest font-medium text-[#8d4b2f]">
            Makeup Artist | Hair Stylist | Nail Artist
          </h5>

          <p className="mt-6 italic text-base leading-relaxed max-w-xl">
            Welcome — I’m your dedicated beauty artist, passionate about
            empowering individuals to look and feel their best. With over a
            decade of experience in the art of Makeup and Hair Styling, I’ve
            honed my craft to celebrate confidence and natural elegance.
          </p>

          <p className="mt-4 text-sm leading-relaxed max-w-2xl">
            Every brushstroke is intentional, every detail refined with care.
            Whether it’s a radiant bride or a modern professional, my approach
            is deeply personalized — enhancing beauty through textures and tones
            that reflect your unique essence. Let your style speak, effortlessly
            and gracefully.
          </p>

          {/* Landscape Thumbnails */}
          <div className="mt-8 grid grid-cols-2 md:mx-auto lg:mx-0 gap-6 max-w-lg">
            {[award1, award2].map((src, i) => (
              <div
                key={i}
                className="  rounded-xl  hover:scale-105 transition-transform duration-300 "
              >
                <img
                  src={src}
                  alt={`Award ${i + 1}`}
                  className="w-full h-max object-cover rounded-md "
                />
              </div>
            ))}
          </div>
        </div>

        {/* Right Portrait Image */}
        <div className="flex-1 w-full max-w-xs">
          <div className=" rounded-xl hover:shadow-xl overflow-hidden hover:scale-105 transition-transform duration-300 hover:shadow-gray-500">
            <motion.img
              initial="hidden"
              whileInView="visible"
              viewport={{ once: false }}
              variants={fadeInUp}
              src={img1}
              alt="Tamanna Srivastav"
              className="w-full h-[500px] object-cover  rounded-xl"
            />
          </div>
          <p className="text-lg text-center font-serif mt-7 text-[#8d4b2f]">
             Makeup Artist | Hair Stylist
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
