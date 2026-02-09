import React from "react";

const HeroBanner: React.FC = () => {
  return (
    <section className="bg-gray-900 text-white min-h-screen flex flex-col md:flex-row justify-center items-center px-6">
      {/* Text Section */}
      <div className="flex-1 text-center md:text-left md:pr-10">
        <h1 className="text-4xl md:text-6xl font-bold mb-4">
          FitBox – AI-Powered Kickboxing Trainer
        </h1>
        <p className="text-lg md:text-xl mb-6 max-w-xl">
          Real-time motion analysis and personalized training experience. 
          Portable, intelligent, and designed just for you.
        </p>
        <div className="flex gap-4 justify-center md:justify-start">
          <button className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold">
            Try Now
          </button>
          <button className="border border-white px-6 py-3 rounded-lg font-semibold hover:bg-white hover:text-gray-900">
            Learn More
          </button>
        </div>
      </div>

      {/* Image Section */}
      <div className="flex-1 mt-10 md:mt-0">
        <img
          src="public/images/pexels-tima-miroshnichenko-5750914.jpg"
          alt="Kickboxing training"
          className="w-full max-w-md rounded-lg shadow-lg"
        />
      </div>
    </section>
  );
};

export default HeroBanner;