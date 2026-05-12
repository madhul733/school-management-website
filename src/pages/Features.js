import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  FaArrowRight,
  FaGraduationCap,
  FaBookOpen,
  FaBrain,
  FaSchool,
} from "react-icons/fa";

import img1 from "../assets/PHOTO-2026-03-08-00-04-57.jpg";
import img2 from "../assets/PHOTO-2026-03-08-00-04-57.jpg";
import img3 from "../assets/PHOTO-2026-03-08-00-04-58.jpg";
import img4 from "../assets/PHOTO-2026-03-10-09-50-11.jpg";
import img5 from "../assets/PHOTO-2026-03-17-08-34-28.jpg";

const features = [
  {
    img: img1,
    title: "Playway School",
    desc: "Fun-based learning for early childhood development.",
    link: "/playway",
    icon: <FaBrain />,
    number: "01",
  },

  {
    img: img2,
    title: "Primary School",
    desc: "Strong foundation with interactive learning methods.",
    link: "/primary",
    icon: <FaBookOpen />,
    number: "02",
  },

  {
    img: img3,
    title: "Middle School",
    desc: "Balanced academic and co-curricular growth.",
    link: "/middle",
    icon: <FaGraduationCap />,
    number: "03",
  },

  {
    img: img4,
    title: "Secondary School",
    desc: "Focused academic excellence and discipline.",
    link: "/secondary",
    icon: <FaSchool />,
    number: "04",
  },

  {
    img: img5,
    title: "Senior Secondary",
    desc: "Preparing students for future careers and success.",
    link: "/senior",
    icon: <FaGraduationCap />,
    number: "05",
  },
];

const Features = () => {
  return (
    <section className="relative w-full py-32 bg-[#f6f8fc] overflow-hidden">

      {/* ================= BACKGROUND GLOW ================= */}
      <div className="absolute top-[-150px] left-[-120px] w-[420px] h-[420px] bg-[#d4af37]/10 blur-3xl rounded-full"></div>

      <div className="absolute bottom-[-150px] right-[-120px] w-[420px] h-[420px] bg-[#07294d]/10 blur-3xl rounded-full"></div>

      {/* ================= MAIN ================= */}
      <div className="max-w-[1500px] mx-auto px-6 relative z-10">

        {/* ================= TOP ================= */}
        <div className="text-center mb-24">

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="uppercase tracking-[8px] text-[#d4af37] font-bold mb-6"
          >
            Cambridge International School
          </motion.p>

          <motion.h2
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="text-5xl md:text-7xl xl:text-8xl font-black text-[#07294d] leading-[1.05]"
          >

            <span className="relative inline-block">

              Learning Stages

              <div className="absolute -bottom-4 left-0 w-full h-5 bg-[#d4af37]/20 rounded-full -z-10"></div>

            </span>

          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="max-w-[900px] mx-auto text-gray-600 text-xl leading-10 mt-12"
          >

            Empowering students through every stage of learning
            with innovation, creativity, discipline, and academic excellence.

          </motion.p>

        </div>

        {/* ================= GRID ================= */}
        <div className="grid sm:grid-cols-2 xl:grid-cols-3 gap-10">

          {features.map((item, index) => (

            <motion.div
              key={index}
              initial={{ opacity: 0, y: 70 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.08 }}
              viewport={{ once: true }}
              whileHover={{
                y: -15,
              }}
              className="group"
            >

              <Link to={item.link}>

                <div className="relative h-full bg-white rounded-[40px] overflow-hidden border border-gray-100 shadow-[0_20px_70px_rgba(0,0,0,0.08)]">

                  {/* TOP GOLD BAR */}
                  <div className="h-[8px] w-full bg-gradient-to-r from-[#d4af37] via-[#facc15] to-[#d4af37]"></div>

                  {/* BIG NUMBER */}
                  <h1 className="absolute top-5 right-6 text-[110px] font-black text-[#07294d]/5 z-20">

                    {item.number}

                  </h1>

                  {/* IMAGE */}
                  <div className="relative overflow-hidden">

                    <img
                      src={item.img}
                      alt={item.title}
                      className="w-full h-[320px] object-cover group-hover:scale-110 transition duration-700"
                    />

                    {/* DARK OVERLAY */}
                    <div className="absolute inset-0 bg-gradient-to-t from-[#021427]/85 via-[#021427]/20 to-transparent"></div>

                    {/* FLOATING ICON */}
                    <div className="absolute bottom-6 left-6 w-24 h-24 rounded-[30px] bg-white/90 backdrop-blur-lg text-[#07294d] flex items-center justify-center text-4xl shadow-2xl group-hover:bg-[#07294d] group-hover:text-white transition duration-500">

                      {item.icon}

                    </div>

                    {/* SMALL TAG */}
                    <div className="absolute top-6 left-6 px-5 py-2 rounded-full bg-white/20 backdrop-blur-md border border-white/20 text-white text-sm font-semibold tracking-[2px]">

                      Academic Stage

                    </div>

                  </div>

                  {/* CONTENT */}
                  <div className="p-9 relative">

                    {/* TITLE */}
                    <h3 className="text-3xl font-black text-[#07294d] mb-4 leading-tight">

                      {item.title}

                    </h3>

                    {/* LINE */}
                    <div className="w-16 h-[4px] bg-[#d4af37] rounded-full mb-6"></div>

                    {/* DESC */}
                    <p className="text-gray-600 text-[17px] leading-8 mb-10 min-h-[80px]">

                      {item.desc}

                    </p>

                    {/* BUTTON */}
                    <div className="flex items-center justify-between">

                      <div className="flex items-center gap-3 text-[#07294d] font-bold text-lg group-hover:text-[#d4af37] transition duration-300">

                        Explore More

                        <FaArrowRight className="group-hover:translate-x-2 transition duration-300" />

                      </div>

                      {/* MINI ICON */}
                      <div className="w-12 h-12 rounded-full border border-gray-200 flex items-center justify-center text-[#07294d] group-hover:bg-[#07294d] group-hover:text-white transition duration-300">

                        <FaGraduationCap />

                      </div>

                    </div>

                  </div>

                </div>

              </Link>

            </motion.div>

          ))}

        </div>

      </div>

    </section>
  );
};

export default Features;