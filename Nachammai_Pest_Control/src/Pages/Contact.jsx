import React from 'react'
import ContactUs from '../Components/ContactUS'

const Contact = () => {
  return (
    <div>
       <section className="relative bg-[url('/images/contactbanner.jpg')] bg-center bg-no-repeat bg-cover w-full min-h-[600px] flex justify-center items-center">
        <h1 className=" text-black text-5xl md:text-6xl font-semibold">
          Contact Us
        </h1>
      </section>
      <ContactUs/>
    </div>
  )
}

export default Contact