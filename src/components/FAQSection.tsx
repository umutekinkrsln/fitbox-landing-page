import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion"; 
import { ChevronDownIcon } from "@heroicons/react/24/outline";

const faqs = [
  {
    question: "How does FitBox analyze my movements?",
    answer: "FitBox uses AI-powered computer vision to track your body posture and movements in real-time.",
  },
  {
    question: "Do I need special equipment?",
    answer: "No extra equipment is required. You can train with your existing setup, and FitBox adapts to your environment.",
  },
  {
    question: "Is FitBox available on mobile devices?",
    answer: "Yes, FitBox works seamlessly on desktop and mobile platforms with a responsive design.",
  },
  {
    question: "Can I use FitBox without internet?",
    answer: "Some features require internet connectivity, but offline training modules are also supported.",
  },
];

const FAQSection: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="bg-white py-20">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-12">
          Frequently Asked Questions
        </h2>
        <div className="max-w-2xl mx-auto">
          {faqs.map((faq, index) => (
            <div key={index} className="mb-4 border-b">
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full text-left py-4 flex justify-between items-center focus:outline-none"
              >
                <span className="font-semibold text-white">{faq.question}</span>
                <ChevronDownIcon
                  className={`h-5 w-5 text-gray-600 transform transition-transform duration-300 ${
                    openIndex === index ? "rotate-180" : ""
                  }`}
                />
              </button>
              <AnimatePresence>
                {openIndex === index && (
                  <motion.p
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.3 }}
                    className="text-gray-600 pb-4"
                  >
                     {faq.answer}
                  </motion.p>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQSection;