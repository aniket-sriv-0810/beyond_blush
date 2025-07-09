import React from 'react';
import img1 from '../../assets/admin-beyond-blush-1.jpg';
import award1 from '../../assets/award1.jpg';

const AboutSection = () => {
  return (
    <section className="bg-[#fff6ed] py-16 px-4 sm:px-6 lg:px-20 xl:px-28 text-[#582f21]">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-12">
        {/* Text Column */}
        <div className="flex-1">
          <h5 className="uppercase text-sm tracking-widest font-medium text-[#8d4b2f]">
            Makeup Artist | Hair Stylist | Nail Artist
          </h5>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold font-serif mt-2">
            Tamanna Srivastav
          </h2>

          <p className="mt-6 italic text-base leading-relaxed max-w-xl">
            Hello, I’m your trusted artist! I love helping people feel beautiful — which is why I’ve spent the last 10+ years engulfed in the art of Makeup & Hair Styling.
          </p>

          <p className="mt-4 text-sm leading-relaxed max-w-2xl">
            Every stroke, every brush, every detail is curated with care. From brides to professionals, I bring confidence and elegance through shades and textures tailored just for you. Let beauty meet personality — naturally and gracefully.
          </p>

          {/* Thumbnail Grid */}
          <div className="mt-8 grid grid-cols-2 gap-4 sm:max-w-sm">
            {[img1, award1].map((src, i) => (
              <div
                key={i}
                className="bg-[#f3d2b3] p-2 rounded-xl shadow-lg hover:scale-105 transition-transform duration-300"
              >
                <img
                  src={src}
                  alt={`Award ${i + 1}`}
                  className="aspect-video sm:aspect-square w-full h-full object-cover rounded-md"
                />
              </div>
            ))}
          </div>
        </div>

        {/* Main Image Column */}
        <div className="flex-1 w-full max-w-md">
          <div className="bg-[#f3d2b3] rounded-xl shadow-xl overflow-hidden hover:scale-105 transition-transform duration-300">
            <img
              src={img1}
              alt="Main Image"
              className="w-full h-auto object-contain aspect-[3/4] sm:aspect-video"
            />
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
