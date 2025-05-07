import React from "react";
import { FaPhoneAlt, FaEye } from "react-icons/fa";
import coverImage from "../assets/images/cover-section-square.png";
import { Link } from "react-scroll";
import SocialLinks from "./Socials";

const Hero = () => {
  return (
    <section
      id="hero"
      className="relative mt-32 flex items-center justify-center h-screen  w-full bg-cover bg-center text-white z-10 bg-slate-200"
    >
      {/* Hero Content Container */}
      <div className="relative z-6 w-full px-4 md:px-0 flex flex-col-reverse md:flex-row items-center justify-between max-w-6xl mx-auto">
        {/* Left Side: Text Content */}
        <div className="w-full md:w-1/2 px-8 text-center md:text-left">
          <h3 className="text-3xl md:text-4xl text-black font-serif font-extrabold leading-tight mb-4 text-shadow-md animate-slide-in-left">
            Hi! I'm
            <h3 className="text-3xl md:text-4xl text-blue-800 font-serif font-extrabold leading-tight mb-4 text-shadow-md animate-slide-in-left">
              Hamza Adeel
            </h3>
          </h3>
          <p className="text-lg md:text-xl text-black font-serif leading-tight mb-4 text-shadow-md animate-slide-in-left">
            A computer science graduate <br />
            willing to go the extra mile to achieve greatness and
            <br />
            provide high performance websites with eye-catching designs and
            features.
          </p>
          <div className="flex justify-center md:justify-start space-x-4 px-4 py-4">
            {/* Contact Me Button */}
            <Link
              to="contact"
              smooth="true"
              duration={700}
              className="cursor-pointer bg-black text-white px-4 py-3 rounded-full text-sm font-semibold shadow-xl hover:bg-white hover:text-black transition duration-300 ease-in-out transform hover:scale-105 animate-slide-in-right delay-400 flex items-center space-x-2 md:px-8 md:py-4 md:text-lg"
            >
              <FaPhoneAlt className="h-5 w-4" /> {/* Adjusted icon size */}
              <span className="text-sm md:text-base">Contact Me</span>{" "}
              {/* Adjusted text size */}
            </Link>
            {/* CV Preview Button */}
            <a
              href="/Hamza Adeel Full Stack Developer.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-black text-white px-4 py-3 rounded-full text-sm font-semibold shadow-xl hover:bg-white hover:text-black transition duration-300 ease-in-out transform hover:scale-105 animate-slide-in-right delay-400 flex items-center space-x-2 md:px-8 md:py-4 md:text-lg"
            >
              <FaEye className="h-5 w-4" /> {/* Adjusted icon size */}
              <span className="text-sm md:text-base">Preview CV</span>{" "}
              {/* Adjusted text size */}
            </a>
          </div>
        </div>

        {/* Right Side: Image */}
        <div className="w-full md:w-1/2 flex justify-center md:justify-end mt-12 md:mt-24">
          <div className="w-64 h-64 md:w-96 md:h-96 rounded-full bg-slate-300 flex items-center justify-center shadow-md animate-slide-in-right">
            <img
              src={coverImage}
              alt="Cover"
              className="w-56 h-56 md:w-80 md:h-80 rounded-b-full mt-8"
            />
          </div>
        </div>
      </div>
      <div className="ml-2">
        <SocialLinks />
      </div>
    </section>
  );
};

export default Hero;
