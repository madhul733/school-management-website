import React from "react";
import { motion } from "framer-motion";
import {
  FaChalkboardTeacher,
  FaLightbulb,
  FaUsers,
  FaBookOpen,
} from "react-icons/fa";

/* ================= IMAGES ================= */
import heroImg from "../assets/photo-1580582932707-520aed937b7b.avif";

/* ================= FOOTER ================= */
import Footer from "./Footer";

export default function Faculty() {

  const facultyMembers = [
    {
      name: "Mrs. Anjali Sharma",
      role: "Senior English Faculty",
      image:
        "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=1200&auto=format&fit=crop",
    },
    {
      name: "Mr. Rajiv Mehta",
      role: "Mathematics Faculty",
      image:
        "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=1200&auto=format&fit=crop",
    },
    {
      name: "Mrs. Simran Kaur",
      role: "Science Faculty",
      image:
        "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=1200&auto=format&fit=crop",
    },
  ];

  const highlights = [
    {
      icon: <FaChalkboardTeacher />,
      title: "Expert Educators",
      text: "Highly qualified faculty committed to excellence in teaching and learning.",
    },
    {
      icon: <FaLightbulb />,
      title: "Innovative Teaching",
      text: "Modern methodologies encouraging creativity and practical understanding.",
    },
    {
      icon: <FaUsers />,
      title: "Personal Attention",
      text: "Healthy staff-student ratio ensuring guidance and mentorship.",
    },
  ];

  return (
    <div className="w-full bg-[#f4f8fd] overflow-hidden">

      {/* ================= HERO SECTION ================= */}
      <section className="relative h-[650px] overflow-hidden">

        {/* HERO IMAGE */}
        <motion.img
          initial={{ scale: 1.12 }}
          animate={{ scale: 1 }}
          transition={{ duration: 2 }}
          src={heroImg}
          alt="faculty"
          className="w-full h-full object-cover"
        />

        {/* OVERLAY */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#021427]/95 via-[#07294d]/80 to-[#07294d]/30"></div>

        {/* GLOW */}
        <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-[#facc15]/10 blur-3xl rounded-full"></div>

        {/* HERO CONTENT */}
        <motion.div
          initial={{ opacity: 0, y: 70 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="absolute inset-0 flex items-center"
        >

          <div className="max-w-[1450px] mx-auto w-full px-6 md:px-16">

            <div className="max-w-[760px]">

              <p className="uppercase tracking-[8px] text-[#facc15] text-sm md:text-lg mb-5 font-medium">
                Dedicated Educators
              </p>

              <h1 className="text-white text-5xl md:text-7xl font-bold leading-[1.1]">

                Our
                <br />
                Faculty

              </h1>

              <div className="w-40 h-[5px] bg-[#facc15] rounded-full mt-8"></div>

              <p className="text-white/80 text-lg md:text-xl leading-9 mt-10 max-w-[680px]">
                Inspiring excellence through innovation,
                dedication, and student-centered learning.
              </p>

            </div>

          </div>

        </motion.div>

      </section>

      {/* ================= MAIN SECTION ================= */}
      <section className="max-w-[1450px] mx-auto px-6 py-28">

        {/* ================= MAIN CARD ================= */}
        <motion.div
          initial={{ opacity: 0, y: 80 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="relative bg-white rounded-[45px] overflow-hidden shadow-[0_20px_60px_rgba(0,0,0,0.08)]"
        >

          {/* TOP STRIP */}
          <div className="absolute top-0 left-0 w-full h-3 bg-gradient-to-r from-[#facc15] via-[#fbbf24] to-[#facc15]"></div>

          <div className="grid lg:grid-cols-2">

            {/* ================= LEFT CONTENT ================= */}
            <div className="relative p-10 md:p-16 lg:p-20 overflow-hidden">

              {/* Glow */}
              <div className="absolute bottom-0 left-0 w-[350px] h-[350px] bg-[#facc15]/10 blur-3xl rounded-full"></div>

              {/* ICON */}
              <div className="w-24 h-24 rounded-[30px] bg-[#07294d] text-white flex items-center justify-center text-4xl shadow-xl mb-10 relative z-10">

                <FaBookOpen />

              </div>

              {/* CONTENT */}
              <div className="relative z-10">

                <p className="uppercase tracking-[6px] text-[#facc15] font-semibold mb-5">
                  Excellence In Teaching
                </p>

                <h2 className="text-5xl font-bold text-[#07294d] leading-tight mb-10">

                  Dedicated Faculty
                  <br />
                  Inspiring Future Leaders

                </h2>

                <div className="space-y-8 text-[19px] leading-[42px] text-[#4b5563]">

                  <p>
                    At Cambridge International School, we are proud to
                    have a team of highly qualified, competent, and
                    deeply committed educators who continuously strive
                    to create a positive and inspiring learning
                    environment for every student.
                  </p>

                  <p>
                    Our faculty members are professionally trained in
                    activity-based learning and modern teaching
                    methodologies that encourage participation,
                    creativity, analytical thinking, and practical
                    understanding.
                  </p>

                  <p>
                    Lesson planning, classroom performance, and
                    contribution to co-curricular activities are
                    consistently monitored under the guidance of the
                    Principal to ensure the highest standards of
                    teaching and learning.
                  </p>

                  <p>
                    We strongly believe that education should go beyond
                    traditional “chalk-and-talk” methods. Therefore,
                    our educators adopt innovative approaches and
                    self-motivated learning techniques that help
                    students discover their true potential.
                  </p>

                  <p>
                    The school is equally committed to continuous
                    faculty development through workshops, training
                    sessions, and modern pedagogical practices focused
                    on holistic growth.
                  </p>

                  <p>
                    With a healthy staff-student ratio of 1:25, every
                    learner receives personal attention, mentorship,
                    and guidance supporting both academic excellence
                    and personality development.
                  </p>

                </div>

              </div>

            </div>

            {/* ================= RIGHT IMAGE SIDE ================= */}
            <div className="relative bg-[#07294d] p-8 md:p-10 overflow-hidden flex items-center justify-center">

              {/* Glow */}
              <div className="absolute top-0 right-0 w-72 h-72 bg-[#facc15]/10 blur-3xl rounded-full"></div>

              <motion.div
                whileHover={{ y: -8 }}
                transition={{ duration: 0.3 }}
                className="relative z-10 w-full"
              >

                {/* GROUP PHOTO */}
                <div className="overflow-hidden rounded-[35px] shadow-[0_20px_50px_rgba(0,0,0,0.4)] border border-white/10">

                  <img
                    src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=1400&auto=format&fit=crop"
                    alt="Faculty Group"
                    className="w-full h-[620px] object-cover hover:scale-105 transition duration-700"
                  />

                </div>

                {/* INFO CARD */}
                <div className="bg-white rounded-[28px] p-8 shadow-2xl -mt-12 mx-6 relative z-20">

                  <div className="flex items-center justify-between">

                    <div>

                      <h3 className="text-3xl font-bold text-[#07294d]">
                        Cambridge Faculty
                      </h3>

                      <p className="text-[#facc15] font-semibold mt-2 text-lg tracking-wide">
                        Excellence In Education
                      </p>

                    </div>

                    {/* RATIO */}
                    <div className="w-20 h-20 rounded-3xl bg-[#07294d] text-white flex flex-col items-center justify-center shadow-lg">

                      <span className="text-2xl font-bold">
                        1:25
                      </span>

                      <span className="text-[11px] tracking-wide">
                        Ratio
                      </span>

                    </div>

                  </div>

                </div>

              </motion.div>

            </div>

          </div>

        </motion.div>

        {/* ================= FACULTY MEMBERS ================= */}
        <div className="mt-24">

          <div className="text-center mb-16">

            <p className="uppercase tracking-[6px] text-[#facc15] font-semibold mb-4">
              Our Educators
            </p>

            <h2 className="text-5xl font-bold text-[#07294d]">
              Faculty Members
            </h2>

          </div>

          <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-10">

            {facultyMembers.map((member, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 60 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -10 }}
                className="bg-white rounded-[35px] overflow-hidden shadow-[0_15px_45px_rgba(0,0,0,0.08)]"
              >

                {/* IMAGE */}
                <div className="overflow-hidden h-[420px]">

                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover hover:scale-105 transition duration-700"
                  />

                </div>

                {/* CONTENT */}
                <div className="p-8 text-center">

                  <h3 className="text-3xl font-bold text-[#07294d]">
                    {member.name}
                  </h3>

                  <p className="text-[#facc15] font-semibold mt-3 text-lg">
                    {member.role}
                  </p>

                </div>

              </motion.div>
            ))}

          </div>

        </div>

        {/* ================= HIGHLIGHTS ================= */}
        <div className="grid md:grid-cols-3 gap-8 mt-24">

          {highlights.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
              whileHover={{ y: -10 }}
              className="relative bg-white rounded-[35px] p-10 shadow-[0_15px_40px_rgba(0,0,0,0.08)] overflow-hidden"
            >

              {/* Glow */}
              <div className="absolute top-0 right-0 w-40 h-40 bg-[#facc15]/10 blur-2xl rounded-full"></div>

              <div className="relative z-10">

                <div className="w-20 h-20 rounded-3xl bg-[#07294d] text-white flex items-center justify-center text-3xl shadow-lg mb-8">

                  {item.icon}

                </div>

                <h3 className="text-3xl font-bold text-[#07294d] mb-5">
                  {item.title}
                </h3>

                <p className="text-gray-600 leading-8 text-[17px]">
                  {item.text}
                </p>

              </div>

            </motion.div>
          ))}

        </div>

      </section>

      {/* ================= FOOTER ================= */}
      <Footer />

    </div>
  );
}