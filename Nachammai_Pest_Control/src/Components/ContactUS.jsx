import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import emailjs from "emailjs-com";

const Schema = z
  .object({
    name: z
      .string()
      .min(3, { message: "Name must contain at least 3 characters" })
      .max(20, { message: "Name must contain at most 20 characters" }),

    email: z.string().email({ message: "Email is required" }),

    message: z
      .string()
      .min(5, { message: "Your message must contain at least 5 characters" })
      .max(250, {
        message: "Your message must contain at most 250 characters",
      }),
  })
  .refine((data) => data.password === data.repeatPassword, {
    message: "Passwords should be the same",
    path: ["repeatPassword"],
  });

const ContactUs = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({ resolver: zodResolver(Schema) });

  const sendMail = (formData) => {
    console.log(formData);
    const serviceID = "service_rpz8s8f"; // service id from emailjs
    const templateID = "template_48u2diq"; // template id from emailjs
    const userID = "oDpIL0_AXnp-RjuNm"; // user id from emailjs
    const templateParams = {
      from_name: formData.name,
      from_email: formData.email,
      message: formData.message,
    };

    emailjs.send(serviceID, templateID, templateParams, userID).then(
      (response) => {
        console.log("SUCCESS!", response.status, response.text);
        alert("Message sent successfully!");
        reset();
      },
      (error) => {
        console.error("FAILED...", error);
        alert("Message failed to send, Please try again.");
      }
    );
  };

  return (
    <section className="py-14 bg-brown100">
      <div className="2xl:container mx-auto px-8 md:px-16 lg:px-32">
        <div className="flex justify-center items-center text-brown900 mb-5 md:mb-8">
          <h1 className="text-center text-4xl md:text-5xl">Get In Touch</h1> 
        </div>

        <p className="md:text-xl text-[#333333] text-center mb-8 mx-auto max-w-xl">
          We’d love to hear from you! Just fill out the form, and our expert
          team will be ready to answer your questions.
        </p>

        <form
          action=""
          onSubmit={handleSubmit(sendMail)}
          className="max-w-4xl mx-auto space-y-8"
        >
          <div>
            <label htmlFor="name" className="text-[#333333] text-lg block mb-2">
              Name
            </label>
            <input
              type="text"
              name="name"
              id="name"
              placeholder="Enter your name"
              {...register("name")}
              className="w-full rounded-xl px-5 py-3 outline-none bg-transparent border-2 border-gray-300 focus:border-brown600 focus:outline-none"
            />
            {errors && (
              <small className="text-red-500 text-sm">
                {errors.name?.message}
              </small>
            )}
          </div>
          <div>
            <label
              htmlFor="email"
              className="text-[#333333] text-lg block mb-2"
            >
              Email
            </label>
            <input
              type="email"
              name="email"
              id="email"
              placeholder="Enter your email"
              {...register("email")}
              className="w-full rounded-xl px-5 py-3 outline-none bg-transparent border-2 border-gray-300 focus:border-brown600 focus:outline-none"
            />
            {errors && (
              <small className="text-red-500 text-sm">
                {errors.email?.message}
              </small>
            )}
          </div>
          <div>
            <label
              htmlFor="message"
              className="text-[#333333] text-lg block mb-2"
            >
              Message
            </label>
            <textarea
              name="message"
              id="message"
              cols="30"
              rows="7"
              placeholder="Enter your message"
              {...register("message")}
              className="w-full rounded-xl px-5 py-3 outline-none bg-transparent border-2 border-gray-300 focus:border-brown600 focus:outline-none"
            ></textarea>
            {errors && (
              <small className="text-red-500 text-sm">
                {errors.message?.message}
              </small>
            )}

            <div className="mt-7">
              <button className="px-5 py-2.5 rounded-lg text-white bg-brown600 font-semibold transition-all hover:transition-all hover:bg-brown700">
                SEND MESSAGE
              </button>
            </div>
          </div>
        </form>
      </div>
    </section>
  );
};

export default ContactUs;
