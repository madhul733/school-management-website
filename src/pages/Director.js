import React from "react";
import { motion } from "framer-motion";
import {
  FaGraduationCap,
  FaLightbulb,
  FaUsers,
  FaQuoteLeft,
} from "react-icons/fa";

import heroImg from "../assets/uploads/school.jpg";
import directorImg from "../assets/uploads/director.jpg";



export default function DirectorMessage() {

  const highlights = [
    {
      icon: <FaGraduationCap />,
      title: "Academic Excellence",
      text: "Empowering students through innovative learning and quality education.",
    },
    {
      icon: <FaLightbulb />,
      title: "Innovation & Creativity",
      text: "Encouraging analytical thinking, innovation, and creative exploration.",
    },
    {
      icon: <FaUsers />,
      title: "Holistic Development",
      text: "Building leadership, discipline, ethics, and confidence in every learner.",
    },
  ];

  return (
    <div className="w-full bg-[#f4f8fd] overflow-hidden">

      {/* ================= HERO SECTION ================= */}
      <section className="relative h-[600px] overflow-hidden">

        {/* HERO IMAGE */}
        <motion.img
          initial={{ scale: 1.12 }}
          animate={{ scale: 1 }}
          transition={{ duration: 2 }}
          src={heroImg}
          alt="hero"
          className="w-full h-full object-cover"
        />

        {/* OVERLAY */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#021427]/95 via-[#07294d]/78 to-[#07294d]/30"></div>

        {/* GLOW */}
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#facc15]/10 blur-3xl rounded-full"></div>

        {/* HERO CONTENT */}
        <motion.div
          initial={{ opacity: 0, y: 70 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="absolute inset-0 flex items-center"
        >

          <div className="max-w-[1400px] mx-auto w-full px-6 md:px-16">

            <div className="max-w-[720px]">

              <p className="uppercase tracking-[8px] text-[#facc15] text-sm md:text-lg mb-5 font-medium">
                Visionary Leadership
              </p>

              <h1 className="text-white text-5xl md:text-7xl font-bold leading-[1.1]">

                Director's
                <br />
                Message

              </h1>

              <div className="w-40 h-[5px] bg-[#facc15] rounded-full mt-8"></div>

              <p className="text-white/80 text-lg md:text-xl leading-9 mt-10 max-w-[650px]">
                Inspiring excellence through innovation,
                discipline, and holistic education.
              </p>

            </div>

          </div>

        </motion.div>

      </section>

      {/* ================= MAIN SECTION ================= */}
      <section className="max-w-[1450px] mx-auto px-6 py-28">

        {/* ================= MAIN CARD ================= */}
        <motion.div
          initial={{ opacity: 0, y: 80 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="relative bg-white rounded-[45px] overflow-hidden shadow-[0_20px_60px_rgba(0,0,0,0.08)]"
        >

          {/* TOP DESIGN */}
          <div className="absolute top-0 left-0 w-full h-3 bg-gradient-to-r from-[#facc15] via-[#fbbf24] to-[#facc15]"></div>

          {/* ================= GRID ================= */}
          <div className="grid lg:grid-cols-[1fr_430px]">

            {/* ================= CONTENT SIDE ================= */}
            <div className="relative p-10 md:p-16 lg:p-20 overflow-hidden">

              {/* Glow */}
              <div className="absolute bottom-0 left-0 w-[350px] h-[350px] bg-[#facc15]/10 blur-3xl rounded-full"></div>

              {/* Quote */}
              <FaQuoteLeft className="text-[#facc15] text-7xl mb-8 relative z-10" />

              <div className="space-y-9 text-[19px] leading-[42px] text-[#4b5563] relative z-10">

                <h2 className="text-5xl font-bold text-[#07294d] leading-tight">

                  Inspiring Excellence
                  <br />
                  Through Education

                </h2>

                <p className="italic text-[#07294d] font-medium text-[22px] leading-[40px]">
                  “There is no Edifier on Earth as great as Education.”
                </p>

                <p>
                  Since time immemorial, education has always been the
                  greatest and the most powerful medium of awakening and
                  refinement. It ignites young minds and nurtures
                  individuals with wisdom, values, and character.
                  Education is truly a blend of rich traditions and
                  modernity with a strong emphasis on character building.
                </p>

                <p>
                  In consonance with this vision, Cambridge International
                  School, Nakodar provides an ideal environment for
                  holistic development through competent educators,
                  state-of-the-art infrastructure, innovative learning
                  methodologies, and a nurturing atmosphere.
                </p>

                <p>
                  The children of today are preparing to become the
                  responsible citizens of tomorrow. The future of our
                  country depends greatly on the quality of education
                  imparted to them today. Keeping this in mind, our school
                  remains committed to delivering high-quality education
                  to every child who walks through our doors.
                </p>

                <p>
                  We strive to stimulate curiosity in young impressionable
                  minds and equip students with the skills and values
                  required to become better human beings. Guided by our
                  vision of “Nurturing Talents for a Bright Future,” we
                  foster an environment filled with care, creativity,
                  discipline, and innovation.
                </p>

                <p>
                  Our student-centered approach goes beyond textbooks and
                  classroom boundaries. We encourage learners to explore
                  opportunities for growth, creativity, leadership, and
                  innovation while helping them realize their dreams and
                  aspirations with confidence.
                </p>

                <p>
                  Students at Cambridge International School develop
                  practical skills and analytical thinking abilities that
                  empower them to face real-world challenges effectively.
                  We are deeply grateful to parents for their trust,
                  support, and collaboration in shaping the future of our
                  students.
                </p>

                {/* ================= MESSAGE BOX ================= */}
                <motion.div
                  whileHover={{ scale: 1.01 }}
                  transition={{ duration: 0.3 }}
                  className="bg-[#eef4fb] border-l-[6px] border-[#07294d] p-9 rounded-[30px] shadow-md"
                >

                  <h3 className="text-3xl font-bold text-[#07294d] mb-5">
                    Managing Director's Message
                  </h3>

                  <p className="text-[19px] leading-[38px] text-[#4b5563] italic">
                    “Education is a collaborative journey between the
                    school and parents. Together, we strive to create a
                    progressive path where every child is adorned with a
                    true ‘Stamp of Excellence’.”
                  </p>

                  <div className="mt-6">

                    <h4 className="text-2xl font-bold text-[#07294d]">
                      Ripu Jeet Angra
                    </h4>

                    <p className="text-[#facc15] font-semibold mt-1">
                      Managing Director
                    </p>

                  </div>

                </motion.div>

              </div>

            </div>

            {/* ================= IMAGE SIDE ================= */}
            <div className="relative bg-[#07294d] p-8 lg:p-10 overflow-hidden">

              {/* Glow */}
              <div className="absolute top-0 right-0 w-72 h-72 bg-[#facc15]/10 blur-3xl rounded-full"></div>

              <motion.div
                whileHover={{ y: -8 }}
                transition={{ duration: 0.3 }}
                className="relative z-10"
              >

                {/* IMAGE */}
                <div className="overflow-hidden rounded-[35px] shadow-[0_20px_50px_rgba(0,0,0,0.4)]">

                  <img
                    src={directorImg}
                    alt="Director"
                    className="w-full h-[600px] object-cover hover:scale-105 transition duration-700"
                  />

                </div>

                {/* NAME CARD */}
                <div className="bg-white rounded-[28px] p-7 shadow-2xl -mt-12 mx-6 relative z-20 text-center">

                  <h3 className="text-3xl font-bold text-[#07294d]">
                    Ripu Jeet Angra
                  </h3>

                  <p className="text-[#facc15] font-semibold mt-2 text-lg tracking-wide">
                    Managing Director
                  </p>

                </div>

              </motion.div>

            </div>

          </div>

        </motion.div>

        {/* ================= HIGHLIGHTS ================= */}
        <div className="grid md:grid-cols-3 gap-8 mt-20">

          {highlights.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
              whileHover={{ y: -10 }}
              className="relative bg-white rounded-[35px] p-10 shadow-[0_15px_40px_rgba(0,0,0,0.08)] overflow-hidden"
            >

              {/* Glow */}
              <div className="absolute top-0 right-0 w-40 h-40 bg-[#facc15]/10 blur-2xl rounded-full"></div>

              <div className="relative z-10">

                <div className="w-20 h-20 rounded-3xl bg-[#07294d] text-white flex items-center justify-center text-3xl shadow-lg mb-8">

                  {item.icon}

                </div>

                <h3 className="text-3xl font-bold text-[#07294d] mb-5">
                  {item.title}
                </h3>

                <p className="text-gray-600 leading-8 text-[17px]">
                  {item.text}
                </p>

              </div>

            </motion.div>
          ))}

        </div>

      </section>

    </div>
  );
}