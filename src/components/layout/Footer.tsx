import Link from 'next/link';
import { FaGithub } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className = "mt-16 border-t border-slate-400 p-6 text-center text-sm text-slate-400">
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
        <FaGithub size = {30} className = "inline-block mr-1" />
         GitHub
      </Link>
    </footer>
  );
}

export default Footer;