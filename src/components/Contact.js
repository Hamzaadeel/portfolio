import React, { useState } from "react";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [status, setStatus] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    emailjs
      .send(
        "service_mex5cto",
        "template_0sqbxc7",
        formData,
        "jvmn4T_paUuoBkXh4"
      )
      .then(
        (response) => {
          setStatus("Message sent successfully!");
          setFormData({ name: "", email: "", message: "" }); // Reset form

          // Clear status after 5 seconds
          setTimeout(() => {
            setStatus("");
          }, 5000);
        },
        (error) => {
          setStatus("Failed to send message. Please try again.");
          console.error("EmailJS Error:", error);

          // Clear status after 5 seconds
          setTimeout(() => {
            setStatus("");
          }, 5000);
        }
      );
  };

  return (
    <section id="contact" className="py-20 bg-slate-300 text-gray-800 px-4">
      <div className="container mx-auto text-center">
        <h2 className="text-2xl sm:text-3xl text-center mb-6 text-gray-900 border-4 border-gray-700 shadow-md px-4 sm:px-6 py-4 font-sans inline-block mx-auto">
          Get in Touch
        </h2>
        <p className="text-base sm:text-lg max-w-2xl mx-auto mb-8 px-4">
          Feel free to reach out by filling out the form below.
        </p>
        <form
          onSubmit={handleSubmit}
          className="max-w-lg mx-auto bg-gray-100 shadow-md rounded-lg p-4 sm:p-8"
        >
          <div className="mb-4">
            <label
              htmlFor="name"
              className="block text-sm font-medium text-gray-700 mb-2"
            >
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Enter your name"
              className="w-full border border-gray-300 rounded-md p-2 sm:p-3 focus:outline-none focus:ring-2 focus:ring-black text-sm sm:text-base"
              required
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700 mb-2"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Enter your email"
              className="w-full border border-gray-300 rounded-md p-2 sm:p-3 focus:outline-none focus:ring-2 focus:ring-black text-sm sm:text-base"
              required
            />
          </div>
          <div className="mb-6">
            <label
              htmlFor="message"
              className="block text-sm font-medium text-gray-700 mb-2"
            >
              Message
            </label>
            <textarea
              id="message"
              name="message"
              rows="4"
              value={formData.message}
              onChange={handleChange}
              placeholder="Enter your message"
              className="w-full border border-gray-300 rounded-md p-2 sm:p-3 focus:outline-none focus:ring-2 focus:ring-black text-sm sm:text-base resize-none"
              required
            ></textarea>
          </div>
          <button
            type="submit"
            className="bg-black text-white px-4 sm:px-6 py-2 sm:py-3 rounded-md text-sm sm:text-base font-medium border-2 border-black hover:bg-white hover:text-black transition duration-200 w-full sm:w-auto"
          >
            Send Message
          </button>
        </form>
        {status && (
          <p className="mt-4 text-sm bg-green-700 text-white py-2 px-4 rounded-md inline-block">
            {status}
          </p>
        )}
      </div>
    </section>
  );
};

export default Contact;
