import React from "react";
import { motion } from "framer-motion";
import {
  FaFlask,
  FaCalculator,
  FaChartLine,
  FaLandmark,
  FaLaptopCode,
  FaClipboardCheck,
  FaBookOpen,
  FaUserGraduate,
} from "react-icons/fa";

const streams = [
  {
    title: "Medical",
    icon: <FaFlask />,
    subjects: [
      "English (Core)",
      "Biology",
      "Physics",
      "Chemistry",
      "Physical Education / Painting / Music",
    ],
    color: "from-emerald-500 to-green-400",
  },

  {
    title: "Non-Medical",
    icon: <FaCalculator />,
    subjects: [
      "English (Core)",
      "Mathematics",
      "Physics",
      "Chemistry",
      "Computer Science / Physical Education",
    ],
    color: "from-blue-500 to-cyan-400",
  },

  {
    title: "Commerce",
    icon: <FaChartLine />,
    subjects: [
      "English (Core)",
      "Accountancy",
      "Business Studies",
      "Economics",
      "Mathematics / Optional Subjects",
    ],
    color: "from-amber-500 to-yellow-400",
  },

  {
    title: "Humanities",
    icon: <FaLandmark />,
    subjects: [
      "English (Core)",
      "Psychology",
      "Political Science",
      "Economics",
      "History",
    ],
    color: "from-purple-500 to-pink-400",
  },
];

const policies = [
  "Continuous and comprehensive evaluation system is followed.",

  "Academic session is divided into two semesters.",

  "Students must appear in all examinations and assessments.",

  "Medical exemption requires valid medical certificate.",

  "Use of unfair means may result in expulsion from school.",

  "Final assessment depends upon tests and assignments.",

  "No re-examination will be conducted for any subject.",
];

