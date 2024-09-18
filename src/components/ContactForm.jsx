import { useRef } from "react";
import emailjs from "emailjs-com";

export default function ContactForm() {
  const formRef = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_hp5wi4n", // Replace with your EmailJS service ID
        "template_v14skuh", // Replace with your EmailJS template ID
        formRef.current,
        "erAl8mhqFCDuq5kS0" // Replace with your EmailJS public key
      )
      .then(
        (result) => {
          console.log(result.text);
          alert("Message sent successfully!");
        },
        (error) => {
          console.log(error.text);
          alert("Failed to send the message.");
        }
      );

    e.target.reset(); // Reset the form after submission
  };

  return (
    <section
      id="contact"
      className="h-auto bg-gradient-to-r from-blue-500 to-purple-600 text-white flex flex-col justify-center items-center text-center py-20"
    >
      <h2 className="text-5xl font-bold mb-6">Get In Touch</h2>
      <p className="max-w-2xl mx-auto text-lg mb-8">
        I'm always open to discussing web development projects, ideas, or job
        opportunities. Feel free to reach out!
      </p>

      {/* Contact Form */}
      <form
        ref={formRef}
        onSubmit={sendEmail}
        className="bg-white p-8 rounded-lg shadow-md w-full max-w-lg text-left"
      >
        <div className="mb-4">
          <label
            htmlFor="name"
            className="block text-sm font-semibold text-gray-700 mb-2"
          >
            Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            required
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500 text-black"
            placeholder="Your Name"
          />
        </div>

        <div className="mb-4">
          <label
            htmlFor="email"
            className="block text-sm font-semibold text-gray-700 mb-2"
          >
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            required
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500 text-black"
            placeholder="Your Email"
          />
        </div>

        <div className="mb-4">
          <label
            htmlFor="message"
            className="block text-sm font-semibold text-gray-700 mb-2"
          >
            Message
          </label>
          <textarea
            id="message"
            name="message"
            required
            rows="5"
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500 text-black"
            placeholder="Your Message"
          ></textarea>
        </div>

        <button
          type="submit"
          className="w-full px-6 py-3 bg-blue-600 text-white font-semibold rounded-full hover:bg-blue-700 transition-all duration-300"
        >
          Send Message
        </button>
      </form>
    </section>
  );
}
