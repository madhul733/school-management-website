import React from "react";
import {
  FaBullseye,
  FaLightbulb,
  FaArrowRight,
} from "react-icons/fa";
import { motion } from "framer-motion";

export default function VisionMission() {

  const cards = [
    {
      title: "VISION",
      icon: <FaBullseye />,
      text: `We are committed in creating the future leaders of our country

Leadership

We envision today's children as tomorrow's leadership icons.

MI-aided methodology

The mi-aided methodology helps children to discover their own creative and aesthetic potential.`,
    },

    {
      title: "MISSION",
      icon: <FaLightbulb />,
      text: `We believe that human rights of a child are non-negotiable.

Interactive Illume

The pedagogy, Interactive Illume, is specifically developed and designed to help children realize their exceptional capabilities in a methodical, synergetic, and self-paced manner.

Cambridge Teachers

Our training mechanism is designed to arm teachers with practical and effective techniques which are best suited for kids.`,
    },
  ];

  return (
    <section className="relative w-full pt-40 pb-28 bg-[#f6f8fc] overflow-hidden">

      {/* ================= BG GLOW ================= */}
      <div className="absolute top-[-120px] left-[-120px] w-[350px] h-[350px] bg-[#d4af37]/10 blur-3xl rounded-full"></div>

      <div className="absolute bottom-[-120px] right-[-120px] w-[350px] h-[350px] bg-[#07294d]/10 blur-3xl rounded-full"></div>

      {/* ================= MAIN ================= */}
      <div className="max-w-[1450px] mx-auto px-6">

        {/* ================= TOP ================= */}
        <div className="text-center mb-16">

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="uppercase tracking-[8px] text-[#d4af37] font-bold mb-5"
          >
            Cambridge International School
          </motion.p>

         <motion.h2
  initial={{ opacity: 0, y: 40 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.7 }}
  viewport={{ once: true }}
  className="text-5xl md:text-7xl font-black text-[#07294d] leading-[1.1]"
>

  <span className="relative inline-block pb-5">

    Vision & Mission

    {/* THICK UNDERLINE */}
    <span className="absolute left-0 bottom-1 w-full h-5 bg-[#d4af37]/25 rounded-full"></span>

  </span>

</motion.h2>

        </div>

        {/* ================= GRID ================= */}
        <div className="grid lg:grid-cols-[420px_1fr] gap-12 items-start">

          {/* ================= CONTACT FORM ================= */}
          <motion.div
            initial={{ opacity: 0, x: -70 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="relative overflow-hidden rounded-[40px] bg-[#07294d] p-10 shadow-[0_25px_60px_rgba(0,0,0,0.15)]"
          >

            {/* GLOW */}
            <div className="absolute top-0 right-0 w-[250px] h-[250px] bg-[#d4af37]/10 rounded-full blur-3xl"></div>

            {/* LINE */}
            <div className="absolute left-8 top-0 w-[1px] h-full bg-white/10"></div>

            <div className="relative z-10">

              <p className="uppercase tracking-[6px] text-[#d4af37] font-semibold mb-5">
                Contact Us
              </p>

              <h2 className="text-4xl font-black text-white leading-tight mb-10">

                How To
                <br />
                Contact Us

              </h2>

              {/* FORM */}
              <form className="space-y-5">

                <input
                  type="email"
                  placeholder="Email Address"
                  className="w-full bg-white/10 border border-white/10 text-white placeholder:text-white/60 px-5 py-4 rounded-2xl outline-none focus:border-[#d4af37] transition"
                />

                <input
                  type="text"
                  placeholder="Subject"
                  className="w-full bg-white/10 border border-white/10 text-white placeholder:text-white/60 px-5 py-4 rounded-2xl outline-none focus:border-[#d4af37] transition"
                />

                <textarea
                  rows="6"
                  placeholder="Enter your descriptions here..."
                  className="w-full bg-white/10 border border-white/10 text-white placeholder:text-white/60 px-5 py-4 rounded-2xl outline-none focus:border-[#d4af37] transition resize-none"
                ></textarea>

                {/* BUTTON */}
                <motion.button
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-full bg-[#d4af37] hover:bg-[#c19b2d] text-[#07294d] font-bold py-4 rounded-2xl flex items-center justify-center gap-3 transition duration-300 shadow-xl"
                >

                  Send Now

                  <FaArrowRight />

                </motion.button>

              </form>

            </div>

          </motion.div>

          {/* ================= RIGHT CARDS ================= */}
          <div className="grid md:grid-cols-2 gap-10">

            {cards.map((item, index) => (

              <motion.div
                key={index}
                initial={{ opacity: 0, y: 70 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.15 }}
                viewport={{ once: true }}
                whileHover={{
                  y: -12,
                }}
                className="group relative overflow-hidden rounded-[40px] bg-white border border-gray-100 shadow-[0_20px_60px_rgba(0,0,0,0.08)]"
              >

                {/* TOP BAR */}
                <div className="h-[7px] w-full bg-gradient-to-r from-[#d4af37] via-[#facc15] to-[#d4af37]"></div>

                {/* GLOW */}
                <div className="absolute top-0 right-0 w-40 h-40 bg-[#d4af37]/10 blur-2xl rounded-full"></div>

                {/* ICON */}
                <div className="absolute top-8 left-10 w-24 h-24 rounded-full bg-[#07294d] text-white flex items-center justify-center text-4xl shadow-2xl group-hover:bg-[#d4af37] group-hover:text-[#07294d] transition duration-500">

                  {item.icon}

                </div>

                {/* CONTENT */}
                <div className="relative z-10 p-10 pt-40">

                  {/* TITLE */}
                  <h3 className="text-4xl font-black text-[#07294d] mb-4">

                    {item.title}

                  </h3>

                  {/* LINE */}
                  <div className="w-16 h-[4px] bg-[#d4af37] rounded-full mb-6"></div>

                  {/* TEXT */}
                  <p className="text-gray-600 text-[16px] leading-7 whitespace-pre-line">

                    {item.text}

                  </p>

                </div>

              </motion.div>

            ))}

          </div>

        </div>

      </div>

    </section>
  );
}