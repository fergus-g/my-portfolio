export default function About() {
  return (
    <div id="about" className="relative bg-white overflow-hidden mt-16">
      <div className="max-w-7xl mx-auto">
        <div className="relative z-10 pb-8 bg-white sm:pb-16 md:pb-20 lg:max-w-2xl lg:w-full lg:pb-28 xl:pb-32">
          <svg
            className="hidden lg:block absolute right-0 inset-y-0 h-full w-48 text-white transform translate-x-1/2"
            fill="currentColor"
            viewBox="0 0 100 100"
            preserveAspectRatio="none"
            aria-hidden="true"
          >
            <polygon points="50,0 100,0 50,100 0,100"></polygon>
          </svg>

          <div className="pt-1"></div>

          <main className="mt-10 mx-auto max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28">
            <div className="sm:text-center lg:text-left">
              <h2 className="my-6 text-2xl tracking-tight font-semibold text-gray-900 sm:text-3xl md:text-5xl ">
                About me
              </h2>

              <p className="text-lg font-medium text-gray-800 mr-6">
                I’ve always been fascinated with technology, from building PCs,
                playing video games to exploring how software is created. This
                curiosity led me to the tech industry, where I started my career
                as a Project Manager. <br />
                <br /> As I started my career, I was still eager to learn
                development, particularly JavaScript, but my role and company
                size limited those opportunities. <br />
                <br /> Over the years I was determined to pursue this passion, I
                spent my evenings learning through Udemy courses and YouTube
                tutorials, despite the demands of my latest Operations Manager
                role. Eventually, I was able to transition into a full-time
                Software Developer position, where I began coding in React—a
                dream come true. <br />
                <br /> Now that I’m a developer, I’m excited to continue
                learning and growing, expanding my skills, and contributing to
                impactful projects.
              </p>
            </div>
          </main>
        </div>
      </div>

      {/* Added a margin-top to the image section to provide space from text */}
      <div className="lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2 mt-8">
        <img
          className="h-56 w-full object-cover object-top sm:h-72 md:h-96 lg:w-full lg:h-full"
          src="../../../public/assets/Fergus.png"
          alt="Fergus Gildea"
        />
      </div>
    </div>
  );
}
