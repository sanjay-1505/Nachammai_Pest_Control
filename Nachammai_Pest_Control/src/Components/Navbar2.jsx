import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Quotation from '../Pages/Quotation';

const Navbar2 = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-gray-700 w-[75%] rounded-lg mx-auto mt-3 mb-3 text-white p-4 sticky top-0 z-50">
      <div className="flex justify-center">
        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-10 items-center">
          <Link to="/" className="hover:text-gray-300">Home</Link>
          <Link to="/about" className="hover:text-gray-300">About</Link>
          <Link to="/services" className="hover:text-gray-300">Services</Link>
          <Link to="/contact" className="hover:text-gray-300">Contact Us</Link>
          <Link to="#" className="hover:text-gray-300"><Quotation /></Link>
        </div>

        {/* Hamburger Icon */}
        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)}>
            <svg
              className="w-6 h-6 text-white"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16m-7 6h7"
              />
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-gray-700 space-y-4 py-4">
          <Link to="/" className="block text-center hover:text-gray-300">Home</Link>
          <Link to="/about" className="block text-center hover:text-gray-300">About</Link>
          <Link to="/services" className="block text-center hover:text-gray-300">Services</Link>
          <Link to="/contact" className="block text-center hover:text-gray-300">Contact Us</Link>
          <Link to="#" className="hover:text-black text-center"><Quotation /></Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar2;
