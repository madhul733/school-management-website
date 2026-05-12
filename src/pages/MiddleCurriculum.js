import React from "react";
import { motion } from "framer-motion";
import {
  FaBookOpen,
  FaLaptopCode,
  FaRunning,
  FaBalanceScale,
  FaUsers,
  FaLightbulb,
  FaGraduationCap,
} from "react-icons/fa";

const highlights = [
  {
    title: "Integrated Curriculum",
    desc: "A seamless integration of scholastic and foundational learning for holistic growth.",
    icon: <FaBookOpen />,
  },

  {
    title: "Technology Mastery",
    desc: "Students build digital literacy, innovation and future-ready technology skills.",
    icon: <FaLaptopCode />,
  },

  {
    title: "Sports & Fitness",
    desc: "Physical education and sports encourage discipline, teamwork and fitness.",
    icon: <FaRunning />,
  },

  {
    title: "Values & Citizenship",
    desc: "Students understand governance, rights, responsibilities and ethical leadership.",
    icon: <FaBalanceScale />,
  },

  {
    title: "Collaborative Learning",
    desc: "Respectful teacher-learner relationships create active participation and confidence.",
    icon: <FaUsers />,
  },

  {
    title: "Confidence Building",
    desc: "Learners strengthen self-belief, values and critical thinking abilities.",
    icon: <FaLightbulb />,
  },
];

