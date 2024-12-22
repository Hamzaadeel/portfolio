import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { useInView } from "../hooks/useInView";
import { VscChevronRight, VscChevronLeft } from "react-icons/vsc";

const projects = [
  {
    title: "CLRMS - Course Learning Resource Management System",
    description: "CLRMS is a comprehensive web-based solution that streamlines the management of academic resources, enhancing efficiency, transparency, and collaboration within educational institutions.",
    images: [
      require("../assets/images/clrms-landing.png"),
      require("../assets/images/clrms-services.png"),
      require("../assets/images/clrms-courses.png"),
      require("../assets/images/clrms-folder.png"),
    ],
  },
  {
    title: "Gold Sage",
    description: "An AI powered gold price prediction website.",
    images: [
      require("../assets/images/gold-sage-landing.jpg"),
      require("../assets/images/gold-sage-about.jpg"),
      require("../assets/images/gold-sage-signin.jpg"),
      require("../assets/images/gold-sage-predict.jpg"),
      require("../assets/images/gold-sage-price.jpg"),
    ],
  },
];

export default function Highlights() {
  const { ref: contentRef, isVisible } = useInView({ threshold: 0.3 }); // Adjust threshold as needed
  const [currentProjectIndex, setCurrentProjectIndex] = useState(0);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const currentProject = projects[currentProjectIndex];

  // Automatically change the image every 5 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      if (currentProject.images.length > 0) {
        setCurrentImageIndex((prevIndex) =>
          prevIndex === currentProject.images.length - 1 ? 0 : prevIndex + 1
        );
      }
    }, 5000);

    return () => clearInterval(timer);
  }, [currentProject]);

  const handlePrevProject = () => {
    setCurrentProjectIndex((prevIndex) =>
      prevIndex === 0 ? projects.length - 1 : prevIndex - 1
    );
    setCurrentImageIndex(0);
  };

  const handleNextProject = () => {
    setCurrentProjectIndex((prevIndex) =>
      prevIndex === projects.length - 1 ? 0 : prevIndex + 1
    );
    setCurrentImageIndex(0);
  };

  const handleDotClick = (index) => {
    setCurrentImageIndex(index);
  };

  return (
    <div className="highlights-section py-12 bg-slate-800 text-center">
      {/* Always visible heading */}
      <h2 className="text-3xl text-center mb-6 text-gray-200 border-4 border-gray-400 shadow-md px-6 py-4 font-sans inline-block mx-auto">
        The Hustle Blueprint
      </h2>

      {/* Sliding content */}
      <motion.div
        ref={contentRef}
        initial={{ opacity: 0, y: 50 }}
        animate={isVisible ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="carousel-container relative max-w-4xl mx-auto"
      >
        <div className="project-carousel">
          <h3 className="text-xl font-semibold text-center mb-4 text-gray-300">
            {currentProject.title}
          </h3>
          <div className="aspect-video w-full rounded-md bg-slate-800 relative overflow-hidden">
            {currentProject.images.length > 0 ? (
              <img
                src={currentProject.images[currentImageIndex]}
                alt={`Image ${currentImageIndex + 1} of ${currentProject.title}`}
                className="w-auto h-auto object-cover rounded-md"
              />
            ) : (
              <p className="text-center text-gray-400">
                No images available for this project.
              </p>
            )}
            <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex gap-2">
              {currentProject.images.map((_, index) => (
                <button
                  key={index}
                  className={`w-2 h-2 rounded-full ${
                    index === currentImageIndex
                      ? "bg-blue-900"
                      : "bg-gray-300 hover:bg-gray-400"
                  }`}
                  onClick={() => handleDotClick(index)}
                ></button>
              ))}
            </div>
          </div>
          <p className="text-gray-400 text-center mt-4">
            {currentProject.description}
          </p>
        </div>
        <div className="project-controls mt-6 flex justify-center gap-4">
          <button
            onClick={handlePrevProject}
            className="px-4 py-2 bg-slate-800 rounded-md hover:bg-slate-800"
            aria-label="Previous Project"
          >
            <VscChevronLeft className="text-2xl hover:scale-150 text-gray-200" />
          </button>
          <button
            onClick={handleNextProject}
            className="px-4 py-2 bg-slate-800 rounded-md hover:bg-slate-800"
            aria-label="Next Project"
          >
            <VscChevronRight className="text-2xl hover:scale-150 text-gray-200" />
          </button>
        </div>
      </motion.div>
    </div>
  );
}
