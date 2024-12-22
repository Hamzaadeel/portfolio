import { FaLinkedin, FaGithub, FaEnvelope } from 'react-icons/fa';

const SocialLinks = () => {
  return (
    <div className="absolute bottom-64 right-8 flex flex-col space-y-4 items-center animate-float">
      <a
        href="https://www.linkedin.com/in/hamza-adeel-254b5a220/"
        target="_blank"
        rel="noopener noreferrer"
        className="text-black hover:text-blue-600 text-3xl hover:scale-125 transition-transform duration-300"
      >
        <FaLinkedin />
      </a>
      <a
        href="mailto:mhamza2101@gmail.com"
        className="text-black hover:text-red-600 text-3xl hover:scale-125 transition-transform duration-300 "
      >
        <FaEnvelope />
      </a>
      <a
        href="https://github.com/Hamzaadeel"
        target="_blank"
        rel="noopener noreferrer"
        className="text-black hover:text-slate-700 text-3xl transition-transform duration-300 hover:scale-125"
      >
        <FaGithub />
      </a>
    </div>
  );
};

export default SocialLinks;