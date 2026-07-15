import React from "react";
import { motion } from "framer-motion";
import {
  FaFlask,
  FaAtom,
  FaMicroscope,
  FaLaptopCode,
  FaArrowRight,
  FaCheckCircle,
} from "react-icons/fa";

import labImg1 from "../assets/Cambridge International School exterior view.png";
import labImg2 from "../assets/Cambridge International School exterior view.png";
import labImg3 from "../assets/Cambridge International School exterior view.png";

const Labs = () => {
  return (
    <section className="bg-slate-50 overflow-hidden">

      {/* ================= HERO ================= */}

      <section className="max-w-7xl mx-auto px-6 lg:px-10 py-16">

        <div className="grid lg:grid-cols-2 gap-12 items-center">

          {/* LEFT */}

          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: .7 }}
            viewport={{ once: true }}
          >

            <span className="inline-flex items-center rounded-full bg-cyan-100 text-cyan-700 px-5 py-2 text-sm font-semibold tracking-wide">

              SCIENCE LABORATORIES

            </span>

            <h1 className="mt-6 text-4xl lg:text-5xl font-extrabold leading-tight text-[#07294d]">

              Learn By
              <br />

              <span className="text-cyan-600">

                Experimenting

              </span>

            </h1>

            <p className="mt-6 text-gray-600 text-lg leading-8 max-w-xl">

              Our modern laboratories provide students with hands-on
              learning experiences where scientific concepts come alive
              through practical experiments, innovation and discovery.

            </p>

            <div className="flex flex-wrap gap-4 mt-8">

              <button className="bg-[#07294d] hover:bg-[#0b4277] transition text-white px-7 py-3 rounded-xl font-semibold flex items-center gap-2">

                Explore Labs

                <FaArrowRight />

              </button>

              <button className="border border-[#07294d] text-[#07294d] hover:bg-[#07294d] hover:text-white transition px-7 py-3 rounded-xl font-semibold">

                View Facilities

              </button>

            </div>

            {/* MINI STATS */}

            <div className="grid grid-cols-2 gap-5 mt-10">

              <div className="bg-white rounded-2xl shadow-md p-6">

                <h2 className="text-3xl font-bold text-[#07294d]">

                  STEM

                </h2>

                <p className="text-gray-600 mt-2">

                  Practical Learning

                </p>

              </div>

              <div className="bg-white rounded-2xl shadow-md p-6">

                <h2 className="text-3xl font-bold text-[#07294d]">

                  100%

                </h2>

                <p className="text-gray-600 mt-2">

                  Safe Environment

                </p>

              </div>

            </div>

          </motion.div>

          {/* RIGHT */}

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: .7 }}
            viewport={{ once: true }}
            className="relative"
          >

            {/* IMAGE COLLAGE */}

            <div className="grid grid-cols-2 gap-5">

              <img
                src={labImg1}
                alt=""
                className="rounded-3xl h-[260px] w-full object-cover shadow-xl"
              />

              <img
                src={labImg2}
                alt=""
                className="rounded-3xl h-[340px] w-full object-cover shadow-xl mt-10"
              />

              <img
                src={labImg3}
                alt=""
                className="rounded-3xl h-[220px] w-full object-cover shadow-xl -mt-16 col-span-2"
              />

            </div>

            {/* FLOATING CARD */}

            <div className="absolute bottom-6 left-6 bg-white rounded-2xl shadow-xl p-6 max-w-xs">

              <div className="flex gap-4">

                <div className="w-14 h-14 rounded-xl bg-cyan-500 text-white flex items-center justify-center text-2xl">

                  <FaFlask />

                </div>

                <div>

                  <h3 className="font-bold text-[#07294d] text-xl">

                    Hands-On Learning

                  </h3>

                  <p className="text-gray-600 text-sm mt-2 leading-6">

                    Students understand concepts through observation,
                    experimentation and innovation.

                  </p>

                </div>

              </div>

            </div>

          </motion.div>

        </div>

      </section>

      {/* ================= ABOUT LABS ================= */}

      <section className="max-w-7xl mx-auto px-6 lg:px-10 pb-20">

        <div className="grid lg:grid-cols-2 gap-16 items-center">

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: .7 }}
            viewport={{ once: true }}
          >

            <span className="uppercase tracking-[3px] text-cyan-600 font-semibold">

              Our Laboratories

            </span>

            <h2 className="text-4xl font-bold text-[#07294d] mt-4">

              Where Curiosity Meets
              Innovation

            </h2>

            <p className="text-gray-600 leading-8 mt-6">

              The Physics, Chemistry, Biology and Computer Laboratories
              are equipped with modern instruments and guided by
              experienced faculty, enabling students to develop
              analytical thinking, creativity and scientific skills.

            </p>

            <div className="space-y-5 mt-8">

              <div className="flex gap-3">

                <FaCheckCircle className="text-cyan-500 mt-1" />

                <span>Physics, Chemistry & Biology Labs</span>

              </div>

              <div className="flex gap-3">

                <FaCheckCircle className="text-cyan-500 mt-1" />

                <span>Modern Computer Laboratory</span>

              </div>

              <div className="flex gap-3">

                <FaCheckCircle className="text-cyan-500 mt-1" />

                <span>Latest Scientific Equipment</span>

              </div>

              <div className="flex gap-3">

                <FaCheckCircle className="text-cyan-500 mt-1" />

                <span>Safe & Well-Supervised Environment</span>

              </div>

            </div>

          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: .95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: .7 }}
            viewport={{ once: true }}
          >

            <img
              src={labImg2}
              alt=""
              className="rounded-[32px] h-[450px] object-cover w-full shadow-xl"
            />

          </motion.div>

        </div>

      </section>
            {/* ================= LAB FACILITIES ================= */}

      <section className="max-w-7xl mx-auto px-6 lg:px-10 pb-20">

        <div className="text-center mb-14">

          <span className="uppercase tracking-[3px] text-cyan-600 font-semibold">
            Laboratory Facilities
          </span>

          <h2 className="text-4xl font-bold text-[#07294d] mt-4">
            Explore Our Laboratories
          </h2>

          <p className="text-gray-600 mt-4 max-w-2xl mx-auto leading-8">
            Our laboratories provide a perfect blend of practical
            learning, innovation and technology to strengthen scientific
            understanding and analytical thinking.
          </p>

        </div>

        <div className="space-y-6">

          {[
            {
              title: "Physics Laboratory",
              desc: "Well-equipped laboratory with modern apparatus that enables students to understand physical concepts through observation and experimentation.",
              icon: <FaAtom />,
            },

            {
              title: "Chemistry Laboratory",
              desc: "A safe and spacious laboratory where students perform experiments and explore chemical reactions with confidence.",
              icon: <FaFlask />,
            },

            {
              title: "Biology Laboratory",
              desc: "Advanced microscopes, specimens and models help students understand biological sciences practically.",
              icon: <FaMicroscope />,
            },

            {
              title: "Computer Laboratory",
              desc: "Modern computer systems with internet connectivity support coding, digital literacy and technology-based learning.",
              icon: <FaLaptopCode />,
            },

          ].map((item, index) => (

            <motion.div
              key={index}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.08 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
              className="bg-white rounded-3xl shadow-md hover:shadow-xl transition p-6 border border-slate-100"
            >

              <div className="flex flex-col md:flex-row gap-6 items-start">

                <div className="w-16 h-16 rounded-2xl bg-cyan-100 text-cyan-600 flex items-center justify-center text-3xl flex-shrink-0">

                  {item.icon}

                </div>

                <div>

                  <h3 className="text-2xl font-bold text-[#07294d]">

                    {item.title}

                  </h3>

                  <p className="text-gray-600 mt-3 leading-8">

                    {item.desc}

                  </p>

                </div>

              </div>

            </motion.div>

          ))}

        </div>

      </section>

      {/* ================= STATS ================= */}

      <section className="bg-[#07294d] py-16">

        <div className="max-w-7xl mx-auto px-6">

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">

            {[
              {
                number: "4+",
                title: "Modern Laboratories",
              },

              {
                number: "100%",
                title: "Practical Learning",
              },

              {
                number: "STEM",
                title: "Innovation Focus",
              },

              {
                number: "Safe",
                title: "Learning Environment",
              },

            ].map((item, index) => (

              <motion.div
                key={index}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.08 }}
                viewport={{ once: true }}
                className="bg-white rounded-3xl p-7 text-center"
              >

                <h2 className="text-4xl font-extrabold text-[#07294d]">

                  {item.number}

                </h2>

                <p className="text-gray-600 mt-3">

                  {item.title}

                </p>

              </motion.div>

            ))}

          </div>

        </div>

      </section>

      {/* ================= CTA ================= */}

      <section className="max-w-7xl mx-auto px-6 lg:px-10 py-20">

        <div className="rounded-[30px] bg-gradient-to-r from-[#07294d] via-[#0a4f82] to-[#0891b2] p-10 lg:p-14 flex flex-col lg:flex-row items-center justify-between gap-8">

          <div>

            <span className="uppercase tracking-[3px] text-cyan-200 text-sm font-semibold">

              Innovation Starts Here

            </span>

            <h2 className="text-4xl font-bold text-white mt-3">

              Explore, Experiment & Discover

            </h2>

            <p className="text-blue-100 mt-4 leading-8 max-w-xl">

              Our state-of-the-art laboratories encourage students
              to think scientifically, solve problems creatively and
              develop practical skills for the future.

            </p>

          </div>

          <button className="bg-white hover:bg-slate-100 transition text-[#07294d] font-semibold px-8 py-4 rounded-xl flex items-center gap-2">

            Explore Campus

            <FaArrowRight />

          </button>

        </div>

      </section>

    </section>
  );
};

export default Labs;