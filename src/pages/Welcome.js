import React from "react";
import { motion } from "framer-motion";
import { FaArrowRight } from "react-icons/fa";

import schoolImg from "../assets/Cambridge International School exterior view.png";

const Welcome = () => {
  return (
    <section className="relative w-full py-32 bg-[#f7f9fc] overflow-hidden">

      {/* ================= BACKGROUND GLOW ================= */}
      <div className="absolute top-[-150px] left-[-120px] w-[420px] h-[420px] bg-[#d4af37]/10 blur-3xl rounded-full"></div>

      <div className="absolute bottom-[-150px] right-[-120px] w-[420px] h-[420px] bg-[#07294d]/10 blur-3xl rounded-full"></div>

      {/* ================= MAIN ================= */}
      <div className="max-w-[1450px] mx-auto px-6 grid lg:grid-cols-2 gap-20 items-center relative z-10">

        {/* ================= LEFT CONTENT ================= */}
        <motion.div
          initial={{ opacity: 0, x: -70 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >

          {/* SMALL TAG */}
          <div className="flex items-center gap-4 mb-8">

            <div className="w-16 h-[4px] bg-[#d4af37] rounded-full"></div>

            <p className="uppercase tracking-[8px] text-[#d4af37] font-bold text-sm">
              Welcome To Cambridge
            </p>

          </div>

          {/* HEADING */}
          <h2 className="text-5xl md:text-7xl font-black text-[#07294d] leading-[1.05] mb-10">

            Welcome To
            <br />

            <span className="relative inline-block">

              Our School

              <div className="absolute -bottom-3 left-0 w-full h-4 bg-[#d4af37]/20 rounded-full -z-10"></div>

            </span>

          </h2>

          {/* TEXT */}
          <p className="text-gray-600 text-lg leading-9 mb-8">

            Cambridge International School Nakodar started in
            2016 with 290 students under the aegis of
            S.L. Angra Cambridge International Educational Society.

          </p>

          <p className="text-gray-600 text-lg leading-9 mb-8">

            The school is run in association with Learning Wings
            Education Systems, a global organization devoted to
            high-quality and leading-edge education practices.

          </p>

          <p className="text-gray-600 text-lg leading-9 mb-12">

            Learning Wings works closely with schools to raise
            student achievement while helping every child discover
            self-potential, creativity, confidence, and excellence.

          </p>

          {/* BUTTONS */}
          <div className="flex flex-wrap gap-5">

            {/* PRIMARY BUTTON */}
            <motion.button
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 bg-[#07294d] text-white rounded-2xl font-bold flex items-center gap-3 shadow-[0_15px_35px_rgba(7,41,77,0.25)] hover:bg-[#0b3d6d] transition duration-300"
            >

              Read More

              <FaArrowRight />

            </motion.button>

            {/* SECONDARY BUTTON */}
            <motion.button
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 border-2 border-[#d4af37] text-[#07294d] rounded-2xl font-bold hover:bg-[#d4af37] hover:text-[#07294d] transition duration-300"
            >

              Explore Campus

            </motion.button>

          </div>

        </motion.div>

        {/* ================= RIGHT IMAGE ================= */}
        <motion.div
          initial={{ opacity: 0, x: 70 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="relative flex justify-center"
        >

          {/* SOFT GLOW */}
          <div className="absolute w-[500px] h-[500px] bg-[#d4af37]/10 blur-3xl rounded-full"></div>

          {/* MAIN SHAPE */}
          <div
            className="relative w-[320px] sm:w-[390px] lg:w-[440px]
                       h-[500px] lg:h-[560px]
                       overflow-hidden
                       rounded-[220px]
                       border-[12px] border-white
                       shadow-[0_30px_80px_rgba(0,0,0,0.18)]
                       group"
          >

            {/* IMAGE */}
         <img
  src={schoolImg}
  alt="school"
  className="w-full h-full object-contain bg-white group-hover:scale-105 transition duration-700"
/>

            {/* OVERLAY */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#021427]/40 via-transparent to-transparent"></div>

          </div>

          {/* DECORATIVE CIRCLE */}
          <div className="absolute -top-6 -right-2 w-24 h-24 rounded-full border-[10px] border-[#d4af37]/30"></div>

          {/* DECORATIVE BOX */}
          <div className="absolute -bottom-8 -left-4 w-28 h-28 rounded-[30px] border-[10px] border-[#07294d]/10 rotate-12"></div>

        </motion.div>

      </div>

    </section>
  );
};

export default Welcome;