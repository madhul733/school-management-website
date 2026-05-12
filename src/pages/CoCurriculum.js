import React from "react";
import { motion } from "framer-motion";
import {
  FaMusic,
  FaPaintBrush,
  FaMicrophoneAlt,
  FaTheaterMasks,
  FaBrain,
  FaBookReader,
  FaTrophy,
  FaStar,
} from "react-icons/fa";

const activities = [
  {
    title: "Quiz Competitions",
    icon: <FaBrain />,
  },

  {
    title: "Music & Dance",
    icon: <FaMusic />,
  },

  {
    title: "Drama Activities",
    icon: <FaTheaterMasks />,
  },

  {
    title: "Art & Drawing",
    icon: <FaPaintBrush />,
  },

  {
    title: "Elocution",
    icon: <FaMicrophoneAlt />,
  },

  {
    title: "Recitation",
    icon: <FaBookReader />,
  },
];

const CoCurricular = () => {
  return (
    <section className="bg-[#060816] overflow-hidden">

      {/* ================= HERO SECTION ================= */}
      <div className="relative min-h-screen flex items-center">

        {/* BACKGROUND */}
        <div className="absolute inset-0">

          <img
            src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=2000&q=80"
            alt="activities"
            className="w-full h-full object-cover opacity-20"
          />

          <div className="absolute inset-0 bg-[#060816]/90"></div>

        </div>

        {/* LIGHTS */}
        <div className="absolute top-[-200px] left-[-120px] w-[500px] h-[500px] bg-cyan-500/20 rounded-full blur-3xl"></div>

        <div className="absolute bottom-[-200px] right-[-120px] w-[500px] h-[500px] bg-blue-500/20 rounded-full blur-3xl"></div>

        {/* MAIN */}
        <div className="max-w-[1800px] mx-auto px-6 relative z-10 w-full">

          <div className="grid lg:grid-cols-2 gap-20 items-center">

            {/* LEFT */}
            <motion.div
              initial={{ opacity: 0, y: 70 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9 }}
            >

              {/* TOP BADGE */}
              <div className="inline-flex items-center gap-4 px-8 py-4 rounded-full border border-cyan-400/20 bg-cyan-400/10 backdrop-blur-2xl mb-10">

                <div className="w-12 h-12 rounded-full bg-cyan-400 text-[#060816] flex items-center justify-center text-xl shadow-[0_0_30px_rgba(0,255,255,0.5)]">

                  <FaStar />

                </div>

                <p className="uppercase tracking-[8px] text-cyan-300 text-sm font-bold">
                  Beyond Classroom Learning
                </p>

              </div>

              {/* HEADING */}
              <h1 className="text-6xl md:text-8xl xl:text-[135px] font-black leading-[0.9] text-white">

                Discover
                <br />

                Your
                <span className="text-cyan-300">
                  {" "}Talent
                </span>

              </h1>

              {/* LINE */}
              <div className="w-56 h-[8px] bg-gradient-to-r from-cyan-400 via-blue-500 to-cyan-400 rounded-full mt-12 mb-12"></div>

              {/* TEXT */}
              <p className="text-[#d6e9ff] text-2xl leading-[55px] max-w-[850px] font-medium">

                Co-Curricular Activities hold a permanent place
                in the holistic development of students. Activities
                like Quiz, Drama, Drawing, Music, Elocution and
                Recitation are designed to nurture creativity,
                leadership, confidence and communication skills.

              </p>

              {/* BUTTONS */}
              <div className="flex flex-wrap gap-6 mt-14">

                <button className="px-10 py-5 rounded-full bg-cyan-400 text-[#060816] text-lg font-black shadow-[0_0_50px_rgba(0,255,255,0.4)] hover:scale-105 transition duration-300">

                  Explore Activities

                </button>

                <button className="px-10 py-5 rounded-full border border-white/10 bg-white/5 backdrop-blur-xl text-white text-lg font-bold hover:bg-white hover:text-[#060816] transition duration-300">

                  Student Growth

                </button>

              </div>

            </motion.div>

            {/* RIGHT */}
            <motion.div
              initial={{ opacity: 0, scale: 0.85 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1 }}
              className="relative"
            >

              {/* MAIN CARD */}
              <div className="relative rounded-[60px] overflow-hidden border border-white/10 bg-white/5 backdrop-blur-2xl shadow-[0_30px_120px_rgba(0,0,0,0.45)]">

                <img
                  src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=1800&q=80"
                  alt="activities"
                  className="w-full h-[850px] object-cover opacity-70"
                />

                {/* OVERLAY */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#060816] via-transparent to-transparent"></div>

                {/* CONTENT */}
                <div className="absolute bottom-0 left-0 right-0 p-10">

                  <div className="grid grid-cols-2 gap-6">

                    {/* SMALL CARDS */}
                    <div className="rounded-[30px] bg-white/10 border border-white/10 backdrop-blur-2xl p-7">

                      <div className="w-16 h-16 rounded-[22px] bg-cyan-400 text-[#060816] flex items-center justify-center text-3xl mb-5">

                        <FaMusic />

                      </div>

                      <h3 className="text-2xl font-black text-white mb-3">
                        Creative Arts
                      </h3>

                      <p className="text-[#d6e9ff] leading-8">
                        Encouraging imagination and expression.
                      </p>

                    </div>

                    <div className="rounded-[30px] bg-cyan-400 p-7 shadow-[0_0_50px_rgba(0,255,255,0.35)]">

                      <div className="w-16 h-16 rounded-[22px] bg-[#060816]/10 text-[#060816] flex items-center justify-center text-3xl mb-5">

                        <FaTrophy />

                      </div>

                      <h3 className="text-2xl font-black text-[#060816] mb-3">
                        Competitions
                      </h3>

                      <p className="text-[#060816]/80 leading-8">
                        Inspiring confidence and leadership.
                      </p>

                    </div>

                  </div>

                </div>

              </div>

              {/* FLOATING ELEMENT */}
              <motion.div
                animate={{ y: [0, -18, 0] }}
                transition={{ duration: 4, repeat: Infinity }}
                className="absolute -top-10 -left-10 w-36 h-36 rounded-[40px] bg-gradient-to-br from-cyan-400 to-blue-500 shadow-[0_0_60px_rgba(0,255,255,0.45)] flex items-center justify-center text-white text-6xl"
              >

                <FaStar />

              </motion.div>

            </motion.div>

          </div>

        </div>

      </div>

      {/* ================= ACTIVITY GRID ================= */}
      <div className="max-w-[1800px] mx-auto px-6 py-36 relative z-10">

        {/* HEADING */}
        <div className="text-center mb-24">

          <p className="uppercase tracking-[8px] text-cyan-300 font-bold mb-5">
            Student Engagement
          </p>

          <h2 className="text-5xl md:text-7xl font-black text-white leading-[1]">

            Activities That
            <br />

            Shape The Future

          </h2>

        </div>

        {/* GRID */}
        <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-10">

          {activities.map((item, index) => (

            <motion.div
              key={index}
              initial={{ opacity: 0, y: 70 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: index * 0.08 }}
              viewport={{ once: true }}
              whileHover={{
                y: -12,
                scale: 1.02,
              }}
              className="relative overflow-hidden rounded-[45px] border border-white/10 bg-white/5 backdrop-blur-2xl p-10 shadow-[0_20px_80px_rgba(0,0,0,0.35)]"
            >

              {/* GLOW */}
              <div className="absolute -top-20 -right-20 w-40 h-40 bg-cyan-400/10 rounded-full blur-3xl"></div>

              {/* NUMBER */}
              <h1 className="absolute top-6 right-8 text-[110px] font-black text-white/[0.03]">

                0{index + 1}

              </h1>

              {/* ICON */}
              <div className="relative z-10 w-24 h-24 rounded-[30px] bg-gradient-to-br from-cyan-400 to-blue-500 text-white flex items-center justify-center text-5xl shadow-[0_0_40px_rgba(0,255,255,0.35)] mb-10">

                {item.icon}

              </div>

              {/* TITLE */}
              <h3 className="relative z-10 text-4xl font-black text-white leading-tight mb-6">

                {item.title}

              </h3>

              {/* LINE */}
              <div className="w-24 h-[6px] bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full"></div>

            </motion.div>

          ))}

        </div>

      </div>

    </section>
  );
};

export default CoCurricular;