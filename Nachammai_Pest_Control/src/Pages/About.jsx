import React from 'react'
import ContactUs from '../Components/ContactUS'
import { motion } from 'framer-motion';

const About = () => {
  const fadeIn = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8 } }
  };

  return (
    <motion.div variants={fadeIn} initial="hidden" animate="visible"  >
      <section className="relative bg-[url('/images/aboutbanner.avif')] bg-center bg-no-repeat bg-cover w-full min-h-[600px] flex justify-center items-center">
        <h1 className=" text-black text-5xl md:text-6xl font-semibold">
          About Us
        </h1>
      </section>

      <section className="pt-8 md:pt-14 bg-teal-50">
        <div className="2xl:container mx-auto px-8 md:px-16 lg:px-32">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="flex flex-col order-1 lg:order-2">
              <h2 className="text-3xl font-bold text-[#18311c] mb-4">
                Our Vision & mission
              </h2>
              <p className="text-[#18311c] leading-relaxed md:text-xl">
                  our vision is to become the leading provider of innovative and 
                  eco-friendly pest control solutions in Tamil Nadu, ensuring safe and 
                  healthy environments for our clients and communities. Our mission is to 
                  deliver reliable and effective pest management services tailored to the 
                  unique needs of each client. We are committed to using environmentally 
                  friendly practices while prioritizing customer satisfaction and maintaining 
                  the highest standards of professionalism. Through continuous training and the 
                  latest technologies, we strive to protect homes, businesses, and gardens, 
                  fostering a culture of safety and sustainability.
              </p>
            </div>
            <div className="flex justify-center order-2 lg:order-1 lg:justify-start">
              <img
                src="images/about1.avif"
                alt="Our Vision and Mission"
                className="object-cover rounded-lg h-[500px]"
              />
            </div>
          </div>
        </div>
      </section>


      <section className="pt-8 md:pt-12 pb-8 bg-teal-50">
        <div className="2xl:container mx-auto px-8 md:px-16 lg:px-32">
          <div className="grid grid-cols-1 gap-4">
            <div className="flex flex-col justify-center items-center">
              <h2 className="text-3xl font-bold text-[#18311c] mb-4">
                Our Team
              </h2>
              <img
                src="/images/outteam.jpg"
                alt="ourteamimage"
                className="object-cover rounded-lg mb-3 md:mb-10 h-[400px] w-[400px]"
              />
            </div>
            <p className="text-[#18311c] leading-relaxed md:text-xl">
               our team is comprised of highly skilled and dedicated professionals who
               are passionate about providing effective pest management solutions. With 
               over 5 years of experience in the industry, our technicians are trained 
               in the latest pest control techniques and environmentally friendly practices. 
               Each team member is committed to delivering exceptional service, ensuring the 
               safety and satisfaction of our clients. We believe in continuous learning and development, 
               which empowers our team to stay ahead of industry trends and provide the best possible 
               solutions for your pest control needs. Together, we work diligently to create pest-free 
               environments for homes, businesses, and gardens throughout Tamil Nadu.
            </p>
          </div>
        </div>
      </section>


      <ContactUs/>
    </motion.div>
  )
}

export default About