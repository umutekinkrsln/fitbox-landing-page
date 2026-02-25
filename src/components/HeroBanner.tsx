import React from "react";
import { motion } from "framer-motion";

const HeroBanner: React.FC = () => {
  return (
    <section className="bg-gray-900 text-white min-h-screen flex flex-col md:flex-row justify-center items-center px-6 py-12">
      {/* Text Section */}
      <div className="flex-1 text-center md:text-left md:pr-10">
        <motion.h1 
          initial={{ opacity: 0, y: -50 }} 
          animate={{ opacity: 1, y: 0 }} 
          transition={{ duration: 1 }} 
          className="text-4xl md:text-6xl font-bold mb-4"
        >
          FitBox – AI-Powered Kickboxing Trainer
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 1 }}
          className="text-lg md:text-xl mb-6 max-w-xl"
        >
          Real-time motion analysis and personalized training experience. 
          Portable, intelligent, and designed just for you.
        </motion.p>

        <div className="flex gap-4 justify-center md:justify-start">
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            className="bg-blue-500 hover:bg-blue-600 transition text-white px-6 py-3 rounded-lg font-semibold"
          >
            Try Now
          </motion.button>

          <button className="border border-white px-6 py-3 rounded-lg font-semibold hover:bg-white hover:text-gray-900">
            Learn More
          </button>
        </div>
      </div>

      {/* Image Section */}
      <motion.img
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1 }}
        src="/images/pexels-tima-miroshnichenko-5750914.jpg"
        alt="Kickboxing training"
        className="w-full max-w-md rounded-lg shadow-lg"
      />  
    </section>
  );
};

export default HeroBanner;
