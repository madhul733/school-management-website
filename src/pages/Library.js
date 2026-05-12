import React from "react";
import { motion } from "framer-motion";
import {
  FaBookReader,
  FaLaptop,
  FaGlobe,
  FaLightbulb,
  FaUserGraduate,
  FaBookOpen,
  FaQuoteLeft,
} from "react-icons/fa";

const features = [
  {
    title: "7000+ Books",
    desc: "A rich collection of books from multiple genres, references and academic resources.",
    icon: <FaBookOpen />,
  },

  {
    title: "Reading Culture",
    desc: "Students develop imagination, creativity and a lifelong habit of reading.",
    icon: <FaBookReader />,
  },

  {
    title: "ICT Integration",
    desc: "Digital tools and multimedia resources support modern learning experiences.",
    icon: <FaLaptop />,
  },

  {
    title: "Global Knowledge",
    desc: "Students access informative articles and resources from around the world.",
    icon: <FaGlobe />,
  },

  {
    title: "Creative Thinking",
    desc: "Books encourage innovation, confidence and intellectual growth.",
    icon: <FaLightbulb />,
  },

  {
    title: "Academic Support",
    desc: "Resources are available for nursery, primary, secondary and senior students.",
    icon: <FaUserGraduate />,
  },
];

const Library = () => {
  return (
    <section className="relative overflow-hidden bg-[#f8fbff] py-32">

      {/* BACKGROUND */}
      <div className="absolute top-0 left-0 w-full h-[750px] bg-[#07294d]"></div>

      <div className="absolute top-[-150px] right-[-150px] w-[500px] h-[500px] bg-yellow-400/10 blur-3xl rounded-full"></div>

      <div className="absolute bottom-[-100px] left-[-120px] w-[450px] h-[450px] bg-blue-300/10 blur-3xl rounded-full"></div>

      {/* GRID */}
      <div className="absolute inset-0 opacity-[0.04] bg-[linear-gradient(to_right,#ffffff_1px,transparent_1px),linear-gradient(to_bottom,#ffffff_1px,transparent_1px)] bg-[size:70px_70px]"></div>

      {/* MAIN */}
      <div className="max-w-[1650px] mx-auto px-6 relative z-10">

        {/* HERO */}
        <div className="grid lg:grid-cols-2 gap-20 items-center mb-40">

          {/* LEFT */}
          <motion.div
            initial={{ opacity: 0, x: -70 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >

            {/* TAG */}
            <div className="inline-flex items-center gap-3 bg-white/10 border border-white/10 backdrop-blur-xl px-8 py-4 rounded-full mb-10 shadow-2xl">

              <span className="text-yellow-300 text-xl">📚</span>

              <p className="uppercase tracking-[6px] text-white text-sm font-bold">
                Knowledge Hub
              </p>

            </div>

            {/* HEADING */}
            <h1 className="text-5xl md:text-7xl xl:text-8xl font-black text-white leading-[1.02]">

              Cambridge
              <br />

              <span className="text-yellow-300">
                Library
              </span>

            </h1>

            {/* UNDERLINE */}
            <div className="w-40 h-[8px] bg-gradient-to-r from-yellow-300 via-yellow-400 to-yellow-500 rounded-full mt-10 mb-12"></div>

            {/* QUOTE CARD */}
            <div className="relative bg-white/10 border border-white/10 backdrop-blur-2xl rounded-[35px] p-8 mb-10 overflow-hidden">

              <div className="absolute top-4 right-5 text-yellow-300/20 text-7xl">

                <FaQuoteLeft />

              </div>

              <p className="text-2xl md:text-3xl font-black text-white leading-relaxed relative z-10">

                “Today, a Reader,
                <br />
                Tomorrow, a Leader”

              </p>

            </div>

            {/* TEXT */}
            <p className="text-[#1e293b] text-xl leading-10 max-w-[760px] font-semibold mt-10">

              The library is the treasure house of wit,
              wisdom and academic excellence. It inspires
              students to imagine, explore and develop a
              lifelong love for books, creativity and learning.

            </p>

            {/* STATS */}
            <div className="grid grid-cols-2 gap-7 mt-14">

              <motion.div
                whileHover={{ y: -8 }}
                className="bg-white border border-gray-200 rounded-[35px] p-8 shadow-[0_25px_60px_rgba(0,0,0,0.08)]"
              >

                <h2 className="text-6xl font-black text-[#07294d] mb-4">
                  7000+
                </h2>

                <p className="text-gray-700 text-lg font-semibold">
                  Books & Articles
                </p>

              </motion.div>

              <motion.div
                whileHover={{ y: -8 }}
                className="bg-white border border-gray-200 rounded-[35px] p-8 shadow-[0_25px_60px_rgba(0,0,0,0.08)]"
              >

                <h2 className="text-6xl font-black text-[#07294d] mb-4">
                  ICT
                </h2>

                <p className="text-gray-700 text-lg font-semibold">
                  Smart Learning Support
                </p>

              </motion.div>

            </div>

          </motion.div>

          {/* RIGHT SIDE */}
          <motion.div
            initial={{ opacity: 0, x: 70 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative"
          >

            {/* MAIN IMAGE */}
            <div className="relative overflow-hidden rounded-[60px] shadow-[0_40px_140px_rgba(0,0,0,0.35)] group">

              <img
                src="https://images.unsplash.com/photo-1521587760476-6c12a4b040da?auto=format&fit=crop&w=1600&q=80"
                alt="library"
                className="w-full h-[850px] object-cover group-hover:scale-105 transition duration-700"
              />

              {/* OVERLAY */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#021427]/90 via-transparent to-transparent"></div>

              {/* BOTTOM CONTENT */}
              <div className="absolute bottom-10 left-10 right-10 bg-white/10 border border-white/10 backdrop-blur-2xl rounded-[35px] p-8">

                <div className="flex items-start gap-6">

                  <div className="w-20 h-20 rounded-[28px] bg-gradient-to-br from-yellow-400 to-yellow-500 text-white flex items-center justify-center text-4xl shadow-2xl flex-shrink-0">

                    <FaBookReader />

                  </div>

                  <div>

                    <h3 className="text-3xl font-black text-white mb-4">
                      Reading Excellence
                    </h3>

                    <p className="text-[#dbeafe] text-lg leading-8">

                      A peaceful and inspiring environment
                      where students discover knowledge,
                      creativity and imagination through books.

                    </p>

                  </div>

                </div>

              </div>

            </div>

            {/* FLOATING CARD */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.3 }}
              viewport={{ once: true }}
              className="absolute -bottom-12 -left-10 bg-white rounded-[35px] p-8 shadow-[0_30px_100px_rgba(0,0,0,0.18)] max-w-[350px]"
            >

              <div className="flex items-center gap-5">

                <div className="w-18 h-18 rounded-[24px] bg-[#07294d] text-white flex items-center justify-center text-3xl p-5 shadow-xl">

                  📖

                </div>

                <div>

                  <h3 className="text-2xl font-black text-[#07294d]">
                    Learning Beyond
                  </h3>

                  <p className="text-gray-500 mt-1">
                    Books • Research • Technology
                  </p>

                </div>

              </div>

            </motion.div>

          </motion.div>

        </div>

        {/* FEATURES */}
        <div className="text-center mb-24">

          <p className="uppercase tracking-[5px] text-yellow-500 font-bold mb-5">
            Facilities & Resources
          </p>

          <h2 className="text-5xl md:text-7xl font-black text-[#07294d] leading-tight">

            Library Highlights

          </h2>

        </div>

        {/* FEATURE GRID */}
        <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-10">

          {features.map((item, index) => (

            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.08 }}
              viewport={{ once: true }}
              whileHover={{ y: -15 }}
              className="group relative overflow-hidden bg-white rounded-[45px] p-10 shadow-[0_25px_90px_rgba(0,0,0,0.06)] hover:shadow-[0_35px_110px_rgba(0,0,0,0.12)] transition duration-500"
            >

              {/* TOP BAR */}
              <div className="absolute top-0 left-0 w-full h-[7px] bg-gradient-to-r from-yellow-400 via-yellow-500 to-yellow-400"></div>

              {/* BG SHAPE */}
              <div className="absolute top-0 right-0 w-36 h-36 bg-yellow-50 rounded-bl-[100px]"></div>

              {/* NUMBER */}
              <h1 className="absolute top-5 right-8 text-[90px] font-black text-yellow-50">

                0{index + 1}

              </h1>

              {/* CONTENT */}
              <div className="relative z-10">

                {/* ICON */}
                <div className="w-22 h-22 rounded-[30px] bg-gradient-to-br from-yellow-400 to-yellow-500 text-white flex items-center justify-center text-4xl shadow-2xl mb-8 p-5">

                  {item.icon}

                </div>

                {/* TITLE */}
                <h3 className="text-3xl font-black text-[#07294d] mb-5 leading-tight">
                  {item.title}
                </h3>

                {/* LINE */}
                <div className="w-20 h-[5px] bg-yellow-200 rounded-full mb-7"></div>

                {/* DESC */}
                <p className="text-gray-700 text-lg leading-9">
                  {item.desc}
                </p>

              </div>

            </motion.div>

          ))}

        </div>

      </div>

    </section>
  );
};

export default Library;