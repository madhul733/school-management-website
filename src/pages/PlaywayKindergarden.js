import React from "react";
import { motion } from "framer-motion";
import {
  FaPuzzlePiece,
  FaChild,
  FaBookOpen,
  FaPaintBrush,
  FaMusic,
  FaSmile,
} from "react-icons/fa";

const activities = [
  {
    title: "Creative Learning",
    desc: "Interactive classroom activities that make learning joyful, exciting and meaningful.",
    icon: <FaPuzzlePiece />,
  },

  {
    title: "Play-Based Education",
    desc: "Learning through play to build cognitive, emotional and problem-solving abilities.",
    icon: <FaChild />,
  },

  {
    title: "Language Development",
    desc: "Strong focus on communication, listening, reading and expression skills.",
    icon: <FaBookOpen />,
  },

  {
    title: "Art & Creativity",
    desc: "Creative experiences through paints, dramatic play and imagination-building activities.",
    icon: <FaPaintBrush />,
  },

  {
    title: "Music & Movement",
    desc: "Eurhythmics, music and kinaesthetic activities for joyful development.",
    icon: <FaMusic />,
  },

  {
    title: "Safe Environment",
    desc: "A caring atmosphere where children feel secure, confident and valued.",
    icon: <FaSmile />,
  },
];

const PlaywayKindergarten = () => {
  return (
    <section className="relative w-full py-32 overflow-hidden bg-gradient-to-br from-[#f8fbff] via-[#f5f7fc] to-[#eef4ff]">

      {/* ================= BACKGROUND ================= */}
      <div className="absolute top-[-120px] left-[-120px] w-[420px] h-[420px] bg-pink-200/30 blur-3xl rounded-full"></div>

      <div className="absolute bottom-[-120px] right-[-120px] w-[420px] h-[420px] bg-blue-200/30 blur-3xl rounded-full"></div>

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
          <div className="inline-flex items-center gap-3 px-8 py-4 rounded-full bg-white border border-pink-200 shadow-[0_15px_40px_rgba(0,0,0,0.05)] mb-10">

            <span className="text-pink-500 text-xl">🎈</span>

            <p className="uppercase tracking-[6px] text-pink-500 text-sm font-black">
              Early Childhood Education
            </p>

          </div>

          {/* HEADING */}
          <h1 className="text-5xl md:text-7xl xl:text-8xl font-black text-[#07294d] leading-[1.08]">

            <span className="relative inline-block pb-8">

              Playway School
              <br />
              & Kindergarten

              {/* ADVANCED UNDERLINE */}
              <span className="absolute left-1/2 -translate-x-1/2 bottom-1 w-[105%] h-6 bg-gradient-to-r from-pink-200 via-pink-300 to-pink-200 rounded-full blur-[1px] opacity-90"></span>

              {/* SHINE */}
              <span className="absolute left-1/2 -translate-x-1/2 bottom-2 w-[70%] h-[4px] bg-white/70 rounded-full"></span>

            </span>

          </h1>

          {/* TEXT */}
          <p className="max-w-[1150px] mx-auto text-gray-600 text-xl leading-10 mt-14">

            Our commitment to every child as an individual,
            combined with a dedicated professional staff,
            creates an affectionate and stimulating environment
            where children feel safe, confident and free to explore
            the world around them.

          </p>

        </motion.div>

        {/* ================= MAIN CONTENT ================= */}
        <div className="grid lg:grid-cols-2 gap-14 items-center mb-32">

          {/* LEFT IMAGE */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
          >

            <div className="relative overflow-hidden rounded-[50px] shadow-[0_30px_100px_rgba(0,0,0,0.12)] group">

              {/* IMAGE */}
              <img
                src="https://images.unsplash.com/photo-1509062522246-3755977927d7?q=80&w=1400&auto=format&fit=crop"
                alt="playway"
                className="w-full h-[720px] object-cover group-hover:scale-105 transition duration-700"
              />

              {/* OVERLAY */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#021427]/80 via-transparent to-transparent"></div>

              {/* TEXT BOX */}
              <div className="absolute bottom-8 left-8 right-8 bg-white/90 backdrop-blur-xl rounded-[30px] p-8 shadow-2xl">

                <h3 className="text-3xl font-black text-[#07294d] mb-4">
                  Learning Through Play
                </h3>

                <p className="text-gray-600 text-lg leading-8">

                  We believe that play is an essential part
                  of childhood and forms the foundation of
                  emotional, cognitive and social development.

                </p>

              </div>

            </div>

          </motion.div>

          {/* RIGHT CONTENT */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
          >

            <div className="bg-white rounded-[50px] shadow-[0_30px_100px_rgba(0,0,0,0.08)] p-10 md:p-14 relative overflow-hidden">

              {/* TOP BAR */}
              <div className="absolute top-0 left-0 w-full h-[8px] bg-gradient-to-r from-pink-400 via-pink-300 to-pink-400"></div>

              {/* BG SHAPE */}
              <div className="absolute top-[-70px] right-[-70px] w-[220px] h-[220px] border-[24px] border-pink-100 rounded-full"></div>

              {/* ICON */}
              <div className="w-24 h-24 rounded-[32px] bg-pink-500 text-white flex items-center justify-center text-5xl shadow-2xl mb-10 relative z-10">

                🧸

              </div>

              {/* TITLE */}
              <h2 className="text-5xl font-black text-[#07294d] leading-tight mb-8 relative z-10">

                A Foundation
                <br />
                For Lifelong Learning

              </h2>

              {/* LINE */}
              <div className="w-28 h-[6px] bg-pink-300 rounded-full mb-10 relative z-10"></div>

              {/* TEXT */}
              <p className="text-gray-600 text-xl leading-10 mb-8 relative z-10">

                Our curriculum provides the foundation upon
                which language arts, reading, mathematics,
                science and social studies are established.

              </p>

              <p className="text-gray-600 text-xl leading-10 mb-8 relative z-10">

                The syllabus ensures that children receive
                diverse learning experiences that challenge,
                stimulate and encourage creativity along with
                a love for learning.

              </p>

              <p className="text-gray-600 text-xl leading-10 relative z-10">

                Preschool classrooms are fully equipped with
                books, blocks, manipulatives, paints, dramatic
                play, sensory and kinaesthetic activities to
                encourage imagination and socialization.

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
              <span className="absolute left-1/2 -translate-x-1/2 bottom-1 w-[105%] h-5 bg-pink-200 rounded-full"></span>

            </span>

          </h2>

        </motion.div>

        {/* ================= GRID ================= */}
        <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-10">

          {activities.map((item, index) => (

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
              <div className="absolute top-0 left-0 w-full h-[7px] bg-gradient-to-r from-pink-400 via-pink-300 to-pink-400"></div>

              {/* GLOW */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-500 bg-gradient-to-br from-pink-100/40 to-blue-100/40"></div>

              {/* NUMBER */}
              <h1 className="absolute top-4 right-6 text-[90px] font-black text-pink-100">

                0{index + 1}

              </h1>

              <div className="relative z-10 p-10">

                {/* ICON */}
                <div className="w-20 h-20 rounded-[28px] bg-pink-500 text-white flex items-center justify-center text-4xl shadow-2xl mb-8">

                  {item.icon}

                </div>

                {/* TITLE */}
                <h3 className="text-3xl font-black text-[#07294d] mb-5 leading-tight">
                  {item.title}
                </h3>

                {/* LINE */}
                <div className="w-20 h-[5px] bg-pink-300 rounded-full mb-7"></div>

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

export default PlaywayKindergarten;