import Link from 'next/link';
import { FaGithub, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className = "md:mt-5 border-t border-slate-400 p-6 text-center text-md text-slate-400">
      <p> © {new Date().getFullYear()} SerenityStrings. All Rights Reserved.</p>

      <p className="mt-2 mb-2">
      Built by Kevin Babakhani. 
      </p>

      <Link 
      href = "https://github.com/KevinLemon112" 
      className = "text-sm text-gray-600 hover:text-white"
      target="_blank" 
      rel="noopener noreferrer"
      >
        <FaGithub className = "md:size-9 size-7 inline-block mr-1" />
         GitHub
      </Link>

      <Link 
      href = "https://www.linkedin.com/in/kevin-babakhani/" 
      className = "text-sm text-gray-600 hover:text-white"
      target="_blank" 
      rel="noopener noreferrer"
      >
        <FaLinkedin className = "md:size-9 size-7 inline-block mr-1 ml-3" />
         LinkedIn
      </Link>
    </footer>
  );
}

export default Footer;