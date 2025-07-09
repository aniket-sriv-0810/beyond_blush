// HeroSection.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import showcase from '../../../assets/admin0-no-bg.png'; // use a high-quality image here

const HeroSection = () => {
  return (
    <section className="relative h-screen md:relative w-full md:h-screen bg-gradient-to-br from-[#f3d2b3] to-[#d9a87c]">
      <div className="absolute  md:inset-0 z-10">
        <div className="max-w-7xl mx-auto px-4 lg:px-8 h-full flex flex-col lg:flex-row items-center justify-center gap-12">
          {/* Left Text */}
          <div className="flex-1 mt-20 text-center lg:text-left text-[#582f21]">
            <h1 className="text-3xl sm:text-5xl xl:text-6xl font-extrabold leading-tight font-serif">
              Tamanna Srivastav
              <br />
            </h1>
             <h2 className='mt-1 md:font-medium md:ml-2  md:text-2xl text-[#582f21]'> Makeup Artist | Hair Stylist | Nail Artist </h2>
            <p className="mt-6 text-lg italic max-w-lg mx-auto lg:mx-0">
              Hello, I’m your trusted stylist! I love helping people feel beautiful — which is why I've spent years refining my passion for makeup & hair artistry.
            </p>
            <div className="mt-8">
              <Link
                to="/about"
                className="inline-block px-6 py-3 bg-[#582f21] text-white rounded shadow hover:bg-[#3c1e15] transition-all duration-300"
              >
                About Me
              </Link>
            </div>
          </div>

          {/* Right Image */}
          <div className="py-3 flex justify-start items-end">
            <img
              src={showcase}
              alt="Makeup showcase"
              className="w-60 md:w-lg md:mt-12 rounded-3xl  object-contain"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
