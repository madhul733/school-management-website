import React from "react";
import { motion } from "framer-motion";
import {
  FaPrayingHands,
  FaNewspaper,
  FaLightbulb,
  FaMicrophoneAlt,
  FaFlag,
  FaSchool,
  FaQuoteLeft,
} from "react-icons/fa";

const assemblyActivities = [
  {
    title: "Prayer Session",
    icon: <FaPrayingHands />,
    desc: "The assembly begins with prayer to create positivity and discipline among students.",
  },

  {
    title: "News Reading",
    icon: <FaNewspaper />,
    desc: "National and International news updates help students stay informed and aware.",
  },

  {
    title: "Thought For The Day",
    icon: <FaLightbulb />,
    desc: "Motivational thoughts nourish young minds and inspire students daily.",
  },

  {
    title: "Principal’s Address",
    icon: <FaMicrophoneAlt />,
    desc: "Words of wisdom and guidance motivate students towards excellence and values.",
  },
];

const MorningAssembly = () => {
  return (
    <section className="bg-[#f8fafc] overflow-hidden">

      {/* ================= HERO ================= */}
      <div className="relative min-h-screen overflow-hidden">

        {/* TOP BACKGROUND */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#fff8ef] via-[#fff] to-[#f8fafc]"></div>

        {/* SHAPES */}
        <div className="absolute top-[-120px] right-[-120px] w-[450px] h-[450px] bg-orange-100 rounded-full blur-3xl opacity-60"></div>

        <div className="absolute bottom-[-120px] left-[-120px] w-[450px] h-[450px] bg-yellow-100 rounded-full blur-3xl opacity-60"></div>

        {/* CONTENT */}
        <div className="max-w-[1750px] mx-auto px-6 relative z-10 pt-28 pb-32">

          {/* TOP SECTION */}
          <div className="grid lg:grid-cols-2 gap-20 items-center">

            {/* LEFT */}
            <motion.div
              initial={{ opacity: 0, y: 60 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >

              {/* TAG */}
              <div className="inline-flex items-center gap-4 bg-white border border-orange-100 shadow-xl px-8 py-4 rounded-full mb-10">

                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-orange-400 to-yellow-400 text-white flex items-center justify-center text-xl shadow-lg">

                  <FaSchool />

                </div>

                <p className="uppercase tracking-[7px] text-[#0f172a] text-sm font-bold">
                  Morning School Assembly
                </p>

              </div>

              {/* HEADING */}
              <h1 className="text-6xl md:text-8xl xl:text-[120px] font-black leading-[0.92] text-[#0f172a]">

                Start
                <br />

                Every Day
                <br />

                With
                <span className="text-orange-500">
                  {" "}Positivity
                </span>

              </h1>

              {/* LINE */}
              <div className="w-52 h-[8px] bg-gradient-to-r from-orange-400 to-yellow-400 rounded-full mt-10 mb-10"></div>

              {/* TEXT */}
              <p className="text-gray-700 text-2xl leading-[52px] max-w-[820px] font-medium">

                School morning assembly marks the beginning
                of the day with prayer, discipline and motivation.
                Students participate in news reading, thought for
                the day, celebrations and activities that inspire
                confidence, awareness and values.

              </p>

              {/* BUTTONS */}
              <div className="flex flex-wrap gap-6 mt-14">

                <button className="px-10 py-5 rounded-full bg-gradient-to-r from-orange-400 to-yellow-400 text-[#0f172a] text-lg font-black shadow-[0_20px_60px_rgba(255,180,0,0.25)] hover:scale-105 transition duration-300">

                  Daily Assembly

                </button>

                <button className="px-10 py-5 rounded-full bg-white border border-gray-200 text-[#0f172a] text-lg font-bold hover:bg-[#0f172a] hover:text-white transition duration-300">

                  Student Participation

                </button>

              </div>

            </motion.div>

            {/* RIGHT */}
            <motion.div
              initial={{ opacity: 0, scale: 0.92 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.9 }}
              className="relative"
            >

              {/* MAIN IMAGE */}
              <div className="relative overflow-hidden rounded-[60px] shadow-[0_35px_120px_rgba(0,0,0,0.12)]">

                <img
                  src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=1800&q=80"
                  alt="assembly"
                  className="w-full h-[850px] object-cover"
                />

                {/* OVERLAY */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent"></div>

                {/* FLOATING CONTENT */}
                <div className="absolute bottom-10 left-10 right-10 bg-white/10 border border-white/10 backdrop-blur-2xl rounded-[40px] p-8">

                  <div className="flex items-start gap-6">

                    <div className="w-24 h-24 rounded-[30px] bg-gradient-to-br from-orange-400 to-yellow-400 text-white flex items-center justify-center text-5xl shadow-2xl">

                      <FaQuoteLeft />

                    </div>

                    <div>

                      <h3 className="text-4xl font-black text-white mb-4">
                        Thought For The Day
                      </h3>

                      <p className="text-[#e8edf5] text-xl leading-9">

                        Inspiring thoughts and motivational
                        words encourage students to begin
                        their day with confidence and positivity.

                      </p>

                    </div>

                  </div>

                </div>

              </div>

              {/* FLOATING CARD */}
              <motion.div
                animate={{ y: [0, -15, 0] }}
                transition={{ duration: 4, repeat: Infinity }}
                className="absolute -top-10 -left-10 bg-white rounded-[35px] p-7 shadow-[0_25px_90px_rgba(0,0,0,0.12)]"
              >

                <div className="flex items-center gap-5">

                  <div className="w-20 h-20 rounded-[25px] bg-[#0f172a] text-white flex items-center justify-center text-4xl">

                    <FaFlag />

                  </div>

                  <div>

                    <h3 className="text-2xl font-black text-[#0f172a]">
                      National Celebrations
                    </h3>

                    <p className="text-gray-500 mt-1">
                      Festivals & Important Days
                    </p>

                  </div>

                </div>

              </motion.div>

            </motion.div>

          </div>

        </div>

      </div>

      {/* ================= ACTIVITIES SECTION ================= */}
      <div className="max-w-[1750px] mx-auto px-6 py-32">

        {/* HEADING */}
        <div className="text-center mb-24">

          <p className="uppercase tracking-[7px] text-orange-500 font-bold mb-5">
            Assembly Activities
          </p>

          <h2 className="text-5xl md:text-7xl font-black text-[#0f172a] leading-[1]">

            A Meaningful
            <br />

            Start To The Day

          </h2>

          <div className="w-44 h-[8px] bg-gradient-to-r from-orange-400 to-yellow-400 rounded-full mx-auto mt-8"></div>

        </div>

        {/* GRID */}
        <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-8">

          {assemblyActivities.map((item, index) => (

            <motion.div
              key={index}
              initial={{ opacity: 0, y: 70 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: index * 0.08 }}
              viewport={{ once: true }}
              whileHover={{
                y: -15,
              }}
              className="group relative overflow-hidden rounded-[40px] bg-white p-10 shadow-[0_25px_80px_rgba(0,0,0,0.08)]"
            >

              {/* BG SHAPE */}
              <div className="absolute top-0 right-0 w-40 h-40 bg-orange-50 rounded-bl-[100px]"></div>

              {/* NUMBER */}
              <h1 className="absolute top-4 right-6 text-[95px] font-black text-orange-50">

                0{index + 1}

              </h1>

              {/* ICON */}
              <div className="relative z-10 w-24 h-24 rounded-[30px] bg-gradient-to-br from-orange-400 to-yellow-400 text-white flex items-center justify-center text-5xl shadow-[0_20px_50px_rgba(255,180,0,0.2)] mb-8">

                {item.icon}

              </div>

              {/* TITLE */}
              <h3 className="relative z-10 text-3xl font-black text-[#0f172a] mb-5 leading-tight">

                {item.title}

              </h3>

              {/* LINE */}
              <div className="w-20 h-[6px] bg-orange-200 rounded-full mb-7"></div>

              {/* DESC */}
              <p className="relative z-10 text-gray-600 leading-9 text-lg">

                {item.desc}

              </p>

            </motion.div>

          ))}

        </div>

      </div>

    </section>
  );
};

export default MorningAssembly;