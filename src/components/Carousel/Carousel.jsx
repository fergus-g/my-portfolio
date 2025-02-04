import { useState } from "react";

const projects = [
  {
    id: "slide1",
    title: "Spell Table Plus - In Development",
    description:
      "Spell Table Plus is an online tool designed to enhance the player's experience while using SpellTable. This application is built with JavaScript, HTML, and CSS. The plan is to eventually add a back end using Node.js to allow users to save their decks. I also plan to migrate this to React in the future.",
    image: "/assets/Spelltable.png",
    link: "https://spell-table-plus.vercel.app/",
  },
  {
    id: "slide2",
    title: "FPS School - Complete",
    description:
      "This application represents the data accumulated by players in a fictitious first-person shooter game. Players can enter their names and favorite guns and play randomized games. These games then affect the K/D ratio and ultimately the average win rate. The front end is written in JavaScript, HTML, and CSS. The back end is also written in JavaScript, using Node.js and PostgreSQL. The back end is hosted separately from the front end. This application was built as part of a bootcamp to gain more familiarity with back-end development.",
    image: "/assets/FPS school.png",
    link: "https://fp-school.vercel.app/",
  },
];

export default function Carousel() {
  const [activeSlide, setActiveSlide] = useState(0);

  const handleNext = () => {
    setActiveSlide((prev) => (prev + 1) % projects.length);
  };

  const handlePrev = () => {
    setActiveSlide((prev) => (prev - 1 + projects.length) % projects.length);
  };

  return (
    <div
      id="projects"
      className="relative isolate flex flex-col items-center  py-24 sm:py-32 bg-white"
    >
      <h2 className="my-10 text-2xl tracking-tight font-semibold text-gray-900 sm:text-3xl md:text-5xl ">
        Personal Projects
      </h2>
      <div className="flex flex-col-reverse md:flex-row items-center justify-center w-full gap-10 max-w-[90%] md:max-w-[75%] mx-auto">
        {/* Left: Text Section with Matching Height */}
        <div className="w-full md:w-1/3 bg-[#f4f4f4] p-6 rounded-2xl shadow-lg flex flex-col justify-center h-auto max-h-[400px] overflow-y-auto">
          <h3 className="text-xl font-semibold text-gray-900 mb-2">
            {projects[activeSlide].title}
          </h3>
          <p className="text-gray-700">{projects[activeSlide].description}</p>
        </div>

        <div className="relative w-full md:w-2/3 h-full overflow-hidden">
          <div
            className="flex transition-all duration-700 ease-in-out"
            style={{
              transform: `translateX(-${activeSlide * 100}%)`,
            }}
          >
            {projects.map((project, index) => (
              <div key={project.id} className="w-full flex-shrink-0">
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block pointer-events-auto"
                >
                  <img
                    src={project.image}
                    className="w-full cursor-pointer rounded-2xl h-full object-cover"
                    alt={project.title}
                  />
                </a>
              </div>
            ))}
          </div>

          <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between pointer-events-none">
            {/* Buttons Wrapper - Mouse Events Enabled */}
            <div className="z-20 pointer-events-auto">
              <button onClick={handlePrev} className="btn btn-circle">
                ❮
              </button>
            </div>
            <div className="z-20 pointer-events-auto">
              <button onClick={handleNext} className="btn btn-circle">
                ❯
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
