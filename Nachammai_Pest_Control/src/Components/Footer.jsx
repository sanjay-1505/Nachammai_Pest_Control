import { NavLink } from "react-router-dom";
import { motion } from "framer-motion";

const Footer = () => {
  const footerAnimation = {
    hidden: { opacity: 0, y: 50 }, // Start with opacity 0 and move it down slightly
    visible: { opacity: 1, y: 0, transition: { duration: 1 } } // Animate to full opacity and move up to its original position
  };

  return (
    <motion.footer variants={footerAnimation} initial="hidden" animate="visible" className="bg-[#f5f7f4] pt-14  pb-5 px-8 md:px-16 lg:px-32">
      <div className="container grid grid-cols-1 md:grid-cols-2 lg:flex justify-between">
        <div className="flex sm:space-x-4 xl:space-x-8">
          <div className="hidden sm:block">
            <img src="/images/logo.png" alt="logo" className=" h-28 border border-black rounded-lg " />
          </div>

          <div>
            <h1 className="font-bold text-[#18311c] text-2xl mb-3">
              NACHAMMAI Pest Control
            </h1>
            <p className="text-[#18311c] max-w-64 xl:max-w-md">
              Over the past 40 years, our family had standard experience growing
              coconuts on our farms with immediate production farms to the
              growing medium. We are successful third-generation young
              entrepreneurs focusing on long-term business. So, we started a new
              venture in the same industry to add more valuable products.
            </p>

            <div className="mt-8 flex items-center space-x-3 xl:space-x-5">
              <a href="http://" target="_blank" rel="noreferrer">
                <div className="bg-[#2987da] hover:bg-[#244867] rounded-full w-9 h-9 hover:cursor-pointer flex items-center justify-center">
                  <img
                    src="/images/instagram.png"
                    alt="instagram"
                    className=""
                  />
                </div>
              </a>
              <a
                href="https://www.linkedin.com/company/jds-international-exports"
                target="_blank"
                rel="noreferrer"
              >
                <div className="bg-[#2987da] hover:bg-[#244867] rounded-full w-9 h-9 hover:cursor-pointer flex items-center justify-center">
                  <img src="/images/linkedin.png" alt="linkedin" />
                </div>
              </a>
              <a href="http://" target="_blank" rel="noreferrer">
                <div className="bg-[#2987da] hover:bg-[#244867] rounded-full w-9 h-9 hover:cursor-pointer flex items-center justify-center">
                  <img src="/images/youtube.png" alt="youtube" />
                </div>
              </a>
              <a href="http://" target="_blank" rel="noreferrer">
                <div className="bg-[#2987da] hover:bg-[#244867] rounded-full w-9 h-9 hover:cursor-pointer flex items-center justify-center">
                  <img src="/images/facebook.png" alt="facebook" />
                </div>
              </a>
              <a href="http://" target="_blank" rel="noreferrer">
                <div className="bg-[#2987da] hover:bg-[#244867] rounded-full w-9 h-9 hover:cursor-pointer flex items-center justify-center">
                  <img src="/images/twitterX.png" alt="twitterX" />
                </div>
              </a>
            </div>
          </div>
        </div>

        <div className="flex md:justify-center mt-8 md:mt-0 sm:ml-20 xl:-ml-20">
          <div>
          <h1 className="font-bold text-[#18311c] text-2xl mb-5">
              Pest Control Services
            </h1>

            <ul className="space-y-3">
              <li>
                <NavLink
                  to="/services"
                  className="footer-active-nav text-[#18311c] font-bold"
                  aria-current="page"
                >
                  Residential
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/services"
                  className="footer-active-nav text-[#18311c] font-bold"
                  aria-current="page"
                >
                  Rodent
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/services"
                  className="footer-active-nav text-[#18311c] font-bold"
                  aria-current="page"
                >
                  Termite
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/services"
                  className="footer-active-nav text-[#18311c] font-bold"
                  aria-current="page"
                >
                  Bed Bug
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/services"
                  className="footer-active-nav text-[#18311c] font-bold"
                  aria-current="page"
                >
                  Mosquito
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/services"
                  className="footer-active-nav text-[#18311c] font-bold"
                  aria-current="page"
                >
                  Green Pest Control
                </NavLink>
              </li>
            </ul>
          </div>
        </div>

        <div className="sm:ml-20 xl:ml-0">
          <h1 className="font-bold text-[#18311c] text-2xl mb-5 mt-8 lg:mt-0">
            Contact us
          </h1>

          <div className="space-y-5">
            <div className="flex w-full space-x-3">
              <div>
                <img src="/icons/Mail.svg" alt="mail" className="w-6" />
              </div>
              <div className="w-full">
                <a href="mailto:nachammaipestservice@gmail.com">
                  <h1 className="text-[#18311c] font-bold -mt-1">Mail Us</h1>
                  <p className="text-black font-bold break-all">
                  nachammaipestservice@gmail.com
                  </p>
                </a>
              </div>
            </div>
            <div className="flex space-x-3">
              <div>
                <img src="/icons/Call.svg" alt="call" className="w-6" />
              </div>
              <div>
                <a href="tel:+91 9791171377">
                  <h1 className="text-[#18311c] font-bold">Call Us</h1>
                  <p className="text-black font-bold">+91 97911 71377</p>
                </a>
              </div>
            </div>
            <div className="flex space-x-3">
              <div>
                <img src="/icons/Location.svg" alt="location" className="w-6" />
              </div>
              <div>
                <h1 className="text-[#18311c] font-bold">Location</h1>
                <p className="text-black font-bold">Kattupakkam,Chennai - 600056</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <p className="mt-10 text-center font-bold text-[#18311c] text-sm">
        All copyright@2024 at NACHAMMAI PEST CONTROL 
      </p>
    </motion.footer>
  );
};

export default Footer;
