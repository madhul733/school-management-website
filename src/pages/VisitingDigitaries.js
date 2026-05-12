import React from "react";
import { motion } from "framer-motion";
import {
  FaGlobeEurope,
  FaUserGraduate,
  FaChalkboardTeacher,
  FaAward,
} from "react-icons/fa";

/* ================= IMAGE ================= */
import heroImg from "../assets/photo-1580582932707-520aed937b7b.avif";

/* ================= FOOTER ================= */
import Footer from "./Footer";

export default function LWESAdvisoryBoard() {

  const members = [
    {
      name: "Ms. Hillary Dumphy",
      role:
        "Program leader for MA and postgraduate professional development.",
    },

    {
      name: "Bob Shipman",
      role:
        "Senior Lecturer in Science, Newman University College.",
    },

    {
      name: "Bob Treadwell",
      role:
        "Senior Lecturer in Fine Arts and Teacher Education.",
    },

    {
      name: "Parminder Assi",
      role:
        "Senior Lecturer Education and Professional Studies, Birmingham Educational Support Service.",
    },

    {
      name: "Partho Sanyal",
      role:
        "Chairman Auroveds. Educational Consultant for Integrated Teaching Learning.",
    },

    {
      name: "Shrikumar M",
      role:
        "Senior Consultant, Quality Management Systems, LWES Schools Wolverhampton University, England (U.K).",
    },
  ];

  return (
    <div className="w-full bg-[#f7f9fc] overflow-hidden">

      {/* ================= HERO ================= */}
      <section className="relative min-h-[90vh] flex items-center overflow-hidden">

        {/* BG */}
        <motion.img
          initial={{ scale: 1.1 }}
          animate={{ scale: 1 }}
          transition={{ duration: 2 }}
          src={heroImg}
          alt="lwes"
          className="absolute inset-0 w-full h-full object-cover"
        />

        {/* OVERLAY */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#021427]/95 via-[#07294d]/80 to-[#07294d]/40"></div>

        {/* GLOW */}
        <div className="absolute top-[-120px] right-[-120px] w-[450px] h-[450px] bg-[#d4af37]/10 blur-3xl rounded-full"></div>

        {/* CONTENT */}
        <div className="relative z-10 max-w-[1450px] mx-auto px-6 md:px-16 w-full">

          <motion.div
            initial={{ opacity: 0, y: 70 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="max-w-[900px]"
          >

            {/* TAG */}
            <div className="flex items-center gap-4 mb-8">

              <div className="w-16 h-[4px] bg-[#d4af37] rounded-full"></div>

              <p className="uppercase tracking-[8px] text-[#d4af37] text-sm md:text-lg font-semibold">
                Learning Wings Education Systems
              </p>

            </div>

            {/* HEADING */}
            <h1 className="text-white text-6xl md:text-8xl font-black leading-[0.95]">

              Academic
              <br />

              <span className="text-[#d4af37]">
                Excellence
              </span>

            </h1>

            {/* TEXT */}
            <p className="text-white/70 text-lg md:text-2xl leading-10 mt-12 max-w-[760px]">

              Committed to bringing world-class educational
              practices in learning, teaching, assessment,
              training, and professional development.

            </p>

          </motion.div>

        </div>

      </section>

      {/* ================= INTRO SECTION ================= */}
      <section className="max-w-[1450px] mx-auto px-6 py-28">

        <div className="grid lg:grid-cols-[1.2fr_0.8fr] gap-14 items-center">

          {/* LEFT */}
          <motion.div
            initial={{ opacity: 0, x: -70 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
          >

            <p className="uppercase tracking-[6px] text-[#d4af37] font-bold mb-5">
              About LWES
            </p>

            <h2 className="text-5xl md:text-6xl font-black text-[#07294d] leading-[1.15] mb-10">

              Global Educational
              <br />
              Support System

            </h2>

            <p className="text-gray-600 text-lg leading-9 mb-8">

              LWES is committed to bringing the best educational
              practices in learning, teaching, assessment,
              training, and holistic student development.

            </p>

            <p className="text-gray-600 text-lg leading-9 mb-8">

              Supported by highly accomplished educationists
              worldwide, LWES continuously works with
              “critical friends” to redefine and improve
              educational standards.

            </p>

            <p className="text-gray-600 text-lg leading-9">

              LWES believes that scholastic and co-scholastic
              learning are equally valuable in helping students
              attain life skills and personal excellence.

            </p>

          </motion.div>

          {/* RIGHT */}
          <motion.div
            initial={{ opacity: 0, x: 70 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="relative overflow-hidden rounded-[40px] bg-[#07294d] p-12 shadow-[0_25px_60px_rgba(0,0,0,0.12)]"
          >

            {/* GLOW */}
            <div className="absolute top-0 right-0 w-[250px] h-[250px] bg-[#d4af37]/10 rounded-full blur-3xl"></div>

            <div className="relative z-10 grid gap-10">

              {[
                {
                  icon: <FaGlobeEurope />,
                  title: "Global Experts",
                },

                {
                  icon: <FaUserGraduate />,
                  title: "Professional Development",
                },

                {
                  icon: <FaChalkboardTeacher />,
                  title: "Integrated Learning",
                },

                {
                  icon: <FaAward />,
                  title: "Quality Education",
                },
              ].map((item, index) => (

                <div
                  key={index}
                  className="flex items-center gap-6"
                >

                  <div className="w-20 h-20 rounded-[25px] bg-[#d4af37] text-[#07294d] flex items-center justify-center text-3xl shadow-xl">

                    {item.icon}

                  </div>

                  <h3 className="text-white text-2xl font-bold">

                    {item.title}

                  </h3>

                </div>

              ))}

            </div>

          </motion.div>

        </div>

      </section>

      {/* ================= MEMBERS SECTION ================= */}
      <section className="max-w-[1450px] mx-auto px-6 pb-32">

        {/* HEADING */}
        <div className="text-center mb-24">

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="uppercase tracking-[8px] text-[#d4af37] font-bold mb-5"
          >
            Advisory Members
          </motion.p>

          <motion.h2
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="text-5xl md:text-7xl font-black text-[#07294d] leading-[1.1]"
          >

            International
            <br />

            <span className="relative inline-block">

              Academic Experts

              <div className="absolute -bottom-3 left-0 w-full h-4 bg-[#d4af37]/20 rounded-full -z-10"></div>

            </span>

          </motion.h2>

        </div>

        {/* GRID */}
        <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-10">

          {members.map((member, index) => (

            <motion.div
              key={index}
              initial={{ opacity: 0, y: 70 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.08 }}
              viewport={{ once: true }}
              whileHover={{
                y: -12,
              }}
              className="group relative"
            >

              {/* OUTER GLOW */}
              <div className="absolute inset-0 rounded-[40px] bg-gradient-to-br from-[#d4af37]/20 to-[#07294d]/10 blur-xl opacity-0 group-hover:opacity-100 transition duration-500"></div>

              {/* CARD */}
              <div className="relative bg-white rounded-[40px] overflow-hidden border border-gray-100 shadow-[0_20px_60px_rgba(0,0,0,0.07)] h-full">

                {/* TOP BAR */}
                <div className="h-[8px] w-full bg-gradient-to-r from-[#d4af37] via-[#facc15] to-[#d4af37]"></div>

                {/* CONTENT */}
                <div className="p-10 relative overflow-hidden flex flex-col h-full">

                  {/* NUMBER */}
                  <h1 className="absolute top-3 right-5 text-[110px] font-black text-[#07294d]/5 select-none">

                    0{index + 1}

                  </h1>

                  {/* ICON */}
                  <div className="relative z-10 w-24 h-24 rounded-[30px] bg-[#07294d] text-white flex items-center justify-center text-4xl shadow-2xl mb-10 group-hover:bg-[#d4af37] group-hover:text-[#07294d] transition duration-500">

                    <FaUserGraduate />

                  </div>

                  {/* NAME */}
                  <h3 className="relative z-10 text-3xl font-black text-[#07294d] leading-tight mb-5 min-h-[110px]">

                    {member.name}

                  </h3>

                  {/* LINE */}
                  <div className="relative z-10 w-16 h-[4px] bg-[#d4af37] rounded-full mb-6"></div>

                  {/* ROLE */}
                  <p className="relative z-10 text-gray-600 text-[17px] leading-8">

                    {member.role}

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
        <div className="absolute top-0 left-0 w-[450px] h-[450px] bg-[#d4af37]/10 rounded-full blur-3xl"></div>

        <div className="max-w-[1100px] mx-auto text-center relative z-10">

          <motion.div
            initial={{ opacity: 0, y: 70 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >

            <div className="text-[#d4af37] text-8xl font-black mb-10">
              “
            </div>

            <h2 className="text-4xl md:text-6xl font-black text-white leading-[1.3]">

              Education thrives
              <br />
              through innovation.

            </h2>

            <p className="text-white/70 text-xl leading-10 mt-12 max-w-[900px] mx-auto">

              Our team is supported by acclaimed professionals
              and experts from art, music, theatre, puppetry,
              storytelling, and dance to provide holistic
              educational experiences.

            </p>

          </motion.div>

        </div>

      </section>

      {/* ================= FOOTER ================= */}
      <Footer />

    </div>
  );
}