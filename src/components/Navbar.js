import React from 'react';
import { Link } from 'react-scroll';
import logo from '../assets/images/logo1-no-bg.png';
// import backgroundImage from '../assets/images/bg.png';
import { FaUser, FaBriefcase, FaProjectDiagram, FaCode } from 'react-icons/fa';

const Navbar = () => {
  return (
    <nav
    className="flex items-center fixed top-0 left-0 w-full h-20 bg-slate-100 text-black py-4 z-20 shadow-md"
    
  >
      <a href="/">
        <img
          src={logo}
          alt="Logo"
          className="h-24 w-52 mx-8 px-8 py-2 justify-start animate-slide-in-left"
        />
      </a>
      <div className="container mx-auto flex justify-end space-x-8">
        <Link
          to="about"
          smooth={true}
          duration={500}
          className="cursor-pointer px-4 py-2 rounded-full border border-transparent hover:bg-black hover:text-white transform transition-transform duration-600 animate-slide-in-left delay-200"
        >
          <FaUser className="inline-block mr-2" /> About Me
        </Link>
        <Link
          to="experience"
          smooth={true}
          duration={500}
          className="cursor-pointer px-4 py-2 rounded-full border border-transparent hover:bg-black hover:text-white transform transition-transform duration-600 animate-slide-in-left delay-300"
        >
          <FaBriefcase className="inline-block mr-2" /> Experience
        </Link>
        <Link
          to="projects"
          smooth={true}
          duration={500}
          className="cursor-pointer px-4 py-2 rounded-full border border-transparent hover:bg-black hover:text-white transform transition-transform duration-600 animate-slide-in-left delay-400"
        >
          <FaProjectDiagram className="inline-block mr-2" /> Projects
        </Link>
        <Link
          to="skills"
          smooth={true}
          duration={500}
          className="cursor-pointer  px-4 py-2 rounded-full border border-transparent hover:bg-black hover:text-white  transform transition-transform duration-600 animate-slide-in-left delay-500"
        >
          <FaCode className="inline-block mr-2" /> Skills
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
