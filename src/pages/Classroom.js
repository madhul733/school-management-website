import React from "react";
import { motion } from "framer-motion";
import {
  FaChalkboardTeacher,
  FaDesktop,
  FaLightbulb,
  FaUserGraduate,
  FaSchool,
  FaCouch,
} from "react-icons/fa";

const features = [
  {
    title: "Smart Boards",
    desc: "Digitally equipped classrooms for immersive and interactive learning.",
    icon: <FaDesktop />,
  },

  {
    title: "Expert Teachers",
    desc: "Dedicated teachers provide individual attention and academic guidance.",
    icon: <FaChalkboardTeacher />,
  },

  {
    title: "Interactive Sessions",
    desc: "Classroom sessions are designed to be practical, engaging and dynamic.",
    icon: <FaLightbulb />,
  },

  {
    title: "Student Motivation",
    desc: "Positive environment encourages confidence and academic excellence.",
    icon: <FaUserGraduate />,
  },

  {
    title: "Modern Infrastructure",
    desc: "Beautifully designed classrooms with world-class facilities.",
    icon: <FaSchool />,
  },

  {
    title: "Comfortable Seating",
    desc: "Ergonomic furniture ensures comfort and better concentration.",
    icon: <FaCouch />,
  },
];

const Classroom = () => {
  return (
    <section className="relative w-full overflow-hidden bg-[#f4f8fc] py-28">

      {/* BACKGROUND */}
      <div className="absolute top-0 left-0 w-full h-[450px] bg-[#07294d] rounded-b-[90px]"></div>

      <div className="absolute top-20 right-[-100px] w-[300px] h-[300px] bg-cyan-400/20 blur-3xl rounded-full"></div>

      <div className="absolute bottom-0 left-[-120px] w-[350px] h-[350px] bg-blue-300/20 blur-3xl rounded-full"></div>

      {/* MAIN */}
      <div className="max-w-[1600px] mx-auto px-6 relative z-10">

        {/* ================= TOP SECTION ================= */}
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-32">

          {/* LEFT */}
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
          >

            {/* SMALL TAG */}
            <div className="inline-flex items-center gap-3 bg-white/10 border border-white/10 backdrop-blur-xl px-7 py-3 rounded-full mb-8">

              <span className="text-cyan-300 text-lg">🏫</span>

              <p className="uppercase tracking-[5px] text-white text-sm font-bold">
                Learning Spaces
              </p>

            </div>

            {/* HEADING */}
            <h1 className="text-5xl md:text-7xl xl:text-8xl font-black text-white leading-[1.05]">

              Modern
              <br />

              <span className="text-cyan-300">
                Classrooms
              </span>

            </h1>

            {/* LINE */}
            <div className="w-36 h-[7px] bg-gradient-to-r from-cyan-300 to-blue-400 rounded-full mt-10 mb-10"></div>

            {/* TEXT */}
            <p className="text-black text-xl leading-10 max-w-[700px] font-medium">

              Our school provides a technologically advanced
              and student-friendly classroom environment that
              inspires excellence, creativity and meaningful learning.

            </p>

            {/* STATS */}
            <div className="grid grid-cols-2 gap-6 mt-14">

              <div className="bg-white/10 border border-white/10 backdrop-blur-xl rounded-[30px] p-7">

                <h2 className="text-5xl font-black text-black mb-3">
                  100%
                </h2>

                <p className="text-black text-lg font-medium">
                  Interactive Learning
                </p>

              </div>

              <div className="bg-white/10 border border-white/10 backdrop-blur-xl rounded-[30px] p-7">

                <h2 className="text-5xl font-black text-black mb-3">
                  Smart
                </h2>

                <p className="text-black text-lg font-medium">
                  Technology Enabled
                </p>

              </div>

            </div>

          </motion.div>

          {/* RIGHT IMAGE */}
          <motion.div
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="relative"
          >

            {/* MAIN IMAGE */}
            <div className="relative overflow-hidden rounded-[50px] shadow-[0_40px_120px_rgba(0,0,0,0.25)]">

              <img
                src="https://images.unsplash.com/photo-1503676260728-1c00da094a0b?auto=format&fit=crop&w=1600&q=80"
                alt="classroom"
                className="w-full h-[700px] object-cover hover:scale-105 transition duration-700"
              />

            </div>

            {/* FLOATING CARD */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              viewport={{ once: true }}
              className="absolute -bottom-10 -left-8 bg-white rounded-[35px] p-8 shadow-[0_30px_80px_rgba(0,0,0,0.18)] max-w-[360px]"
            >

              <div className="flex items-start gap-5">

                <div className="w-18 h-18 rounded-[24px] bg-gradient-to-br from-cyan-500 to-blue-500 text-white flex items-center justify-center text-4xl p-5 shadow-xl">

                  <FaDesktop />

                </div>

                <div>

                  <h3 className="text-2xl font-black text-[#07294d] mb-3">
                    Smart Learning
                  </h3>

                  <p className="text-gray-700 leading-8">

                    Smart boards and digital tools
                    make every lesson engaging and interactive.

                  </p>

                </div>

              </div>

            </motion.div>

          </motion.div>

        </div>

        {/* ================= MIDDLE SECTION ================= */}
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="bg-white rounded-[60px] p-10 md:p-16 shadow-[0_30px_120px_rgba(0,0,0,0.08)] mb-32 relative overflow-hidden"
        >

          {/* BG SHAPES */}
          <div className="absolute top-[-100px] right-[-100px] w-[260px] h-[260px] bg-cyan-50 rounded-full"></div>

          <div className="absolute bottom-[-100px] left-[-100px] w-[260px] h-[260px] bg-blue-50 rounded-full"></div>

          <div className="grid lg:grid-cols-2 gap-16 items-center relative z-10">

            {/* LEFT */}
            <div>

              <p className="uppercase tracking-[5px] text-cyan-500 font-bold mb-5">
                Why Our Classrooms Stand Out
              </p>

              <h2 className="text-5xl md:text-6xl font-black text-[#07294d] leading-[1.1] mb-8">

                Designed For
                <br />
                Better Outcomes

              </h2>

              <div className="w-32 h-[6px] bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full mb-10"></div>

              <p className="text-gray-700 text-xl leading-10 mb-8">

                Our classrooms are aesthetically designed
                with ergonomic furniture and modern infrastructure
                to provide comfort and focus during learning.

              </p>

              <p className="text-gray-700 text-xl leading-10">

                Skilled teachers combine innovation with
                interactive teaching methodologies to make
                every classroom session meaningful and engaging.

              </p>

            </div>

            {/* RIGHT IMAGE GRID */}
            <div className="grid grid-cols-2 gap-6">

              <img
                src="https://images.unsplash.com/photo-1588072432904-843af37f03ed?auto=format&fit=crop&w=900&q=80"
                alt=""
                className="rounded-[30px] h-[250px] object-cover shadow-xl"
              />

              <img
                src="https://images.unsplash.com/photo-1513258496099-48168024aec0?auto=format&fit=crop&w=900&q=80"
                alt=""
                className="rounded-[30px] h-[250px] object-cover shadow-xl mt-14"
              />

              <img
                src="https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&w=900&q=80"
                alt=""
                className="rounded-[30px] h-[250px] object-cover shadow-xl -mt-10"
              />

              <img
                src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=900&q=80"
                alt=""
                className="rounded-[30px] h-[250px] object-cover shadow-xl"
              />

            </div>

          </div>

        </motion.div>

        {/* ================= FEATURES ================= */}
        <div className="text-center mb-20">

          <p className="uppercase tracking-[5px] text-cyan-500 font-bold mb-5">
            Facilities & Environment
          </p>

          <h2 className="text-5xl md:text-6xl font-black text-[#07294d]">

            Classroom Features

          </h2>

        </div>

        {/* FEATURE GRID */}
        <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-8">

          {features.map((item, index) => (

            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
              viewport={{ once: true }}
              whileHover={{ y: -12 }}
              className="group bg-white rounded-[40px] p-10 shadow-[0_20px_80px_rgba(0,0,0,0.06)] hover:shadow-[0_25px_90px_rgba(0,0,0,0.1)] transition duration-500 relative overflow-hidden"
            >

              {/* TOP SHAPE */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-cyan-50 rounded-bl-[80px]"></div>

              {/* ICON */}
              <div className="relative z-10 w-20 h-20 rounded-[28px] bg-gradient-to-br from-cyan-500 to-blue-500 text-white flex items-center justify-center text-4xl shadow-2xl mb-8">

                {item.icon}

              </div>

              {/* TITLE */}
              <h3 className="relative z-10 text-3xl font-black text-[#07294d] mb-5">
                {item.title}
              </h3>

              {/* DESC */}
              <p className="relative z-10 text-gray-700 text-lg leading-9">
                {item.desc}
              </p>

            </motion.div>

          ))}

        </div>

      </div>

    </section>
  );
};

export default Classroom;