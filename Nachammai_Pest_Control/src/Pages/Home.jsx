import React from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Link } from "react-router-dom";
import { motion } from 'framer-motion'; 
import { Contact } from 'lucide-react';
import ContactUs from '../Components/ContactUS';
import FAQ from '../Components/FAQ';
import RandomPointsGame from '../Components/RandomPointsGame';

const Home = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 5000,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        swipeToSlide: true,
    
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
              infinite: true,
            },
          },
          {
            breakpoint: 768,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
            },
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
            },
          },
        ],
      };

    // Animation Variants
    const fadeIn = {
        hidden: { opacity: 0, y: 30 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.8 } }
    };

    const slideIn = {
        hidden: { x: '-100%' },
        visible: { x: 0, transition: { duration: 1 } }
    };

    const imageSlideIn = {
        hidden: { x: '100%', opacity: 0 },
        visible: { x: 0, opacity: 1, transition: { duration: 1 } }
    };

  return (
    <motion.div initial="hidden" animate="visible">
      <RandomPointsGame/>
        {/* Carousel */}
        <section className="slider-container overflow-hidden">
            <Slider {...settings}>
            <motion.div variants={fadeIn} className="bg-[url('/images/bannersss1.jpg')] bg-cover bg-center bg-no-repeat w-full min-h-screen relative">
                <div className="absolute inset-x-0 top-1/2 transform -translate-y-1/2 px-8 md:px-20 lg:px-28">
                <div className="container">
                    <h3 className="text-green-900 font-extrabold text-4xl lg:text-5xl text-stroke-2-white mb-3">
                    NACHAMMAI
                    </h3>
                    <p className="font-extrabold text-3xl md:text-4xl lg:text-4xl text-stroke-2-brown900 text-black mb-7">
                    Best & high quality Pest Control
                    <br />Services  From India
                    </p>

                    <Link to="/contact">
                    <motion.button whileHover={{ scale: 1.1 }} className="bg-green-900 px-6 py-2 rounded-full text-black font-semibold text-xl md:text-2xl tracking-wide transition-all hover:transition-all hover:bg-gray-200">
                        Contact Us
                    </motion.button>
                    </Link>
                </div>
                </div>
            </motion.div>
            <motion.div variants={fadeIn} className="bg-[url('/images/bannersss2.jpg')] bg-cover bg-center bg-no-repeat w-full min-h-screen relative">
                <div className="absolute inset-x-0 top-1/2 transform -translate-y-1/2 px-8 md:px-20 lg:px-28">
                <div className="">
                    <h3 className="text-green-900 font-extrabold text-4xl lg:text-5xl text-stroke-2-white mb-3">
                    NACHAMMAI
                    </h3>
                    <p className="font-extrabold text-3xl md:text-4xl lg:text-4xl text-stroke-2-brown900 text-black mb-7">
                    Best & high quality Pest Control
                    <br /> Services From India
                    </p>

                    <Link to="/services">
                    <motion.button whileHover={{ scale: 1.1 }} className="bg-green-900 px-6 py-2 rounded-full text-black font-semibold text-xl md:text-2xl tracking-wide">
                        Services
                    </motion.button>
                    </Link>
                </div>
                </div>
            </motion.div>
            <motion.div variants={fadeIn} className="bg-[url('/images/bannersss.jpg')] bg-cover bg-center bg-no-repeat w-full min-h-screen relative">
                <div className="absolute inset-x-0 top-1/2 transform -translate-y-1/2 px-8 md:px-20 lg:px-28">
                <div className="">
                    <h3 className="text-green-900 font-extrabold text-4xl lg:text-5xl text-stroke-2-white mb-3">
                    NACHAMMAI
                    </h3>
                    <p className="font-extrabold text-3xl md:text-4xl lg:text-4xl text-stroke-2-brown900 text-black mb-7">
                    Best & high quality Pest Control
                    <br /> Services From India
                    </p>

                    <Link to="/about">
                    <motion.button whileHover={{ scale: 1.1 }} className="bg-green-900 px-6 py-2 rounded-full text-black font-semibold text-xl md:text-2xl tracking-wide">
                        About Us
                    </motion.button>
                    </Link>
                </div>
                </div>
            </motion.div>
            </Slider>
        </section>

        {/*About Us*/}
        <motion.section variants={fadeIn} className="-mt-2 py-14 ">
        <div className="2xl:container mx-auto px-8 md:px-16 lg:px-32">
          <motion.div className="flex justify-center items-center text-black font-bold mb-5 md:mb-8">
            <motion.h1 className="text-4xl md:text-5xl">About Us</motion.h1>
          </motion.div>

          <div className="mx-auto grid grid-cols-1 lg:grid-cols-2 lg:gap-x-10 xl:gap-0 justify-between items-center">
            <motion.div variants={fadeIn} className="flex flex-col justify-start order-2 lg:order-1 gap-y-4">
              <h2 className="text-[#333333] text-3xl font-bold leading-snug mt-4 lg:mt-0 lg:mb-2.5">
                NACHAMMAI PEST CONTROL
              </h2>
              <p className="text-[#333333] text-justify leading-relaxed md:text-xl">
                A successful and renowned coco coir exporter and supplier from
                India, JDS specializes in premium quality Coco Products. We work
                continuously to explore and exhibit innovative collections in
                the industry. We also offer customized solutions to meet the
                unique needs of our clients. Choose JDS for all your Coco Coir
                needs and experience the difference in quality and service.
              </p>

              <div className="mt-5 flex justify-end">
                <Link to="/about">
                  <motion.button whileHover={{ scale: 1.1 }} className="flex items-center text-black font-semibold underline-offset-1 bg-green-800 text-lg px-5 py-2 rounded-lg shadow-md hover:bg-green-500 transition">
                    See More
                    <img
                      className="ml-0.5 h-6 w-6 -mr-2"
                      src="/icons/Right2.svg"
                      alt="Arrow icon"
                    />
                  </motion.button>
                </Link>
              </div>
            </motion.div>

            <motion.div variants={fadeIn} className="flex justify-center flex-col lg:justify-end gap-4 items-center order-1 lg:order-2">
              <p className='text-[#333333] text-justify leading-relaxed md:text-xl font-bold text-lg '>Find Out what can we do for you.
              </p>
              <p className='text-[#333333] text-justify leading-relaxed md:text-xl font-bold text-lg'>Get in Touch Today for more information!
              </p>
              
              <button className='bg-green-800 p-3 rounded-md text-black  font-semibold'><a href="tel:+91 9791171377">Call Now</a></button>
              <button className='bg-green-800 p-3 rounded-md text-black font-semibold'><Link to='/contact'>Contact Us</Link></button>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/*Pest Services*/}
      <motion.div variants={fadeIn} className="bg-white p-4 rounded-lg  mt-3 mb-3">
           <h2 className="text-2xl text-center font-bold mb-4">What Kind of Pest Control Service Are You Looking For?</h2>
            <div className="grid grid-cols-3 gap-4">
              <div className="flex flex-col items-center justify-center">
                <img src="/images/ants.gif" alt="" className='w-20 h-20' />
                <p className="text-black mt-2 font-bold">Ants</p>
              </div>
              <div className="flex flex-col items-center justify-center">
                <img src="/images/roaches.gif" alt="" className='w-20 h-20' />
                <p className="text-black mt-2 font-bold">Roaches</p>
              </div>
              <div className="flex flex-col items-center justify-center">
                <img src="/images/termites.gif" alt="" className='w-20 h-20' />
                <p className="text-black mt-2 font-bold">Termites</p>
              </div>
              <div className="flex flex-col items-center justify-center">
                <img src="/images/spiders.gif" alt="" className='w-20 h-20' />
                <p className="text-black mt-2 font-bold">Spiders</p>
              </div>
              <div className="flex flex-col items-center justify-center">
                <img src="/images/rats.gif" alt="" className='w-24 h-20' />
                <p className="text-black mt-2 font-bold">Rats & Mice</p>
              </div>
              <div className="flex flex-col items-center justify-center">
                <img src="/images/bedbugs.gif" alt="" className='w-20 h-20' />
                <p className="text-black mt-2 font-bold">Bed Bugs</p>
              </div>
            </div>
        </motion.div>

        {/*Technicians*/}

        <section className="pt-8 md:pt-14 ">
          <motion.h1 variants={fadeIn} className="mt-5 md:mt-0 text-3xl md:text-5xl text-center mb-10 text-black">
            Profession Pest Control Technicians
          </motion.h1>
       </section>

       <motion.section variants={fadeIn} className="pt-8 md:pt-14 mb-4">
        <div className="2xl:container mx-auto px-8 md:px-16 lg:px-32">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="flex flex-col order-1 lg:order-2">
              <h2 className="text-3xl font-bold text-black mb-4">
                Pest Control Inspections done right 
              </h2>
              <p className="text-[#333333] leading-relaxed md:text-xl">
                We focus on making the best resource, for an excellent Growing
                media. We are specializing in a wide range of value-added coir
                products. Our dream is to support and cater globally to a
                sustainable day-to-day living with our eco-friendly products.
                Grow as the best sustainable agro supplier ensuring sufficient
                supply with high quality, having in mind, the protection of our
                environment and natural resources.
              </p>
            </div>
            <div className="flex justify-center order-2 lg:order-1 lg:justify-start">
              <img
                src="images/tech1.jpg"
                alt="Our Vision and Mission"
                className="object-cover rounded-lg"
              />
            </div>
          </div>
        </div>
      </motion.section>

      <motion.section variants={fadeIn} className="pt-5 md:pt-14 mb-4 ">
        <div className="2xl:container mx-auto px-8 md:px-16 lg:px-32">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 relative">
            <div className="flex flex-col">
              <h2 className="text-3xl font-bold text-black mb-4">
                Customizd Treatment Plans
              </h2>
              <p className="text-[#333333] leading-relaxed md:text-xl">
                Through unparalleled customer service and providing excellent
                quality products, we aspire to excel in matching consistently
                the customer's expectations. Our customer service is swift,
                comfortable, individualized, and understanding. Our company
                delivers it by taking sufficient time in analyzing and
                recognizing customer needs.
              </p>
            </div>
            <div className="flex justify-center lg:justify-end items-center">
              <img
                src="images/tech2.jpg"
                alt="Customer Service"
                className="object-cover rounded-lg"
              />
            </div>
          </div>
        </div>
      </motion.section>

      <motion.section variants={fadeIn} className="pt-8 md:pt-14 mb-4">
        <div className="2xl:container mx-auto px-8 md:px-16 lg:px-32">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="flex flex-col order-1 lg:order-2">
              <h2 className="text-3xl font-bold text-black mb-4">
                Your Pest Free Partners
              </h2>
              <p className="text-[#333333] leading-relaxed md:text-xl">
                We focus on making the best resource, for an excellent Growing
                media. We are specializing in a wide range of value-added coir
                products. Our dream is to support and cater globally to a
                sustainable day-to-day living with our eco-friendly products.
                Grow as the best sustainable agro supplier ensuring sufficient
                supply with high quality, having in mind, the protection of our
                environment and natural resources.
              </p>
            </div>
            <div className="flex justify-center order-2 lg:order-1 lg:justify-start">
              <img
                src="images/tech3.jpg"
                alt="Our Vision and Mission"
                className="object-cover rounded-lg"
              />
            </div>
          </div>
        </div>
      </motion.section>

      <motion.section variants={fadeIn} className="pt-5 md:pt-14 mb-4">
        <div className="2xl:container mx-auto px-8 md:px-16 lg:px-32">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 relative">
            <div className="flex flex-col">
              <h2 className="text-3xl font-bold text-black mb-4">
                Service on your time
              </h2>
              <p className="text-[#333333] leading-relaxed md:text-xl">
                Through unparalleled customer service and providing excellent
                quality products, we aspire to excel in matching consistently
                the customer's expectations. Our customer service is swift,
                comfortable, individualized, and understanding. Our company
                delivers it by taking sufficient time in analyzing and
                recognizing customer needs.
              </p>
            </div>
            <div className="flex justify-center lg:justify-end items-center">
              <img
                src="images/tech4.jpeg"
                alt="Customer Service"
                className="object-cover rounded-lg"
              />
            </div>
          </div>
        </div>
      </motion.section>

      <motion.section variants={fadeIn} className="pt-8 md:pt-14 mb-4">
        <div className="2xl:container mx-auto px-8 md:px-16 lg:px-32">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="flex flex-col order-1 lg:order-2">
              <h2 className="text-3xl font-bold text-black mb-4">
                Free Service on next Service
              </h2>
              <p className="text-[#333333] leading-relaxed md:text-xl">
                We focus on making the best resource, for an excellent Growing
                media. We are specializing in a wide range of value-added coir
                products. Our dream is to support and cater globally to a
                sustainable day-to-day living with our eco-friendly products.
                Grow as the best sustainable agro supplier ensuring sufficient
                supply with high quality, having in mind, the protection of our
                environment and natural resources.
              </p>
            </div>
            <div className="flex justify-center order-2 lg:order-1 lg:justify-start">
              <img
                src="images/tech5.jpg"
                alt="Our Vision and Mission"
                className="object-cover rounded-lg"
              />
            </div>
          </div>
        </div>
      </motion.section>





        
        <motion.div variants={fadeIn} className="bg-white p-4 rounded-lg  mt-3 mb-3">
            <FAQ />
        </motion.div>
        
        {/*Contact*/}
        <motion.section variants={fadeIn} className="p-4">
          <ContactUs />
        </motion.section>
    </motion.div>
  );
};

export default Home;
