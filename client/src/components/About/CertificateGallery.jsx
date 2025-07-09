import React, { useState } from "react";
import cert1 from "../../assets/certificate1.jpg";
import cert2 from "../../assets/certificate2.jpg";
import cert3 from "../../assets/certificate3.jpg"; 

const certificates = [
  { id: 1, src: cert1, title: "Advanced Bridal Mastery" },
  { id: 2, src: cert2, title: "Makeup Certification - Glam Style" },
  { id: 3, src: cert3, title: "Pro Artistry & Beauty Excellence" },
];

const CertificateGallery = () => {
  const [selected, setSelected] = useState(null);

  const openModal = (certificate) => setSelected(certificate);
  const closeModal = () => setSelected(null);

  return (
    <section className="w-full py-24 px-4 sm:px-10 bg-gradient-to-b from-[#fff3f0] to-[#f9d5c8] text-[#4a2e2e]">
      <div className="text-center mb-12">
        <h2 className="text-3xl sm:text-4xl font-bold">Our Certifications</h2>
        <p className="mt-2 text-base sm:text-lg">Recognized by industry leaders for excellence in beauty & bridal artistry.</p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {certificates.map((cert) => (
          <div
            key={cert.id}
            className="group relative overflow-hidden rounded-xl shadow-lg border border-[#eac7b0] cursor-pointer"
            onClick={() => openModal(cert)}
          >
            <img
              src={cert.src}
              alt={cert.title}
              className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-500"
            />
            <div className="absolute bottom-0 bg-black bg-opacity-40 text-white w-full text-sm text-center py-2 font-medium">
              {cert.title}
            </div>
          </div>
        ))}
      </div>

      {/* Modal Popup */}
      {selected && (
        <div className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50 p-4 sm:p-10">
          <div className="relative bg-white rounded-lg max-w-3xl w-full max-h-[90vh] overflow-auto shadow-2xl">
            {/* Close Button */}
            <button
              onClick={closeModal}
              className="absolute top-2 right-2 text-white bg-pink-500 hover:bg-pink-600 p-2 rounded-full shadow-md z-10"
            >
              ✕
            </button>

            {/* Image */}
            <img
              src={selected.src}
              alt={selected.title}
              className="w-full h-auto object-contain rounded-lg"
            />

            <div className="text-center py-4 text-[#4a2e2e] font-semibold">
              {selected.title}
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default CertificateGallery;
