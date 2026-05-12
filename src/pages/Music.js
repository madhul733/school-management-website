import React from "react";
import { motion } from "framer-motion";
import {
  FaMusic,
  FaHeadphones,
  FaMicrophoneAlt,
  FaCompactDisc,
  FaGuitar,
  FaTheaterMasks,
  FaDrum,
  FaStar,
} from "react-icons/fa";

const programs = [
  {
    title: "Music Training",
    subtitle: "Vocals & Instruments",
    icon: <FaMicrophoneAlt />,
  },

  {
    title: "Dance Studio",
    subtitle: "Creative Performances",
    icon: <FaTheaterMasks />,
  },

  {
    title: "Instrument Practice",
    subtitle: "Rhythm & Melody",
    icon: <FaGuitar />,
  },

  {
    title: "Stage Activities",
    subtitle: "Confidence Building",
    icon: <FaStar />,
  },
];

const MusicDance = () => {
  return (
    <section className="bg-[#0d0a1f] overflow-hidden">

      {/* ================= HERO ================= */}
      <div className="relative min-h-screen">

        {/* GRADIENT LIGHTS */}
        <div className="absolute top-[-150px] left-[-100px] w-[500px] h-[500px] bg-pink-500/20 rounded-full blur-3xl"></div>

        <div className="absolute bottom-[-200px] right-[-100px] w-[550px] h-[550px] bg-purple-500/20 rounded-full blur-3xl"></div>

        {/* TOP */}
        <div className="max-w-[1800px] mx-auto px-6 pt-28 relative z-10">

          {/* TOP HEADING */}
          <div className="text-center max-w-[1200px] mx-auto">

            {/* ICON */}
            <motion.div
              initial={{ opacity: 0, scale: 0.7 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7 }}
              className="w-28 h-28 rounded-full bg-gradient-to-br from-pink-500 to-purple-600 mx-auto flex items-center justify-center text-white text-5xl shadow-[0_20px_80px_rgba(255,0,200,0.35)]"
            >

              <FaMusic />

            </motion.div>

            {/* SMALL TEXT */}
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="uppercase tracking-[10px] text-pink-400 font-bold mt-10 mb-8"
            >

              Creative Arts Department

            </motion.p>

            {/* MAIN HEADING */}
            <motion.h1
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9 }}
              className="text-6xl md:text-8xl xl:text-[140px] font-black leading-[0.9] text-white"
            >

              Music
              <span className="text-pink-500">
                {" "}Meets
              </span>

              <br />

              Motion.

            </motion.h1>

            {/* LINE */}
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: "240px" }}
              transition={{ duration: 1 }}
              className="h-[9px] bg-gradient-to-r from-pink-500 via-purple-500 to-pink-500 rounded-full mx-auto mt-12 mb-14"
            ></motion.div>

            {/* TEXT */}
            <motion.p
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
              className="text-[#d7d1ff] text-2xl xl:text-3xl leading-[58px] max-w-[1100px] mx-auto font-medium"
            >

              Cambridge International School believes in bringing
              out the creative best in every student. Our Music
              and Dance Department inspires imagination, artistic
              expression and confidence through innovative learning
              and engaging performances.

            </motion.p>

          </div>

          {/* CENTER IMAGE SECTION */}
          <motion.div
            initial={{ opacity: 0, y: 70 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9 }}
            viewport={{ once: true }}
            className="relative mt-28"
          >

            {/* MAIN IMAGE */}
            <div className="relative overflow-hidden rounded-[80px] shadow-[0_50px_180px_rgba(0,0,0,0.55)]">

              <img
                src="https://images.unsplash.com/photo-1501386761578-eac5c94b800a?auto=format&fit=crop&w=2000&q=80"
                alt="music"
                className="w-full h-[850px] object-cover"
              />

              {/* OVERLAY */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#0d0a1f]/95 via-transparent to-transparent"></div>

              {/* CONTENT BOX */}
              <div className="absolute bottom-0 left-0 right-0 p-14">

                <div className="grid md:grid-cols-3 gap-8">

                  {/* CARD */}
                  <div className="bg-white/10 border border-white/10 backdrop-blur-2xl rounded-[35px] p-8">

                    <div className="w-20 h-20 rounded-[25px] bg-gradient-to-br from-pink-500 to-purple-500 text-white flex items-center justify-center text-4xl mb-6 shadow-2xl">

                      <FaHeadphones />

                    </div>

                    <h3 className="text-3xl font-black text-white mb-4">
                      Creative Studios
                    </h3>

                    <p className="text-[#d7d1ff] leading-8 text-lg">
                      Dedicated music and dance rooms for innovation and creativity.
                    </p>

                  </div>

                  {/* CARD */}
                  <div className="bg-gradient-to-br from-pink-500 to-purple-600 rounded-[35px] p-8 shadow-[0_20px_80px_rgba(255,0,200,0.35)]">

                    <div className="w-20 h-20 rounded-[25px] bg-white/10 text-white flex items-center justify-center text-4xl mb-6">

                      <FaCompactDisc />

                    </div>

                    <h3 className="text-3xl font-black text-white mb-4">
                      Artistic Growth
                    </h3>

                    <p className="text-white/90 leading-8 text-lg">
                      Encouraging talent, confidence and expression through arts.
                    </p>

                  </div>

                  {/* CARD */}
                  <div className="bg-white/10 border border-white/10 backdrop-blur-2xl rounded-[35px] p-8">

                    <div className="w-20 h-20 rounded-[25px] bg-gradient-to-br from-pink-500 to-purple-500 text-white flex items-center justify-center text-4xl mb-6 shadow-2xl">

                      <FaDrum />

                    </div>

                    <h3 className="text-3xl font-black text-white mb-4">
                      Live Performances
                    </h3>

                    <p className="text-[#d7d1ff] leading-8 text-lg">
                      Students showcase creativity through performances and events.
                    </p>

                  </div>

                </div>

              </div>

            </div>

          </motion.div>

        </div>

      </div>

      {/* ================= PROGRAM SECTION ================= */}
      <div className="max-w-[1800px] mx-auto px-6 py-36">

        {/* HEADING */}
        <div className="flex flex-col lg:flex-row justify-between gap-10 items-end mb-24">

          <div>

            <p className="uppercase tracking-[8px] text-pink-400 font-bold mb-6">
              Programs & Activities
            </p>

            <h2 className="text-5xl md:text-7xl font-black text-white leading-[1]">

              Explore Creative
              <br />

              Opportunities

            </h2>

          </div>

          <p className="text-[#d7d1ff] text-xl leading-10 max-w-[650px]">

            Students are encouraged to discover their interests,
            participate in performances and express themselves
            through music, rhythm and dance.

          </p>

        </div>

        {/* GRID */}
        <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-8">

          {programs.map((item, index) => (

            <motion.div
              key={index}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: index * 0.08 }}
              viewport={{ once: true }}
              whileHover={{ y: -18 }}
              className="group relative overflow-hidden bg-[#17132f] border border-white/5 rounded-[45px] p-10 hover:border-pink-500/30 transition duration-500"
            >

              {/* NUMBER */}
              <h1 className="absolute top-5 right-8 text-[100px] font-black text-white/[0.03]">

                0{index + 1}

              </h1>

              {/* ICON */}
              <div className="w-24 h-24 rounded-[30px] bg-gradient-to-br from-pink-500 to-purple-600 text-white flex items-center justify-center text-5xl shadow-[0_20px_60px_rgba(255,0,200,0.35)] mb-10">

                {item.icon}

              </div>

              {/* TITLE */}
              <h3 className="text-3xl font-black text-white mb-4 leading-tight">

                {item.title}

              </h3>

              {/* SUBTITLE */}
              <p className="text-pink-300 text-lg font-semibold">

                {item.subtitle}

              </p>

              {/* LINE */}
              <div className="w-20 h-[6px] bg-gradient-to-r from-pink-500 to-purple-500 rounded-full mt-8"></div>

            </motion.div>

          ))}

        </div>

      </div>

    </section>
  );
};

export default MusicDance;