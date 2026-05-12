import React from "react";
import { motion } from "framer-motion";
import {
  FaBookReader,
  FaBrain,
  FaLanguage,
  FaChartLine,
  FaFlask,
  FaUserFriends,
} from "react-icons/fa";

const highlights = [
  {
    title: "Concept-Based Learning",
    desc: "Students learn essential concepts of every subject through meaningful and engaging learning experiences.",
    icon: <FaBookReader />,
  },

  {
    title: "Critical Thinking",
    desc: "Children are encouraged to question, explore and think creatively about the world around them.",
    icon: <FaBrain />,
  },

  {
    title: "Language Development",
    desc: "English remains the primary language of instruction while students can also learn additional languages.",
    icon: <FaLanguage />,
  },

  {
    title: "Academic Excellence",
    desc: "Strong foundations in reading, writing, mathematics and science are carefully developed.",
    icon: <FaChartLine />,
  },

  {
    title: "Practical Learning",
    desc: "Students gain knowledge through activities, experiments and interactive learning methods.",
    icon: <FaFlask />,
  },

  {
    title: "Parent Partnership",
    desc: "Regular progress updates help parents and school work together for each child’s growth.",
    icon: <FaUserFriends />,
  },
];

const PrimarySchool = () => {
  return (
    <section className="relative w-full py-32 overflow-hidden bg-gradient-to-br from-[#f8fbff] via-[#f5f7fc] to-[#eef4ff]">

      {/* ================= BACKGROUND ================= */}
      <div className="absolute top-[-120px] left-[-120px] w-[450px] h-[450px] bg-blue-200/20 blur-3xl rounded-full"></div>

      <div className="absolute bottom-[-120px] right-[-120px] w-[450px] h-[450px] bg-[#d4af37]/10 blur-3xl rounded-full"></div>

      {/* GRID */}
      <div className="absolute inset-0 opacity-[0.03] bg-[linear-gradient(to_right,#07294d_1px,transparent_1px),linear-gradient(to_bottom,#07294d_1px,transparent_1px)] bg-[size:70px_70px]"></div>

      {/* ================= MAIN ================= */}
      <div className="max-w-[1550px] mx-auto px-6 relative z-10">

        {/* ================= HERO ================= */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="text-center mb-28"
        >

          {/* TAG */}
          <div className="inline-flex items-center gap-3 px-8 py-4 rounded-full bg-white border border-blue-100 shadow-[0_15px_40px_rgba(0,0,0,0.05)] mb-10">

            <span className="text-[#0b4a80] text-xl">📘</span>

            <p className="uppercase tracking-[6px] text-[#0b4a80] text-sm font-black">
              Curriculum Structure
            </p>

          </div>

          {/* HEADING */}
          <h1 className="text-5xl md:text-7xl xl:text-8xl font-black text-[#07294d] leading-[1.08]">

            <span className="relative inline-block pb-8">

              Primary
              <br />
              School

              {/* UNDERLINE */}
              <span className="absolute left-1/2 -translate-x-1/2 bottom-1 w-[105%] h-6 bg-gradient-to-r from-blue-100 via-blue-200 to-blue-100 rounded-full blur-[1px] opacity-90"></span>

              {/* SHINE */}
              <span className="absolute left-1/2 -translate-x-1/2 bottom-2 w-[70%] h-[4px] bg-white/70 rounded-full"></span>

            </span>

          </h1>

          {/* TEXT */}
          <p className="max-w-[1150px] mx-auto text-gray-600 text-xl leading-10 mt-14">

            At the primary level, emphasis is placed on
            development-based curriculum where students
            learn essential concepts while developing
            confidence, positive self-esteem and healthy habits.

          </p>

        </motion.div>

        {/* ================= MAIN SECTION ================= */}
        <div className="grid lg:grid-cols-2 gap-14 items-center mb-32">

          {/* IMAGE */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
          >

            <div className="relative overflow-hidden rounded-[50px] shadow-[0_30px_100px_rgba(0,0,0,0.12)] group">

              {/* IMAGE */}
              <img
                src="https://images.unsplash.com/photo-1503676260728-1c00da094a0b?q=80&w=1400&auto=format&fit=crop"
                alt="primary-school"
                className="w-full h-[720px] object-cover group-hover:scale-105 transition duration-700"
              />

              {/* OVERLAY */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#021427]/80 via-transparent to-transparent"></div>

              {/* CONTENT */}
              <div className="absolute bottom-8 left-8 right-8 bg-white/90 backdrop-blur-xl rounded-[30px] p-8 shadow-2xl">

                <h3 className="text-3xl font-black text-[#07294d] mb-4">
                  Building Strong Foundations
                </h3>

                <p className="text-gray-600 text-lg leading-8">

                  Our curriculum strengthens reading,
                  creative writing, mathematics, science
                  and communication skills in a personalised
                  learning environment.

                </p>

              </div>

            </div>

          </motion.div>

          {/* CONTENT */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
          >

            <div className="bg-white rounded-[50px] shadow-[0_30px_100px_rgba(0,0,0,0.08)] p-10 md:p-14 relative overflow-hidden">

              {/* TOP BAR */}
              <div className="absolute top-0 left-0 w-full h-[8px] bg-gradient-to-r from-[#0b4a80] via-blue-400 to-[#0b4a80]"></div>

              {/* BG SHAPE */}
              <div className="absolute top-[-70px] right-[-70px] w-[220px] h-[220px] border-[24px] border-blue-100 rounded-full"></div>

              {/* ICON */}
              <div className="w-24 h-24 rounded-[32px] bg-[#0b4a80] text-white flex items-center justify-center text-5xl shadow-2xl mb-10 relative z-10">

                📚

              </div>

              {/* TITLE */}
              <h2 className="text-5xl font-black text-[#07294d] leading-tight mb-8 relative z-10">

                Learning With
                <br />
                Purpose & Growth

              </h2>

              {/* LINE */}
              <div className="w-28 h-[6px] bg-blue-200 rounded-full mb-10 relative z-10"></div>

              {/* TEXT */}
              <p className="text-gray-600 text-xl leading-10 mb-8 relative z-10">

                Students are encouraged to develop academic
                achievement, independent thinking and curiosity
                through engaging classroom experiences.

              </p>

              <p className="text-gray-600 text-xl leading-10 mb-8 relative z-10">

                Each child’s progress is carefully monitored
                and regularly communicated to parents to
                strengthen the partnership between school and family.

              </p>

              <p className="text-gray-600 text-xl leading-10 relative z-10">

                Along with English as the language of instruction,
                students are also given opportunities to learn
                additional Indian or foreign languages.

              </p>

            </div>

          </motion.div>

        </div>

        {/* ================= HIGHLIGHTS ================= */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >

          <h2 className="text-5xl md:text-6xl font-black text-[#07294d] leading-tight">

            <span className="relative inline-block pb-8">

              Curriculum Highlights

              {/* UNDERLINE */}
              <span className="absolute left-1/2 -translate-x-1/2 bottom-1 w-[105%] h-5 bg-blue-100 rounded-full"></span>

            </span>

          </h2>

        </motion.div>

        {/* ================= CARDS ================= */}
        <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-10">

          {highlights.map((item, index) => (

            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
              viewport={{ once: true }}
              whileHover={{ y: -12 }}
              className="group relative overflow-hidden rounded-[40px] bg-white shadow-[0_25px_80px_rgba(0,0,0,0.08)]"
            >

              {/* TOP BAR */}
              <div className="absolute top-0 left-0 w-full h-[7px] bg-gradient-to-r from-[#0b4a80] via-blue-400 to-[#0b4a80]"></div>

              {/* GLOW */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-500 bg-gradient-to-br from-blue-100/40 to-[#d4af37]/10"></div>

              {/* NUMBER */}
              <h1 className="absolute top-4 right-6 text-[90px] font-black text-blue-50">

                0{index + 1}

              </h1>

              <div className="relative z-10 p-10">

                {/* ICON */}
                <div className="w-20 h-20 rounded-[28px] bg-[#0b4a80] text-white flex items-center justify-center text-4xl shadow-2xl mb-8">

                  {item.icon}

                </div>

                {/* TITLE */}
                <h3 className="text-3xl font-black text-[#07294d] mb-5 leading-tight">
                  {item.title}
                </h3>

                {/* LINE */}
                <div className="w-20 h-[5px] bg-blue-200 rounded-full mb-7"></div>

                {/* DESC */}
                <p className="text-gray-600 text-lg leading-9">
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

export default PrimarySchool;