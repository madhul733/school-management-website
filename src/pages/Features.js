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

import img1 from "../assets/uploads/kinder.jpeg";
import img2 from "../assets/uploads/prim.jpeg";
import img3 from "../assets/uploads/middle.jpeg";
import img4 from "../assets/uploads/senior.jpeg";
import img5 from "../assets/uploads/senior1.jpeg";

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
    <section className="relative w-full py-28 bg-[#f6f8fc] overflow-hidden">

      {/* Background Glow */}
      <div className="absolute top-[-150px] left-[-120px] w-[420px] h-[420px] bg-[#d4af37]/10 blur-3xl rounded-full"></div>

      <div className="absolute bottom-[-150px] right-[-120px] w-[420px] h-[420px] bg-[#07294d]/10 blur-3xl rounded-full"></div>

      <div className="max-w-[1450px] mx-auto px-6 relative z-10">

        {/* Heading */}

        <div className="text-center mb-20">

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
            className="text-5xl md:text-7xl xl:text-8xl font-black text-[#07294d] leading-tight"
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
            className="max-w-[850px] mx-auto text-gray-600 text-lg md:text-xl leading-9 mt-10"
          >
            Empowering students through every stage of learning
            with innovation, creativity, discipline, and academic excellence.
          </motion.p>

        </div>

        {/* Cards */}

        <div className="grid sm:grid-cols-2 xl:grid-cols-3 gap-8">

          {features.map((item, index) => (

            <motion.div
              key={index}
              initial={{ opacity: 0, y: 70 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.08 }}
              viewport={{ once: true }}
              whileHover={{
                y: -10,
              }}
              className="group"
            >

              <Link to={item.link}>

                <div className="relative h-full bg-white rounded-[34px] overflow-hidden border border-gray-100 shadow-[0_18px_55px_rgba(0,0,0,0.08)] hover:shadow-[0_28px_70px_rgba(7,41,77,0.14)] transition-all duration-500">

                  {/* Gold Strip */}

                  <div className="h-[7px] w-full bg-gradient-to-r from-[#d4af37] via-[#facc15] to-[#d4af37]"></div>

                  {/* Number */}

                  <h1 className="absolute top-4 right-5 text-[90px] font-black text-[#07294d]/5 z-20">

                    {item.number}

                  </h1>

                  {/* Image */}

                  <div className="relative overflow-hidden">

                    <img
                      src={item.img}
                      alt={item.title}
                      className="w-full aspect-[4/3] object-cover object-center transition-transform duration-700 group-hover:scale-105"
                    />

                    <div className="absolute inset-0 bg-gradient-to-t from-[#021427]/85 via-[#021427]/20 to-transparent"></div>

                    {/* Stage Tag */}

                    <div className="absolute top-5 left-5 px-5 py-2 rounded-full bg-white/20 backdrop-blur-md border border-white/30 text-white text-xs font-semibold tracking-[2px]">

                      Academic Stage

                    </div>

                    {/* Floating Icon */}

                    <div className="absolute bottom-5 left-5 w-20 h-20 rounded-[24px] bg-white/90 backdrop-blur-lg flex items-center justify-center text-[#07294d] text-3xl shadow-xl group-hover:bg-[#07294d] group-hover:text-white transition-all duration-500">

                      {item.icon}

                    </div>

                  </div>

                  {/* Content */}

                  <div className="p-7 relative">

                    <h3 className="text-[30px] font-black text-[#07294d] leading-tight mb-4">

                      {item.title}

                    </h3>

                    <div className="w-14 h-[4px] rounded-full bg-[#d4af37] mb-5"></div>

                    <p className="text-gray-600 text-[16px] leading-7 min-h-[60px] mb-8">

                      {item.desc}

                    </p>
                                        {/* Bottom */}

                    <div className="flex items-center justify-between">

                      <div className="flex items-center gap-3 font-semibold text-[17px] text-[#07294d] group-hover:text-[#d4af37] transition-all duration-300">

                        Explore More

                        <FaArrowRight className="group-hover:translate-x-2 transition-transform duration-300" />

                      </div>

                      <div className="w-11 h-11 rounded-full border border-gray-200 flex items-center justify-center text-[#07294d] bg-white group-hover:bg-[#07294d] group-hover:text-white group-hover:border-[#07294d] transition-all duration-300">

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