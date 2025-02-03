import {
  FaReact,
  FaJsSquare,
  FaNodeJs,
  FaHtml5,
  FaCss3Alt,
  FaDatabase,
  FaMicrosoft,
} from "react-icons/fa";
import { SiVitest, SiJest } from "react-icons/si";
import { IconDeviconPlainPostgresql } from "../Icon/IconDeviconPlainPostgresql";

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
  { name: "SQL", icon: <FaDatabase className="text-4xl text-white" /> },
  { name: "Azure", icon: <FaMicrosoft className="text-4xl text-[#3bc8f3]" /> },
];

const TechStack = () => {
  return (
    <div
      id="tech-stack"
      className="relative isolate flex flex-col items-center mt-10 py-24 sm:py-32 bg-[#2b284c]"
    >
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

      <h2 className="my-6 text-2xl tracking-tight font-semibold text-gray-300 sm:text-3xl md:text-5xl ">
        Tech Stack
      </h2>

      <dl className="mt-4 grid grid-cols-2 gap-8 sm:grid-cols-4 lg:grid-cols-4 xl:grid-cols-5">
        {techStack.map((tech) => (
          <div key={tech.name} className="flex flex-col items-center gap-5">
            <dd className="text-[100px] sm:text-[150px]">{tech.icon}</dd>

            <dt className="text-2xl sm:text-3xl text-base/7 text-gray-300">
              {tech.name}
            </dt>
          </div>
        ))}
      </dl>
    </div>
  );
};

export default TechStack;
