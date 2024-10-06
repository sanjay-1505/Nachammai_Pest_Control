import React from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Link } from "react-router-dom";
import { Contact } from 'lucide-react';
import ContactUs from '../Components/ContactUS';

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


  return (
    <div>
        {/* Carousel */}
        <section className="slider-container overflow-hidden">
            <Slider {...settings}>
            <div className="bg-[url('/images/banner1.webp')] bg-cover bg-center bg-no-repeat w-full min-h-screen relative">
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
                    <button className="bg-green-900 px-6 py-2 rounded-full text-black font-semibold text-xl md:text-2xl tracking-wide transition-all hover:transition-all hover:bg-gray-200">
                        Contact Us
                    </button>
                    </Link>
                </div>
                </div>
            </div>
            <div className="bg-[url('/images/banner2.webp')] bg-cover bg-center bg-no-repeat w-full min-h-screen relative">
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
                    <button className="bg-green-900 px-6 py-2 rounded-full text-black font-semibold text-xl md:text-2xl tracking-wide">
                        Services
                    </button>
                    </Link>
                </div>
                </div>
            </div>
            <div className="bg-[url('/images/banner3.avif')] bg-cover bg-center bg-no-repeat w-full min-h-screen relative">
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
                    <button className="bg-green-900 px-6 py-2 rounded-full text-black font-semibold text-xl md:text-2xl tracking-wide">
                        About Us
                    </button>
                    </Link>
                </div>
                </div>
            </div>
            </Slider>
        </section>

        {/*Pest Services*/}
        <div className="bg-white p-4 rounded-lg  mt-3 mb-3">
           <h2 className="text-2xl text-center font-bold mb-4">What Kind of Pest Control Service Are You Looking For?</h2>
            <div className="grid grid-cols-3 gap-4">
              <div className="flex flex-col items-center justify-center">
                <img src="/images/ant.jpg" alt="" className='w-20 h-20' />
                <p className="text-gray-700 mt-2">Ants</p>
              </div>
              <div className="flex flex-col items-center justify-center">
                <img src="/images/roaches.jpg" alt="" className='w-20 h-20' />
                <p className="text-gray-700 mt-2">Roaches</p>
              </div>
              <div className="flex flex-col items-center justify-center">
                <img src="/images/termite.webp" alt="" className='w-20 h-20' />
                <p className="text-gray-700 mt-2">Termites</p>
              </div>
              <div className="flex flex-col items-center justify-center">
                <img src="/images/spider.png" alt="" className='w-20 h-20' />
                <p className="text-gray-700 mt-2">Spiders</p>
              </div>
              <div className="flex flex-col items-center justify-center">
                <img src="/images/rat.jpg" alt="" className='w-24 h-20' />
                <p className="text-gray-700 mt-2">Rats & Mice</p>
              </div>
              <div className="flex flex-col items-center justify-center">
                <img src="/images/bedbug.webp" alt="" className='w-20 h-20' />
                <p className="text-gray-700 mt-2">Bed Bugs</p>
              </div>
            </div>
        </div>
        

        <ContactUs/>
    </div>

   


  )
}

export default Home