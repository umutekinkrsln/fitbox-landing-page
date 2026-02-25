import React from "react";
import { FaInstagram, FaLinkedin, FaGithub } from "react-icons/fa";

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-white py-6 text-center relative">
      <div className="flex justify-center space-x-6 mb-4">
        <a
          href="https://instagram.com/umuttkrslnn"
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-400 hover:text-pink-500 transition-colors duration-300"
        >
          <FaInstagram className="h-6 w-6 hover:animate-bounce" />
        </a>
        <a
          href="https://www.linkedin.com/in/umut-ekin-karaslan-8a59bb2b4/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-400 hover:text-blue-500 transition-colors duration-300"
        >
          <FaLinkedin className="h-6 w-6 hover:animate-bounce" />
        </a>
        <a
          href="https://github.com/umutekinkrsln"
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-400 hover:text-gray-200 transition-colors duration-300"
        >
          <FaGithub className="h-6 w-6 hover:animate-bounce" />
        </a>
      </div>
      <p className="text-sm">
        © {new Date().getFullYear()} FitBox.
      </p>
      <button
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        className="fixed bottom-6 right-6 bg-blue-600 text-white p-3 rounded-full shadow-lg hover:bg-blue-700 transition duration-300"
      >
        ↑
      </button>
    </footer>
  );
};

export default Footer;
