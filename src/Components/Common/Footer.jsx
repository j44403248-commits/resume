import React from "react";

const Footer = () => {
  return (
    <footer className="bg-black text-white">

      {/* Top Section */}
      <div className="max-w-7xl mx-auto px-6 py-16 flex flex-col md:flex-row justify-between gap-12">

        {/* Connect */}
        <div>
          <p className="text-gray-400 tracking-widest mb-4">CONNECT</p>

          <h2 className="text-2xl font-semibold hover:text-orange-500 hover:scale-105 transition duration-300 cursor-pointer">
            resumeuplift@gmail.com
          </h2>

          <h2 className="text-2xl font-semibold mt-2 hover:text-orange-500 hover:scale-105 transition duration-300 cursor-pointer">
            +92 307 6341412
          </h2>
        </div>

        {/* Right Side */}
        <div className="flex flex-col md:flex-row gap-10 md:gap-20">

          {/* Menu */}
          <div>
            <p className="text-gray-400 tracking-widest mb-4">MENU</p>

            <ul className="space-y-2 text-lg">
              <li className="hover:text-orange-500 hover:scale-105 transition cursor-pointer">Home</li>
              <li className="hover:text-orange-500 hover:scale-105 transition cursor-pointer">Services</li>
              <li className="hover:text-orange-500 hover:scale-105 transition cursor-pointer">Work</li>
              <li className="hover:text-orange-500 hover:scale-105 transition cursor-pointer">Process</li>
              <li className="hover:text-orange-500 hover:scale-105 transition cursor-pointer">FAQ</li>
            </ul>
          </div>

          {/* Socials */}
          <div>
            <p className="text-gray-400 tracking-widest mb-4">SOCIALS</p>

            <ul className="space-y-2 text-lg">
              <li className="hover:text-orange-500 hover:scale-105 transition cursor-pointer">LinkedIn</li>
              <li className="hover:text-orange-500 hover:scale-105 transition cursor-pointer">Facebook</li>
              <li className="hover:text-orange-500 hover:scale-105 transition cursor-pointer">Instagram</li>
            </ul>
          </div>

        </div>
      </div>

      {/* Big Brand Section */}
      <div className="text-center py-16 md:py-10 overflow-hidden">
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-extrabold text-white/50 hover:text-orange-500 hover:scale-105 transition duration-300 cursor-pointer inline-block">
          RESUMES <br /> UPLIFT
        </h1>
      </div>

      {/* Bottom */}
      <div className="border-t border-gray-800 py-6 text-center text-gray-400">
        © {new Date().getFullYear()} Resumes Uplift. All rights reserved.
      </div>

    </footer>
  );
};

export default Footer;