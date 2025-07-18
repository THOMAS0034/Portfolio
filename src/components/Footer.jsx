import React from "react";
import { FaInstagram, FaLinkedin, FaGithub } from "react-icons/fa";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="shadow-sm bg-black text-white">
      <hr className="my-6 border-gray-100 border-3 sm:mx-auto dark:border-violet-700 lg:my-8" />
      <div className="w-full max-w-screen-xl mx-auto p-4 md:py-8">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-6">
          {/* Left - Logo */}
          <span className="font-serif text-white self-center text-2xl font-semibold whitespace-nowrap">
            RYAN.
          </span>

          {/* Center - Social Icons */}
          <div className="flex justify-center gap-6 ml-25 text-xl">
            <a href="https://www.instagram.com/0.ryan0?igsh=NTEwb3FqaWNudXd1" className="hover:text-pink-400">
              <FaInstagram />
            </a>
            <a href="https://www.linkedin.com/in/thomas-ryan-e-e-435b83244/"  className="hover:text-blue-400">
              <FaLinkedin />
            </a>
            <a href="https://github.com/THOMAS0034"  className="hover:text-gray-300">
              <FaGithub />
            </a>
          </div>

          {/* Right - Navigation Links */}
          <ul className="flex flex-wrap justify-center items-center text-sm font-medium text-gray-400 gap-4">
            <li>
              <Link to={"/projects"}><p className="cursor-pointer hover:underline">Projects</p></Link>
            </li>
            <li>
              <Link to={"/form"}><p className="cursor-pointer hover:underline">Contact</p></Link>
            </li>
          </ul>
        </div>

        <hr className="my-6 border-gray-700 sm:mx-auto lg:my-8" />

        {/* Bottom text */}
        <p className="block text-sm text-center text-gray-400">
          © {new Date().getFullYear()} Developed by Thomas Ryan
        </p>
      </div>
    </footer>
  );
}

export default Footer;
