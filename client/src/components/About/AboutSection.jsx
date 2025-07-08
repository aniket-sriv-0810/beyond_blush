import React from 'react';
import logo from '../../assets/beyond_blush-logo-BLACK.png';

const AboutSection = () => {
  return (
    <section className="bg-[#fff6ed] py-16 px-4 sm:px-6 lg:px-20 xl:px-28 text-[#582f21]">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-14">
        {/* Text Content */}
        <div className="flex-1">
          <h5 className="uppercase text-sm tracking-widest font-medium text-[#8d4b2f]">Makeup Artist</h5>
          <h2 className="text-4xl sm:text-5xl font-bold font-serif mt-2">Beyond Blush</h2>

          <p className="mt-6 italic text-base max-w-xl leading-relaxed">
            Hello, I’m your trusted artist! I love helping people feel beautiful — which is why I’ve spent the last 10+ years engulfed in the art of Makeup & Hair Styling.
          </p>

          <p className="mt-4 text-sm leading-relaxed max-w-2xl">
            Every stroke, every brush, every detail is curated with care. From brides to professionals, I bring confidence and elegance through shades and textures tailored just for you. Let beauty meet personality — naturally and gracefully.
          </p>

          {/* Thumbnails */}
          <div className="mt-10 grid grid-cols-2 gap-6 sm:max-w-md">
            {[1, 2].map((i) => (
              <div
                key={i}
                className="bg-[#f3d2b3] p-6 rounded-xl shadow-lg hover:scale-105 transition-transform duration-300"
              >
                <img src={logo} alt="Logo" className="h-16 w-auto mx-auto" />
              </div>
            ))}
          </div>
        </div>

        {/* Main Image with Caption */}
        <div className="flex-1 relative">
          <div className="bg-[#f3d2b3] p-4 rounded-xl shadow-xl hover:scale-105 transition-transform duration-300">
            <img src={logo} alt="Main Logo" className="h-40 sm:h-56 mx-auto" />
          </div>
          <p className="text-sm text-center mt-4 italic text-[#8d4b2f]">
            Beyond Blush / Makeup Artist
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
