import React, { useEffect, useState } from "react";
import { FaGraduationCap, FaMedal, FaLightbulb, FaHeart } from "react-icons/fa";

const About = () => {
  const [visibleSections, setVisibleSections] = useState({
    academic: false,
    sports: false,
    learner: false,
    passion: false,
  });

  useEffect(() => {
    const sections = document.querySelectorAll(".about-section");
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
      { threshold: 0.2 }
    );

    sections.forEach((section) => observer.observe(section));

    return () => {
      sections.forEach((section) => observer.unobserve(section));
    };
  }, []);

  return (
    <section id="about" className="py-14 bg-gray-200 text-gray-800">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl text-center mb-3 text-gray-900 border-4 border-gray-700 shadow-md px-6 py-4 font-sans inline-block mx-auto">
          My Evolution in Progress
        </h2>
        <p className="py-4 text-gray-900 font-light text-lg">
          A deep dive into my goals, achievements, and the passion that fuels my
          journey.
        </p>
        <div className="text-lg max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 py-4">
          {/* Academic Background */}
          <div
            id="academic"
            className={`about-section bg-gray-100 rounded-lg shadow-md p-6 transform transition-transform duration-700 hover:scale-105 ${
              visibleSections.academic
                ? "translate-x-0 opacity-100"
                : "-translate-x-10 opacity-0"
            }`}
          >
            <h3 className="text-2xl font-semibold text-gray-900 mb-4 flex items-center">
              <FaGraduationCap className="text-blue-500 mr-3" />
              Academic Background
            </h3>
            <p>
              I hold a degree in Bachelor of Science in Computer Science with a
              CGPA of <strong>3.48</strong>. My academic journey has been marked
              by hard work, dedication, and a consistent pursuit of excellence.
            </p>
          </div>

          {/* Lifelong Learner */}
          <div
            id="learner"
            className={`about-section bg-gray-100 rounded-lg shadow-md p-6 transform transition-transform duration-700 hover:scale-105 ${
              visibleSections.learner
                ? "translate-x-0 opacity-100"
                : "translate-x-10 opacity-0"
            }`}
          >
            <h3 className="text-2xl font-semibold text-gray-900 mb-4 flex items-center">
              <FaLightbulb className="text-yellow-500 mr-3" />
              Lifelong Learner
            </h3>
            <p>
              I am driven by an insatiable curiosity to learn new things,
              whether it’s mastering a new programming language or exploring the
              latest advancements in technology. I firmly believe that
              continuous learning is the key to growth.
            </p>
          </div>

          {/* Sports Achievements */}
          <div
            id="sports"
            className={`about-section bg-gray-100 rounded-lg shadow-md p-6 transform transition-transform duration-700 hover:scale-105 ${
              visibleSections.sports
                ? "translate-x-0 opacity-100"
                : "-translate-x-10 opacity-0"
            }`}
          >
            <h3 className="text-2xl font-semibold text-gray-900 mb-4 flex items-center">
              <FaMedal className="text-red-500 mr-3" />
              Sports Achievements
            </h3>
            <p>
              Beyond academics, I have excelled in sports, representing my
              institution in table tennis, football, and cricket tournaments
              over my four-year bachelor’s degree. Participating in these events
              has honed my teamwork, discipline, and leadership skills.
            </p>
          </div>

          {/* Passion for Excellence */}
          <div
            id="passion"
            className={`about-section bg-gray-100 rounded-lg shadow-md p-6 transform transition-transform duration-700 hover:scale-105 ${
              visibleSections.passion
                ? "translate-x-0 opacity-100"
                : "translate-x-10 opacity-0"
            }`}
          >
            <h3 className="text-2xl font-semibold text-gray-900 mb-4 flex items-center">
              <FaHeart className="text-pink-500 mr-3" />
              Passion for Excellence
            </h3>
            <p>
              I approach every task with passion and commitment. Whether it’s
              developing a complex system or collaborating with a team, I am
              motivated to deliver exceptional results and make a meaningful
              impact.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