const MiddleSchool = () => {
  return (
    <section className="relative w-full py-32 overflow-hidden bg-gradient-to-br from-[#f8fbff] via-[#f5f7fc] to-[#eef4ff]">

      {/* ================= BACKGROUND ================= */}
      <div className="absolute top-[-150px] left-[-150px] w-[500px] h-[500px] bg-indigo-200/20 blur-3xl rounded-full"></div>

      <div className="absolute bottom-[-150px] right-[-150px] w-[500px] h-[500px] bg-cyan-200/20 blur-3xl rounded-full"></div>

      {/* GRID */}
      <div className="absolute inset-0 opacity-[0.03] bg-[linear-gradient(to_right,#07294d_1px,transparent_1px),linear-gradient(to_bottom,#07294d_1px,transparent_1px)] bg-[size:70px_70px]"></div>

      {/* ================= MAIN ================= */}
      <div className="max-w-[1600px] mx-auto px-6 relative z-10">

        {/* ================= HERO ================= */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="text-center mb-32"
        >

          {/* TAG */}
          <div className="inline-flex items-center gap-3 px-8 py-4 rounded-full bg-white border border-indigo-100 shadow-[0_15px_40px_rgba(0,0,0,0.05)] mb-10">

            <span className="text-indigo-500 text-xl">🏫</span>

            <p className="uppercase tracking-[6px] text-indigo-500 text-sm font-black">
              Grades VI – VIII
            </p>

          </div>

          {/* HEADING */}
          <h1 className="text-5xl md:text-7xl xl:text-8xl font-black text-[#07294d] leading-[1.08]">

            <span className="relative inline-block pb-8">

              Middle
              <br />
              School

              {/* UNDERLINE */}
              <span className="absolute left-1/2 -translate-x-1/2 bottom-1 w-[105%] h-6 bg-gradient-to-r from-indigo-100 via-indigo-200 to-indigo-100 rounded-full blur-[1px] opacity-90"></span>

              {/* SHINE */}
              <span className="absolute left-1/2 -translate-x-1/2 bottom-2 w-[70%] h-[4px] bg-white/70 rounded-full"></span>

            </span>

          </h1>

          {/* TEXT */}
          <p className="max-w-[1250px] mx-auto text-gray-600 text-xl leading-10 mt-14">

            The Middle School curriculum combines academic
            excellence with foundational learning to ensure
            students develop concepts, life skills, creativity,
            leadership and social responsibility.

          </p>

        </motion.div>

        {/* ================= FEATURED SECTION ================= */}
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-32">

          {/* ================= LEFT IMAGE SECTION ================= */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="relative"
          >

            {/* MAIN IMAGE */}
            <div className="relative overflow-hidden rounded-[55px] shadow-[0_35px_120px_rgba(0,0,0,0.15)] group">

              <img
                src="https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&w=1600&q=80"
                alt="middle-school"
                className="w-full h-[760px] object-cover group-hover:scale-105 transition duration-700"
              />

              {/* OVERLAY */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#021427]/90 via-[#021427]/10 to-transparent"></div>

              {/* FLOATING CONTENT */}
              <div className="absolute bottom-8 left-8 right-8 bg-white/90 backdrop-blur-2xl rounded-[35px] p-8 shadow-2xl">

                <div className="flex items-start gap-5">

                  <div className="w-20 h-20 rounded-[28px] bg-indigo-500 text-white flex items-center justify-center text-4xl shadow-2xl flex-shrink-0">

                    <FaGraduationCap />

                  </div>

                  <div>

                    <h3 className="text-3xl font-black text-[#07294d] mb-4">
                      Holistic Development
                    </h3>

                    <p className="text-gray-600 text-lg leading-8">

                      Students gain conceptual understanding,
                      confidence, leadership skills and awareness
                      of their social responsibilities.

                    </p>

                  </div>

                </div>

              </div>

            </div>

            {/* FLOATING MINI CARD */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
              className="absolute -bottom-10 -right-5 bg-white rounded-[35px] p-7 shadow-[0_25px_80px_rgba(0,0,0,0.12)] border border-white/60 hidden md:block"
            >

              <div className="flex items-center gap-5">

                <div className="w-16 h-16 rounded-[22px] bg-cyan-500 text-white flex items-center justify-center text-3xl shadow-xl">

                  📘

                </div>

                <div>

                  <h4 className="text-2xl font-black text-[#07294d]">
                    Future Ready
                  </h4>

                  <p className="text-gray-500 mt-1">
                    Skills • Values • Leadership
                  </p>

                </div>

              </div>

            </motion.div>

          </motion.div>

          {/* ================= RIGHT CONTENT ================= */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
          >

            <div className="bg-white rounded-[55px] shadow-[0_35px_120px_rgba(0,0,0,0.08)] p-10 md:p-16 relative overflow-hidden">

              {/* TOP BAR */}
              <div className="absolute top-0 left-0 w-full h-[8px] bg-gradient-to-r from-indigo-500 via-cyan-400 to-indigo-500"></div>

              {/* BG SHAPE */}
              <div className="absolute top-[-80px] right-[-80px] w-[240px] h-[240px] border-[26px] border-indigo-100 rounded-full"></div>

              {/* ICON */}
              <div className="w-24 h-24 rounded-[32px] bg-indigo-500 text-white flex items-center justify-center text-5xl shadow-2xl mb-10 relative z-10">

                🎓

              </div>

              {/* TITLE */}
              <h2 className="text-5xl font-black text-[#07294d] leading-tight mb-8 relative z-10">

                Preparing Students
                <br />
                Beyond Academics

              </h2>

              {/* LINE */}
              <div className="w-28 h-[6px] bg-indigo-200 rounded-full mb-10 relative z-10"></div>

              {/* TEXT */}
              <p className="text-gray-600 text-xl leading-10 mb-8 relative z-10">

                The Middle School programme ensures
                students strengthen concepts, application
                skills, technology understanding and
                creative thinking in a balanced learning environment.

              </p>

              <p className="text-gray-600 text-xl leading-10 mb-8 relative z-10">

                Students actively participate in arts,
                sports, fitness and collaborative activities
                that nurture discipline, teamwork and confidence.

              </p>

              <p className="text-gray-600 text-xl leading-10 relative z-10">

                Every child is encouraged to become a
                responsible citizen who understands rights,
                responsibilities, ethics and community values.

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
          className="text-center mb-24"
        >

          <h2 className="text-5xl md:text-6xl font-black text-[#07294d] leading-tight">

            <span className="relative inline-block pb-8">

              Curriculum Highlights

              {/* UNDERLINE */}
              <span className="absolute left-1/2 -translate-x-1/2 bottom-1 w-[105%] h-5 bg-indigo-100 rounded-full"></span>

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
              whileHover={{ y: -14 }}
              className="group relative overflow-hidden rounded-[45px] bg-white shadow-[0_25px_90px_rgba(0,0,0,0.08)]"
            >

              {/* TOP BAR */}
              <div className="absolute top-0 left-0 w-full h-[7px] bg-gradient-to-r from-indigo-500 via-cyan-400 to-indigo-500"></div>

              {/* GLOW */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-500 bg-gradient-to-br from-indigo-100/40 to-cyan-100/40"></div>

              {/* NUMBER */}
              <h1 className="absolute top-4 right-6 text-[95px] font-black text-indigo-50">

                0{index + 1}

              </h1>

              <div className="relative z-10 p-10">

                {/* ICON */}
                <div className="w-20 h-20 rounded-[28px] bg-indigo-500 text-white flex items-center justify-center text-4xl shadow-2xl mb-8">

                  {item.icon}

                </div>

                {/* TITLE */}
                <h3 className="text-3xl font-black text-[#07294d] mb-5 leading-tight">
                  {item.title}
                </h3>

                {/* LINE */}
                <div className="w-20 h-[5px] bg-indigo-200 rounded-full mb-7"></div>

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

export default MiddleSchool;