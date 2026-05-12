import React from "react";
import { motion } from "framer-motion";

/* ================= IMAGES ================= */
import heroImg from "../assets/photo-1580582932707-520aed937b7b.avif"; // ✅ classroom image on top
import schoolImg from "../assets/photo-1577896851231-70ef18881754.avif";

/* ================= FOOTER ================= */
import Footer from "./Footer";

export default function AboutUs() {

  const menuItems = [
    "The School",
    "School Timings",
    "Academic Programme",
    "Our Team",
    "Teacher & Leadership Training",
    "Mandatory Information",
  ];

  return (
    <div className="w-full bg-[#edf3fb] overflow-hidden text-gray-800">

      {/* ================= HERO SECTION ================= */}
      <section className="relative h-[520px] overflow-hidden">

        {/* HERO IMAGE */}
        <motion.img
          initial={{ scale: 1.15 }}
          animate={{ scale: 1 }}
          transition={{ duration: 2 }}
          src={heroImg}
          alt="classroom"
          className="w-full h-full object-cover"
        />

        {/* DARK OVERLAY */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#041c39]/95 via-[#07294d]/70 to-[#07294d]/30"></div>

        {/* GLOW EFFECT */}
        <div className="absolute top-0 left-0 w-[450px] h-[450px] bg-[#0b3d70]/30 blur-3xl rounded-full"></div>

        {/* HERO CONTENT */}
        <motion.div
          initial={{ opacity: 0, y: 70 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="absolute inset-0 flex items-center justify-end px-8 md:px-24"
        >

          <div className="text-right">

            <p className="uppercase tracking-[6px] text-[#facc15] text-sm md:text-lg mb-4">
              Welcome To
            </p>

            <h1 className="text-white text-6xl md:text-7xl font-bold leading-tight">
              About Us
            </h1>

            <div className="w-32 h-[5px] bg-[#facc15] ml-auto mt-6 rounded-full"></div>

          </div>

        </motion.div>

      </section>

      {/* ================= MAIN SECTION ================= */}
      <section className="max-w-[1350px] mx-auto px-6 py-24 grid lg:grid-cols-[330px_1fr] gap-14">

        {/* ================= SIDEBAR ================= */}
        <motion.div
          initial={{ opacity: 0, x: -60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="bg-[#07294d] rounded-[32px] overflow-hidden shadow-[0_15px_50px_rgba(0,0,0,0.18)] h-fit sticky top-8"
        >

          {/* TOP LINE */}
          <div className="h-2 bg-[#facc15]"></div>

          <div className="p-9">

            <h2 className="text-white text-4xl font-bold mb-10">
              ABOUT US
            </h2>

            <div className="space-y-5">

              {menuItems.map((item, index) => (
                <motion.button
                  key={index}
                  whileHover={{ x: 8 }}
                  transition={{ duration: 0.3 }}
                  className={`w-full text-left px-6 py-5 rounded-2xl text-[18px] transition-all duration-300 ${
                    index === 0
                      ? "bg-white text-[#07294d] font-semibold shadow-lg"
                      : "text-white hover:bg-white/10"
                  }`}
                >
                  {item}
                </motion.button>
              ))}

            </div>

          </div>

        </motion.div>

        {/* ================= CONTENT ================= */}
        <motion.div
          initial={{ opacity: 0, x: 70 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="bg-white rounded-[40px] p-10 md:p-16 shadow-[0_12px_45px_rgba(0,0,0,0.08)] relative overflow-hidden"
        >

          {/* GLOW */}
          <div className="absolute top-0 right-0 w-72 h-72 bg-[#facc15]/10 rounded-full blur-3xl"></div>

          {/* HEADING */}
          <div className="relative z-10 mb-12">

            <p className="uppercase tracking-[5px] text-[#facc15] font-semibold mb-3">
              Excellence In Education
            </p>

            <h2 className="text-[58px] leading-none font-bold text-[#07294d]">
              THE SCHOOL
            </h2>

          </div>

          {/* ================= IMAGES ================= */}
          <div className="grid md:grid-cols-2 gap-8 mb-14 relative z-10">

            {/* IMAGE 1 */}
            <motion.div
              whileHover={{ scale: 1.03 }}
              transition={{ duration: 0.4 }}
              className="overflow-hidden rounded-[30px] shadow-[0_15px_35px_rgba(0,0,0,0.12)] group"
            >

              <img
                src={heroImg}
                alt="classroom"
                className="w-full h-[340px] object-cover rounded-[30px] group-hover:scale-105 transition duration-700"
              />

            </motion.div>

            {/* IMAGE 2 */}
            <motion.div
              whileHover={{ scale: 1.03 }}
              transition={{ duration: 0.4 }}
              className="overflow-hidden rounded-[30px] shadow-[0_15px_35px_rgba(0,0,0,0.12)] group"
            >

              <img
                src={schoolImg}
                alt="school"
                className="w-full h-[340px] object-cover rounded-[30px] group-hover:scale-105 transition duration-700"
              />

            </motion.div>

          </div>

          {/* ================= TEXT ================= */}
          <div className="space-y-10 text-[20px] leading-[48px] text-[#374151] relative z-10">

            <p>
              Cambridge International School is committed to delivering
              excellence in education through innovation, discipline,
              leadership, and holistic development of every child.
            </p>

            <p>
              The institution provides a progressive learning environment
              supported by modern infrastructure, smart classrooms,
              co-curricular opportunities, and a nurturing atmosphere where
              students grow academically and personally.
            </p>

            <p>
              With dedicated faculty and a future-focused curriculum, the school
              inspires learners to become responsible global citizens while
              staying connected to strong moral and cultural values.
            </p>

            <p>
              The school continuously strives to empower students with
              confidence, creativity, communication skills, and critical
              thinking required to succeed in the modern world.
            </p>

            {/* ================= MISSION BOX ================= */}
            <motion.div
              whileHover={{ scale: 1.01 }}
              transition={{ duration: 0.3 }}
              className="bg-[#eef4fb] border-l-[6px] border-[#07294d] p-10 rounded-[28px] shadow-md"
            >

              <h3 className="text-4xl font-bold text-[#07294d] mb-5">
                Our Mission
              </h3>

              <p className="text-[#4b5563] text-[20px] leading-[42px]">
                To inspire young minds with quality education, strong values,
                leadership skills, and innovative learning experiences that
                prepare them for global success.
              </p>

            </motion.div>

          </div>

        </motion.div>

      </section>

      {/* ================= FOOTER ================= */}
      <Footer />

    </div>
  );
}