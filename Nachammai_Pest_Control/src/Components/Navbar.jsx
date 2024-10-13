import React from 'react';
import { motion } from 'framer-motion';

const Navbar = () => {

  const fadeIn = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8 } }
  };

  const slideIn = {
    hidden: { x: '-100%' },
    visible: { x: 0, transition: { duration: 1 } }
  };

  return (
    <motion.div 
      variants={fadeIn} 
      initial="hidden" 
      animate="visible" 
      className="bg-[#ffffff] px-6 flex justify-between items-center flex-col md:flex-row text-center lg:border-b-2 lg:border-indigo-500"
    >
      <div className="flex items-center  md:mb-0">
        <img src="./images/logo.png" alt="Nachammai Pest Control" className="h-28 mr-4" />
      </div>
      <div className="flex flex-col space-y-2 lg:flex-row lg:space-y-0 lg:space-x-6">
        <div className="flex items-center space-x-2">
          <img src="/icons/Call.svg" alt="call icon" className='w-6 h-6'/> 
          <a href="tel:+91 9791171377" className="text-lg font-semibold text-[#2b1f1a]">+91 97911 71377</a>
        </div>
        <div className="flex items-center space-x-2">
          <img src="/icons/Mail.svg" alt="mail icon" className='w-6 h-6'/> 
          <a href="mailto:nachammaipestservice@gmail.com" className="text-lg font-semibold text-[#2b1f1a]">nachammaipestservice@gmail.com</a>
        </div>
      </div>
    </motion.div>
  )
}

export default Navbar;
