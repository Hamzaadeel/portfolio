import React, { useState } from 'react';
import { FaChartBar, FaLaptopCode, FaLayerGroup, FaPalette, FaRobot } from 'react-icons/fa'; // Import relevant react-icons
import { useInView } from '../hooks/useInView';
import clrmsThumbnail from '../assets/images/clrms-landing.png';
import goldSage from '../assets/images/gold-sage-landing.jpg';
import barberImage from '../assets/images/barber-landing.png';
import mernPizza from '../assets/images/mern-pizza.png';
import plantImage from '../assets/images/plant-design.png';
import watchImage from '../assets/images/watch-design.png';
import googleImage from '../assets/images/google-prediction.png';
import mazeImage from '../assets/images/maze-solver.png';
import clrmsImage1 from '../assets/images/clrms-landing.png';
import clrmsImage2 from '../assets/images/clrms-services.png';
import clrmsImage3 from '../assets/images/clrms-folder.png';
import clrmsImage4 from '../assets/images/clrms-courses.png';
import clrmsImage5 from '../assets/images/clrms-login.png';
import clrmsImage6 from '../assets/images/clrms-result.png';
import goldSage1 from '../assets/images/gold-sage-about.jpg';
import goldSage2 from '../assets/images/gold-sage-predict.jpg';
import goldSage3 from '../assets/images/gold-sage-predict.jpg';
import goldSage4 from '../assets/images/gold-sage-signin.jpg';
import barberImage1 from '../assets/images/barber-about.png';
import barberImage2 from '../assets/images/barber-book.png';

