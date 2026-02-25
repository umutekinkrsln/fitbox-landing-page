import React from "react";
import { motion } from "framer-motion";
import { SparklesIcon, DevicePhoneMobileIcon, ChartBarIcon } from "@heroicons/react/24/outline";


const features = [
  {
    name: "AI Motion Analysis",
    description: "Track your movements in real-time with advanced computer vision algorithms.",
    icon: SparklesIcon,
  },
  {
    name: "Portable Trainer",
    description: "Train anywhere with a lightweight and foldable kickboxing trainer setup.",
    icon: DevicePhoneMobileIcon,
  },
  {
    name: "Personalized Feedback",
    description: "Receive tailored insights and progress tracking to improve your performance.",
    icon: ChartBarIcon,
  },
];

const FeaturesSection: React.FC = () => {
  return (
    <section id="features" className="bg-white py-20">
      <div className="container mx-auto px-6 max-w-6xl text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12">
          Key Features
        </h2>
        <div className="grid gap-10 md:grid-cols-3">
          {features.map((feature, index) => (
            <motion.div
             key={feature.name} 
             initial={{ opacity: 0, y: 50 }} 
             whileInView={{ opacity: 1, y: 0 }} 
             transition={{ duration: 0.6, delay: index * 0.2 }} 
             viewport={{ once: true }} 
             className="p-6 border rounded-xl bg-white/50 backdrop-blur-md shadow-md hover:shadow-xl hover:scale-105 transition-transform duration-300 ease-out" 
             >

              <feature.icon className="h-12 w-12 mx-auto text-blue-600 mb-4 animate-pulse" />
              <h3 className="text-xl font-semibold mb-2">{feature.name}</h3>
              <p className="text-gray-700">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;