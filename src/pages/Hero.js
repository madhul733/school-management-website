import React, { useState, useEffect } from "react";

import img1 from "../assets/Cambridge International School exterior view.png";
import img3 from "../assets/PHOTO-2026-03-08-00-04-57.jpg";
import img4 from "../assets/PHOTO-2026-03-17-08-34-28.jpg";
import img5 from "../assets/PHOTO-2026-03-10-09-50-11.jpg";
import img6 from "../assets/PHOTO-2026-03-08-00-04-58.jpg";

const slides = [
  { image: img1, desc: "Inspiring young minds to discover their true potential." },
  { image: img3, desc: "Nurturing excellence through knowledge and values." },
  { image: img4, desc: "Empowering students to lead with confidence." },
  { image: img5, desc: "Building a foundation for lifelong success." },
  { image: img6, desc: "Creating future leaders with vision and integrity." },
];

const Hero = () => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 4500);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative w-full h-[75vh] sm:h-[85vh] lg:h-[92vh] overflow-hidden">

      {/* SLIDER */}
      <div
        className="absolute inset-0 flex transition-transform duration-[1400ms] ease-in-out"
        style={{
          transform: `translateX(-${current * 100}%)`,
        }}
      >
        {slides.map((slide, index) => (
          <div key={index} className="min-w-full h-full overflow-hidden">
            <img
              src={slide.image}
              alt=""
              className="w-full h-full object-cover object-center scale-105 transition-transform duration-[6000ms]"
            />
          </div>
        ))}
      </div>

      {/* GRADIENT */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#071c2f]/90 via-[#000000]/60 to-transparent"></div>
      <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent"></div>

      {/* CONTENT */}
      <div className="relative z-10 max-w-7xl mx-auto h-full flex items-center px-4 sm:px-6">

        <div className="max-w-xs sm:max-w-lg lg:max-w-xl text-white">

          {/* SMALL TAG */}
          <p
            key={"tag-" + current}
            className="text-yellow-400 uppercase tracking-[3px] text-xs sm:text-sm mb-2 opacity-0 animate-fadeUp"
          >
            Excellence in Education
          </p>

          {/* HEADING */}
          <h1
            key={"title-" + current}
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight drop-shadow-lg opacity-0 animate-fadeUp delay-100"
          >
            Cambridge International School
          </h1>

          {/* UNDERLINE */}
          <div
            key={"line-" + current}
            className="w-16 sm:w-20 h-[3px] bg-yellow-400 mt-3 sm:mt-4 mb-4 opacity-0 animate-lineGrow delay-200"
          ></div>

          {/* TEXT */}
          <p
            key={current}
            className="text-sm sm:text-base lg:text-lg text-gray-200 drop-shadow-md opacity-0 animate-fadeUp delay-300"
          >
            {slides[current].desc}
          </p>

        </div>

      </div>

      {/* DOTS */}
      <div className="absolute bottom-4 sm:bottom-6 left-1/2 -translate-x-1/2 flex gap-2 sm:gap-3 z-20">
        {slides.map((_, i) => (
          <div
            key={i}
            onClick={() => setCurrent(i)}
            className={`w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full cursor-pointer transition-all duration-300 ${
              i === current
                ? "bg-yellow-400 scale-125"
                : "bg-white/50 hover:bg-white"
            }`}
          ></div>
        ))}
      </div>

    </section>
  );
};

export default Hero;