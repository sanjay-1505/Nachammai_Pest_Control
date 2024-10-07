import React from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Link } from "react-router-dom";
import { Contact } from 'lucide-react';
import ContactUs from '../Components/ContactUS';
import FAQ from '../Components/FAQ';

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

        {/*About Us*/}
        <section className="-mt-2 py-14 ">
        <div className="2xl:container mx-auto px-8 md:px-16 lg:px-32">
          <div className="flex justify-center items-center text-brown900 mb-5 md:mb-8">
            <h1 className="text-4xl md:text-5xl">About Us</h1>
          </div>

          <div className="mx-auto grid grid-cols-1 lg:grid-cols-2 lg:gap-x-10 xl:gap-0 justify-between items-center">
            <div className="flex flex-col justify-start order-2 lg:order-1 gap-y-4">
              <h2 className="text-[#333333] text-3xl font-bold leading-snug mt-4 lg:mt-0 lg:mb-2.5">
                Coco Products Supplier From India
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
                <Link to="/aboutus">
                  <button className="flex items-center text-white underline underline-offset-1 bg-[#c3986b] text-lg px-5 py-2 rounded-lg shadow-md hover:bg-[#a97e53] transition">
                    See More
                    <img
                      className="ml-0.5 h-6 w-6 -mr-2"
                      src="/icons/Right2.svg"
                      alt="Arrow icon"
                    />
                  </button>
                </Link>
              </div>
            </div>

            <div className="flex justify-center flex-col lg:justify-end gap-4 items-center order-1 lg:order-2">
              <p className='text-[#333333] text-justify leading-relaxed md:text-xl'>Find Out what can we do for you.
              </p>
              <p className='text-[#333333] text-justify leading-relaxed md:text-xl'>Get in Touch Today for more information!
              </p>
              
              <button className='bg-blue-800 p-3 rounded-md'><a href="tel:+91 9791171377">Call Now</a></button>
              <button className='bg-blue-800 p-3 rounded-md'><Link to='/contact'>Contact Us</Link></button>
            </div>
          </div>
        </div>
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

        <section className="pt-8 md:pt-14 ">
          <h1 className="mt-5 md:mt-0 text-3xl md:text-5xl text-center mb-10 text-black">
            Profession Pest Control Technicians
          </h1>
       </section>

       <section className="pt-8 md:pt-14 mb-4">
        <div className="2xl:container mx-auto px-8 md:px-16 lg:px-32">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="flex flex-col order-1 lg:order-2">
              <h2 className="text-3xl font-bold text-black mb-4">
                Our Vision & mission
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
                src="images/ourvisionandmission.png"
                alt="Our Vision and Mission"
                className="object-cover rounded-lg"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="pt-5 md:pt-14 mb-4 ">
        <div className="2xl:container mx-auto px-8 md:px-16 lg:px-32">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 relative">
            <div className="flex flex-col">
              <h2 className="text-3xl font-bold text-black mb-4">
                Customer Service
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
                src="images/customerservice.png"
                alt="Customer Service"
                className="object-cover rounded-lg"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="pt-8 md:pt-14 mb-4">
        <div className="2xl:container mx-auto px-8 md:px-16 lg:px-32">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="flex flex-col order-1 lg:order-2">
              <h2 className="text-3xl font-bold text-black mb-4">
                Our Vision & mission
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
                src="images/ourvisionandmission.png"
                alt="Our Vision and Mission"
                className="object-cover rounded-lg"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="pt-5 md:pt-14 mb-4">
        <div className="2xl:container mx-auto px-8 md:px-16 lg:px-32">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 relative">
            <div className="flex flex-col">
              <h2 className="text-3xl font-bold text-black mb-4">
                Customer Service
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
                src="images/customerservice.png"
                alt="Customer Service"
                className="object-cover rounded-lg"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="pt-8 md:pt-14 mb-4">
        <div className="2xl:container mx-auto px-8 md:px-16 lg:px-32">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="flex flex-col order-1 lg:order-2">
              <h2 className="text-3xl font-bold text-black mb-4">
                Our Vision & mission
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
                src="images/ourvisionandmission.png"
                alt="Our Vision and Mission"
                className="object-cover rounded-lg"
              />
            </div>
          </div>
        </div>
      </section>

      <div className='mt-3 mb-4'>
      <FAQ/>
      </div>
      <ContactUs/>
    </div>

   


  )
}

export default Home