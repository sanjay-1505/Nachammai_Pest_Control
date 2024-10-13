import React, { useState } from 'react';

const FAQ = () => {
  const [open, setOpen] = useState(null);

  const toggle = (index) => {
    setOpen(open === index ? null : index);
  };

  const faqs = [
    {
      question: "Why are there multiple pest control services in a year?",
      answer: "Pest control treatments are scheduled periodically to ensure lasting protection and to target pests at different life stages."
    },
    {
      question: "How often does Aptive perform pest control treatments?",
      answer: "Aptive typically performs treatments quarterly, depending on the service plan and pest type."
    },
    {
      question: "Why am I seeing more pest activity after my initial pest control service?",
      answer: "It's common to see more pests as they are driven out of hiding spots. The activity should subside within a few days."
    },
    {
      question: "What kind of pest control products do you use?",
      answer: "We use environmentally responsible products that are safe for your family and pets but highly effective against pests."
    },
    {
      question: "What happens if I'm still seeing pests after a pest control treatment?",
      answer: "If pests are still visible after a treatment, we offer free re-service to ensure the issue is resolved."
    }
  ];

  return (
    <div className="max-w-4xl mx-auto px-4 py-6">
      <h2 className="text-3xl font-bold mb-6 text-[#18311c] text-center">Frequently asked questions</h2>
      <div className="space-y-4">
        {faqs.map((faq, index) => (
          <div key={index} className="border-b-2 pb-4">
            <div 
              className="flex justify-between items-center cursor-pointer" 
              onClick={() => toggle(index)}
            >
              <h3 className="text-lg text-black font-semibold">{faq.question}</h3>
              <span className="text-xl">{open === index ? '-' : '+'}</span>
            </div>
            {open === index && (
              <p className="mt-2 font-semibold text-[#18311c]">
                {faq.answer}
              </p>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQ;
