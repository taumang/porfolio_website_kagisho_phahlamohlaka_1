import React from "react";
import "tailwindcss/tailwind.css";
import image from "../assets/img//B89523B3-8F53-46F1-AB57-FE9BE1ED0766-removebg-preview.png";

function HeroSection() {
  return (
    <div className="bg-gradient-to-t from-indigo-500 via-purple-500 to-black h-screen flex justify-center items-center">
      <div className="max-w-screen-lg mx-auto px-6 text-center">
        <h1 className="text-5xl text-white font-bold mb-6">
        Welcome to Kagisho Phahlamohlaka's canvas of sites
        </h1>
        <img src={image} alt="Profile" className="rounded-full h-66 w-48 mx-auto mb-12" />
        <p className="text-lg text-gray-200 mb-12">
          Click the GitHub button to know more.
        </p>
        <a href="https://github.com/taumang">
        <button className="bg-white text-blue-500 py-2 px-4 rounded-lg shadow-md hover:bg-blue-500 hover:text-white transition duration-300" >
          GitHub
        </button>
        </a>
      </div>
    </div>
  );
}

export default HeroSection;
