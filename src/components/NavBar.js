import React, { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="bg-gray-800 text-white">
      <div className="container mx-auto flex items-center justify-between px-4 py-8">
        <div className="text-xl font-bold">Campde Voices</div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-6">
          <li>
            <Link to="/" className="hover:text-blue-400">Home</Link>
          </li>
          <li>
            <Link to="/about" className="hover:text-blue-400">About Us</Link>
          </li>
          <li>
            <Link to="/programs" className="hover:text-blue-400">Programs</Link>
          </li>
          <li>
            <Link to="/team" className="hover:text-blue-400">Our Team</Link>
          </li>
          <li>
            <Link to="/testimonials" className="hover:text-blue-400">Testimonials</Link>
          </li>
          <li>
            <Link to="/articles" className="hover:text-blue-400">Articles</Link>
          </li>
          <li>
            <Link to="/contact" className="hover:text-blue-400">Contact Us</Link>
          </li>
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
          <li>
            <Link to="/" className="block hover:bg-gray-600 p-2">Home</Link>
          </li>
          <li>
            <Link to="/about" className="block hover:bg-gray-600 p-2">About Us</Link>
          </li>
          <li>
            <Link to="/programs" className="block hover:bg-gray-600 p-2">Programs</Link>
          </li>
          <li>
            <Link to="/team" className="block hover:bg-gray-600 p-2">Our Team</Link>
          </li>
          <li>
            <Link to="/testimonials" className="block hover:bg-gray-600 p-2">Testimonials</Link>
          </li>
          <li>
            <Link to="/articles" className="block hover:bg-gray-600 p-2">Articles</Link>
          </li>
          <li>
            <Link to="/contact" className="block hover:bg-gray-600 p-2">Contact Us</Link>
          </li>
        </ul>
      )}
    </nav>
  );
};

export default Navbar;
