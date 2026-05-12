import React from "react";
import { motion } from "framer-motion";
import {
  FaFlask,
  FaMicroscope,
  FaLaptopCode,
  FaAtom,
  FaChalkboardTeacher,
  FaBrain,
  FaShieldAlt,
  FaRocket,
} from "react-icons/fa";

const labs = [
  {
    title: "Physics Lab",
    desc: "Modern apparatus and practical experiments help students understand scientific concepts with clarity.",
    icon: <FaAtom />,
  },

  {
    title: "Chemistry Lab",
    desc: "Well-equipped chemistry laboratory for safe and interactive practical learning.",
    icon: <FaFlask />,
  },

  {
    title: "Biology Lab",
    desc: "Advanced microscopes and specimens provide hands-on scientific exploration.",
    icon: <FaMicroscope />,
  },

  {
    title: "Computer Lab",
    desc: "Technology-enabled computer labs with latest systems and internet facilities.",
    icon: <FaLaptopCode />,
  },

  {
    title: "Expert Guidance",
    desc: "Experienced teachers guide students through practical and experimental learning.",
    icon: <FaChalkboardTeacher />,
  },

  {
    title: "Innovation & Research",
    desc: "Students are encouraged to think creatively, experiment and innovate confidently.",
    icon: <FaBrain />,
  },
];

