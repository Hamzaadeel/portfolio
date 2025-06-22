import React, { useState, useEffect } from "react";
import {
  FaCode,
  FaHtml5,
  FaCss3Alt,
  FaReact,
  FaNodeJs,
  FaDatabase,
  FaTools,
  FaMicrosoft,
  FaLaptopCode,
  FaCogs,
  FaBrain,
  FaPhp,
  FaLaravel,
  FaTree,
  FaChartLine,
  FaPaintBrush,
  FaServer,
  FaFire,
  FaAws,
  FaGit,
  FaGitAlt,
} from "react-icons/fa"; // Import relevant react-icons
import { FaMicrochip, FaPencil, FaSquareJs } from "react-icons/fa6";
import mysqlIcon from "../assets/icons/mysql.png";
import oracleIcon from "../assets/icons/oracle.png";
import adobeXDIcon from "../assets/icons/adobeXD.png";
import photoshopIcon from "../assets/icons/photoshop.png";
import filmoraIcon from "../assets/icons/filmora.png";
import picsartIcon from "../assets/icons/picsart.png";
import tailwindIcon from "../assets/icons/tailwind.png";
import wordIcon from "../assets/icons/word.png";
import excelIcon from "../assets/icons/excel.png";
import powerpointIcon from "../assets/icons/powerpoint.png";
import mongodbIcon from "../assets/icons/mongodb.png";
import figmaIcon from "../assets/icons/figma.png";
import pythonIcon from "../assets/icons/python.png";
import vscodeIcon from "../assets/icons/vscode.png";
import expressIcon from "../assets/icons/images.png";
import postgresIcon from "../assets/icons/postgresql-icon.png";
import typescriptIcon from "../assets/icons/typescript.png";
import cursorIcon from "../assets/icons/cursor.jpeg";
import firebaseIcon from "../assets/icons/firebase.png";
import reduxIcon from "../assets/icons/redux.png";
import nextIcon from "../assets/icons/next.png";
const Skills = () => {
  const [visibleSections, setVisibleSections] = useState({
    programming: false,
    tools: false,
    ai: false,
    dbms: false,
    uiux: false,
    design: false,
    msOffice: false,
  });

  useEffect(() => {
    const sections = document.querySelectorAll(".skills-section");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisibleSections((prev) => ({
              ...prev,
              [entry.target.id]: true,
            }));
          }
        });
      },
      { threshold: 0.2 } // Trigger when 20% of the element is visible
    );

    sections.forEach((section) => observer.observe(section));

    return () => {
      sections.forEach((section) => observer.unobserve(section));
    };
  }, []);

  return (
    <section id="skills" className="py-12 bg-gray-200 text-gray-800">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl text-center mb-6 text-gray-900 border-4 border-gray-700 shadow-md px-6 py-4 font-sans inline-block mx-auto">
          Tech Arsenal
        </h2>
        <p className="text-lg max-w-2xl mx-auto mb-8">
          I have a strong foundation in various technologies, and I'm passionate
          about constantly enhancing my skillset.
        </p>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Programming Skills */}
          <div
            id="programming"
            className={`skills-section bg-gray-100 rounded-lg shadow-md p-6 transform transition-transform duration-700 ${
              visibleSections.programming
                ? "translate-x-0 opacity-100"
                : "-translate-x-10 opacity-0"
            }`}
          >
            <h3 className="text-2xl font-semibold text-gray-900 mb-4">
              <FaCode className="inline-block mr-2" />
              Programming Skills
            </h3>
            <ul className="grid grid-cols-3 gap-4">
              <li className="text-center">
                <FaSquareJs className="text-4xl mx-auto text-yellow-400 transform transition-transform duration-300 hover:scale-110" />
                <p>JavaScript</p>
              </li>
              <li className="text-center">
                <img
                  src={typescriptIcon}
                  alt="Typescript"
                  className="w-10 h-10 mx-auto rounded-lg transform transition-transform duration-300 hover:scale-110"
                />
                <p>Typescript</p>
              </li>
              <li className="text-center">
                <FaHtml5 className="text-4xl mx-auto text-orange-500 transform transition-transform duration-300 hover:scale-110" />
                <p>HTML5</p>
              </li>
              <li className="text-center">
                <FaCss3Alt className=" text-4xl mx-auto text-blue-600 transform transition-transform duration-300 hover:scale-110" />
                <p>CSS3</p>
              </li>
              <li className="text-center">
                <img
                  src={pythonIcon}
                  alt="Python"
                  className="w-10 h-10 mx-auto transform transition-transform duration-300 hover:scale-110"
                />
                <p>Python</p>
              </li>
              <li className="text-center">
                <FaPhp className="text-4xl mx-auto text-purple-900 transform transition-transform duration-300 hover:scale-110" />
                <p>PHP</p>
              </li>
            </ul>
          </div>

          {/* Tools and Frameworks */}
          <div
            id="tools"
            className={`skills-section bg-gray-100 rounded-lg shadow-md p-6 transform transition-transform duration-700 ${
              visibleSections.tools
                ? "translate-x-0 opacity-100"
                : "translate-x-10 opacity-0"
            }`}
          >
            <h3 className="text-2xl font-semibold text-gray-900 mb-4">
              <FaLaptopCode className="inline-block mr-2" />
              Tools, Frameworks & Technologies
            </h3>
            <ul className="grid grid-cols-3 gap-4">
              <li className="text-center">
                <FaReact className="text-4xl mx-auto text-blue-600 transform transition-transform duration-300 hover:scale-110" />
                <p>React.js</p>
              </li>
              <li className="text-center">
                <FaNodeJs className="text-4xl mx-auto text-lime-500 transform transition-transform duration-300 hover:scale-110" />
                <p>Node.js</p>
              </li>
              <li className="text-center">
                <img
                  src={nextIcon}
                  alt="Next"
                  className="w-16 h-10 mx-auto transform transition-transform duration-300 hover:scale-110"
                />
                <p>Next JS</p>
              </li>
              <li className="text-center">
                <img
                  src={vscodeIcon}
                  alt="VsCode"
                  className="w-10 h-10 mx-auto transform transition-transform duration-300 hover:scale-110"
                />
                <p>Visual Studio</p>
              </li>
              <li className="text-center">
                <img
                  src={expressIcon}
                  alt="Express"
                  className="w-10 h-8 mx-auto transform transition-transform duration-300 hover:scale-110"
                />
                <p>Express</p>
              </li>
              <li className="text-center">
                <FaLaravel className="text-4xl mx-auto text-red-700 transform transition-transform duration-300 hover:scale-110" />
                <p>Laravel</p>
              </li>
              <li className="text-center">
                <img
                  src={tailwindIcon}
                  alt="Tailwind"
                  className="w-10 h-8 mx-auto transform transition-transform duration-300 hover:scale-110"
                />
                <p>Tailwind CSS</p>
              </li>
              <li className="text-center">
                <img
                  src={reduxIcon}
                  alt="Redux"
                  className="w-10 h-10 mx-auto transform transition-transform duration-300 hover:scale-110"
                />
                <p>Redux</p>
              </li>
              <li className="text-center">
                <FaAws className="text-4xl mx-auto text-cyan-900 transform transition-transform duration-300 hover:scale-110" />
                <p>AWS</p>
              </li>
              <li className="text-center">
                <FaGitAlt className="text-4xl mx-auto text-red-500 transform transition-transform duration-300 hover:scale-110" />
                <p>Git</p>
              </li>
            </ul>
          </div>

          {/* AI/ML */}
          <div
            id="ai"
            className={`skills-section bg-gray-100 rounded-lg shadow-md p-6 transform transition-transform duration-700 ${
              visibleSections.ai
                ? "translate-x-0 opacity-100"
                : "-translate-x-10 opacity-0"
            }`}
          >
            <h3 className="text-2xl font-semibold text-gray-900 mb-4">
              <FaMicrochip className="inline-block mr-2" />
              AI/ML
            </h3>
            <ul className="grid grid-cols-3 gap-4">
              <li className="text-center">
                <FaCogs className="text-4xl mx-auto text-gray-600 transform transition-transform duration-300 hover:scale-110" />
                <p>Clustering</p>
              </li>
              <li className="text-center">
                <FaBrain className="text-4xl mx-auto text-blue-700 transform transition-transform duration-300 hover:scale-110" />
                <p>Neural Networks</p>
              </li>
              <li className="text-center">
                <FaTree className="text-4xl mx-auto text-green-600 transform transition-transform duration-300 hover:scale-110" />
                <p>Decision Trees</p>
              </li>
              <li className="text-center">
                <FaChartLine className="text-4xl mx-auto transform transition-transform duration-300 hover:scale-110" />
                <p>Logistic & Linear Regression</p>
              </li>
              <li className="text-center">
                <img
                  src={cursorIcon}
                  alt="Cursor"
                  className="w-12 h-10 mx-auto transform transition-transform duration-300 hover:scale-110"
                />
                <p>Cursor AI</p>
              </li>
            </ul>
          </div>

          {/* DBMS */}
          <div
            id="dbms"
            className={`skills-section bg-gray-100 rounded-lg shadow-md p-6 transform transition-transform duration-700 ${
              visibleSections.dbms
                ? "translate-x-0 opacity-100"
                : "translate-x-10 opacity-0"
            }`}
          >
            <h3 className="text-2xl font-semibold text-gray-900 mb-4">
              <FaDatabase className="inline-block mr-2" />
              DBMS
            </h3>
            <ul className="grid grid-cols-3 gap-4">
              <li className="text-center">
                <img
                  src={mysqlIcon}
                  alt="MySQL"
                  className="w-12 h-12 mx-auto transform transition-transform duration-300 hover:scale-110"
                />
                <p>MySQL</p>
              </li>

              <li className="text-center">
                <img
                  src={mongodbIcon}
                  alt="MongoDB"
                  className="w-12 h-12 mx-auto transform transition-transform duration-300 hover:scale-110"
                />
                <p>MongoDB</p>
              </li>
              <li className="text-center">
                <img
                  src={oracleIcon}
                  alt="Oracle"
                  className="w-12 h-12 mx-auto transform transition-transform duration-300 hover:scale-110"
                />
                <p>Oracle</p>
              </li>
              <li className="text-center">
                <img
                  src={postgresIcon}
                  alt="PostgreSQL"
                  className="w-8 h-8 mx-auto transform transition-transform duration-300 hover:scale-110"
                />
                <p>PostgreSQL</p>
              </li>
              <li className="text-center">
                <img
                  src={firebaseIcon}
                  alt="Firebase"
                  className="w-10 h-8 mx-auto transform transition-transform duration-300 hover:scale-110"
                />
                <p>Firebase</p>
              </li>
            </ul>
          </div>

          {/* UI/UX */}
          <div
            id="uiux"
            className={`skills-section bg-gray-100 rounded-lg shadow-md p-6 transform transition-transform duration-700 ${
              visibleSections.uiux
                ? "translate-x-0 opacity-100"
                : "-translate-x-10 opacity-0"
            }`}
          >
            <h3 className="text-2xl font-semibold text-gray-900 mb-4">
              <FaPaintBrush className="inline-block mr-2" />
              UI/UX
            </h3>
            <ul className="grid grid-cols-3 gap-4">
              <li className="text-center">
                <img
                  src={figmaIcon}
                  alt="Figma"
                  className="w-17 h-12 mx-auto transform transition-transform duration-300 hover:scale-110"
                />
                <p>Figma</p>
              </li>
              <li className="text-center">
                <img
                  src={adobeXDIcon}
                  alt="XD"
                  className="w-17 h-12 mx-auto transform transition-transform duration-300 hover:scale-110"
                />
                <p>Adobe XD</p>
              </li>
              <li className="text-center">
                <FaPencil className="text-4xl mx-auto text-orange-500 transform transition-transform duration-300 hover:scale-110" />
                <p>Pencil Project</p>
              </li>
            </ul>
          </div>

          {/* Graphic Designing and Editing */}
          <div
            id="design"
            className={`skills-section bg-gray-100 rounded-lg shadow-md p-6 transform transition-transform duration-700 ${
              visibleSections.design
                ? "translate-x-0 opacity-100"
                : "translate-x-10 opacity-0"
            }`}
          >
            <h3 className="text-2xl font-semibold text-gray-900 mb-4">
              <FaTools className="inline-block mr-2" />
              Graphic Design & Editing
            </h3>
            <ul className="grid grid-cols-3 gap-4">
              <li className="text-center">
                <img
                  src={photoshopIcon}
                  alt="photoshop"
                  className="w-12 h-12 mx-auto transform transition-transform duration-300 hover:scale-110"
                />
                <p>Adobe Photoshop</p>
              </li>
              <li className="text-center">
                <img
                  src={filmoraIcon}
                  alt="filmora"
                  className="w-12 h-12 mx-auto transform transition-transform duration-300 hover:scale-110"
                />
                <p>Filmora</p>
              </li>
              <li className="text-center">
                <img
                  src={picsartIcon}
                  alt="PicsArt"
                  className="w-18 h-12 mx-auto transform transition-transform duration-300 hover:scale-110"
                />
                <p>PicsArt</p>
              </li>
            </ul>
          </div>

          {/* MS Office */}
          <div
            id="msOffice"
            className={`skills-section bg-gray-100 rounded-lg shadow-md p-6 transform transition-transform duration-700 ${
              visibleSections.msOffice
                ? "translate-x-0 opacity-100"
                : "-translate-x-10 opacity-0"
            }`}
          >
            <h3 className="text-2xl font-semibold text-gray-900 mb-4">
              <FaMicrosoft className="inline-block mr-2" />
              MS Office
            </h3>
            <ul className="grid grid-cols-3 gap-4">
              <li className="text-center">
                <img
                  src={wordIcon}
                  alt="Word"
                  className="w-12 h-8 my-2 mx-auto transform transition-transform duration-300 hover:scale-110"
                />
                <p>Word</p>
              </li>
              <li className="text-center">
                <img
                  src={excelIcon}
                  alt="Excel"
                  className="w-18 h-12 mx-auto transform transition-transform duration-300 hover:scale-110"
                />
                <p>Excel</p>
              </li>
              <li className="text-center">
                <img
                  src={powerpointIcon}
                  alt="Powerpoint"
                  className="w-16 h-11 my-0.5 mx-auto transform transition-transform duration-300 hover:scale-110"
                />
                <p>Powerpoint</p>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
