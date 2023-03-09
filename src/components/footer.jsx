import React from "react";
import "tailwindcss/tailwind.css";

function Footer() {
  return (
    <div className="bg-gray-800 py-6">
      <div className="max-w-screen-lg mx-auto px-6 text-center">
        <p className="text-gray-400 mb-2">&copy; 2023 Kagisho Phahlamohlaka. All rights reserved.</p>
        <p className="text-gray-400 mb-2"></p>
        <div className="flex justify-center">
          <a href="#" className="text-gray-400 hover:text-white transition duration-300 mr-4">
            <i className="fab fa-twitter"></i>
          </a>
          <a href="#" className="text-gray-400 hover:text-white transition duration-300 mr-4">
            <i className="fab fa-facebook"></i>
          </a>
          <a href="#" className="text-gray-400 hover:text-white transition duration-300 mr-4">
            <i className="fab fa-instagram"></i>
          </a>
          <a href="#" className="text-gray-400 hover:text-white transition duration-300">
            <i className="fab fa-linkedin"></i>
          </a>
        </div>
      </div>
    </div>
  );
}

export default Footer;
