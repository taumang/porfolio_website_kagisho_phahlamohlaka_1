import React from "react";
import "tailwindcss/tailwind.css";

function AboutSection() {
  return (
    <div className="bg-white py-16">
      <div className="max-w-screen-lg mx-auto px-6 text-center">
        <h2 className="text-4xl text-black font-bold mb-6">About Me</h2>
        <p className="text-lg text-gray-500 mb-12">
        A National Diploma in Information Technology graduate,
specializing in Software development/Web development, and a passionate person about the world of apiculture(bee farming), and farming.
Combining his web development skills, with the apiculture(bee farming) skills has lead to the creation of 1020 Hivezzz.

        </p>
        <a href="mailto:kagishoph@gmail.com">
        <button className="bg-blue-500 text-white py-2 px-4 rounded-lg shadow-md hover:bg-white hover:text-blue-500 transition duration-300">
          Contact Me
        </button>
        </a>
      </div>
        
    </div>
  );
}

export default AboutSection;
