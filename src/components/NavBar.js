import React, { useState } from "react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="bg-gray-800 text-white">
      <div className="container mx-auto flex items-center justify-between px-4 py-8">
        {/* Logo */}
        <div className="text-xl font-bold">
          Camp de Voices
        </div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-6">
          <li><a href="#home" className="hover:text-blue-400">Home</a></li>
          <li><a href="#about-us" className="hover:text-blue-400">About Us</a></li>
          <li className="relative group">
            <a href="#programs" className="hover:text-blue-400">Programs</a>
            {/* Dropdown */}
            <ul className="absolute left-0 hidden bg-gray-700 group-hover:block mt-2 rounded-md shadow-lg">
              <li><a href="#freshy-shuleni" className="block px-4 py-2 hover:bg-gray-600">Tuko Freshy Shuleni</a></li>
              <li><a href="#freshy-mtaani" className="block px-4 py-2 hover:bg-gray-600">Tuko Freshy Mtaani</a></li>
              <li><a href="#climate" className="block px-4 py-2 hover:bg-gray-600">Changamkia Climate</a></li>
              <li><a href="#leadership" className="block px-4 py-2 hover:bg-gray-600">Leadership Exchange Experience</a></li>
              <li><a href="#training-trainers" className="block px-4 py-2 hover:bg-gray-600">Training Trainers</a></li>
            </ul>
          </li>
          <li><a href="#team" className="hover:text-blue-400">Our Team</a></li>
          <li><a href="#testimonials" className="hover:text-blue-400">Testimonials</a></li>
          <li><a href="#articles" className="hover:text-blue-400">Articles</a></li>
          <li><a href="#contact-us" className="hover:text-blue-400">Contact Us</a></li>
        </ul>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-xl"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          ☰
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <ul className="md:hidden bg-gray-700 text-white space-y-2 px-4 py-2">
          <li><a href="#home" className="block hover:bg-gray-600 p-2">Home</a></li>
          <li><a href="#about-us" className="block hover:bg-gray-600 p-2">About Us</a></li>
          <li>
            <details className="hover:bg-gray-600 p-2">
              <summary className="cursor-pointer">Programs</summary>
              <ul className="ml-4 space-y-1">
                <li><a href="#freshy-shuleni" className="block hover:bg-gray-600 p-2">Tuko Freshy Shuleni</a></li>
                <li><a href="#freshy-mtaani" className="block hover:bg-gray-600 p-2">Tuko Freshy Mtaani</a></li>
                <li><a href="#climate" className="block hover:bg-gray-600 p-2">Changamkia Climate</a></li>
                <li><a href="#leadership" className="block hover:bg-gray-600 p-2">Leadership Exchange Experience</a></li>
                <li><a href="#training-trainers" className="block hover:bg-gray-600 p-2">Training Trainers</a></li>
              </ul>
            </details>
          </li>
          <li><a href="#team" className="block hover:bg-gray-600 p-2">Our Team</a></li>
          <li><a href="#testimonials" className="block hover:bg-gray-600 p-2">Testimonials</a></li>
          <li><a href="#articles" className="block hover:bg-gray-600 p-2">Articles</a></li>
          <li><a href="#contact-us" className="block hover:bg-gray-600 p-2">Contact Us</a></li>
        </ul>
      )}
    </nav>
  );
};

export default Navbar;
