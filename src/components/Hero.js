import React from "react";
import { FaPhoneAlt, FaEye } from "react-icons/fa";
import coverImage from "../assets/images/cover-section-square.png";
import { Link } from "react-scroll";
import SocialLinks from "./Socials";

const Hero = () => {
  return (
    <section
      id="hero"
      className="relative mt-32 flex items-center justify-center min-h-screen w-full bg-cover bg-center text-white z-10 bg-slate-200 px-4"
    >
      {/* Hero Content Container */}
      <div className="relative z-6 w-full px-4 md:px-0 flex flex-col-reverse md:flex-row items-center justify-between max-w-6xl mx-auto">
        {/* Left Side: Text Content */}
        <div className="w-full md:w-1/2 px-4 md:px-8 text-center md:text-left mt-8 md:mt-0">
          <h3 className="text-2xl sm:text-3xl md:text-4xl text-black font-serif font-extrabold leading-tight mb-4 text-shadow-md animate-slide-in-left">
            Hi! I'm
            <h3 className="text-2xl sm:text-3xl md:text-4xl text-blue-800 font-serif font-extrabold leading-tight mb-4 text-shadow-md animate-slide-in-left">
              Hamza Adeel
            </h3>
          </h3>
          <p className="text-base sm:text-lg md:text-xl text-black font-serif leading-tight mb-6 text-shadow-md animate-slide-in-left">
            A computer science graduate <br className="hidden sm:block" />
            willing to go the extra mile to achieve greatness and
            <br className="hidden sm:block" />
            provide high performance websites with eye-catching designs and
            features.
          </p>
          <div className="flex flex-col sm:flex-row justify-center md:justify-start space-y-4 sm:space-y-0 sm:space-x-4 px-4 py-4">
            {/* Contact Me Button */}
            <Link
              to="contact"
              smooth="true"
              duration={700}
              className="cursor-pointer bg-black text-white px-6 py-3 rounded-full text-sm font-semibold shadow-xl hover:bg-white hover:text-black transition duration-300 ease-in-out transform hover:scale-105 animate-slide-in-right delay-400 flex items-center justify-center space-x-2 md:px-8 md:py-4 md:text-lg"
            >
              <FaPhoneAlt className="h-4 w-4 md:h-5 md:w-4" />
              <span className="text-sm md:text-base">Contact Me</span>
            </Link>
            {/* CV Preview Button */}
            <a
              href="/Hamza_Adeel_Full_Stack_Developer.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-black text-white px-6 py-3 rounded-full text-sm font-semibold shadow-xl hover:bg-white hover:text-black transition duration-300 ease-in-out transform hover:scale-105 animate-slide-in-right delay-400 flex items-center justify-center space-x-2 md:px-8 md:py-4 md:text-lg"
            >
              <FaEye className="h-4 w-4 md:h-5 md:w-4" />
              <span className="text-sm md:text-base">Preview CV</span>
            </a>
          </div>
        </div>

        {/* Right Side: Image */}
        <div className="w-full md:w-1/2 flex justify-center md:justify-end mt-8 md:mt-24">
          <div className="w-48 h-48 sm:w-64 sm:h-64 md:w-96 md:h-96 rounded-full bg-slate-300 flex items-center justify-center shadow-md animate-slide-in-right">
            <img
              src={coverImage}
              alt="Cover"
              className="w-40 h-40 sm:w-56 sm:h-56 md:w-80 md:h-80 rounded-b-full mt-6 sm:mt-8"
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
