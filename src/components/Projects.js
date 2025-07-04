import React, { useState, useEffect } from "react";
import {
  FaChartBar,
  FaLaptopCode,
  FaLayerGroup,
  FaPalette,
  FaRobot,
  FaArrowLeft,
  FaArrowRight,
} from "react-icons/fa"; // Added arrow icons
import { useInView } from "../hooks/useInView";
import clrmsThumbnail from "../assets/images/clrms-landing.png";
import barberImage from "../assets/images/barber-landing.png";
import mernPizza from "../assets/images/mern-pizza.png";
import plantImage from "../assets/images/plant-design.png";
import watchImage from "../assets/images/watch-design.png";
import googleImage from "../assets/images/google-prediction.png";
import mazeImage from "../assets/images/maze-solver.png";
import clrmsImage1 from "../assets/images/clrms-landing.png";
import clrmsImage2 from "../assets/images/clrms-services.png";
import clrmsImage3 from "../assets/images/clrms-folder.png";
import clrmsImage4 from "../assets/images/clrms-courses.png";
import clrmsImage5 from "../assets/images/clrms-login.png";
import clrmsImage6 from "../assets/images/clrms-result.png";
import barberImage1 from "../assets/images/barber-about.png";
import barberImage2 from "../assets/images/barber-book.png";
import eLearning from "../assets/images/E-learning-landing.png";
import eLearning1 from "../assets/images/E-Learning-Courses.png";
import eLearning2 from "../assets/images/E-learning-content.png";
import leads from "../assets/images/leads-login.png";
import leads1 from "../assets/images/leads-landing.png";
import leads2 from "../assets/images/leads-filter.png";
import polarbearThumbnail from "../assets/images/polarbear-moderator.png";
import polarbear1 from "../assets/images/polarbear-employee.png";
import polarbear2 from "../assets/images/polarbear-sidebar.png";
import devQuestLanding from "../assets/images/devquest-landing.png";
import devQuestAbout1 from "../assets/images/devquest-about1.png";
import devQuestAbout2 from "../assets/images/devquest-about2.png";
import devQuestAbout3 from "../assets/images/devquest-about3.png";
import devQuestContact from "../assets/images/devquest-contact.png";
import devQuestTopics from "../assets/images/devquest-topics.png";
import devQuestFlashcards from "../assets/images/devquest-flashcards.png";
import devQuestCheatsheet1 from "../assets/images/devquest-cheatsheet1.png";
import devQuestCheatsheets from "../assets/images/devquest-cheatsheets.png";
import devQuestServices from "../assets/images/devquest-services.png";
import devQuestRoadmap from "../assets/images/devquest-roadmap.png";
import devQuestFaq from "../assets/images/devquest-faq.png";
import bakeryLanding from "../assets/images/Bakery-landing.png";
import bakeryAbout from "../assets/images/bakery-about.png";
import bakeryMenu from "../assets/images/bakery-menu.png";
import bakeryOrder from "../assets/images/bakery-cart.png";
const Projects = () => {
  const [activeTab, setActiveTab] = useState("All");
  const [selectedProject, setSelectedProject] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const projectsPerPage = 6;
  const { ref, isVisible } = useInView({ threshold: 0.3 });

  // Add useEffect for keyboard navigation and scroll prevention
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (!isModalOpen) return;

      if (e.key === "ArrowRight") {
        setCurrentImageIndex((prev) =>
          prev < selectedProject.images.length - 1 ? prev + 1 : prev
        );
      } else if (e.key === "ArrowLeft") {
        setCurrentImageIndex((prev) => (prev > 0 ? prev - 1 : prev));
      } else if (e.key === "Escape") {
        closeModal();
      }
    };

    const preventScroll = (e) => {
      if (isModalOpen) {
        e.preventDefault();
      }
    };

    if (isModalOpen) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
      window.addEventListener("wheel", preventScroll, { passive: false });
      window.addEventListener("touchmove", preventScroll, { passive: false });
    }

    return () => {
      document.body.style.overflow = "unset";
      window.removeEventListener("keydown", handleKeyDown);
      window.removeEventListener("wheel", preventScroll);
      window.removeEventListener("touchmove", preventScroll);
    };
  }, [isModalOpen, selectedProject, currentImageIndex]);

  const projects = [
    {
      id: 1,
      title: "DevQuest",
      category: "Web Development",
      description:
        "A Next JS website designed to help with web development interview preparation.",
      details:
        "DevQuest is a frontend-only web application built with Next.js, Tailwind CSS, and TypeScript, designed to help users prepare for web development interviews. It provides curated, static content including flashcards, cheat sheets, multiple-choice questions (MCQs), and coding examples covering topics like HTML, CSS, JavaScript, and full-stack technologies such as MERN and PERN. With no user authentication or backend, DevQuest offers a fast, accessible, and beginner-friendly resource for interview preparation.",
      thumbnail: devQuestLanding,
      images: [
        devQuestLanding,
        devQuestAbout1,
        devQuestAbout2,
        devQuestAbout3,
        devQuestContact,
        devQuestTopics,
        devQuestFlashcards,
        devQuestCheatsheet1,
        devQuestCheatsheets,
        devQuestRoadmap,
        devQuestServices,
        devQuestFaq,
      ],
      technologies: ["Next JS", "Tailwind CSS", "Typescript", "Framer-Motion"],
    },
    {
      id: 2,
      title: "PolarBear",
      category: "Web Development",
      description:
        "This application allows organizations to create challenges and engage employees in a gamified system.",
      details:
        "The PolarBear project is a gamified platform designed to engage employees through organizational challenges. It allows organizations to register, manage employees, and create circles where moderators assign challenges to participants. Employees earn points by completing challenges, with progress tracked on a leaderboard. The application features role-based authentication, with moderators overseeing circles and challenges, while employees participate and submit completions. Built with a modern tech stack—Express.js, React, PostgreSQL, and AWS—the platform ensures scalability and secure file storage, deployed on AWS EC2 and S3 with CloudFront for efficient delivery.",

      thumbnail: polarbearThumbnail,
      images: [polarbearThumbnail, polarbear2, polarbear1],
      technologies: [
        "React TS",
        "Tailwind CSS",
        "PostgreSQL",
        "Express",
        "Node",
        "Redux",
        "AWS S3",
      ],
    },
    {
      id: 3,
      title: "Burrow Bakes",
      category: "Web Development",
      description:
        "Burrow Bakes is a cozy bakery website built with Next.js and Tailwind CSS, where customers can browse the menu and place orders with ease.",
      details:
        "Burrow Bakes is a modern, user-friendly bakery website built with Next.js and Tailwind CSS. Customers can easily browse the menu, view product details, and place orders online, all while enjoying a smooth, responsive experience on any device. The clean, minimal design ensures a seamless shopping experience, making it easier to satisfy those sweet cravings.",
      thumbnail: bakeryLanding,
      images: [bakeryLanding, bakeryAbout, bakeryMenu, bakeryOrder],
      technologies: ["Next JS", "Tailwind CSS", "Typescript", "Framer-Motion"],
    },
    {
      id: 4,
      title: "CLRMS",
      category: "Web Development",
      description:
        "A full-stack website for managing and maintaining course learning resources.",
      details:
        "The Course Learning Resource Management System (CLRMS) is a comprehensive web-based software designed to streamline the management of learning resources within academic institutions. Offering a centralised platform, CLRMS facilitates efficient administration of course profiles, learner enrolment, and resource person allocation. Through its user-friendly interface, CLRMS empowers academic stakeholders with tools for course scheduling, prerequisite management, and data analysis, thereby enhancing the overall learning experience. In conclusion, the implementation of the CLRMS has led to significant improvements in managing academic resources. Our findings indicate that CLRMS not only streamlines administrative tasks but also promotes greater transparency and collaboration between faculty members and students. Additionally, the system's capability to produce detailed reports and analytics supports informed decision-making, which in turn enhances both academic outcomes and overall institutional efficiency.",

      thumbnail: clrmsThumbnail,
      images: [
        clrmsImage1,
        clrmsImage2,
        clrmsImage3,
        clrmsImage4,
        clrmsImage5,
        clrmsImage6,
      ],
      technologies: ["HTML", "CSS", "Javascript", "PHP", "MySql", "Bootstrap"],
    },
    {
      id: 5,
      title: "E-Learning Platform",
      category: "Web Development",
      description: "An e-learning platform like Udemy and Coursera.",
      details:
        "An interactive e-learning platform offering engaging courses and real-time progress tracking. Learn anytime, anywhere with expert-led content and personalized recommendations.",
      thumbnail: eLearning,
      images: [eLearning, eLearning1, eLearning2],
      technologies: ["React TS", "Tailwind CSS", "Firebase"],
    },
    {
      id: 6,
      title: "Leads Maestro",
      category: "Web Development",
      description:
        "A simple leads management system with custom filters and fields.",
      details:
        "A powerful leads management system with custom filters for easy organization and tracking. Upload CSV files, sort data effortlessly, and streamline your sales process.",
      thumbnail: leads,
      images: [leads, leads1, leads2],
      technologies: ["React TS", "Tailwind CSS", "Firebase"],
    },
    {
      id: 7,
      title: "Ye Cheese - Pizza Delivery Website",
      category: "Web Development",
      description: "A website in MERN for a local pizzeria.",
      details:
        "A local pizza ordering website built with the MERN stack, offering a seamless and responsive user experience.",
      thumbnail: mernPizza,
      images: [mernPizza],
      technologies: ["React JS", "MongoDB", "Node"],
    },
    {
      id: 8,
      title: "The Online Barber",
      category: "Web Development",
      description:
        "A frontend application for an online barber appointment booking website.",
      details:
        "A frontend application for an online barber appointment booking website, built using HTML, CSS, and JavaScript. It features a clean and responsive design where users can browse services, select barbers, and schedule appointments with ease.",
      thumbnail: barberImage,
      images: [barberImage, barberImage1, barberImage2],
      technologies: ["HTML", "CSS", "JavaScript"],
    },
    {
      id: 9,
      title: "Hands and Plants",
      category: "Design",
      description:
        "Design for a website where customers can buy plants online.",
      details:
        "A website design for an online plant store created using Adobe XD. The layout features a modern, nature-inspired aesthetic with intuitive navigation, allowing users to browse plant categories, view detailed product pages, and add items to their cart. The design emphasizes user experience with clean visuals and a calming color palette.",
      thumbnail: plantImage,
      images: [plantImage],
      technologies: ["AdobeXD"],
    },
    {
      id: 10,
      title: "Relojes - The Online Watch Store",
      category: "Design",
      description: "Design for an online watch store",
      details:
        "A sleek and modern Adobe XD design for an online watch store. The interface showcases premium timepieces with high-quality visuals, organized categories, and an elegant layout. It focuses on a luxurious shopping experience with easy navigation, product highlights, and a stylish, minimalist aesthetic.",
      thumbnail: watchImage,
      images: [watchImage],
      technologies: ["AdobeXD"],
    },
    {
      id: 11,
      title: "Maze Solution Finder",
      category: "AI/ML",
      description: "Shortest path finder using algorithms like BFS, DFS, A*.",
      details:
        "A Python-based maze solver that finds the shortest path using algorithms like BFS, DFS, and A*. The program visualizes the search process and efficiently navigates through complex mazes to reach the goal.",
      thumbnail: mazeImage,
      images: [mazeImage],
      technologies: ["Python", "Algorithms"],
    },
    {
      id: 12,
      title: "Python Data Analysis",
      category: "Data Analysis",
      description: "Analyzed Google stock prices using Python libraries.",
      details:
        "Processed and visualized datasets to uncover trends and actionable insights using Python libraries.",
      thumbnail: googleImage,
      images: [googleImage],
      technologies: [
        "Python",
        "Pandas",
        "Numpy",
        "Matplotlib",
        "tensorflow",
        "sklearn",
      ],
    },
  ];

  const categories = [
    { name: "All", icon: FaLayerGroup },
    { name: "Web Development", icon: FaLaptopCode },
    { name: "Design", icon: FaPalette },
    { name: "AI/ML", icon: FaRobot },
    { name: "Data Analysis", icon: FaChartBar },
  ];

  const filteredProjects =
    activeTab === "All"
      ? projects
      : projects.filter((project) => project.category === activeTab);

  // Pagination logic
  const totalPages = Math.ceil(filteredProjects.length / projectsPerPage);
  const startIndex = (currentPage - 1) * projectsPerPage;
  const currentProjects = filteredProjects.slice(
    startIndex,
    startIndex + projectsPerPage
  );

  const openModal = (imageIndex) => {
    setCurrentImageIndex(imageIndex);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setCurrentImageIndex(0);
  };

  const navigateImage = (direction) => {
    if (
      direction === "next" &&
      currentImageIndex < selectedProject.images.length - 1
    ) {
      setCurrentImageIndex((prev) => prev + 1);
    } else if (direction === "prev" && currentImageIndex > 0) {
      setCurrentImageIndex((prev) => prev - 1);
    }
  };

  const handleNextPage = () => {
    if (currentPage < totalPages) setCurrentPage(currentPage + 1);
  };

  const handlePreviousPage = () => {
    if (currentPage > 1) setCurrentPage(currentPage - 1);
  };

  return (
    <section id="projects" className="py-20 bg-slate-300 text-gray-800 px-4">
      <div className="container mx-auto text-center">
        <h2 className="text-2xl sm:text-3xl text-center mb-6 text-gray-900 border-4 border-gray-700 shadow-md px-4 sm:px-6 py-4 font-sans inline-block mx-auto">
          The Project Inventory
        </h2>
        <p className="text-base sm:text-lg max-w-2xl mx-auto mb-8 px-4">
          Projects I've worked on, including web development, design, and more.
        </p>

        {/* Tabs */}
        <div className="flex flex-wrap justify-center space-x-0 space-y-4 md:space-y-0 md:space-x-4 mb-12 animate-slide-in-left px-4">
          {categories.map((category) => (
            <button
              key={category.name}
              onClick={() => {
                setActiveTab(category.name);
                setSelectedProject(null);
                setCurrentPage(1);
              }}
              className={`px-3 sm:px-4 py-2 text-xs sm:text-sm md:text-base font-medium border rounded-lg transition-all duration-300 flex items-center ${
                activeTab === category.name
                  ? "bg-gray-900 text-white"
                  : "bg-white text-gray-800 hover:bg-gray-200"
              }`}
            >
              <category.icon className="flex mr-2" />
              {category.name}
            </button>
          ))}
        </div>

        {/* Conditional Rendering */}
        {selectedProject ? (
          <div className="bg-white rounded-lg shadow-md p-4 sm:p-8 text-left mx-4">
            <button
              onClick={() => setSelectedProject(null)}
              className="my-2 bg-black text-white px-3 sm:px-4 py-2 rounded-lg text-sm sm:text-base font-semibold hover:bg-gray-200 hover:text-black hover:scale-105 transition-all duration-300"
            >
              Back to Projects
            </button>

            <h3 className="text-xl sm:text-2xl font-bold mb-2">
              {selectedProject.title}:
            </h3>
            <p className="text-xs sm:text-sm text-gray-600 mb-4">
              {selectedProject.details}
            </p>

            <div className="text-xs sm:text-sm text-gray-800 font-medium">
              Technologies:
              <ul className="list-disc list-inside text-gray-600 mt-1">
                {selectedProject.technologies.map((tech, index) => (
                  <li key={index}>{tech}</li>
                ))}
              </ul>
            </div>

            {/* Image Gallery - Responsive Grid */}
            <h4 className="text-lg sm:text-xl text-gray-600 font-bold mb-1 mt-2">
              Project preview:
            </h4>
            <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4">
              {selectedProject.images.map((image, index) => (
                <div key={index} className="image-container">
                  <img
                    src={image}
                    alt={`${selectedProject.title} Image ${index + 1}`}
                    className="w-full h-40 sm:h-56 object-cover rounded-lg border-2 transform transition-transform duration-300 hover:scale-105 cursor-pointer"
                    onClick={() => openModal(index)}
                  />
                </div>
              ))}
            </div>

            {/* Modal */}
            {isModalOpen && (
              <div
                className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-80 z-50 p-4"
                onClick={closeModal}
              >
                <div
                  className="relative max-w-4xl w-full mx-4"
                  onClick={(e) => e.stopPropagation()}
                >
                  <button
                    className="absolute top-2 sm:top-4 right-2 sm:right-4 text-white text-xl sm:text-2xl font-bold hover:text-gray-300 z-50"
                    onClick={closeModal}
                  >
                    &times;
                  </button>

                  {/* Navigation Arrows */}
                  {currentImageIndex > 0 && (
                    <button
                      className="absolute left-2 sm:left-4 top-1/2 transform -translate-y-1/2 text-white text-2xl sm:text-3xl hover:text-gray-300 z-50"
                      onClick={() => navigateImage("prev")}
                    >
                      <FaArrowLeft />
                    </button>
                  )}
                  {currentImageIndex < selectedProject.images.length - 1 && (
                    <button
                      className="absolute right-2 sm:right-4 top-1/2 transform -translate-y-1/2 text-white text-2xl sm:text-3xl hover:text-gray-300 z-50"
                      onClick={() => navigateImage("next")}
                    >
                      <FaArrowRight />
                    </button>
                  )}

                  <img
                    src={selectedProject.images[currentImageIndex]}
                    alt={`${selectedProject.title} Modal View`}
                    className="w-full h-auto max-h-[80vh] sm:max-h-[90vh] object-contain rounded-lg"
                  />

                  {/* Image counter */}
                  <div className="absolute bottom-2 sm:bottom-4 left-1/2 transform -translate-x-1/2 text-white text-sm sm:text-base">
                    {currentImageIndex + 1} / {selectedProject.images.length}
                  </div>
                </div>
              </div>
            )}
          </div>
        ) : (
          <div>
            {/* Project Cards with InView Hook */}
            <div
              ref={ref} // Add ref here to track visibility
              className={`grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8 transition-transform duration-500 px-4 ${
                isVisible
                  ? "opacity-100 translate-y-0 animate-slide-in-right"
                  : "opacity-0 translate-y-10"
              }`}
            >
              {currentProjects.map((project) => (
                <div
                  key={project.id}
                  className="bg-white rounded-lg shadow-md overflow-hidden transform transition-transform hover:scale-105 cursor-pointer"
                  onClick={() => setSelectedProject(project)}
                >
                  <img
                    src={project.thumbnail}
                    alt={project.title}
                    className="w-full h-40 sm:h-48 object-cover"
                  />
                  <div className="p-3 sm:p-4">
                    <h3 className="text-base sm:text-lg font-semibold mb-2">
                      {project.title}
                    </h3>
                    <div className="description text-gray-500 italic text-sm sm:text-base">
                      {project.description}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Pagination */}
            {totalPages > 1 && (
              <div className="flex justify-center mt-8 space-x-4 px-4">
                <button
                  onClick={handlePreviousPage}
                  disabled={currentPage === 1}
                  className={`px-3 sm:px-4 py-2 border-2 border-black rounded-lg text-sm sm:text-base ${
                    currentPage === 1
                      ? "bg-gray-300"
                      : "bg-gray-900 text-white border-2 border-black hover:bg-white hover:text-black"
                  }`}
                >
                  Previous
                </button>
                <button
                  onClick={handleNextPage}
                  disabled={currentPage === totalPages}
                  className={`px-3 sm:px-4 py-2 border rounded-lg text-sm sm:text-base ${
                    currentPage === totalPages
                      ? "bg-gray-300"
                      : "bg-gray-900 text-white border-2 border-black hover:bg-white hover:text-black"
                  }`}
                >
                  Next
                </button>
              </div>
            )}
          </div>
        )}
      </div>
    </section>
  );
};

export default Projects;
