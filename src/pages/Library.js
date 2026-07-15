import React from "react";
import { motion } from "framer-motion";
import {
  FaBookReader,
  FaBookOpen,
  FaLaptop,
  FaGlobe,
  FaArrowRight,
  FaCheckCircle,
} from "react-icons/fa";

import libraryImg from "../assets/uploads/gr-1.jpeg"; // change image if needed

const Library = () => {
  return (
    <section className="bg-slate-50">

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

            <span className="inline-flex items-center rounded-full bg-yellow-100 text-yellow-700 px-5 py-2 text-sm font-semibold tracking-wide">

              LIBRARY

            </span>

            <h1 className="mt-6 text-4xl lg:text-5xl font-extrabold leading-tight text-[#07294d]">

              A World of
              <br />

              <span className="text-yellow-500">

                Knowledge & Learning

              </span>

            </h1>

            <p className="mt-6 text-gray-600 text-lg leading-8 max-w-xl">

              Our school library is a vibrant learning space that
              encourages curiosity, imagination and lifelong reading.
              Students have access to thousands of books, journals,
              reference materials and digital learning resources.

            </p>

            <div className="mt-8 flex flex-wrap gap-4">

              <button className="bg-[#07294d] hover:bg-[#0b4277] transition text-white px-7 py-3 rounded-xl font-semibold flex items-center gap-2">

                Explore Library

                <FaArrowRight />

              </button>

              <button className="border border-[#07294d] text-[#07294d] hover:bg-[#07294d] hover:text-white transition px-7 py-3 rounded-xl font-semibold">

                Learn More

              </button>

            </div>

            {/* STATS */}

            <div className="grid grid-cols-2 gap-5 mt-10">

              <div className="bg-white rounded-2xl shadow-md p-6">

                <h2 className="text-3xl font-bold text-[#07294d]">

                  7000+

                </h2>

                <p className="text-gray-600 mt-2">

                  Books & References

                </p>

              </div>

              <div className="bg-white rounded-2xl shadow-md p-6">

                <h2 className="text-3xl font-bold text-[#07294d]">

                  ICT

                </h2>

                <p className="text-gray-600 mt-2">

                  Digital Resources

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

            <img
              src={libraryImg}
              alt="Library"
              className="rounded-3xl h-[520px] w-full object-cover shadow-2xl"
            />

            {/* FLOATING CARD */}

            <div className="absolute bottom-6 left-6 bg-white/95 backdrop-blur-lg rounded-2xl p-6 shadow-xl max-w-sm">

              <div className="flex gap-4">

                <div className="w-14 h-14 rounded-xl bg-yellow-400 text-white flex items-center justify-center text-2xl">

                  <FaBookReader />

                </div>

                <div>

                  <h3 className="font-bold text-xl text-[#07294d]">

                    Reading Culture

                  </h3>

                  <p className="text-gray-600 text-sm mt-2 leading-6">

                    A peaceful environment where students build
                    knowledge, creativity and confidence through
                    reading.

                  </p>

                </div>

              </div>

            </div>

          </motion.div>

        </div>

      </section>

      {/* ================= WHY OUR LIBRARY ================= */}

      <section className="max-w-7xl mx-auto px-6 lg:px-10 pb-20">

        <div className="grid lg:grid-cols-2 gap-14 items-center">

          {/* IMAGE */}

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: .7 }}
            viewport={{ once: true }}
          >

            <img
              src={libraryImg}
              alt="Library"
              className="rounded-3xl h-[430px] object-cover w-full shadow-xl"
            />

          </motion.div>

          {/* CONTENT */}

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: .7 }}
            viewport={{ once: true }}
          >

            <span className="uppercase tracking-[3px] text-yellow-500 font-semibold">

              Why Our Library

            </span>

            <h2 className="text-4xl font-bold text-[#07294d] mt-4">

              Inspiring Readers,
              Lifelong Learners

            </h2>

            <p className="text-gray-600 mt-6 leading-8">

              The library provides students with quality books,
              digital resources and a quiet atmosphere where they
              can explore ideas, strengthen academic skills and
              develop a passion for reading.

            </p>

            <div className="grid sm:grid-cols-2 gap-5 mt-8">

              <div className="flex gap-3 items-start">

                <FaCheckCircle className="text-yellow-500 mt-1" />

                <span>7000+ Books</span>

              </div>

              <div className="flex gap-3 items-start">

                <FaCheckCircle className="text-yellow-500 mt-1" />

                <span>Reference Section</span>

              </div>

              <div className="flex gap-3 items-start">

                <FaCheckCircle className="text-yellow-500 mt-1" />

                <span>ICT Enabled Learning</span>

              </div>

              <div className="flex gap-3 items-start">

                <FaCheckCircle className="text-yellow-500 mt-1" />

                <span>Peaceful Reading Area</span>

              </div>

              <div className="flex gap-3 items-start">

                <FaCheckCircle className="text-yellow-500 mt-1" />

                <span>Academic Resources</span>

              </div>

              <div className="flex gap-3 items-start">

                <FaCheckCircle className="text-yellow-500 mt-1" />

                <span>Research Support</span>

              </div>

            </div>

          </motion.div>

        </div>

      </section>
            {/* ================= LIBRARY FEATURES ================= */}

      <section className="max-w-7xl mx-auto px-6 lg:px-10 pb-20">

        <div className="text-center mb-12">

          <span className="uppercase tracking-[3px] text-yellow-500 font-semibold">
            Library Facilities
          </span>

          <h2 className="text-4xl font-bold text-[#07294d] mt-4">
            Everything Students Need
          </h2>

          <p className="text-gray-600 mt-4 max-w-2xl mx-auto leading-8">
            Our library combines traditional reading with digital
            learning resources to support academic excellence,
            research and lifelong learning.
          </p>

        </div>

        <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-6">

          {[
            {
              icon: <FaBookOpen />,
              title: "7000+ Books",
              desc: "Extensive collection of academic, reference and general knowledge books.",
            },

            {
              icon: <FaBookReader />,
              title: "Reading Culture",
              desc: "Encouraging curiosity, imagination and a lifelong love for reading.",
            },

            {
              icon: <FaLaptop />,
              title: "ICT Resources",
              desc: "Digital learning tools and multimedia resources for modern education.",
            },

            {
              icon: <FaGlobe />,
              title: "Global Knowledge",
              desc: "Access to informative content and worldwide educational resources.",
            },

            {
              icon: <FaBookReader />,
              title: "Research Support",
              desc: "Reference materials and journals for projects and academic research.",
            },

            {
              icon: <FaCheckCircle />,
              title: "Quiet Environment",
              desc: "Comfortable reading spaces designed for focused learning.",
            },

          ].map((item, index) => (

            <motion.div
              key={index}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.08 }}
              viewport={{ once: true }}
              whileHover={{ y: -6 }}
              className="bg-white rounded-3xl p-6 shadow-md hover:shadow-xl transition"
            >

              <div className="w-14 h-14 rounded-2xl bg-yellow-100 text-yellow-500 flex items-center justify-center text-2xl mb-5">

                {item.icon}

              </div>

              <h3 className="text-xl font-bold text-[#07294d]">

                {item.title}

              </h3>

              <p className="text-gray-600 mt-3 leading-7">

                {item.desc}

              </p>

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
                number: "7000+",
                title: "Books",
              },

              {
                number: "ICT",
                title: "Digital Resources",
              },

              {
                number: "100%",
                title: "Reading Support",
              },

              {
                number: "Daily",
                title: "Library Access",
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

        <div className="rounded-[30px] bg-gradient-to-r from-[#07294d] to-[#0d5db8] p-10 lg:p-14 flex flex-col lg:flex-row items-center justify-between gap-8">

          <div>

            <span className="uppercase tracking-[3px] text-yellow-300 text-sm font-semibold">

              Knowledge Begins Here

            </span>

            <h2 className="text-4xl font-bold text-white mt-3">

              Discover. Read. Learn. Grow.

            </h2>

            <p className="text-blue-100 mt-4 leading-8 max-w-xl">

              Our library nurtures curiosity and creativity by providing
              students with a rich collection of books, digital resources
              and an inspiring environment for learning.

            </p>

          </div>

          <button className="bg-white hover:bg-slate-100 transition text-[#07294d] font-semibold px-8 py-4 rounded-xl flex items-center gap-2">

            Visit Our Library

            <FaArrowRight />

          </button>

        </div>

      </section>

    </section>
  );
};

export default Library;