import React from "react";
import { motion } from "framer-motion";
import {
  FaHeart,
  FaHandsHelping,
  FaLeaf,
  FaGem,
  FaStar,
  FaUserShield,
} from "react-icons/fa";

const values = [
  {
    title: "Compassion",
    icon: <FaHeart />,
  },

  {
    title: "Integrity",
    icon: <FaUserShield />,
  },

  {
    title: "Kindness",
    icon: <FaHandsHelping />,
  },

  {
    title: "Perseverance",
    icon: <FaStar />,
  },
];

const ValueEducation = () => {
  return (
    <section className="bg-[#fdfcf8] overflow-hidden">

      {/* ================= HERO ================= */}
      <div className="relative min-h-screen">

        {/* SIDE DESIGN */}
        <div className="absolute top-0 left-0 w-[38%] h-full bg-[#1c1c1c] hidden lg:block"></div>

        {/* CIRCLE DESIGN */}
        <div className="absolute top-[-120px] right-[-120px] w-[400px] h-[400px] rounded-full bg-[#d4a373]/10 blur-3xl"></div>

        {/* MAIN */}
        <div className="max-w-[1800px] mx-auto px-6 relative z-10 py-24">

          <div className="grid lg:grid-cols-2 gap-20 items-center min-h-screen">

            {/* ================= LEFT IMAGE ================= */}
            <motion.div
              initial={{ opacity: 0, x: -70 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.9 }}
              className="relative"
            >

              {/* IMAGE BOX */}
              <div className="relative z-10">

                <img
                  src="https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&w=1800&q=80"
                  alt="value education"
                  className="w-full h-[850px] object-cover rounded-[50px] shadow-[0_35px_120px_rgba(0,0,0,0.3)]"
                />

                {/* OVERLAY */}
                <div className="absolute inset-0 rounded-[50px] bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>

                {/* FLOATING QUOTE */}
                <motion.div
                  animate={{ y: [0, -15, 0] }}
                  transition={{ duration: 4, repeat: Infinity }}
                  className="absolute bottom-10 left-10 right-10 bg-white rounded-[35px] p-8 shadow-[0_25px_90px_rgba(0,0,0,0.2)]"
                >

                  <div className="flex items-start gap-6">

                    <div className="w-20 h-20 rounded-[25px] bg-[#1c1c1c] text-white flex items-center justify-center text-4xl shadow-xl">

                      <FaLeaf />

                    </div>

                    <div>

                      <h3 className="text-3xl font-black text-[#1c1c1c] mb-3">
                        Building Strong Character
                      </h3>

                      <p className="text-gray-600 text-lg leading-8">

                        We nurture students with values,
                        discipline and positive ethics to
                        become responsible citizens.

                      </p>

                    </div>

                  </div>

                </motion.div>

              </div>

              {/* BORDER EFFECT */}
              <div className="absolute -bottom-8 -right-8 w-full h-full border-[3px] border-[#d4a373]/20 rounded-[50px]"></div>

            </motion.div>

            {/* ================= RIGHT CONTENT ================= */}
            <motion.div
              initial={{ opacity: 0, x: 70 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.9 }}
              className="relative"
            >

              {/* SMALL TAG */}
              <div className="inline-flex items-center gap-4 px-7 py-4 rounded-full bg-[#fff3e6] border border-[#f3d5b5] mb-10">

                <div className="w-12 h-12 rounded-full bg-[#d4a373] text-white flex items-center justify-center text-xl shadow-lg">

                  <FaGem />

                </div>

                <p className="uppercase tracking-[7px] text-[#1c1c1c] text-sm font-bold">
                  Value Based Education
                </p>

              </div>

              {/* HEADING */}
              <h1 className="text-6xl md:text-8xl xl:text-[115px] font-black leading-[0.92] text-[#1c1c1c]">

                Values
                <br />

                Shape
                <br />

                <span className="text-[#d4a373]">
                  Future
                </span>

              </h1>

              {/* LINE */}
              <div className="w-52 h-[8px] bg-[#d4a373] rounded-full mt-10 mb-10"></div>

              {/* TEXT */}
              <p className="text-gray-700 text-2xl leading-[52px] max-w-[820px] font-medium">

                At Cambridge, we believe in creating individuals
                with a harmonious and holistic outlook where
                values become the foundation of life. Students
                are guided towards honesty, kindness,
                compassion, integrity and perseverance through
                workshops, presentations and meaningful activities.

              </p>

              {/* BIG FEATURE BOX */}
              <div className="mt-14 bg-white rounded-[40px] shadow-[0_25px_80px_rgba(0,0,0,0.08)] p-10 border border-[#f1e3d3]">

                <div className="flex items-start gap-6">

                  <div className="w-24 h-24 rounded-[30px] bg-[#1c1c1c] text-white flex items-center justify-center text-5xl shadow-xl">

                    <FaHandsHelping />

                  </div>

                  <div>

                    <h3 className="text-4xl font-black text-[#1c1c1c] mb-5">
                      Holistic Development
                    </h3>

                    <p className="text-gray-600 text-xl leading-10">

                      We focus on developing morally strong,
                      socially responsible and emotionally
                      balanced students who contribute positively
                      to society.

                    </p>

                  </div>

                </div>

              </div>

            </motion.div>

          </div>

        </div>

      </div>

      {/* ================= VALUES SECTION ================= */}
      <div className="max-w-[1750px] mx-auto px-6 pb-32">

        {/* HEADING */}
        <div className="flex flex-col lg:flex-row justify-between gap-10 items-end mb-24">

          <div>

            <p className="uppercase tracking-[7px] text-[#d4a373] font-bold mb-5">
              Core Human Values
            </p>

            <h2 className="text-5xl md:text-7xl font-black text-[#1c1c1c] leading-[1]">

              Values We
              <br />

              Encourage

            </h2>

          </div>

          <p className="text-gray-600 text-xl leading-10 max-w-[650px]">

            Our value-based education system inspires students
            to become compassionate, disciplined and confident
            individuals with strong moral ethics.

          </p>

        </div>

        {/* GRID */}
        <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-8">

          {values.map((item, index) => (

            <motion.div
              key={index}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: index * 0.08 }}
              viewport={{ once: true }}
              whileHover={{
                y: -15,
              }}
              className="group relative overflow-hidden bg-white rounded-[40px] p-10 shadow-[0_20px_70px_rgba(0,0,0,0.08)] border border-[#f1e3d3]"
            >

              {/* TOP BAR */}
              <div className="absolute top-0 left-0 w-full h-[7px] bg-[#d4a373]"></div>

              {/* NUMBER */}
              <h1 className="absolute top-5 right-6 text-[95px] font-black text-[#f8efe6]">

                0{index + 1}

              </h1>

              {/* ICON */}
              <div className="relative z-10 w-24 h-24 rounded-[30px] bg-[#fff3e6] text-[#d4a373] flex items-center justify-center text-5xl shadow-inner mb-8">

                {item.icon}

              </div>

              {/* TITLE */}
              <h3 className="relative z-10 text-3xl font-black text-[#1c1c1c] leading-tight">

                {item.title}

              </h3>

              {/* LINE */}
              <div className="w-20 h-[6px] bg-[#d4a373] rounded-full mt-6"></div>

            </motion.div>

          ))}

        </div>

      </div>

    </section>
  );
};

export default ValueEducation;