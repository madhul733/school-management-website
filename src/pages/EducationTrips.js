import React from "react";
import { motion } from "framer-motion";
import {
  FaBus,
  FaGlobeAsia,
  FaBookOpen,
  FaMapMarkedAlt,
  FaUserGraduate,
  FaPlaneDeparture,
  FaCameraRetro,
  FaMountain,
} from "react-icons/fa";

const features = [
  {
    title: "Experiential Learning",
    icon: <FaBookOpen />,
    desc: "Students understand concepts practically through real-world experiences and observations.",
  },

  {
    title: "Educational Exploration",
    icon: <FaMapMarkedAlt />,
    desc: "Trips encourage students to explore places, cultures and innovative ideas.",
  },

  {
    title: "Student Engagement",
    icon: <FaUserGraduate />,
    desc: "Interactive activities during tours improve confidence, teamwork and communication.",
  },

  {
    title: "Global Exposure",
    icon: <FaGlobeAsia />,
    desc: "Students broaden their perspectives through meaningful educational journeys.",
  },
];

const EducationalTrips = () => {
  return (
    <section className="bg-white overflow-hidden">

      {/* ================= HERO ================= */}
      <div className="relative min-h-screen grid lg:grid-cols-2">

        {/* ================= LEFT IMAGE SIDE ================= */}
        <div className="relative overflow-hidden">

          {/* IMAGE */}
          <img
            src="https://images.unsplash.com/photo-1529156069898-49953e39b3ac?auto=format&fit=crop&w=1800&q=80"
            alt="educational trips"
            className="w-full h-full object-cover"
          />

          {/* OVERLAY */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>

          {/* TOP FLOATING */}
          <motion.div
            animate={{ y: [0, -15, 0] }}
            transition={{ duration: 4, repeat: Infinity }}
            className="absolute top-10 left-10 bg-white rounded-[35px] p-6 shadow-[0_25px_80px_rgba(0,0,0,0.18)]"
          >

            <div className="flex items-center gap-5">

              <div className="w-20 h-20 rounded-[25px] bg-gradient-to-br from-blue-500 to-cyan-400 text-white flex items-center justify-center text-4xl shadow-xl">

                <FaCameraRetro />

              </div>

              <div>

                <h3 className="text-2xl font-black text-[#0f172a]">
                  Explore & Capture
                </h3>

                <p className="text-gray-500 mt-1">
                  Learning Through Experiences
                </p>

              </div>

            </div>

          </motion.div>

          {/* BOTTOM CARD */}
          <motion.div
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="absolute bottom-10 left-10 right-10 bg-white rounded-[45px] p-8 shadow-[0_30px_100px_rgba(0,0,0,0.2)]"
          >

            <div className="flex items-start gap-6">

              <div className="w-24 h-24 rounded-[30px] bg-[#0f172a] text-white flex items-center justify-center text-5xl shadow-2xl">

                <FaMountain />

              </div>

              <div>

                <h3 className="text-4xl font-black text-[#0f172a] mb-4">
                  Beyond The Classroom
                </h3>

                <p className="text-gray-600 text-lg leading-9">

                  Educational trips inspire students to
                  explore, experience and understand
                  concepts through practical learning.

                </p>

              </div>

            </div>

          </motion.div>

        </div>

        {/* ================= RIGHT CONTENT SIDE ================= */}
        <div className="relative bg-[#f8fbff] flex items-center px-6 lg:px-20 py-28 overflow-hidden">

          {/* BG SHAPES */}
          <div className="absolute top-[-100px] right-[-100px] w-[350px] h-[350px] rounded-full bg-blue-100 blur-3xl opacity-60"></div>

          <div className="absolute bottom-[-100px] left-[-100px] w-[350px] h-[350px] rounded-full bg-cyan-100 blur-3xl opacity-60"></div>

          {/* CONTENT */}
          <div className="relative z-10 max-w-[760px]">

            {/* TAG */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              className="inline-flex items-center gap-4 px-8 py-4 rounded-full bg-white border border-blue-100 shadow-lg mb-10"
            >

              <div className="w-12 h-12 rounded-full bg-gradient-to-br from-blue-500 to-cyan-400 text-white flex items-center justify-center text-xl shadow-lg">

                <FaBus />

              </div>

              <p className="uppercase tracking-[7px] text-[#0f172a] text-sm font-bold">
                Educational Trips
              </p>

            </motion.div>

            {/* HEADING */}
            <motion.h1
              initial={{ opacity: 0, y: 60 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-6xl md:text-8xl xl:text-[100px] font-black leading-[0.92] text-[#0f172a]"
            >

              Travel.
              <br />

              Explore.
              <br />

              <span className="text-blue-500">
                Learn.
              </span>

            </motion.h1>

            {/* LINE */}
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: "220px" }}
              transition={{ duration: 1 }}
              className="h-[8px] bg-gradient-to-r from-blue-500 to-cyan-400 rounded-full mt-10 mb-10"
            ></motion.div>

            {/* TEXT */}
            <motion.p
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
              className="text-gray-700 text-2xl leading-[52px] font-medium"
            >

              Inside the classroom, students learn concepts,
              while outside the classroom they explore and
              experience them practically. Educational trips
              provide opportunities for experiential learning,
              curiosity and deeper understanding.

            </motion.p>

            {/* BUTTONS */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.1 }}
              className="flex flex-wrap gap-6 mt-14"
            >

              <button className="px-10 py-5 rounded-full bg-gradient-to-r from-blue-500 to-cyan-400 text-white text-lg font-bold shadow-[0_20px_60px_rgba(0,140,255,0.25)] hover:scale-105 transition duration-300">

                Explore Trips

              </button>

              <button className="px-10 py-5 rounded-full border border-gray-300 bg-white text-[#0f172a] text-lg font-bold hover:bg-[#0f172a] hover:text-white transition duration-300">

                Student Experiences

              </button>

            </motion.div>

          </div>

        </div>

      </div>

      {/* ================= FEATURES SECTION ================= */}
      <div className="max-w-[1750px] mx-auto px-6 py-36">

        {/* HEADING */}
        <div className="text-center mb-24">

          <p className="uppercase tracking-[7px] text-blue-500 font-bold mb-5">
            Why Educational Trips?
          </p>

          <h2 className="text-5xl md:text-7xl font-black text-[#0f172a] leading-[1]">

            Learning Through
            <br />

            Exploration

          </h2>

          <div className="w-44 h-[8px] bg-gradient-to-r from-blue-500 to-cyan-400 rounded-full mx-auto mt-8"></div>

        </div>

        {/* GRID */}
        <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-8">

          {features.map((item, index) => (

            <motion.div
              key={index}
              initial={{ opacity: 0, y: 70 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: index * 0.08 }}
              viewport={{ once: true }}
              whileHover={{
                y: -15,
                scale: 1.02,
              }}
              className="group relative overflow-hidden rounded-[45px] bg-white border border-gray-100 p-10 shadow-[0_25px_80px_rgba(0,0,0,0.06)]"
            >

              {/* NUMBER */}
              <h1 className="absolute top-5 right-8 text-[95px] font-black text-blue-50">

                0{index + 1}

              </h1>

              {/* ICON */}
              <div className="relative z-10 w-24 h-24 rounded-[30px] bg-gradient-to-br from-blue-500 to-cyan-400 text-white flex items-center justify-center text-5xl shadow-[0_20px_50px_rgba(0,140,255,0.2)] mb-8">

                {item.icon}

              </div>

              {/* TITLE */}
              <h3 className="relative z-10 text-3xl font-black text-[#0f172a] mb-5 leading-tight">

                {item.title}

              </h3>

              {/* LINE */}
              <div className="w-20 h-[6px] bg-blue-200 rounded-full mb-7"></div>

              {/* TEXT */}
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

export default EducationalTrips;