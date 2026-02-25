import React from "react";

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-white py-6 text-center relative">
      <div className="flex justify-center space-x-6 mb-4">
        <a href="#" className="text-gray-400 hover:text-blue-500 transition-colors duration-300">
          <svg className="h-6 w-6 hover:animate-bounce" fill="currentColor" viewBox="0 0 24 24">
            <path d="M..." />
          </svg>
        </a>
        <a href="#" className="text-gray-400 hover:text-blue-500 transition-colors duration-300">
          <svg className="h-6 w-6 hover:animate-bounce" fill="currentColor" viewBox="0 0 24 24">
            <path d="M..." />
          </svg>
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
