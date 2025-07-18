
import React from 'react';
import award1 from '../../assets/award1.jpg'; 
import award2 from '../../assets/award2.jpg'; 

const AwardsSection = () => {
  return (
    <section className="w-full bg-gradient-to-br from-[#fff5f0] to-[#fde9df] py-20 px-4 sm:px-10 lg:px-20">
      <div className="text-center mb-12">
        <h2 className="text-4xl md:text-5xl font-serif text-center mb-4 font-bold tracking-tight text-[#5c2e1f]">
          Honors & Achievements
        </h2>
        <p className="text-base sm:text-lg mt-2 text-[#7a4c3e]">
          Celebrating recognition by leading beauty academies.
        </p>
      </div>

      <div className="grid gap-8 sm:grid-cols-2 max-w-6xl mx-auto">
        {/* Award Card 1 */}
        <div className="relative group overflow-hidden rounded-xl shadow-lg border border-[#eac7b0]">
          <img
            src={award1}
            alt="Award Ceremony 1"
            className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
          />
          <div className="absolute inset-0 bg-black/60 bg-opacity-30 opacity-0 group-hover:opacity-100 transition duration-300 flex items-end justify-center text-center p-4">
            <p className="text-white text-sm sm:text-lg font-medium">
              Honored by <span className="font-bold">Sakshi and Himanshu Gupta Makeup Academy</span>
            </p>
          </div>
        </div>

        {/* Award Card 2 */}
        <div className="relative group overflow-hidden rounded-xl shadow-lg border border-[#eac7b0]">
          <img
            src={award2}
            alt="Award Ceremony 2"
            className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
          />
          <div className="absolute inset-0 bg-black/60 bg-opacity-30 opacity-0 group-hover:opacity-100 transition duration-300 flex items-end justify-center text-center p-4">
            <p className="text-white text-sm sm:text-lg font-medium">
              Recognized by <span className="font-bold">Preeti Gera</span> for Makeup and Hair Styling
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AwardsSection;
