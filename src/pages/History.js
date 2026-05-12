import React from "react";
import { motion } from "framer-motion";
import {
  FaSchool,
  FaAward,
  FaGlobe,
  FaUserGraduate,
} from "react-icons/fa";

/* ================= IMAGES ================= */
import schoolImg from "../assets/Cambridge International School exterior view.png";
import heroImg from "../assets/photo-1580582932707-520aed937b7b.avif";

/* ================= FOOTER ================= */
import Footer from "./Footer";

export default function HistoryOfSchool() {

  const stats = [
    {
      number: "2016",
      label: "Founded",
      icon: <FaSchool />,
    },
    {
      number: "290+",
      label: "Students Started With",
      icon: <FaUserGraduate />,
    },
    {
      number: "Global",
      label: "Learning Vision",
      icon: <FaGlobe />,
    },
    {
      number: "100%",
      label: "Commitment",
      icon: <FaAward />,
    },
  ];

  return (
    <div className="w-full bg-white overflow-hidden">

      {/* ================= HERO SECTION ================= */}
      <section className="relative min-h-screen flex items-center overflow-hidden bg-[#021427]">

        {/* BACKGROUND IMAGE */}
        <motion.img
          initial={{ scale: 1.15 }}
          animate={{ scale: 1 }}
          transition={{ duration: 2 }}
          src={heroImg}
          alt="school"
          className="absolute inset-0 w-full h-full object-cover"
        />

        {/* OVERLAY */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#021427]/95 via-[#021427]/75 to-[#021427]/50"></div>

        {/* GLOW */}
        <div className="absolute top-[-100px] left-[-100px] w-[450px] h-[450px] rounded-full bg-[#facc15]/10 blur-3xl"></div>

        <div className="absolute bottom-[-120px] right-[-120px] w-[500px] h-[500px] rounded-full bg-[#facc15]/10 blur-3xl"></div>

        {/* VERTICAL LINES */}
        <div className="absolute left-20 top-0 w-[1px] h-full bg-white/10"></div>
        <div className="absolute left-32 top-0 w-[1px] h-full bg-white/5"></div>

        {/* CONTENT */}
        <div className="relative z-10 max-w-[1450px] mx-auto px-6 md:px-16 w-full">

          <motion.div
            initial={{ opacity: 0, y: 80 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="max-w-[900px]"
          >

            {/* TAG */}
            <div className="flex items-center gap-4 mb-8">

              <div className="w-16 h-[3px] bg-[#facc15] rounded-full"></div>

              <p className="uppercase tracking-[8px] text-[#facc15] text-sm md:text-lg font-semibold">
                Cambridge International School
              </p>

            </div>

            {/* HEADING */}
            <h1 className="text-white text-6xl md:text-8xl font-black leading-[0.95] tracking-tight">

              Our
              <span className="text-[#facc15]"> Legacy</span>

              <br />

              Of Excellence

            </h1>

            {/* TEXT */}
            <p className="text-white/75 text-lg md:text-2xl leading-10 mt-12 max-w-[760px]">

              Since 2016, Cambridge International School has been shaping
              future leaders through innovation, academic excellence,
              and value-based education.

            </p>

            {/* BUTTONS */}
            <div className="flex flex-wrap gap-6 mt-14">

              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-[#facc15] text-[#07294d] px-10 py-5 rounded-full text-lg font-bold shadow-2xl"
              >
                Explore Journey
              </motion.button>

              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="border border-white/20 backdrop-blur-lg text-white px-10 py-5 rounded-full text-lg font-semibold hover:bg-white/10 transition duration-300"
              >
                Learn More
              </motion.button>

            </div>

            {/* STATS */}
            <div className="flex flex-wrap gap-14 mt-20">

              <div>

                <h3 className="text-5xl font-bold text-[#facc15]">
                  2016
                </h3>

                <p className="text-white/60 mt-2 text-lg">
                  Founded
                </p>

              </div>

              <div>

                <h3 className="text-5xl font-bold text-[#facc15]">
                  290+
                </h3>

                <p className="text-white/60 mt-2 text-lg">
                  First Students
                </p>

              </div>

              <div>

                <h3 className="text-5xl font-bold text-[#facc15]">
                  Global
                </h3>

                <p className="text-white/60 mt-2 text-lg">
                  Educational Vision
                </p>

              </div>

            </div>

          </motion.div>

        </div>

      </section>

      {/* ================= CONTENT SECTION ================= */}
      <section className="max-w-[1450px] mx-auto px-6 py-32">

        <div className="grid lg:grid-cols-2 gap-24 items-center">

          {/* IMAGE */}
          <motion.div
            initial={{ opacity: 0, x: -80 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative"
          >

            {/* BORDER */}
            <div className="absolute -top-8 -left-8 w-full h-full border-[12px] border-[#facc15] rounded-[40px]"></div>

            {/* IMAGE */}
            <div className="relative overflow-hidden rounded-[40px] shadow-[0_25px_60px_rgba(0,0,0,0.15)] z-10">

              <img
                src={schoolImg}
                alt="school"
                className="w-full h-[720px] object-cover hover:scale-105 transition duration-700"
              />

            </div>

            {/* FLOATING CARD */}
            <motion.div
              whileHover={{ y: -10 }}
              className="absolute bottom-[-40px] right-[-20px] bg-[#07294d] text-white p-8 rounded-[30px] shadow-2xl z-20 w-[340px]"
            >

              <h3 className="text-4xl font-bold text-[#facc15]">
                Since
              </h3>

              <p className="text-6xl font-bold mt-2">
                2016
              </p>

              <p className="text-white/70 mt-4 leading-8 text-lg">
                Building future leaders through excellence in education.
              </p>

            </motion.div>

          </motion.div>

          {/* CONTENT */}
          <motion.div
            initial={{ opacity: 0, x: 80 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >

            <p className="uppercase tracking-[6px] text-[#facc15] font-semibold mb-5">
              Our Legacy
            </p>

            <h2 className="text-5xl md:text-6xl font-bold text-[#07294d] leading-[1.2] mb-10">

              Excellence Through
              <br />
              Innovation & Vision

            </h2>

            <div className="space-y-8 text-[19px] leading-[42px] text-[#4b5563]">

              <p>
                Cambridge International School started in 2016-17 with
                290 students under the aegis of S.L. Angra Cambridge
                International Educational Society.
              </p>

              <p>
                The school is being run in association with Learning
                Wings Education System — a globally recognized
                organization devoted to high-quality and modern
                educational practices.
              </p>

              <p>
                Learning Wings Education Systems works closely with
                schools to raise student achievement while helping every
                learner realize their hidden talents, leadership
                abilities, creativity, and self-potential.
              </p>

              <p>
                Since its inception, the institution has focused on
                creating a dynamic learning environment that nurtures
                academic excellence, confidence, discipline, innovation,
                and holistic growth.
              </p>

              <p>
                Today, Cambridge International School continues its
                journey with a strong vision of empowering future-ready
                global citizens through value-based and progressive
                education.
              </p>

            </div>

          </motion.div>

        </div>

      </section>

      {/* ================= STATS SECTION ================= */}
      <section className="bg-[#07294d] py-28 px-6 relative overflow-hidden">

        {/* GLOW */}
        <div className="absolute top-0 left-0 w-[400px] h-[400px] bg-[#facc15]/10 blur-3xl rounded-full"></div>

        <div className="max-w-[1450px] mx-auto relative z-10">

          {/* HEADING */}
          <div className="text-center mb-20">

            <p className="uppercase tracking-[6px] text-[#facc15] font-semibold mb-4">
              School Highlights
            </p>

            <h2 className="text-5xl md:text-6xl font-bold text-white">
              Our Educational Journey
            </h2>

          </div>

          {/* STATS GRID */}
          <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-10">

            {stats.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 60 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -10 }}
                className="bg-white/5 backdrop-blur-lg border border-white/10 rounded-[35px] p-10 text-center"
              >

                <div className="w-24 h-24 rounded-full bg-[#facc15] text-[#07294d] flex items-center justify-center text-4xl mx-auto mb-8 shadow-xl">

                  {item.icon}

                </div>

                <h3 className="text-5xl font-bold text-white mb-4">
                  {item.number}
                </h3>

                <p className="text-white/70 text-lg leading-8">
                  {item.label}
                </p>

              </motion.div>
            ))}

          </div>

        </div>

      </section>

      {/* ================= FOOTER ================= */}
      <Footer />

    </div>
  );
}