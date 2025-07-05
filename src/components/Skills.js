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
  FaAws,
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
    <section id="skills" className="py-12 bg-gray-200 text-gray-800 px-4">
      <div className="container mx-auto text-center">
        <h2 className="text-2xl sm:text-3xl text-center mb-6 text-gray-900 border-4 border-gray-700 shadow-md px-4 sm:px-6 py-4 font-sans inline-block mx-auto">
          Tech Arsenal
        </h2>
        <p className="text-base sm:text-lg max-w-2xl mx-auto mb-8 px-4">
          I have a strong foundation in various technologies, and I'm passionate
          about constantly enhancing my skillset.
        </p>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8 px-4">
          {/* Programming Skills */}
          <div
            id="programming"
            className={`skills-section bg-gray-100 rounded-lg shadow-md p-4 sm:p-6 transform transition-transform duration-700 ${
              visibleSections.programming
                ? "translate-x-0 opacity-100"
                : "-translate-x-10 opacity-0"
            }`}
          >
            <h3 className="text-xl sm:text-2xl font-semibold text-gray-900 mb-4">
              <FaCode className="inline-block mr-2" />
              Programming Skills
            </h3>
            <ul className="grid grid-cols-2 sm:grid-cols-3 gap-3 sm:gap-4">
              <li className="text-center">
                <FaSquareJs className="text-3xl sm:text-4xl mx-auto text-yellow-400 transform transition-transform duration-300 hover:scale-110" />
                <p className="text-sm sm:text-base">JavaScript</p>
              </li>
              <li className="text-center">
                <img
                  src={typescriptIcon}
                  alt="Typescript"
                  className="w-8 h-8 sm:w-10 sm:h-10 mx-auto rounded-lg transform transition-transform duration-300 hover:scale-110"
                />
                <p className="text-sm sm:text-base">Typescript</p>
              </li>
              <li className="text-center">
                <FaHtml5 className="text-3xl sm:text-4xl mx-auto text-orange-500 transform transition-transform duration-300 hover:scale-110" />
                <p className="text-sm sm:text-base">HTML5</p>
              </li>
              <li className="text-center">
                <FaCss3Alt className=" text-3xl sm:text-4xl mx-auto text-blue-600 transform transition-transform duration-300 hover:scale-110" />
                <p className="text-sm sm:text-base">CSS3</p>
              </li>
              <li className="text-center">
                <img
                  src={pythonIcon}
                  alt="Python"
                  className="w-8 h-8 sm:w-10 sm:h-10 mx-auto transform transition-transform duration-300 hover:scale-110"
                />
                <p className="text-sm sm:text-base">Python</p>
              </li>
              <li className="text-center">
                <FaPhp className="text-3xl sm:text-4xl mx-auto text-purple-900 transform transition-transform duration-300 hover:scale-110" />
                <p className="text-sm sm:text-base">PHP</p>
              </li>
            </ul>
          </div>

          {/* Tools and Frameworks */}
          <div
            id="tools"
            className={`skills-section bg-gray-100 rounded-lg shadow-md p-4 sm:p-6 transform transition-transform duration-700 ${
              visibleSections.tools
                ? "translate-x-0 opacity-100"
                : "translate-x-10 opacity-0"
            }`}
          >
            <h3 className="text-xl sm:text-2xl font-semibold text-gray-900 mb-4">
              <FaLaptopCode className="inline-block mr-2" />
              Tools, Frameworks & Technologies
            </h3>
            <ul className="grid grid-cols-2 sm:grid-cols-3 gap-3 sm:gap-4">
              <li className="text-center">
                <FaReact className="text-3xl sm:text-4xl mx-auto text-blue-600 transform transition-transform duration-300 hover:scale-110" />
                <p className="text-sm sm:text-base">React.js</p>
              </li>
              <li className="text-center">
                <FaNodeJs className="text-3xl sm:text-4xl mx-auto text-lime-500 transform transition-transform duration-300 hover:scale-110" />
                <p className="text-sm sm:text-base">Node.js</p>
              </li>
              <li className="text-center">
                <img
                  src={nextIcon}
                  alt="Next"
                  className="w-12 h-8 sm:w-16 sm:h-10 mx-auto transform transition-transform duration-300 hover:scale-110"
                />
                <p className="text-sm sm:text-base">Next JS</p>
              </li>
              <li className="text-center">
                <img
                  src={vscodeIcon}
                  alt="VsCode"
                  className="w-8 h-8 sm:w-10 sm:h-10 mx-auto transform transition-transform duration-300 hover:scale-110"
                />
                <p className="text-sm sm:text-base">Visual Studio</p>
              </li>
              <li className="text-center">
                <img
                  src={expressIcon}
                  alt="Express"
                  className="w-8 h-6 sm:w-10 sm:h-8 mx-auto transform transition-transform duration-300 hover:scale-110"
                />
                <p className="text-sm sm:text-base">Express</p>
              </li>
              <li className="text-center">
                <FaLaravel className="text-3xl sm:text-4xl mx-auto text-red-700 transform transition-transform duration-300 hover:scale-110" />
                <p className="text-sm sm:text-base">Laravel</p>
              </li>
              <li className="text-center">
                <img
                  src={tailwindIcon}
                  alt="Tailwind"
                  className="w-8 h-6 sm:w-10 sm:h-8 mx-auto transform transition-transform duration-300 hover:scale-110"
                />
                <p className="text-sm sm:text-base">Tailwind CSS</p>
              </li>
              <li className="text-center">
                <img
                  src={reduxIcon}
                  alt="Redux"
                  className="w-8 h-8 sm:w-10 sm:h-10 mx-auto transform transition-transform duration-300 hover:scale-110"
                />
                <p className="text-sm sm:text-base">Redux</p>
              </li>
              <li className="text-center">
                <FaAws className="text-3xl sm:text-4xl mx-auto text-cyan-900 transform transition-transform duration-300 hover:scale-110" />
                <p className="text-sm sm:text-base">AWS</p>
              </li>
              <li className="text-center">
                <FaGitAlt className="text-3xl sm:text-4xl mx-auto text-red-500 transform transition-transform duration-300 hover:scale-110" />
                <p className="text-sm sm:text-base">Git</p>
              </li>
            </ul>
          </div>

          {/* AI/ML */}
          <div
            id="ai"
            className={`skills-section bg-gray-100 rounded-lg shadow-md p-4 sm:p-6 transform transition-transform duration-700 ${
              visibleSections.ai
                ? "translate-x-0 opacity-100"
                : "-translate-x-10 opacity-0"
            }`}
          >
            <h3 className="text-xl sm:text-2xl font-semibold text-gray-900 mb-4">
              <FaMicrochip className="inline-block mr-2" />
              AI/ML
            </h3>
            <ul className="grid grid-cols-2 sm:grid-cols-3 gap-3 sm:gap-4">
              <li className="text-center">
                <FaCogs className="text-3xl sm:text-4xl mx-auto text-gray-600 transform transition-transform duration-300 hover:scale-110" />
                <p className="text-sm sm:text-base">Clustering</p>
              </li>
              <li className="text-center">
                <FaBrain className="text-3xl sm:text-4xl mx-auto text-blue-700 transform transition-transform duration-300 hover:scale-110" />
                <p className="text-sm sm:text-base">Neural Networks</p>
              </li>
              <li className="text-center">
                <FaTree className="text-3xl sm:text-4xl mx-auto text-green-600 transform transition-transform duration-300 hover:scale-110" />
                <p className="text-sm sm:text-base">Decision Trees</p>
              </li>
              <li className="text-center">
                <FaChartLine className="text-3xl sm:text-4xl mx-auto transform transition-transform duration-300 hover:scale-110" />
                <p className="text-xs sm:text-sm">
                  Logistic & Linear Regression
                </p>
              </li>
              <li className="text-center">
                <img
                  src={cursorIcon}
                  alt="Cursor"
                  className="w-10 h-8 sm:w-12 sm:h-10 mx-auto transform transition-transform duration-300 hover:scale-110"
                />
                <p className="text-sm sm:text-base">Cursor AI</p>
              </li>
            </ul>
          </div>

          {/* DBMS */}
          <div
            id="dbms"
            className={`skills-section bg-gray-100 rounded-lg shadow-md p-4 sm:p-6 transform transition-transform duration-700 ${
              visibleSections.dbms
                ? "translate-x-0 opacity-100"
                : "translate-x-10 opacity-0"
            }`}
          >
            <h3 className="text-xl sm:text-2xl font-semibold text-gray-900 mb-4">
              <FaDatabase className="inline-block mr-2" />
              DBMS
            </h3>
            <ul className="grid grid-cols-2 sm:grid-cols-3 gap-3 sm:gap-4">
              <li className="text-center">
                <img
                  src={mysqlIcon}
                  alt="MySQL"
                  className="w-10 h-10 sm:w-12 sm:h-12 mx-auto transform transition-transform duration-300 hover:scale-110"
                />
                <p className="text-sm sm:text-base">MySQL</p>
              </li>

              <li className="text-center">
                <img
                  src={mongodbIcon}
                  alt="MongoDB"
                  className="w-10 h-10 sm:w-12 sm:h-12 mx-auto transform transition-transform duration-300 hover:scale-110"
                />
                <p className="text-sm sm:text-base">MongoDB</p>
              </li>
              <li className="text-center">
                <img
                  src={oracleIcon}
                  alt="Oracle"
                  className="w-10 h-10 sm:w-12 sm:h-12 mx-auto transform transition-transform duration-300 hover:scale-110"
                />
                <p className="text-sm sm:text-base">Oracle</p>
              </li>
              <li className="text-center">
                <img
                  src={postgresIcon}
                  alt="PostgreSQL"
                  className="w-6 h-6 sm:w-8 sm:h-8 mx-auto transform transition-transform duration-300 hover:scale-110"
                />
                <p className="text-sm sm:text-base">PostgreSQL</p>
              </li>
              <li className="text-center">
                <img
                  src={firebaseIcon}
                  alt="Firebase"
                  className="w-8 h-6 sm:w-10 sm:h-8 mx-auto transform transition-transform duration-300 hover:scale-110"
                />
                <p className="text-sm sm:text-base">Firebase</p>
              </li>
            </ul>
          </div>

          {/* UI/UX */}
          <div
            id="uiux"
            className={`skills-section bg-gray-100 rounded-lg shadow-md p-4 sm:p-6 transform transition-transform duration-700 ${
              visibleSections.uiux
                ? "translate-x-0 opacity-100"
                : "-translate-x-10 opacity-0"
            }`}
          >
            <h3 className="text-xl sm:text-2xl font-semibold text-gray-900 mb-4">
              <FaPaintBrush className="inline-block mr-2" />
              UI/UX
            </h3>
            <ul className="grid grid-cols-2 sm:grid-cols-3 gap-3 sm:gap-4">
              <li className="text-center">
                <img
                  src={figmaIcon}
                  alt="Figma"
                  className="w-14 h-10 sm:w-17 sm:h-12 mx-auto transform transition-transform duration-300 hover:scale-110"
                />
                <p className="text-sm sm:text-base">Figma</p>
              </li>
              <li className="text-center">
                <img
                  src={adobeXDIcon}
                  alt="XD"
                  className="w-14 h-10 sm:w-17 sm:h-12 mx-auto transform transition-transform duration-300 hover:scale-110"
                />
                <p className="text-sm sm:text-base">Adobe XD</p>
              </li>
              <li className="text-center">
                <FaPencil className="text-3xl sm:text-4xl mx-auto text-orange-500 transform transition-transform duration-300 hover:scale-110" />
                <p className="text-sm sm:text-base">Pencil Project</p>
              </li>
            </ul>
          </div>

          {/* Graphic Designing and Editing */}
          <div
            id="design"
            className={`skills-section bg-gray-100 rounded-lg shadow-md p-4 sm:p-6 transform transition-transform duration-700 ${
              visibleSections.design
                ? "translate-x-0 opacity-100"
                : "translate-x-10 opacity-0"
            }`}
          >
            <h3 className="text-xl sm:text-2xl font-semibold text-gray-900 mb-4">
              <FaTools className="inline-block mr-2" />
              Graphic Design & Editing
            </h3>
            <ul className="grid grid-cols-2 sm:grid-cols-3 gap-3 sm:gap-4">
              <li className="text-center">
                <img
                  src={photoshopIcon}
                  alt="photoshop"
                  className="w-10 h-10 sm:w-12 sm:h-12 mx-auto transform transition-transform duration-300 hover:scale-110"
                />
                <p className="text-sm sm:text-base">Adobe Photoshop</p>
              </li>
              <li className="text-center">
                <img
                  src={filmoraIcon}
                  alt="filmora"
                  className="w-10 h-10 sm:w-12 sm:h-12 mx-auto transform transition-transform duration-300 hover:scale-110"
                />
                <p className="text-sm sm:text-base">Filmora</p>
              </li>
              <li className="text-center">
                <img
                  src={picsartIcon}
                  alt="PicsArt"
                  className="w-16 h-10 sm:w-18 sm:h-12 mx-auto transform transition-transform duration-300 hover:scale-110"
                />
                <p className="text-sm sm:text-base">PicsArt</p>
              </li>
            </ul>
          </div>

          {/* MS Office */}
          <div
            id="msOffice"
            className={`skills-section bg-gray-100 rounded-lg shadow-md p-4 sm:p-6 transform transition-transform duration-700 ${
              visibleSections.msOffice
                ? "translate-x-0 opacity-100"
                : "-translate-x-10 opacity-0"
            }`}
          >
            <h3 className="text-xl sm:text-2xl font-semibold text-gray-900 mb-4">
              <FaMicrosoft className="inline-block mr-2" />
              MS Office
            </h3>
            <ul className="grid grid-cols-2 sm:grid-cols-3 gap-3 sm:gap-4">
              <li className="text-center">
                <img
                  src={wordIcon}
                  alt="Word"
                  className="w-10 h-6 sm:w-12 sm:h-8 my-2 mx-auto transform transition-transform duration-300 hover:scale-110"
                />
                <p className="text-sm sm:text-base">Word</p>
              </li>
              <li className="text-center">
                <img
                  src={excelIcon}
                  alt="Excel"
                  className="w-16 h-10 sm:w-18 sm:h-12 mx-auto transform transition-transform duration-300 hover:scale-110"
                />
                <p className="text-sm sm:text-base">Excel</p>
              </li>
              <li className="text-center">
                <img
                  src={powerpointIcon}
                  alt="Powerpoint"
                  className="w-14 h-9 sm:w-16 sm:h-11 my-0.5 mx-auto transform transition-transform duration-300 hover:scale-110"
                />
                <p className="text-sm sm:text-base">Powerpoint</p>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
