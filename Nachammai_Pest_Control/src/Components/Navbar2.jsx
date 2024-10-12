import React from 'react';
import { Link } from 'react-router-dom';

const Navbar2 = () => {
  return (
    <nav className="bg-none p-0 md:bg-gray-700  font-semibold w-full md:w-[75%] rounded-lg mx-auto md:mt-3 mb-3 text-white md:p-4 sticky top-0 z-50">
      <div className="flex justify-center">
        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-10 items-center">
          <Link to="/" className="hover:text-gray-300">Home</Link>
          <Link to="/about" className="hover:text-gray-300">About</Link>
          <Link to="/services" className="hover:text-gray-300">Services</Link>
          <Link to="/contact" className="hover:text-gray-300">Contact Us</Link>
          <button className="bg-lime-500 text-black font-semibold py-2 px-4 rounded text-center hover:bg-lime-600">
            <Link to="/quotation" className="hover:text-gray-300">Get Free Quote</Link>
          </button>
        </div>
      </div>

      {/* Mobile Menu - Sticky at Bottom */}
      <div className="md:hidden  bg-gray-700 fixed bottom-3 text-sm font-semibold left-0 right-0 z-50 p-2 rounded-lg flex items-center justify-around">
        <Link to="/" className="block text-center hover:text-gray-300">Home</Link>
        <Link to="/about" className="block text-center hover:text-gray-300">About</Link>
        <Link to="/services" className="block text-center hover:text-gray-300">Services</Link>
        <Link to="/contact" className="block text-center hover:text-gray-300">Contact</Link>
        <button className="bg-lime-500 text-black font-semibold py-2 px-4 rounded hover:bg-lime-600">
          <Link to="/quotation" className="hover:text-gray-300">Get Quote</Link>
        </button>
      </div>
    </nav>
  );
};

export default Navbar2;