const HighSchool = () => {
  return (
    <section className="relative w-full py-32 overflow-hidden bg-gradient-to-br from-[#f8fbff] via-[#f5f7fc] to-[#eef4ff]">

      {/* ================= BACKGROUND ================= */}
      <div className="absolute top-[-150px] left-[-150px] w-[500px] h-[500px] bg-blue-200/20 blur-3xl rounded-full"></div>

      <div className="absolute bottom-[-150px] right-[-150px] w-[500px] h-[500px] bg-purple-200/20 blur-3xl rounded-full"></div>

      {/* GRID */}
      <div className="absolute inset-0 opacity-[0.03] bg-[linear-gradient(to_right,#07294d_1px,transparent_1px),linear-gradient(to_bottom,#07294d_1px,transparent_1px)] bg-[size:70px_70px]"></div>

      {/* ================= MAIN ================= */}
      <div className="max-w-[1600px] mx-auto px-6 relative z-10">

        {/* ================= HERO ================= */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="text-center mb-32"
        >

          {/* TAG */}
          <div className="inline-flex items-center gap-3 px-8 py-4 rounded-full bg-white border border-blue-100 shadow-[0_15px_40px_rgba(0,0,0,0.05)] mb-10">

            <span className="text-blue-500 text-xl">🎓</span>

            <p className="uppercase tracking-[6px] text-blue-500 text-sm font-black">
              Classes XI – XII
            </p>

          </div>

          {/* HEADING */}
          <h1 className="text-5xl md:text-7xl xl:text-8xl font-black text-[#07294d] leading-[1.08]">

            <span className="relative inline-block pb-8">

              Senior
              <br />
              Secondary School

              {/* UNDERLINE */}
              <span className="absolute left-1/2 -translate-x-1/2 bottom-1 w-[105%] h-6 bg-gradient-to-r from-blue-100 via-blue-200 to-blue-100 rounded-full blur-[1px] opacity-90"></span>

              {/* SHINE */}
              <span className="absolute left-1/2 -translate-x-1/2 bottom-2 w-[70%] h-[4px] bg-white/70 rounded-full"></span>

            </span>

          </h1>

          {/* TEXT */}
          <p className="max-w-[1250px] mx-auto text-gray-600 text-xl leading-10 mt-14">

            Our pedagogy focuses on innovative and student-centered
            teaching methodologies that blend consistency, inquiry-based
            learning and collaborative learning to help students achieve
            academic excellence and their full potential.

          </p>

        </motion.div>

        {/* ================= FEATURED SECTION ================= */}
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-36">

          {/* IMAGE */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="relative"
          >

            <div className="relative overflow-hidden rounded-[55px] shadow-[0_35px_120px_rgba(0,0,0,0.15)] group">

              <img
                src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=1600&q=80"
                alt="high-school"
                className="w-full h-[760px] object-cover group-hover:scale-105 transition duration-700"
              />

              {/* OVERLAY */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#021427]/90 via-[#021427]/10 to-transparent"></div>

              {/* FLOATING BOX */}
              <div className="absolute bottom-8 left-8 right-8 bg-white/90 backdrop-blur-2xl rounded-[35px] p-8 shadow-2xl">

                <div className="flex items-start gap-5">

                  <div className="w-20 h-20 rounded-[28px] bg-blue-500 text-white flex items-center justify-center text-4xl shadow-2xl flex-shrink-0">

                    <FaUserGraduate />

                  </div>

                  <div>

                    <h3 className="text-3xl font-black text-[#07294d] mb-4">
                      Career-Focused Education
                    </h3>

                    <p className="text-gray-600 text-lg leading-8">

                      Students are guided towards academic excellence,
                      leadership, critical thinking and future career success.

                    </p>

                  </div>

                </div>

              </div>

            </div>

          </motion.div>

          {/* CONTENT */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
          >

            <div className="bg-white rounded-[55px] shadow-[0_35px_120px_rgba(0,0,0,0.08)] p-10 md:p-16 relative overflow-hidden">

              {/* TOP BAR */}
              <div className="absolute top-0 left-0 w-full h-[8px] bg-gradient-to-r from-blue-500 via-cyan-400 to-purple-500"></div>

              {/* BG SHAPE */}
              <div className="absolute top-[-80px] right-[-80px] w-[240px] h-[240px] border-[26px] border-blue-100 rounded-full"></div>

              {/* ICON */}
              <div className="w-24 h-24 rounded-[32px] bg-blue-500 text-white flex items-center justify-center text-5xl shadow-2xl mb-10 relative z-10">

                <FaBookOpen />

              </div>

              {/* TITLE */}
              <h2 className="text-5xl font-black text-[#07294d] leading-tight mb-8 relative z-10">

                Innovative Teaching
                <br />
                & Learning

              </h2>

              {/* LINE */}
              <div className="w-28 h-[6px] bg-blue-200 rounded-full mb-10 relative z-10"></div>

              {/* TEXT */}
              <p className="text-gray-600 text-xl leading-10 mb-8 relative z-10">

                Our teaching methodology includes direct instruction,
                collaborative learning and inquiry-based learning
                to improve student engagement and learning outcomes.

              </p>

              <p className="text-gray-600 text-xl leading-10 mb-8 relative z-10">

                Students are encouraged to think independently,
                work collaboratively and apply their learning
                in practical and meaningful ways.

              </p>

              <p className="text-gray-600 text-xl leading-10 relative z-10">

                We provide a supportive environment where every
                learner can discover strengths, talents and future aspirations.

              </p>

            </div>

          </motion.div>

        </div>

        {/* ================= STREAMS ================= */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="text-center mb-24"
        >

          <h2 className="text-5xl md:text-6xl font-black text-[#07294d] leading-tight">

            <span className="relative inline-block pb-8">

              Streams Offered

              {/* UNDERLINE */}
              <span className="absolute left-1/2 -translate-x-1/2 bottom-1 w-[105%] h-5 bg-blue-100 rounded-full"></span>

            </span>

          </h2>

        </motion.div>

        {/* STREAM GRID */}
        <div className="grid md:grid-cols-2 gap-10 mb-36">

          {streams.map((item, index) => (

            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
              viewport={{ once: true }}
              whileHover={{ y: -14 }}
              className="group relative overflow-hidden rounded-[45px] bg-white shadow-[0_25px_90px_rgba(0,0,0,0.08)]"
            >

              {/* TOP BAR */}
              <div className={`absolute top-0 left-0 w-full h-[7px] bg-gradient-to-r ${item.color}`}></div>

              {/* NUMBER */}
              <h1 className="absolute top-4 right-6 text-[95px] font-black text-gray-50">

                0{index + 1}

              </h1>

              <div className="relative z-10 p-10">

                {/* ICON */}
                <div className={`w-20 h-20 rounded-[28px] bg-gradient-to-r ${item.color} text-white flex items-center justify-center text-4xl shadow-2xl mb-8`}>

                  {item.icon}

                </div>

                {/* TITLE */}
                <h3 className="text-4xl font-black text-[#07294d] mb-8">
                  {item.title}
                </h3>

                {/* SUBJECTS */}
                <div className="space-y-4">

                  {item.subjects.map((subject, idx) => (

                    <div
                      key={idx}
                      className="flex items-center gap-4 bg-[#f8fafc] rounded-2xl px-5 py-4"
                    >

                      <div className="w-3 h-3 rounded-full bg-blue-400"></div>

                      <p className="text-gray-700 text-lg font-medium">
                        {subject}
                      </p>

                    </div>

                  ))}

                </div>

              </div>

            </motion.div>

          ))}

        </div>

        {/* ================= EXAM POLICY ================= */}
        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="relative overflow-hidden rounded-[55px] bg-white shadow-[0_35px_120px_rgba(0,0,0,0.08)]"
        >

          {/* TOP BAR */}
          <div className="absolute top-0 left-0 w-full h-[8px] bg-gradient-to-r from-blue-500 via-cyan-400 to-purple-500"></div>

          <div className="p-10 md:p-16">

            {/* HEADER */}
            <div className="flex items-center gap-6 mb-16">

              <div className="w-24 h-24 rounded-[32px] bg-blue-500 text-white flex items-center justify-center text-5xl shadow-2xl">

                <FaClipboardCheck />

              </div>

              <div>

                <h2 className="text-5xl font-black text-[#07294d]">
                  Examination Policy
                </h2>

                <p className="text-gray-500 mt-3 text-lg">
                  Transparent, fair and continuous evaluation process.
                </p>

              </div>

            </div>

            {/* GRID */}
            <div className="grid md:grid-cols-2 gap-8">

              {policies.map((item, index) => (

                <motion.div
                  key={index}
                  whileHover={{ scale: 1.02 }}
                  className="group relative overflow-hidden rounded-[35px] bg-[#f8fafc] border border-gray-100 p-8 hover:shadow-[0_20px_50px_rgba(0,0,0,0.08)] transition duration-500"
                >

                  {/* HOVER BAR */}
                  <div className="absolute top-0 left-0 w-full h-[5px] bg-gradient-to-r from-blue-500 via-cyan-400 to-purple-500 scale-x-0 group-hover:scale-x-100 origin-left transition duration-500"></div>

                  <div className="flex items-start gap-5">

                    {/* ICON */}
                    <div className="w-14 h-14 rounded-full bg-blue-500 text-white flex items-center justify-center flex-shrink-0 shadow-xl">

                      ✓

                    </div>

                    {/* TEXT */}
                    <p className="text-gray-700 text-lg leading-9 font-medium">
                      {item}
                    </p>

                  </div>

                </motion.div>

              ))}

            </div>

          </div>

        </motion.div>

      </div>

    </section>
  );
};

export default HighSchool;