import React from 'react';
import slide2 from '../../../assets/slide2.jpg'
const services = [
  {
    title: 'Bridal Makeup',
    img: slide2,
  },
  {
    title: 'Hair Styling',
    img: slide2,
  },
  {
    title: 'Face & Eye Makeup',
    img: slide2,
  },
  {
    title: 'Party Makeup',
    img: slide2,
  },
  {
    title: 'Nude Makeup',
    img: slide2,
  },
  {
    title: 'Saree Draping',
    img: slide2,
  },
];

const ServiceSection = () => {
  return (
    <section className="bg-[#fff5ec] py-16 px-4">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-serif text-center text-[#582f21] mb-12">
          What We Offer
        </h2>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-[#fce9d9] rounded-xl shadow-lg overflow-hidden transition-transform hover:scale-105 duration-300"
            >
              <div className="aspect-square overflow-hidden">
                <img
                  src={service.img}
                  alt={service.title}
                  className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                />
              </div>
              <div className="text-center py-4">
                <h3 className="text-lg font-semibold text-[#582f21]">
                  {service.title}
                </h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServiceSection;
