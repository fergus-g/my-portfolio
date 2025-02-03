import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { FaGithub, FaLinkedin } from "react-icons/fa";

const links = [
  { name: "GitHub", href: "https://github.com/fergus-g" },
  { name: "LinkedIn", href: "https://www.linkedin.com/in/fergus-gildea/" },
];

export default function About() {
  // const [isMenuOpen, setIsMenuOpen] = useState(false);

  // const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <div className="relative isolate overflow-hidden bg-[#2b284c] py-24 sm:py-32">
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
      {/* <button
        onClick={toggleMenu}
        className={`fixed cursor-pointer top-4 left-4 text-white text-3xl sm: ${
          isMenuOpen ? "hidden" : "block"
        }`}
      >
        <FaBars />
      </button> */}
      {/* Slide-out Menu */}

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
        </div>
      </div>
    </div>
  );
}
