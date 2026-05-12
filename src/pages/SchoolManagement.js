import React from "react";
import { motion } from "framer-motion";
import {
  FaCrown,
  FaUserTie,
  FaUsers,
  FaBuilding,
} from "react-icons/fa";

/* ================= IMAGE ================= */
import heroImg from "../assets/photo-1580582932707-520aed937b7b.avif";

/* ================= FOOTER ================= */
import Footer from "./Footer";

export default function SchoolManagement() {

  const members = [
    {
      name: "Smt. Raj Rani Angra",
      designation: "Chairperson",
      icon: <FaCrown />,
    },
    {
      name: "Mr. Raj Kumar Dhiman",
      designation: "Vice Chairman",
      icon: <FaUserTie />,
    },
    {
      name: "Sh. Ripu Jeet Angra",
      designation: "Managing Director",
      icon: <FaBuilding />,
    },
    {
      name: "Sh. Sanjay Passi",
      designation: "General Secretary",
      icon: <FaUsers />,
    },
    {
      name: "Sh. Bharat Bhushan Bedi",
      designation: "Treasurer",
      icon: <FaUserTie />,
    },
    {
      name: "Smt. Kirti Khandelwal Angra",
      designation: "Addl. Management Director",
      icon: <FaBuilding />,
    },
    {
      name: "Smt. Roop Rani Angra",
      designation: "Member",
      icon: <FaUsers />,
    },
    {
      name: "Smt. Seema Bedi",
      designation: "Member",
      icon: <FaUsers />,
    },
  ];

  return (
    <div className="w-full bg-[#f8fafc] overflow-hidden">

      {/* ================= HERO ================= */}
      <section className="relative min-h-screen overflow-hidden flex items-center">

        {/* BG */}
        <motion.img
          initial={{ scale: 1.1 }}
          animate={{ scale: 1 }}
          transition={{ duration: 2 }}
          src={heroImg}
          alt="management"
          className="absolute inset-0 w-full h-full object-cover"
        />

        {/* OVERLAY */}
        <div className="absolute inset-0 bg-[#021427]/85"></div>

        {/* GLOW */}
        <div className="absolute top-[-120px] right-[-120px] w-[500px] h-[500px] bg-[#facc15]/10 blur-3xl rounded-full"></div>

        <div className="absolute bottom-[-120px] left-[-120px] w-[450px] h-[450px] bg-[#facc15]/10 blur-3xl rounded-full"></div>

        {/* LINE */}
        <div className="absolute left-20 top-0 w-[1px] h-full bg-white/10"></div>

        {/* CONTENT */}
        <div className="relative z-10 max-w-[1450px] mx-auto px-6 md:px-16 w-full">

          <motion.div
            initial={{ opacity: 0, y: 80 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="max-w-[950px]"
          >

            {/* TAG */}
            <div className="flex items-center gap-4 mb-8">

              <div className="w-16 h-[4px] bg-[#facc15] rounded-full"></div>

              <p className="uppercase tracking-[8px] text-[#facc15] text-sm md:text-lg font-semibold">
                Cambridge International School
              </p>

            </div>

            {/* HEADING */}
            <h1 className="text-white text-6xl md:text-8xl font-black leading-[0.95]">

              Leadership
              <br />

              <span className="text-[#facc15]">
                & Management
              </span>

            </h1>

            {/* TEXT */}
            <p className="text-white/70 text-lg md:text-2xl leading-10 mt-12 max-w-[760px]">

              Dedicated leaders shaping the future of education
              through innovation, excellence, and visionary
              administration.

            </p>

          </motion.div>

        </div>

      </section>

      {/* ================= MANAGEMENT SECTION ================= */}
      <section className="max-w-[1450px] mx-auto px-6 py-32 relative">

        {/* BG DESIGN */}
        <div className="absolute top-40 left-0 w-[350px] h-[350px] bg-[#facc15]/10 blur-3xl rounded-full"></div>

        <div className="absolute bottom-20 right-0 w-[350px] h-[350px] bg-[#07294d]/5 blur-3xl rounded-full"></div>

        {/* HEADING */}
        <div className="text-center mb-28 relative z-10">

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="uppercase tracking-[8px] text-[#facc15] font-bold mb-6"
          >
            Administration Team
          </motion.p>

          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="text-5xl md:text-7xl font-black text-[#07294d] leading-[1.1]"
          >

            Meet The
            <br />

            <span className="relative inline-block">

              Visionaries

              <div className="absolute -bottom-3 left-0 w-full h-4 bg-[#facc15]/30 -z-10 rounded-full"></div>

            </span>

          </motion.h2>

        </div>

        {/* CARDS */}
        <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-10 relative z-10">

          {members.map((member, index) => (

            <motion.div
              key={index}
              initial={{ opacity: 0, y: 70 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.08 }}
              viewport={{ once: true }}
              whileHover={{
                y: -15,
                rotateX: 6,
                rotateY: -6,
              }}
              className="group relative h-full"
              style={{
                transformStyle: "preserve-3d",
              }}
            >

              {/* GLOW */}
              <div className="absolute inset-0 rounded-[40px] bg-gradient-to-br from-[#facc15]/20 to-[#07294d]/10 blur-xl opacity-0 group-hover:opacity-100 transition duration-500"></div>

              {/* CARD */}
              <div className="relative bg-white rounded-[40px] overflow-hidden border border-gray-100 shadow-[0_20px_60px_rgba(0,0,0,0.07)] h-full">

                {/* TOP BAR */}
                <div className="h-[8px] w-full bg-gradient-to-r from-[#facc15] via-[#fbbf24] to-[#facc15]"></div>

                {/* CONTENT */}
                <div className="p-10 relative overflow-hidden flex flex-col h-full">

                  {/* BIG NUMBER */}
                  <h1 className="absolute top-3 right-5 text-[120px] font-black text-[#07294d]/5 select-none">

                    0{index + 1}

                  </h1>

                  {/* ICON */}
                  <div className="relative z-10 w-24 h-24 rounded-[30px] bg-[#07294d] text-white flex items-center justify-center text-4xl shadow-2xl mb-10 group-hover:bg-[#facc15] group-hover:text-[#07294d] transition duration-500">

                    {member.icon}

                  </div>

                  {/* NAME */}
                  <h3 className="relative z-10 text-3xl font-black text-[#07294d] leading-tight mb-5 min-h-[120px]">

                    {member.name}

                  </h3>

                  {/* LINE */}
                  <div className="relative z-10 w-16 h-[4px] bg-[#facc15] rounded-full mb-6"></div>

                  {/* DESIGNATION */}
                  <p className="relative z-10 text-gray-600 text-lg leading-8 font-medium min-h-[70px]">

                    {member.designation}

                  </p>

                </div>

              </div>

            </motion.div>

          ))}

        </div>

      </section>

      {/* ================= QUOTE SECTION ================= */}
      <section className="relative bg-[#07294d] py-32 px-6 overflow-hidden">

        {/* GLOW */}
        <div className="absolute top-0 left-0 w-[450px] h-[450px] bg-[#facc15]/10 rounded-full blur-3xl"></div>

        <div className="max-w-[1100px] mx-auto text-center relative z-10">

          <motion.div
            initial={{ opacity: 0, y: 70 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >

            <div className="text-[#facc15] text-8xl font-black mb-10">
              “
            </div>

            <h2 className="text-4xl md:text-6xl font-black text-white leading-[1.3]">

              Great institutions are
              <br />
              built by great leaders.

            </h2>

            <p className="text-white/70 text-xl leading-10 mt-12 max-w-[900px] mx-auto">

              Our management team continuously works towards
              academic excellence, innovation, discipline,
              and holistic growth while nurturing future-ready
              global citizens.

            </p>

          </motion.div>

        </div>

      </section>

      {/* ================= FOOTER ================= */}
      <Footer />

    </div>
  );
}