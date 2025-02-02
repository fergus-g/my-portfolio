import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa"; // Import burger and close icons
import { FaGithub, FaLinkedin } from "react-icons/fa"; // Import icons
import {
  FaReact,
  FaJsSquare,
  FaNodeJs,
  FaHtml5,
  FaCss3Alt,
} from "react-icons/fa";
import { SiVitest, SiJest } from "react-icons/si";
import { IconDeviconPlainPostgresql } from "../Icon/IconDeviconPlainPostgresql";

const links = [
  { name: "GitHub", href: "https://github.com/fergus-g" },
  { name: "LinkedIn", href: "https://www.linkedin.com/in/fergus-gildea/" },
];
const techStack = [
  { name: "React", icon: <FaReact className="text-4xl text-blue-500" /> },
  {
    name: "JavaScript",
    icon: <FaJsSquare className="text-4xl text-yellow-500" />,
  },
  { name: "Node.js", icon: <FaNodeJs className="text-4xl text-green-500" /> },
  { name: "HTML5", icon: <FaHtml5 className="text-4xl text-orange-500" /> },
  { name: "CSS3", icon: <FaCss3Alt className="text-4xl text-blue-500" /> },
  { name: "Vitest", icon: <SiVitest className="text-4xl text-green-500" /> },
  { name: "Jest", icon: <SiJest className="text-4xl text-red-500" /> },
  {
    name: "Postgresql",
    icon: <IconDeviconPlainPostgresql className="text-4xl text-white" />,
  },
];

export default function About() {
  const [isMenuOpen, setIsMenuOpen] = useState(false); // State to manage sidebar visibility

  // Toggle the menu (open/close)
  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <div className="relative isolate overflow-hidden bg-[#2b284c] py-24 sm:py-32 min-h-screen">
      {/* Background styling with clip-path */}
      <div
        aria-hidden="true"
        className="hidden sm:absolute sm:-top-10 sm:right-1/2 sm:-z-10 sm:mr-10 sm:block sm:transform-gpu sm:blur-3xl"
      >
        <div
          style={{
            clipPath:
              "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
          }}
          className="aspect-1097/845 w-[68.5625rem] bg-linear-to-tr from-[#ff4694] to-[#776fff] opacity-20"
        />
      </div>
      <div
        aria-hidden="true"
        className="absolute -top-52 left-1/2 -z-10 -translate-x-1/2 transform-gpu blur-3xl sm:top-[-28rem] sm:ml-16 sm:translate-x-0 sm:transform-gpu"
      >
        <div
          style={{
            clipPath:
              "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
          }}
          className="aspect-1097/845 w-[68.5625rem] bg-linear-to-tr from-[#ff4694] to-[#776fff] opacity-20"
        />
      </div>

      {/* Burger Menu Icon */}
      <button
        onClick={toggleMenu}
        className={`fixed cursor-pointer top-4 left-4 text-white text-3xl sm: ${
          isMenuOpen ? "hidden" : "block"
        }`}
      >
        <FaBars />
      </button>

      {/* Slide-out Menu */}
      <div
        className={`fixed top-0 left-0 w-64 h-full  bg-opacity-0 transition-transform duration-300 ease-in-out ${
          isMenuOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        {/* Close Button */}
        <button
          onClick={toggleMenu}
          className="absolute  cursor-pointer top-4 right-4 text-white text-3xl"
        >
          <FaTimes />
        </button>

        {/* Sidebar Content */}
        <div className="p-6">
          <h2 className="text-white text-2xl font-bold">Menu</h2>
          <ul className="mt-4 space-y-4">
            {/* About Me Section */}
            <li>
              <a
                href="#about"
                className="text-white hover:text-gray-400"
                onClick={() => setIsMenuOpen(false)} // Close menu when clicked
              >
                About Me
              </a>
            </li>
            {/* Tech Stack Section */}
            <li>
              <a
                href="#tech-stack"
                className="text-white hover:text-gray-400"
                onClick={() => setIsMenuOpen(false)} // Close menu when clicked
              >
                Tech Stack
              </a>
            </li>

            {/* Personal Projects Section */}
            <li>
              <a
                href="#projects"
                className="text-white hover:text-gray-400"
                onClick={() => setIsMenuOpen(false)} // Close menu when clicked
              >
                Personal Projects
              </a>
            </li>
            {/* Add the contact link */}
            <li>
              <a
                href="mailto:fergus.gildea@hotmail.com"
                className="text-white hover:text-gray-400"
                onClick={() => setIsMenuOpen(false)} // Close menu when clicked
              >
                Contact Me: fergus.gildea@hotmail.com
              </a>
            </li>

            {/* Social Links */}
            <li className="flex space-x-4">
              <a
                href={links[0].href}
                className="text-white hover:text-gray-400"
                onClick={() => setIsMenuOpen(false)} // Close menu when clicked
              >
                <FaGithub className="text-3xl" />
              </a>
              <a
                href={links[1].href}
                className="text-white hover:text-gray-400"
                onClick={() => setIsMenuOpen(false)} // Close menu when clicked
              >
                <FaLinkedin className="text-3xl" />
              </a>
            </li>
          </ul>
        </div>
      </div>

      {/* Main Content */}
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:mx-0">
          <h2 className="text-5xl font-semibold tracking-tight text-white sm:text-7xl">
            Fergus Gildea - Software Developer
          </h2>
          <p className="mt-8 text-lg font-medium text-pretty text-gray-300 sm:text-xl/8">
            Hi, I&apos;m Fergus. With nearly a decade in the tech industry
            working in project management, security and operations I am taking
            the next step and using software to solve problems.
          </p>
        </div>
        <div className="mx-auto mt-10 max-w-2xl lg:mx-0 lg:max-w-none">
          <div className="grid grid-cols-1 gap-x-8 gap-y-6 text-base/7 font-semibold text-white sm:grid-cols-2 md:flex lg:gap-x-10">
            {links.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="flex items-center gap-2"
              >
                {link.name}
                <span aria-hidden="true">
                  {link.name === "GitHub" ? (
                    <FaGithub className="text-2xl text-black-500" />
                  ) : (
                    <FaLinkedin className="text-2xl text-blue-500" />
                  )}
                </span>
              </a>
            ))}
          </div>
          <div id="tech-stack" className="flex flex-col pt-8">
            <p className="text-lg font-medium text-pretty text-gray-300 sm:text-xl/8">
              Tech Stack
            </p>
            <dl className="mt-4 grid grid-cols-2 gap-8 sm:grid-cols-4 lg:grid-cols-4">
              {techStack.map((tech) => (
                <div
                  key={tech.name}
                  className="flex flex-col items-center gap-1"
                >
                  <dd className="text-4xl">{tech.icon}</dd>
                  <dt className="text-base/7 text-gray-300">{tech.name}</dt>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </div>
    </div>
  );
}
