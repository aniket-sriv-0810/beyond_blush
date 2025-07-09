import React from 'react';
import logo from '../../../assets/bg-beyond.jpg'; // light faded bg
import { FaRupeeSign } from 'react-icons/fa';

const pricingData = [
  {
    title: 'Basic Makeup',
    prices: [
      { desc: 'Glam Look + Waterproof Party Makeup*', price: 4000 },
      { desc: 'Haldi/Mehndi Glam Look*', price: 5500 },
    ],
  },
  {
    title: 'HD Makeup',
    prices: [
      { desc: 'Engagement/Cocktail/Shagun HD Makeup*', price: 12000 },
      { desc: 'Reception HD Makeup*', price: 14000 },
      { desc: 'Wedding Super HD Makeup*', price: 18000 },
    ],
  },
  {
    title: 'Makeup Fusion',
    prices: [
      { desc: 'Glam Fusion Makeup (Haldi + Cocktail + Bridal)', price: 29000 },
      { desc: 'Beyond Blush Fusion (Haldi + Cocktail + Bridal + Reception)', price: 41000 },
    ],
  },
];

const PricingSection = () => {
  return (
    <section
      className="relative py-20 bg-[#fff9f6] text-[#582f21]"
      style={{
        backgroundImage: `url(${logo})`,
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
        opacity: '1',
      }}
    >
      <div className="absolute inset-0 backdrop-blur-sm"></div>

      <div className="relative z-10 max-w-6xl mx-auto px-4">
        <h2 className="text-4xl text-center font-serif font-bold mb-12">Pricing</h2>

        <div className="grid gap-10 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1">
          {pricingData.map((section, i) => (
            <div key={i} className="bg-[#fef3ec] rounded-xl shadow-xl overflow-hidden">
              <div className="bg-[#f4d4dc] text-center py-4 font-semibold text-xl font-serif">
                {section.title}
              </div>
              <div className="p-6 space-y-4">
                {section.prices.map((item, j) => (
                  <div
                    key={j}
                    className="flex justify-between items-center border-b border-[#dcbabf] pb-2"
                  >
                    <p className="text-sm font-medium w-3/4">{item.desc}</p>
                    <span className="text-md font-semibold flex items-center gap-1">
                      <FaRupeeSign className="text-pink-400" />
                      {item.price.toLocaleString("INR")}
                    </span>
                  </div>
                ))}
              </div>
              <p className="px-6 pb-4 text-xs text-[#333] italic text-center">
                *Prices include lashes, lenses, hair, dupatta/saree draping.
                <br />
                Excludes hair extensions, accessories & fresh flowers.
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
