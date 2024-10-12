import React from 'react'
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
    <motion.div variants={fadeIn} initial="hidden" animate="visible" className="bg-gray-200 py-4 px-6 flex justify-between items-center flex-col md:flex-row">
      <div className="flex items-center">
        <img src="./images/logo.png" alt="Nachammai Pest Control" className="h-28 mr-4" />
        
      </div>
      <div className="flex flex-col space-y-2 space-x-6 lg:flex-row ">
        <div className="flex items-center space-x-2">
            <div>
            <img src="/icons/Call.svg" alt="call icon" className='w-6 h-6'/> 
            </div>
            <div className='flex flex-col'>
                <span className="text-lg hidden font-semibold lg:block ">Call Us now</span>
                <a href="tel:+91 9791171377" className="text-lg font-semibold text-blue-500">+91 97911 71377</a>
            </div> 
        </div>
        <div className="flex items-center space-x-2">
            <div>
            <img src="/icons/Mail.svg" alt="mail icon" className='w-6 h-6'/> 
            </div>
            <div className='flex flex-col'>
                <span className="text-md hidden font-semibold lg:block  ">Mail Us on</span>
                <a href="mailto:nachammaipestservice@gmail.com" className="text-lg font-semibold text-blue-500">nachammaipestservice@gmail.com</a>
            </div> 
        </div>
       
      </div>
    </motion.div>
  )
}

export default Navbar