export default function Carousel() {
  return (
    <div className="flex flex-col items-center mt-10">
      <h2 className="text-2xl font-bold mb-4">Personal Projects</h2>
      <div className="carousel w-1/2">
        {" "}
        {/* 50% width */}
        <div id="slide1" className="carousel-item relative w-full">
          <a
            href="https://spell-table-plus.vercel.app/"
            target="_blank"
            rel="noopener noreferrer"
            className="block pointer-events-auto"
          >
            <img
              src="/assets/Spelltable.png"
              className="w-full cursor-pointer rounded-lg"
            />
          </a>
          <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
            <a href="#slide1" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide2" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
        <div id="slide2" className="carousel-item relative w-full">
          <a
            href="https://fp-school.vercel.app/"
            target="_blank"
            rel="noopener noreferrer"
            className="block pointer-events-auto"
          >
            <img
              src="/assets/FPS school.png"
              className="w-full cursor-pointer rounded-lg"
            />
          </a>
          <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
            <a href="#slide1" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide1" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

{
  /* <a href="#slide1" className="btn btn-circle">
❮
</a>
<a href="#slide3" className="btn btn-circle">
❯
</a> */
}
