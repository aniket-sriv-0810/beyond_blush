import React, { useState } from "react";
import { FaChevronDown, FaChevronUp, FaQuestionCircle } from "react-icons/fa";
import { IoMdHelpCircleOutline } from "react-icons/io";
import { MdOutlineQuestionAnswer } from "react-icons/md";

const sampleFaqs = [
  {
    title: "What makeup brands do you use?",
    solution: "We use premium products from brands like MAC, Huda Beauty, Charlotte Tilbury, and Fenty Beauty to ensure the best results for all skin types.",
  },
  {
    title: "How long does a bridal makeup session take?",
    solution: "A bridal makeup session typically takes 1.5 to 2 hours including hair and draping. We recommend scheduling a trial before the big day.",
  },
  {
    title: "Do you provide home service?",
    solution: "Yes, we offer doorstep makeup services across major cities. Travel charges may apply depending on the distance.",
  },
  {
    title: "Is a makeup trial included in the package?",
    solution: "Makeup trials are offered at a discounted rate and are highly recommended to ensure satisfaction and perfect coordination on the event day.",
  },
];

const FAQs = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="w-full flex flex-col items-center justify-center text-center py-36 bg-gradient-to-br from-[#ffeff4] to-[#f9dbd8] text-[#5a2e2e] shadow-inner px-5 sm:px-10">
      {/* Title */}
      <div className="mb-12">
        <h2 className="text-2xl sm:text-4xl font-extrabold font-serif text-[#5a2e2e] flex items-center justify-center gap-3 drop-shadow-lg">
          <IoMdHelpCircleOutline className="text-pink-400 text-3xl sm:text-5xl animate-pulse" />
          Frequently Asked Questions
        </h2>
        <p className="text-base sm:text-lg text-[#7a4a4a] mt-3">
          Find answers to the most common questions we receive.
        </p>
      </div>

      {/* FAQs */}
      <div className="w-full max-w-4xl space-y-6">
        {sampleFaqs.map((faq, index) => (
          <div
            key={index}
            className="bg-white border border-pink-200 rounded-2xl shadow-md hover:shadow-lg transition-all duration-300"
          >
            {/* Question */}
            <button
              onClick={() => toggleFAQ(index)}
              className="w-full text-left flex justify-between items-center p-5 sm:p-6 font-medium text-[#3b1f1f] bg-pink-50 rounded-t-2xl"
            >
              <span className="flex items-center gap-3 text-sm sm:text-lg font-serif">
                <FaQuestionCircle className="text-pink-400 text-xl" />
                {faq.title}
              </span>
              <span className="ml-4 text-2xl transition-transform duration-300">
                {activeIndex === index ? (
                  <FaChevronUp className="text-pink-500 rotate-180" />
                ) : (
                  <FaChevronDown className="text-pink-300" />
                )}
              </span>
            </button>

            {/* Answer */}
            <div
              className={`overflow-hidden transition-all duration-500 ease-in-out ${
                activeIndex === index ? "max-h-96 p-5 sm:p-6" : "max-h-0 p-0"
              } bg-white text-left`}
            >
              <div className="flex items-start gap-3 text-sm sm:text-base text-[#5a2e2e] font-light">
                <MdOutlineQuestionAnswer className="text-pink-300 text-2xl mt-1" />
                <p>{faq.solution}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FAQs;
