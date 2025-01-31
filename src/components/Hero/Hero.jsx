import {
  FaReact,
  FaNodeJs,
  FaHtml5,
  FaCss3Alt,
  FaJsSquare,
  FaGithub,
  FaLinkedin,
} from "react-icons/fa"; // Import icons from react-icons
import { SiJest, SiVitest } from "react-icons/si";
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
  return (
    <div className="relative isolate overflow-hidden bg-gray-900 py-24 sm:py-32">
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
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:mx-0">
          <h2 className="text-5xl font-semibold tracking-tight text-white sm:text-7xl">
            Fergus Gildea - Software Developer
          </h2>
          <p className="mt-8 text-lg font-medium text-pretty text-gray-300 sm:text-xl/8">
            Hi, I&apos;m Fergus. With nearly a decade in the tech industry
            working in project management, security and operations I am taking
            the next step and using software to solve problems
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
          <div className="flex flex-col pt-8">
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