const Projects = () => {
  const [activeTab, setActiveTab] = useState('All');
  const [selectedProject, setSelectedProject] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const projectsPerPage = 6;
  const { ref, isVisible } = useInView({ threshold: 0.3});

  const projects = [
    {
      id: 1,
      title: 'CLRMS',
      category: 'Web Development',
      description: 'A full-stack website for managing and maintaining course learning resources.',
      details: 
      'The Course Learning Resource Management System (CLRMS) is a comprehensive web-based software designed to streamline the management of learning resources within academic institutions. Offering a centralised platform, CLRMS facilitates efficient administration of course profiles, learner enrolment, and resource person allocation. Through its user-friendly interface, CLRMS empowers academic stakeholders with tools for course scheduling, prerequisite management, and data analysis, thereby enhancing the overall learning experience. In conclusion, the implementation of the CLRMS has led to significant improvements in managing academic resources. Our findings indicate that CLRMS not only streamlines administrative tasks but also promotes greater transparency and collaboration between faculty members and students. Additionally, the system’s capability to produce detailed reports and analytics supports informed decision-making, which in turn enhances both academic outcomes and overall institutional efficiency.',

      thumbnail: clrmsThumbnail,
      images: [clrmsImage1, clrmsImage2, clrmsImage3, clrmsImage4, clrmsImage5, clrmsImage6],
      technologies: ['HTML', 'CSS', 'Javascript', 'PHP', 'MySql', 'Bootstrap'],
    },
    {
      id: 2,
      title: 'GoldSage',
      category: 'Web Development',
      description: 'A front-end website for a gold price prediction website.',
      details:
        'This project uses a convolutional neural network to classify images into predefined categories. It achieves high accuracy on benchmark datasets.',
      thumbnail: goldSage,
      images: [goldSage, goldSage1, goldSage2, goldSage3, goldSage4],
      technologies: ['React JS', 'CSS'],
    },
    {
      id: 3,
      title: 'Ye Cheese - Pizza Delivery Website',
      category: 'Web Development',
      description: 'A front-end website in React JS for a local pizzeria.',
      details:
        'A creative and user-friendly portfolio design with a focus on showcasing projects and skills effectively.',
      thumbnail: mernPizza,
      images:[mernPizza],
      technologies: ['React JS', 'MongoDB', 'Node'],
    },
    {
      id: 4,
      title: 'The Online Barber',
      category: 'Web Development',
      description: 'A frontend application for an online barber appoinment booking website.',
      details:
        'This application fetches real-time weather data using the OpenWeatherMap API and displays forecasts for multiple cities.',
      thumbnail: barberImage,
      images: [barberImage, barberImage1, barberImage2],
      technologies: ['HTML', 'CSS', 'JavaScript'],
    },
    {
      id: 5,
      title: 'Hands and Plants',
      category: 'Design',
      description: 'Design for a website where customers can buy plants online.',
      details:
        'Processed and visualized datasets to uncover trends and actionable insights using Python libraries.',
      thumbnail: plantImage,
      images: [plantImage],
      technologies: ['AdobeXD'],
    },
    {
      id: 6,
      title: 'Relojes - The Online Watch Store',
      category: 'Design',
      description: 'Design for an online watch store',
      details:
        'Processed and visualized datasets to uncover trends and actionable insights using Python libraries.',
      thumbnail: watchImage,
      images: [watchImage],
      technologies: ['AdobeXD'],
    },
    {
      id: 7,
      title: 'Maze Solution Finder',
      category: 'AI/ML',
      description: 'Shortest path finder using algorithms like BFS, DFS, A*.',
      details:
        'Processed and visualized datasets to uncover trends and actionable insights using Python libraries.',
      thumbnail: mazeImage,
      images: [mazeImage],
      technologies: ['Python', 'Algorithms'],
    },
    {
      id: 8,
      title: 'Python Data Analysis',
      category: 'Data Analysis',
      description: 'Analyzed Google stock prices using Python libraries.',
      details:
        'Processed and visualized datasets to uncover trends and actionable insights using Python libraries.',
      thumbnail: googleImage,
      images: [googleImage],
      technologies: ['Python', 'Pandas', 'Numpy', 'Matplotlib', 'tensorflow', 'sklearn'],
    },
  ];

  const categories = [
    { name: 'All', icon: FaLayerGroup },
    { name: 'Web Development', icon: FaLaptopCode },
    { name: 'Design', icon: FaPalette },
    { name: 'AI/ML', icon: FaRobot },
    { name: 'Data Analysis', icon: FaChartBar },
  ];

  const filteredProjects =
    activeTab === 'All' ? projects : projects.filter((project) => project.category === activeTab);

  // Pagination logic
  const totalPages = Math.ceil(filteredProjects.length / projectsPerPage);
  const startIndex = (currentPage - 1) * projectsPerPage;
  const currentProjects = filteredProjects.slice(startIndex, startIndex + projectsPerPage);

  const [isModalOpen, setIsModalOpen] = useState(false); // State to manage modal visibility
  const [modalImage, setModalImage] = useState(null); // State to store the image for the modal

  const openModal = (image) => {
    setModalImage(image);
    setIsModalOpen(true);
  };
  
  const closeModal = () => {
    setIsModalOpen(false);
    setModalImage(null);
  };

  const handleNextPage = () => {
    if (currentPage < totalPages) setCurrentPage(currentPage + 1);
  };

  const handlePreviousPage = () => {
    if (currentPage > 1) setCurrentPage(currentPage - 1);
  };


  return (
    <section id="projects" className="py-20 bg-slate-300 text-gray-800">
    <div className="container mx-auto text-center">
      <h2 className="text-3xl text-center mb-6 text-gray-900 border-4 border-gray-700 shadow-md px-6 py-4 font-sans inline-block mx-auto">
        The Project Inventory
      </h2>
      <p className="text-lg max-w-2xl mx-auto mb-8">
        Projects I've worked on, including web development, design, and more.
      </p>

      {/* Tabs */}
      <div className="flex justify-center space-x-4 mb-12 animate-slide-in-left">
        {categories.map((category) => (
          <button
            key={category.name}
            onClick={() => {
              setActiveTab(category.name);
              setSelectedProject(null);
              setCurrentPage(1);
            }}
            className={`px-6 py-2 text-lg font-medium border rounded-lg transition-all duration-300 flex items-center ${
              activeTab === category.name
                ? "bg-gray-900 text-white"
                : "bg-white text-gray-800 hover:bg-gray-200"
            }`}
          >
            <category.icon className="mr-2" />
            {category.name}
          </button>
        ))}
      </div>

      {/* Conditional Rendering */}
      {selectedProject ? (
        <div className="bg-white rounded-lg shadow-md p-8 text-left">
          <button
            onClick={() => setSelectedProject(null)}
            className="my-2 bg-black text-white px-4 py-2 rounded-lg font-semibold hover:bg-gray-200 hover:text-black hover:scale-105 transition-all duration-300"
          >
            Back to Projects
          </button>

          <h3 className="text-2xl font-bold mb-2">{selectedProject.title}:</h3>
          <p className="text-sm text-gray-600 mb-4">
            {selectedProject.details}
          </p>

          <div className="text-sm text-gray-800 font-medium">
            Technologies:
            <ul className="list-disc list-inside text-gray-600 mt-1">
              {selectedProject.technologies.map((tech, index) => (
                <li key={index}>{tech}</li>
              ))}
            </ul>
          </div>

          {/* Image Gallery - Side-by-Side */}
          <h4 className="text-xl text-gray-600 font-bold mb-1 mt-2">
            Project preview:
          </h4>
          <div className="mt-6 grid grid-cols-3 gap-4">
            {selectedProject.images.map((image, index) => (
              <div key={index} className="image-container">
                <img
                  src={image}
                  alt={`${selectedProject.title} Image ${index + 1}`}
                  className="w-full h-56 object-cover rounded-lg border-2 transform transition-transform duration-300 hover:scale-105 cursor-pointer"
                  onClick={() => openModal(image)} // Open modal on click
                />
              </div>
            ))}
          </div>

          {/* Modal */}
          {isModalOpen && (
            <div
              className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50"
              onClick={closeModal} // Close modal when clicking on the overlay
            >
              <div
                className="bg-white rounded-lg overflow-hidden max-w-3xl w-full p-4 relative"
                onClick={(e) => e.stopPropagation()} // Prevent modal close on content click
              >
                <button
                  className="absolute text-2xl font-bold top-2 right-2 text-gray-500 hover:text-gray-700"
                  onClick={closeModal}
                >
                  &times;
                </button>
                <img
                  src={modalImage}
                  alt="Modal View"
                  className="w-full h-auto rounded-lg"
                />
              </div>
            </div>
          )}
        </div>
      ) : (
        <div>
          {/* Project Cards with InView Hook */}
          <div
            ref={ref} // Add ref here to track visibility
            className={`grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 transition-transform duration-500 ${
              isVisible ? 'opacity-100 translate-y-0 animate-slide-in-right' : 'opacity-0 translate-y-10'             
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
                  className="w-full h-48 object-cover"
                />
                <div className="p-4">
                  <h3 className="text-lg font-semibold mb-2">
                    {project.title}
                  </h3>
                  <div className="description text-gray-500 italic">
                    {project.description}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Pagination */}
          {totalPages > 1 && (
            <div className="flex justify-center mt-8 space-x-4">
              <button
                onClick={handlePreviousPage}
                disabled={currentPage === 1}
                className={`px-4 py-2 border-2 border-black rounded-lg ${
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
                className={`px-4 py-2 border rounded-lg ${
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
