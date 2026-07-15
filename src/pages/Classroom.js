// Classroom.jsx (PART 1)

import React from "react";
import { motion } from "framer-motion";
import {
  FaChalkboardTeacher,
  FaDesktop,
  FaUserGraduate,
  FaChair,
  FaArrowRight,
  FaCheckCircle,
} from "react-icons/fa";

import heroImg from "../assets/uploads/school.jpg";

const Classroom = () => {
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

            <span className="inline-flex items-center rounded-full bg-blue-100 text-[#07294d] px-5 py-2 text-sm font-semibold tracking-wide">

              CLASSROOMS

            </span>

            <h1 className="mt-6 text-4xl lg:text-5xl font-extrabold leading-tight text-[#07294d]">

              Inspiring Young Minds
              <br />

              Through

              <span className="text-sky-600">

                {" "}Modern Classrooms

              </span>

            </h1>

            <p className="mt-6 text-gray-600 text-lg leading-8 max-w-xl">

              Our classrooms are thoughtfully designed with smart
              technology, experienced educators and a student-centric
              environment that encourages creativity, confidence and
              academic excellence.

            </p>

            <div className="mt-8 flex flex-wrap gap-4">

              <button className="bg-[#07294d] hover:bg-[#0b3f74] transition text-white px-7 py-3 rounded-xl font-semibold flex items-center gap-2">

                Explore Campus

                <FaArrowRight />

              </button>

              <button className="border border-[#07294d] text-[#07294d] hover:bg-[#07294d] hover:text-white transition px-7 py-3 rounded-xl font-semibold">

                Learn More

              </button>

            </div>

            {/* MINI STATS */}

            <div className="grid grid-cols-2 gap-5 mt-10">

              <div className="bg-white rounded-2xl p-5 shadow-md">

                <h3 className="text-3xl font-bold text-[#07294d]">

                  40+

                </h3>

                <p className="text-gray-600 mt-2">

                  Modern Classrooms

                </p>

              </div>

              <div className="bg-white rounded-2xl p-5 shadow-md">

                <h3 className="text-3xl font-bold text-[#07294d]">

                  Smart

                </h3>

                <p className="text-gray-600 mt-2">

                  Digital Learning

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
              src={heroImg}
              alt=""
              className="rounded-3xl h-[500px] w-full object-cover shadow-2xl"
            />

            {/* FLOATING CARD */}

            <div className="absolute bottom-6 left-6 bg-white/95 backdrop-blur-xl rounded-2xl shadow-xl p-6 max-w-sm">

              <div className="flex gap-4">

                <div className="w-14 h-14 rounded-xl bg-sky-500 flex items-center justify-center text-white text-2xl">

                  <FaDesktop />

                </div>

                <div>

                  <h3 className="font-bold text-xl text-[#07294d]">

                    Smart Learning

                  </h3>

                  <p className="text-gray-600 mt-2 text-sm leading-6">

                    Digital classrooms with interactive boards,
                    multimedia content and engaging teaching methods.

                  </p>

                </div>

              </div>

            </div>

          </motion.div>

        </div>

      </section>

      {/* ================= WHY OUR CLASSROOMS ================= */}

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
              src={heroImg}
              alt=""
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

            <span className="text-sky-600 font-semibold uppercase tracking-[3px]">

              Why Choose Us

            </span>

            <h2 className="text-4xl font-bold text-[#07294d] mt-4">

              Designed For Better Learning

            </h2>

            <p className="text-gray-600 leading-8 mt-6">

              Every classroom is designed to create an engaging
              atmosphere where students learn with confidence,
              collaborate effectively and achieve academic success.

            </p>

            <div className="grid sm:grid-cols-2 gap-5 mt-8">

              <div className="flex items-start gap-3">

                <FaCheckCircle className="text-sky-500 mt-1" />

                <span>Smart Digital Boards</span>

              </div>

              <div className="flex items-start gap-3">

                <FaCheckCircle className="text-sky-500 mt-1" />

                <span>Experienced Teachers</span>

              </div>

              <div className="flex items-start gap-3">

                <FaCheckCircle className="text-sky-500 mt-1" />

                <span>Comfortable Seating</span>

              </div>

              <div className="flex items-start gap-3">

                <FaCheckCircle className="text-sky-500 mt-1" />

                <span>Interactive Learning</span>

              </div>

              <div className="flex items-start gap-3">

                <FaCheckCircle className="text-sky-500 mt-1" />

                <span>Student-Centric Approach</span>

              </div>

              <div className="flex items-start gap-3">

                <FaCheckCircle className="text-sky-500 mt-1" />

                <span>Creative Activities</span>

              </div>

            </div>

          </motion.div>

        </div>

      </section>
            {/* ================= FEATURES ================= */}

      <section className="max-w-7xl mx-auto px-6 lg:px-10 pb-20">

        <div className="text-center mb-12">

          <span className="text-sky-600 font-semibold uppercase tracking-[3px]">
            Classroom Facilities
          </span>

          <h2 className="text-4xl font-bold text-[#07294d] mt-4">
            Everything Students Need
          </h2>

          <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
            Our classrooms combine modern technology, experienced faculty
            and comfortable learning spaces to create an inspiring
            educational environment.
          </p>

        </div>

        <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-6">

          {[
            {
              icon: <FaDesktop />,
              title: "Smart Boards",
              desc: "Interactive digital boards make lessons engaging and visually effective.",
            },

            {
              icon: <FaChalkboardTeacher />,
              title: "Expert Teachers",
              desc: "Highly qualified faculty providing individual attention to every learner.",
            },

            {
              icon: <FaChair />,
              title: "Comfortable Seating",
              desc: "Modern furniture designed for comfort and better concentration.",
            },

            {
              icon: <FaUserGraduate />,
              title: "Student Focus",
              desc: "Encouraging curiosity, creativity and academic excellence every day.",
            },

            {
              icon: <FaDesktop />,
              title: "Digital Learning",
              desc: "Technology-enabled classrooms for collaborative and innovative learning.",
            },

            {
              icon: <FaCheckCircle />,
              title: "Safe Environment",
              desc: "Clean, secure and student-friendly classrooms for a positive experience.",
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

              <div className="w-14 h-14 rounded-2xl bg-sky-100 text-sky-600 flex items-center justify-center text-2xl mb-5">

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
                number: "40+",
                title: "Modern Classrooms",
              },

              {
                number: "25:1",
                title: "Student Ratio",
              },

              {
                number: "100%",
                title: "Interactive Learning",
              },

              {
                number: "Digital",
                title: "Smart Education",
              },

            ].map((item, index) => (

              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
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

        <div className="bg-gradient-to-r from-[#07294d] to-[#0b5ed7] rounded-[32px] p-10 lg:p-14 flex flex-col lg:flex-row items-center justify-between gap-8">

          <div>

            <h2 className="text-4xl font-bold text-white">

              Experience Learning Beyond
              The Classroom

            </h2>

            <p className="text-blue-100 mt-4 max-w-xl leading-8">

              We nurture young minds through innovative teaching,
              advanced classroom technology and a supportive
              learning environment.

            </p>

          </div>

          <button className="bg-white text-[#07294d] hover:bg-slate-100 transition px-8 py-4 rounded-xl font-semibold flex items-center gap-2">

            Explore Our Campus

            <FaArrowRight />

          </button>

        </div>

      </section>

    </section>
  );
};

export default Classroom;