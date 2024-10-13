import React from 'react';
import { Link } from 'react-router-dom';

const Navbar2 = () => {
  return (
    <nav className="bg-none p-0 md:bg-[#d2dbe4]  font-bold w-full md:w-[75%] rounded-lg mx-auto md:mt-3 mb-3 text-[#18311D] md:p-4 sticky top-0 z-50">
      <div className="flex justify-center">
        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-10 items-center">
          <Link to="/" className="hover:text-[#327432] hover:underline decoration-2">Home</Link>
          <Link to="/about" className="hover:text-[#327432] hover:underline decoration-2">About</Link>
          <Link to="/services" className="hover:text-[#327432] hover:underline decoration-2">Services</Link>
          <Link to="/contact" className="hover:text-[#327432] hover:underline decoration-2">Contact Us</Link>
          <button className="bg-[#18311D] text-white font-bold  py-2 px-4 rounded text-center hover:bg-green-800">
            <Link to="/quotation" className="">Get Free Quote</Link>
          </button>
        </div>
      </div>

      {/* Mobile Menu - Sticky at Bottom */}
      <div className="md:hidden  bg-[#d2dbe4] fixed bottom-3 text-[#18311D] text-sm font-bold left-0 right-0 z-50 p-2 rounded-lg flex items-center justify-around">
        <Link to="/" className="block text-center hover:text-[#327432] hover:underline decoration-2">Home</Link>
        <Link to="/about" className="block text-center hover:text-[#327432] hover:underline decoration-2">About</Link>
        <Link to="/services" className="block text-center hover:text-[#327432] hover:underline decoration-2">Services</Link>
        <Link to="/contact" className="block text-center hover:text-[#327432] hover:underline decoration-2">Contact</Link>
        <button className="bg-[#18311D] text-white  font-bold py-2 px-4 rounded hover:bg-green-800">
          <Link to="/quotation" className="">Get Quote</Link>
        </button>
      </div>
    </nav>
  );
};

export default Navbar2;
