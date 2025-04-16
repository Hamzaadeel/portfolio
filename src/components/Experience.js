import React from "react";
import { useInView } from "../hooks/useInView";

const experiences = [
  {
    id: 1,
    title: "MERN Internship",
    company: "DPL",
    date: "February 2025 - Present ",
    description:
      "Learned MERN stack development to create a fully functional website.",
    technologies: [
      "React, Node, Tailwind CSS, Express, PostgreSQL, AWS, Redux",
    ],
  },
  {
    id: 2,
    title: "React Internship",
    company: "VizTech Solutions",
    date: "December 2024 - January 2025 ",
    description:
      "Learned react through various projects, including an E-learning platform and leads management system.",
    technologies: ["React, Firebase, Tailwind CSS, Cursor AI, Bolt.new"],
  },
  {
    id: 3,
    title: "Final Year Project",
    company: "Shifa Tameer-e-Millat University",
    date: "November 2023 - August 2024 ",
    description:
      "Developed a comprehensive web-based solution that streamlines the management of academic resources, enhancing efficiency, transparency, and collaboration within educational institutions.",
    technologies: ["HTML, CSS, JavaScript, PHP, MySQL"],
  },
  {
    id: 4,
    title: "AI Software Engineer Intern",
    company: "Shifa International Hospital",
    date: "August 2023 - October 2023",
    description:
      "Helped create a demo AI software to convert speech to text to help in summarizing operation procedures.",
    technologies: ["Python"],
  },
  {
    id: 5,
    title: "AI Semester Project",
    company: "Shifa Tameer-e-Millat University",
    date: "November 2023 - April 2024",
    description:
      "Created a project in which we can use various techniques like BFS, DFS, A* etc. to find the shortest path in a maze.",
    technologies: ["Python"],
  },
  {
    id: 6,
    title: "Web Developement Semester Project 1",
    company: "Shifa Tameer-e-Millat University",
    date: "March 2023 - July 2023",
    description: "Created a website for a pizza parlour using MERN stack.",
    technologies: ["MongoDB, Express, React, Node"],
  },
  {
    id: 7,
    title: "Web Development Semester Project 2",
    company: "Shifa Tameer-e-Millat University",
    date: "November 2020 - April 2021",
    description:
      "Created a frontend for an online barber website, to allow barber appointments during COVID.",
    technologies: ["HTML, CSS, JavaScript"],
  },
  {
    id: 8,
    title: "Freelance Video Editor",
    company: "Elements Learning",
    date: "October 2020 - January 2021",
    description:
      "Edited educational videos with transcripts for an online learning system.",
    technologies: ["Filmora"],
  },
];

const Experience = () => {
  return (
    <section id="experience" className="py-20 bg-slate-800 text-gray-800">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl text-center mb-6 text-gray-200 border-4 border-gray-400 shadow-md px-6 py-4 font-sans inline-block mx-auto">
          Journey of Growth
          <span className="text-lg text-gray-400 ml-2 italic">so far</span>
        </h2>
        <div className="relative">
          <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gray-300"></div>
          <div className="space-y-12">
            {experiences.map((experience, index) => (
              <TimelineItem
                key={experience.id}
                experience={experience}
                isLeft={index % 2 === 0}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

const TimelineItem = ({ experience, isLeft }) => {
  const { ref, isVisible } = useInView({ threshold: 0.2 }); // Ensure hook works

  return (
    <div
      ref={ref}
      className={`flex items-center w-full relative ${
        isLeft ? "justify-start" : "justify-end"
      }`}
    >
      {/* Dot */}
      <div
        className={`timeline-dot w-4 h-4 bg-blue-400 rounded-full absolute ${
          isLeft ? "left-1/2 -translate-x-full" : "left-1/2 translate-x-full"
        }`}
      ></div>
      {/* Content */}
      <div
        className={`timeline-content bg-gray-100 cursor-pointer mx-36 p-6 rounded-lg shadow-lg max-w-sm ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        } transition-all duration-700 ease-in-out ${
          isLeft ? "mr-auto" : "ml-auto"
        } transform transition-transform duration-300 hover:scale-110`}
      >
        <h3 className="text-xl font-bold">{experience.title}</h3>
        <p className="text-sm text-gray-500">{experience.company}</p>
        <p className="text-sm text-gray-400">{experience.date}</p>
        <p className="mt-2 text-gray-600">{experience.description}</p>
        <p className="mt-1 text-sm text-gray-500 italic font-bold">
          {experience.technologies}
        </p>
      </div>
    </div>
  );
};

export default Experience;