const Labs = () => {
  return (
    <section className="relative overflow-hidden bg-[#f6faff] py-32">

      {/* BACKGROUND */}
      <div className="absolute top-0 left-0 w-full h-[780px] bg-gradient-to-br from-[#041c38] via-[#07294d] to-[#0b3f75]"></div>

      <div className="absolute top-[-150px] right-[-100px] w-[450px] h-[450px] bg-cyan-400/10 rounded-full blur-3xl"></div>

      <div className="absolute bottom-[-150px] left-[-100px] w-[450px] h-[450px] bg-blue-300/10 rounded-full blur-3xl"></div>

      {/* GRID */}
      <div className="absolute inset-0 opacity-[0.05] bg-[linear-gradient(to_right,#ffffff_1px,transparent_1px),linear-gradient(to_bottom,#ffffff_1px,transparent_1px)] bg-[size:70px_70px]"></div>

      {/* MAIN */}
      <div className="max-w-[1650px] mx-auto px-6 relative z-10">

        {/* ================= HERO ================= */}
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

              <span className="text-cyan-300 text-xl">🧪</span>

              <p className="uppercase tracking-[6px] text-white text-sm font-bold">
                Science & Innovation
              </p>

            </div>

            {/* HEADING */}
            <h1 className="text-5xl md:text-7xl xl:text-8xl font-black text-white leading-[1.02]">

              Advanced
              <br />

              <span className="text-cyan-300">
                Laboratories
              </span>

            </h1>

            {/* UNDERLINE */}
            <div className="w-40 h-[8px] bg-gradient-to-r from-cyan-300 via-cyan-400 to-blue-400 rounded-full mt-10 mb-12"></div>

            {/* TEXT */}
            <p className="text-[#dbeafe] text-xl leading-10 max-w-[760px] font-medium">

              Our school laboratories are designed to provide
              students with practical exposure, scientific thinking
              and hands-on learning experiences in a safe and
              innovative environment.

            </p>

            {/* STATS */}
            <div className="grid grid-cols-2 gap-7 mt-14">

              <motion.div
                whileHover={{ y: -8 }}
                className="bg-white/10 border border-white/10 backdrop-blur-xl rounded-[35px] p-8 shadow-[0_25px_60px_rgba(0,0,0,0.2)]"
              >

                <h2 className="text-6xl font-black text-white mb-4">
                  STEM
                </h2>

                <p className="text-[#dbeafe] text-lg font-semibold">
                  Practical Learning
                </p>

              </motion.div>

              <motion.div
                whileHover={{ y: -8 }}
                className="bg-white/10 border border-white/10 backdrop-blur-xl rounded-[35px] p-8 shadow-[0_25px_60px_rgba(0,0,0,0.2)]"
              >

                <h2 className="text-6xl font-black text-white mb-4">
                  Safe
                </h2>

                <p className="text-[#dbeafe] text-lg font-semibold">
                  Modern Infrastructure
                </p>

              </motion.div>

            </div>

          </motion.div>

          {/* RIGHT IMAGE */}
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
                src="https://images.unsplash.com/photo-1532187643603-ba119ca4109e?auto=format&fit=crop&w=1600&q=80"
                alt="labs"
                className="w-full h-[850px] object-cover group-hover:scale-105 transition duration-700"
              />

              {/* OVERLAY */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#021427]/90 via-transparent to-transparent"></div>

              {/* CONTENT */}
              <div className="absolute bottom-10 left-10 right-10 bg-white/10 border border-white/10 backdrop-blur-2xl rounded-[35px] p-8">

                <div className="flex items-start gap-6">

                  <div className="w-20 h-20 rounded-[28px] bg-gradient-to-br from-cyan-400 to-blue-500 text-white flex items-center justify-center text-4xl shadow-2xl flex-shrink-0">

                    <FaRocket />

                  </div>

                  <div>

                    <h3 className="text-3xl font-black text-white mb-4">
                      Hands-On Learning
                    </h3>

                    <p className="text-[#dbeafe] text-lg leading-8">

                      Students gain practical knowledge through
                      experimentation, observation and innovation.

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

                  <FaShieldAlt />

                </div>

                <div>

                  <h3 className="text-2xl font-black text-[#07294d]">
                    Safe Environment
                  </h3>

                  <p className="text-gray-500 mt-1">
                    Secure • Practical • Advanced
                  </p>

                </div>

              </div>

            </motion.div>

          </motion.div>

        </div>

        {/* ================= CONTENT BLOCK ================= */}
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="relative overflow-hidden bg-white rounded-[65px] shadow-[0_35px_140px_rgba(0,0,0,0.08)] p-10 md:p-20 mb-36"
        >

          {/* SHAPES */}
          <div className="absolute top-[-120px] right-[-120px] w-[300px] h-[300px] bg-cyan-50 rounded-full"></div>

          <div className="absolute bottom-[-120px] left-[-120px] w-[300px] h-[300px] bg-blue-50 rounded-full"></div>

          <div className="grid lg:grid-cols-2 gap-20 items-center relative z-10">

            {/* LEFT */}
            <div>

              <p className="uppercase tracking-[5px] text-cyan-500 font-bold mb-5">
                Learning Through Experiments
              </p>

              <h2 className="text-5xl md:text-6xl font-black text-[#07294d] leading-[1.1] mb-10">

                Innovation,
                <br />
                Discovery & Science

              </h2>

              <div className="w-36 h-[7px] bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full mb-10"></div>

              <p className="text-gray-700 text-xl leading-10 mb-8">

                Our laboratories encourage students to
                develop scientific thinking, problem-solving
                abilities and analytical skills through experiments.

              </p>

              <p className="text-gray-700 text-xl leading-10 mb-8">

                Every lab is equipped with modern instruments,
                digital resources and expert guidance to provide
                meaningful practical learning experiences.

              </p>

              <p className="text-gray-700 text-xl leading-10">

                Students learn by observing, experimenting
                and innovating in a safe and inspiring atmosphere.

              </p>

            </div>

            {/* RIGHT IMAGES */}
            <div className="grid grid-cols-2 gap-7">

              <img
                src="https://images.unsplash.com/photo-1576086213369-97a306d36557?auto=format&fit=crop&w=900&q=80"
                alt=""
                className="rounded-[35px] h-[280px] object-cover shadow-2xl"
              />

              <img
                src="https://images.unsplash.com/photo-1532094349884-543bc11b234d?auto=format&fit=crop&w=900&q=80"
                alt=""
                className="rounded-[35px] h-[280px] object-cover shadow-2xl mt-16"
              />

              <img
                src="https://images.unsplash.com/photo-1581093458791-9d42e0d0b1a1?auto=format&fit=crop&w=900&q=80"
                alt=""
                className="rounded-[35px] h-[280px] object-cover shadow-2xl -mt-12"
              />

              <img
                src="https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=900&q=80"
                alt=""
                className="rounded-[35px] h-[280px] object-cover shadow-2xl"
              />

            </div>

          </div>

        </motion.div>

        {/* ================= FEATURES ================= */}
        <div className="text-center mb-24">

          <p className="uppercase tracking-[5px] text-cyan-500 font-bold mb-5">
            Infrastructure & Facilities
          </p>

          <h2 className="text-5xl md:text-7xl font-black text-[#07294d] leading-tight">

            Laboratory Highlights

          </h2>

        </div>

        {/* GRID */}
        <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-10">

          {labs.map((item, index) => (

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
              <div className="absolute top-0 left-0 w-full h-[7px] bg-gradient-to-r from-cyan-400 via-blue-500 to-cyan-400"></div>

              {/* BG SHAPE */}
              <div className="absolute top-0 right-0 w-36 h-36 bg-cyan-50 rounded-bl-[100px]"></div>

              {/* NUMBER */}
              <h1 className="absolute top-5 right-8 text-[90px] font-black text-cyan-50">

                0{index + 1}

              </h1>

              {/* CONTENT */}
              <div className="relative z-10">

                {/* ICON */}
                <div className="w-22 h-22 rounded-[30px] bg-gradient-to-br from-cyan-400 to-blue-500 text-white flex items-center justify-center text-4xl shadow-2xl mb-8 p-5">

                  {item.icon}

                </div>

                {/* TITLE */}
                <h3 className="text-3xl font-black text-[#07294d] mb-5 leading-tight">
                  {item.title}
                </h3>

                {/* LINE */}
                <div className="w-20 h-[5px] bg-cyan-200 rounded-full mb-7"></div>

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

export default Labs;