import React from "react";
import { motion } from "framer-motion";
import {
  FaChalkboardTeacher,
  FaLightbulb,
  FaUsers,
  FaGraduationCap,
} from "react-icons/fa";

import heroImg from "../assets/uploads/school.jpg";
import facultyImg from "../assets/uploads/IMG-20180117-WA0042.jpg";

export default function Faculty() {

  const highlights = [
    {
      icon: <FaChalkboardTeacher />,
      title: "Qualified Faculty",
      text: "Highly qualified, experienced and committed educators dedicated to academic excellence.",
    },
    {
      icon: <FaLightbulb />,
      title: "Innovative Learning",
      text: "Activity-based, interactive and student-centric teaching methodologies.",
    },
    {
      icon: <FaUsers />,
      title: "Individual Attention",
      text: "Healthy teacher-student ratio ensuring personal guidance for every learner.",
    },
  ];

  return (
    <div className="w-full bg-[#f5f8fc] overflow-hidden">

      {/* ================= HERO ================= */}

      <section className="relative h-[620px] overflow-hidden">

        <motion.img
          initial={{ scale: 1.12 }}
          animate={{ scale: 1 }}
          transition={{ duration: 2 }}
          src={heroImg}
          alt="Faculty"
          className="w-full h-full object-cover"
        />

        <div className="absolute inset-0 bg-gradient-to-r from-[#031426]/95 via-[#07294d]/80 to-[#07294d]/35"></div>

        <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-[#d4af37]/15 blur-[120px] rounded-full"></div>

        <motion.div
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="absolute inset-0 flex items-center"
        >

          <div className="max-w-[1450px] mx-auto w-full px-6 md:px-16">

            <div className="max-w-[760px]">

              <p className="uppercase tracking-[8px] text-[#facc15] font-semibold mb-5">
                Cambridge International School
              </p>

              <h1 className="text-white text-5xl md:text-7xl font-black leading-[1.05]">

                Our
                <br />

                Faculty

              </h1>

              <div className="w-36 h-[5px] bg-[#facc15] rounded-full mt-8"></div>

              <p className="text-white/80 text-lg leading-9 mt-8 max-w-[650px]">

                A team of passionate educators inspiring knowledge,
                creativity, confidence and lifelong learning.

              </p>

            </div>

          </div>

        </motion.div>

      </section>

      {/* ================= MAIN ================= */}

      <section className="max-w-[1450px] mx-auto px-6 py-24">

        <motion.div
          initial={{ opacity: 0, y: 70 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: .8 }}
          viewport={{ once: true }}
          className="bg-white rounded-[45px] overflow-hidden shadow-[0_20px_60px_rgba(0,0,0,.08)]"
        >

          <div className="h-2 bg-gradient-to-r from-[#facc15] via-[#d4af37] to-[#facc15]"></div>

          <div className="grid lg:grid-cols-2">

            {/* ================= LEFT ================= */}

            <div className="relative p-10 md:p-16 lg:p-20">

              <div className="absolute bottom-0 left-0 w-[350px] h-[350px] bg-[#facc15]/10 blur-3xl rounded-full"></div>

              <div className="relative z-10">

                <div className="w-24 h-24 rounded-[28px] bg-[#07294d] text-white flex items-center justify-center text-4xl shadow-xl mb-10">

                  <FaGraduationCap />

                </div>

                <p className="uppercase tracking-[6px] text-[#d4af37] font-semibold mb-5">

                  Excellence In Teaching

                </p>

                <h2 className="text-5xl font-black text-[#07294d] leading-tight mb-10">

                  Dedicated Faculty
                  <br />
                  Inspiring Every Learner

                </h2>

                <div className="space-y-8 text-[18px] leading-[38px] text-[#4b5563]">

                  <p>
                    We have highly qualified, competent and committed
                    faculty members who are passionate about nurturing
                    young minds through excellence in education. Every
                    teacher is professionally trained in activity-based
                    learning and modern teaching methodologies that make
                    classrooms engaging, interactive and student-centric.
                  </p>

                  <p>
                    Lesson planning, classroom performance and
                    contribution to co-curricular activities remain under
                    the constant guidance and supervision of the
                    Principal, who firmly believes that the quality of
                    teaching and learning must be of the highest
                    standard—day by day, hour by hour and lesson by
                    lesson.
                  </p>

                  <p>
                    Our faculty comprises skilled, confident,
                    enthusiastic and forward-thinking educators who
                    inspire students to think creatively and
                    independently. Rather than relying solely on the
                    traditional "chalk-and-talk" approach, our teachers
                    integrate innovative teaching strategies,
                    experiential learning and self-motivated practices.
                  </p>

                  <p>
                    Cambridge International School is equally committed
                    to the continuous professional growth of its
                    educators through regular workshops, staff
                    development programmes and training sessions focused
                    on modern pedagogy, counselling, personality
                    development and career guidance.
                  </p>
                                    <p>
                    Maintaining an ideal
                    <span className="font-semibold text-[#07294d]">
                      {" "}
                      teacher–student ratio of 1:25
                    </span>
                    , we ensure that every learner receives individual
                    attention, personal guidance and a supportive
                    environment where they feel comfortable approaching
                    teachers both inside and outside the classroom.
                  </p>

                </div>

              </div>

            </div>

            {/* ================= RIGHT IMAGE ================= */}

            <div className="relative bg-[#07294d] p-8 lg:p-10 overflow-hidden flex items-center">

              <div className="absolute top-0 right-0 w-[320px] h-[320px] bg-[#facc15]/10 rounded-full blur-3xl"></div>

              <motion.div
                whileHover={{ y: -8 }}
                transition={{ duration: .3 }}
                className="relative z-10 w-full"
              >

                <div className="overflow-hidden rounded-[35px] shadow-[0_20px_60px_rgba(0,0,0,.35)]">

                  <img
                    src={facultyImg}
                    alt="Faculty"
                    className="w-full h-[620px] object-cover hover:scale-105 transition duration-700"
                  />

                </div>

                {/* ================= INFO CARD ================= */}

                <div className="bg-white rounded-[28px] p-8 shadow-2xl -mt-14 mx-6 relative z-20">

                  <div className="flex items-center justify-between">

                    <div>

                      <p className="uppercase tracking-[4px] text-[#d4af37] text-xs font-semibold mb-2">
                        Cambridge International School
                      </p>

                      <h3 className="text-3xl font-bold text-[#07294d]">
                        Excellence in Teaching
                      </h3>

                      <p className="text-gray-500 mt-2 leading-7">
                        Inspiring students through knowledge,
                        innovation and values.
                      </p>

                    </div>

                    <div className="w-24 h-24 rounded-3xl bg-[#07294d] text-white flex flex-col items-center justify-center shadow-lg">

                      <span className="text-3xl font-black">
                        1:25
                      </span>

                      <span className="text-xs tracking-widest uppercase">
                        Ratio
                      </span>

                    </div>

                  </div>

                </div>

              </motion.div>

            </div>

          </div>

        </motion.div>

        {/* ================= ACHIEVEMENT STRIP ================= */}

        <div className="grid md:grid-cols-4 gap-6 mt-20">

          {[
            ["Qualified", "Faculty"],
            ["Activity Based", "Learning"],
            ["Modern", "Pedagogy"],
            ["Personal", "Attention"],
          ].map((item, index) => (

            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: .5,
                delay: index * .1,
              }}
              viewport={{ once: true }}
              whileHover={{ y: -8 }}
              className="bg-white rounded-[28px] p-8 shadow-lg text-center border border-gray-100"
            >

              <h3 className="text-2xl font-black text-[#07294d]">
                {item[0]}
              </h3>

              <p className="text-[#d4af37] font-semibold mt-2">
                {item[1]}
              </p>

            </motion.div>

          ))}

        </div>
                {/* ================= WHY OUR FACULTY ================= */}

        <div className="mt-24">

          <div className="text-center mb-16">

            <p className="uppercase tracking-[6px] text-[#d4af37] font-semibold mb-4">
              Why Cambridge Faculty
            </p>

            <h2 className="text-5xl md:text-6xl font-black text-[#07294d]">
              Excellence Beyond Teaching
            </h2>

            <div className="w-28 h-1 bg-[#d4af37] rounded-full mx-auto mt-6"></div>

          </div>

          <div className="grid lg:grid-cols-3 gap-8">

            {highlights.map((item, index) => (

              <motion.div
                key={index}
                initial={{ opacity: 0, y: 60 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.6,
                  delay: index * 0.15,
                }}
                viewport={{ once: true }}
                whileHover={{
                  y: -10,
                }}
                className="relative overflow-hidden bg-white rounded-[35px] p-10 shadow-[0_18px_50px_rgba(0,0,0,.08)] border border-gray-100 group"
              >

                {/* TOP BAR */}

                <div className="absolute top-0 left-0 h-2 w-full bg-gradient-to-r from-[#facc15] via-[#d4af37] to-[#facc15]"></div>

                {/* GLOW */}

                <div className="absolute -right-12 -top-12 w-44 h-44 rounded-full bg-[#facc15]/10 blur-3xl"></div>

                <div className="relative z-10">

                  <div className="w-20 h-20 rounded-3xl bg-[#07294d] text-[#facc15] flex items-center justify-center text-3xl shadow-xl mb-8 group-hover:bg-[#facc15] group-hover:text-[#07294d] transition-all duration-500">

                    {item.icon}

                  </div>

                  <h3 className="text-3xl font-bold text-[#07294d] mb-5">

                    {item.title}

                  </h3>

                  <p className="text-gray-600 text-[17px] leading-8">

                    {item.text}

                  </p>

                </div>

              </motion.div>

            ))}

          </div>

        </div>

        {/* ================= BOTTOM CTA ================= */}

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: .8 }}
          viewport={{ once: true }}
          className="mt-24 rounded-[40px] bg-gradient-to-r from-[#07294d] to-[#0b3d70] p-12 md:p-16 text-center overflow-hidden relative"
        >

          <div className="absolute -top-20 -left-20 w-72 h-72 rounded-full bg-[#facc15]/10 blur-3xl"></div>

          <div className="absolute -bottom-20 -right-20 w-72 h-72 rounded-full bg-[#facc15]/10 blur-3xl"></div>

          <div className="relative z-10">

            <h2 className="text-4xl md:text-5xl font-black text-white leading-tight">

              Dedicated Teachers,
              <br />
              Confident Learners,
              <br />
              Brighter Futures.

            </h2>

            <p className="text-white/80 max-w-3xl mx-auto mt-8 text-lg leading-9">

              At Cambridge International School, our educators are more
              than teachers—they are mentors, motivators and lifelong
              learners committed to nurturing every child with care,
              innovation and academic excellence.

            </p>

          </div>

        </motion.div>

      </section>

    </div>

  );

}