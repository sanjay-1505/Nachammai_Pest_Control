import React from 'react'
import ContactUs from '../Components/ContactUS'

const Services = () => {

  const services = [
    {
      title: 'Termite Control',
      description:
       'Trusted termite control: eradicating infestations swiftly, protecting your home’s structure and peace of mind.',
      imageUrl: '/images/termites.gif', 
      altText: 'Termite Control',
      website:'https://en.wikipedia.org/wiki/Termite'
    },
    {
      title: 'Cockroach Control',
      description:
        'Reliable cockroach control: eradicating pests efficiently, keeping your home clean, safe, and pest-free.',
      imageUrl: '/images/roaches.gif', // Replace with the correct image URL
      altText: 'Cockroach Control',
      website:'https://en.wikipedia.org/wiki/Cockroach'
    },
    {
      title: 'Mosquito Control',
      description:
        'Targeting infestations promptly, ensuring your home stays protected and comfortable.',
      imageUrl: '/images/mosquito.gif', // Replace with the correct image URL
      altText: 'Mosquito Control',
      website:'https://en.wikipedia.org/wiki/Mosquito'
    },
    {
      title: 'Rodent Control',
      description:
        'Expert rodent control: eliminating threats quickly, keeping your home secure, clean, and rodent-free.',
      imageUrl: '/images/rats.gif', // Replace with the correct image URL
      altText: 'Rodent Control',
      website:'https://en.wikipedia.org/wiki/Rodent'
    },
    {
      title: 'Ant Control',
      description:
        'Targeted ant control: removing colonies efficiently, keeping your home clean, safe, and ant-free.',
      imageUrl: '/images/ants.gif', // Replace with the correct image URL
      altText: 'Ant Control',
      website:'https://en.wikipedia.org/wiki/Ant'
    },
    {
      title: 'Bedbug Control',
      description:
        'Eliminating infestations swiftly, ensuring your home stays safe and comfortable.”d do eiusmod tempor incididunt.',
      imageUrl: '/images/bedbugs.gif', // Replace with the correct image URL
      altText: 'BedBug Control',
      website:'https://en.wikipedia.org/wiki/Bed_bug'
    },
  ];

  return (
    <>
      <section className="relative bg-[url('/images/servicesbanner.avif')] bg-center bg-no-repeat bg-cover min-h-[600px] flex justify-center items-center">
        <h1 className=" text-black text-5xl md:text-6xl font-semibold">
          Services
        </h1>
      </section>

      <section className="py-12 ">
      <div className="container mx-auto px-4">
        <h2 className="text-center text-[#18311c] text-3xl font-bold mb-8">Our Services</h2>
        <div className="grid gap-8 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1">
          {services.map((service, index) => (
            <div key={index} className="bg-white shadow-md rounded-lg overflow-hidden">
              <img
                src={service.imageUrl}
                alt={service.altText}
                className="pl-[25%] h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-bold text-black mb-4">{service.title}</h3>
                <p className="text-[#18311c] font-semibold mb-6">{service.description}</p>
                <a
                  href={service.website}
                  className="inline-block bg-[#172e1c] text-white px-4 py-2 rounded hover:bg-green-800 transition"
                >
                  KNOW MORE
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>



      

      
    
      <ContactUs/>
    </>
  )
}

export default Services