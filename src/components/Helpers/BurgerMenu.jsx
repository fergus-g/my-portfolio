import { useState, useEffect } from "react";
import { FaBars, FaTimes } from "react-icons/fa"; // Import burger and close icons
import { FaGithub, FaLinkedin } from "react-icons/fa"; // Import icons

const links = [
  { name: "GitHub", href: "https://github.com/fergus-g" },
  { name: "LinkedIn", href: "https://www.linkedin.com/in/fergus-gildea/" },
];

export default function BurgerMenu() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrollPosition, setScrollPosition] = useState(0);

  // Track scroll position to change burger icon color
  useEffect(() => {
    const handleScroll = () => {
      setScrollPosition(window.scrollY); // Update scroll position
    };

    window.addEventListener("scroll", handleScroll);

    // Cleanup on unmount
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  // Determine icon color based on scroll position
  const iconColor =
    (scrollPosition >= 0 && scrollPosition <= 500) ||
    (scrollPosition >= 1500 && scrollPosition <= 2000)
      ? "text-gray-300"
      : "text-gray-800";

  const backgroundColor =
    (scrollPosition >= 0 && scrollPosition <= 300) ||
    (scrollPosition >= 1500 && scrollPosition <= 2000)
      ? "bg-opacity-0"
      : "bg-[#2b284c] bg-opacity-90";

  return (
    <>
      {/* Burger Menu Icon */}
      <button
        onClick={toggleMenu}
        className={`fixed top-6 left-6 z-50 text-3xl sm:${
          isMenuOpen ? "hidden" : "block"
        } ${iconColor} `}
      >
        <FaBars />
      </button>

      {/* Slide-out Menu */}
      <div
        className={`fixed top-0 left-0 w-64 h-full ${backgroundColor} transition-all duration-300 ease-in-out transform ${
          isMenuOpen ? "translate-x-0" : "-translate-x-full"
        }`}
        style={{
          zIndex: 9998, // Ensure it's above the content
        }}
      >
        {/* Close Button */}
        <button
          onClick={toggleMenu}
          className="absolute top-4 right-4 text-gray-400 text-3xl"
        >
          <FaTimes />
        </button>

        {/* Sidebar Content */}
        <div className="p-6">
          <h2 className="text-white text-2xl font-bold">Menu</h2>
          <ul className="mt-4 space-y-4">
            <li>
              <a
                href="#about"
                className="text-white hover:text-gray-400"
                onClick={() => setIsMenuOpen(false)} // Close menu when clicked
              >
                About Me
              </a>
            </li>
            <li>
              <a
                href="#tech-stack"
                className="text-white hover:text-gray-400"
                onClick={() => setIsMenuOpen(false)}
              >
                Tech Stack
              </a>
            </li>
            <li>
              <a
                href="#projects"
                className="text-white hover:text-gray-400"
                onClick={() => setIsMenuOpen(false)}
              >
                Personal Projects
              </a>
            </li>
            <li>
              <a
                href="mailto:fergus.gildea@hotmail.com"
                className="text-white hover:text-gray-400"
                onClick={() => setIsMenuOpen(false)}
              >
                Contact Me: fergus.gildea@hotmail.com
              </a>
            </li>

            {/* Social Links */}
            <li className="flex space-x-4">
              <a
                href={links[0].href}
                className="text-white hover:text-gray-400"
                onClick={() => setIsMenuOpen(false)}
              >
                <FaGithub className="text-3xl" />
              </a>
              <a
                href={links[1].href}
                className="text-white hover:text-gray-400"
                onClick={() => setIsMenuOpen(false)}
              >
                <FaLinkedin className="text-3xl" />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}
