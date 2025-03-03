import React, { useState } from "react";
import { Link } from "react-scroll";
import logo from "../assets/images/logo1-no-bg.png";
import {
  FaUser,
  FaBriefcase,
  FaProjectDiagram,
  FaCode,
  FaBars,
  FaTimes,
} from "react-icons/fa";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  // Toggle menu visibility
  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  // Close menu
  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <nav className="flex items-center fixed top-0 left-0 w-full h-20 bg-slate-100 text-black py-4 z-20 shadow-md">
      {/* Logo */}
      <a href="/" className="hidden md:flex items-center absolute left-0 ml-4">
        <img src={logo} alt="Logo" className="h-24 w-52" />
      </a>

      {/* Desktop Menu */}
      <div className="hidden md:flex container mx-auto justify-end space-x-8">
        <Link
          to="about"
          smooth={true}
          duration={500}
          className="cursor-pointer px-4 py-2 rounded-full border border-transparent hover:bg-black hover:text-white transition duration-300 ease-in-out"
        >
          <FaUser className="inline-block mr-2" /> About Me
        </Link>
        <Link
          to="experience"
          smooth={true}
          duration={500}
          className="cursor-pointer px-4 py-2 rounded-full border border-transparent hover:bg-black hover:text-white transition duration-300 ease-in-out"
        >
          <FaBriefcase className="inline-block mr-2" /> Experience
        </Link>
        <Link
          to="projects"
          smooth={true}
          duration={500}
          className="cursor-pointer px-4 py-2 rounded-full border border-transparent hover:bg-black hover:text-white transition duration-300 ease-in-out"
        >
          <FaProjectDiagram className="inline-block mr-2" /> Projects
        </Link>
        <Link
          to="skills"
          smooth={true}
          duration={500}
          className="cursor-pointer px-4 py-2 rounded-full border border-transparent hover:bg-black hover:text-white transition duration-300 ease-in-out"
        >
          <FaCode className="inline-block mr-2" /> Skills
        </Link>
      </div>

      {/* Mobile Menu Toggle */}
      <div className="md:hidden absolute top-4 right-4">
        <button onClick={toggleMenu} className="text-black p-4">
          {menuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
        </button>
      </div>

      {/* Mobile Menu with Sliding Animation */}
      <div
        className={`md:hidden absolute top-20 right-0 left-0 bg-slate-100 px-6 overflow-hidden transform transition-all duration-500 ease-in-out ${
          menuOpen ? "max-h-screen opacity-100" : "max-h-0 opacity-0"
        }`}
        style={{ maxHeight: menuOpen ? "300px" : "0" }} // Adjust `200px` as needed
      >
        <div className="flex flex-col items-center space-y-6 py-4">
          <Link
            to="about"
            smooth={true}
            duration={500}
            className="cursor-pointer px-4 py-2 rounded-full border border-transparent hover:bg-black hover:text-white"
            onClick={closeMenu}
          >
            <FaUser className="inline-block mr-2" /> About Me
          </Link>
          <Link
            to="experience"
            smooth={true}
            duration={500}
            className="cursor-pointer px-4 py-2 rounded-full border border-transparent hover:bg-black hover:text-white"
            onClick={closeMenu}
          >
            <FaBriefcase className="inline-block mr-2" /> Experience
          </Link>
          <Link
            to="projects"
            smooth={true}
            duration={500}
            className="cursor-pointer px-4 py-2 rounded-full border border-transparent hover:bg-black hover:text-white"
            onClick={closeMenu}
          >
            <FaProjectDiagram className="inline-block mr-2" /> Projects
          </Link>
          <Link
            to="skills"
            smooth={true}
            duration={500}
            className="cursor-pointer px-4 py-2 rounded-full border border-transparent hover:bg-black hover:text-white"
            onClick={closeMenu}
          >
            <FaCode className="inline-block mr-2" /> Skills
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
