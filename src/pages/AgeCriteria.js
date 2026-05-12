import React from "react";
import { motion } from "framer-motion";
import {
  FaChild,
  FaUserGraduate,
  FaSchool,
  FaStar,
} from "react-icons/fa";

const ageData = [
  {
    className: "Pre Nursery",
    age: "2 to 3 years",
    icon: <FaChild />,
    color: "from-pink-500 to-rose-400",
  },

  {
    className: "Nursery",
    age: "3 to 3.5 years",
    icon: <FaChild />,
    color: "from-orange-500 to-amber-400",
  },

  {
    className: "KG - I",
    age: "3.5 to 4.5 years",
    icon: <FaSchool />,
    color: "from-blue-500 to-cyan-400",
  },

  {
    className: "KG - II",
    age: "4.5 to 5.5 years",
    icon: <FaSchool />,
    color: "from-indigo-500 to-blue-400",
  },

  {
    className: "Class - 1",
    age: "5.5 to 6.5 years",
    icon: <FaUserGraduate />,
    color: "from-purple-500 to-violet-400",
  },

  {
    className: "Class - 2",
    age: "6.5 to 7.5 years",
    icon: <FaUserGraduate />,
    color: "from-emerald-500 to-green-400",
  },

  {
    className: "Class - 3",
    age: "7.5 to 8.5 years",
    icon: <FaUserGraduate />,
    color: "from-sky-500 to-cyan-400",
  },

  {
    className: "Class - 4",
    age: "8.5 to 9.5 years",
    icon: <FaUserGraduate />,
    color: "from-yellow-500 to-orange-400",
  },

  {
    className: "Class - 5",
    age: "9.5 to 10.5 years",
    icon: <FaUserGraduate />,
    color: "from-fuchsia-500 to-pink-400",
  },

  {
    className: "Class - 6",
    age: "10.5 to 11.5 years",
    icon: <FaUserGraduate />,
    color: "from-teal-500 to-emerald-400",
  },

  {
    className: "Class - 7",
    age: "11.5 to 12.5 years",
    icon: <FaUserGraduate />,
    color: "from-[#07294d] to-[#0b4a80]",
  },
];

const AgeCriteria = () => {
  return (
    <section className="relative w-full py-32 bg-[#f7f9fc] overflow-hidden">

      {/* ================= BACKGROUND GLOW ================= */}
      <div className="absolute top-[-150px] left-[-150px] w-[420px] h-[420px] bg-[#d4af37]/10 blur-3xl rounded-full"></div>

      <div className="absolute bottom-[-150px] right-[-150px] w-[420px] h-[420px] bg-[#07294d]/10 blur-3xl rounded-full"></div>

      {/* ================= MAIN ================= */}
      <div className="max-w-[1500px] mx-auto px-6 relative z-10">

        {/* ================= TOP ================= */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="text-center mb-24"
        >

          {/* SMALL TAG */}
          <div className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-[#d4af37]/10 border border-[#d4af37]/20 mb-8">

            <FaStar className="text-[#d4af37]" />

            <p className="uppercase tracking-[5px] text-[#d4af37] font-bold text-sm">
              Admissions Open 2025–26
            </p>

          </div>

          {/* HEADING */}
          <h2 className="text-5xl md:text-7xl xl:text-8xl font-black text-[#07294d] leading-[1.05]">

            <span className="relative inline-block pb-5">

              Age Criteria

              {/* UNDERLINE */}
              <span className="absolute left-0 bottom-1 w-full h-5 bg-[#d4af37]/25 rounded-full"></span>

            </span>

          </h2>

          {/* TEXT */}
          <p className="max-w-[950px] mx-auto text-gray-600 text-xl leading-10 mt-12">

            Cambridge International School, Nakodar welcomes
            admissions for the forthcoming academic session.
            Please review the class-wise age eligibility criteria below.

          </p>

        </motion.div>

        {/* ================= CARDS ================= */}
        <div className="grid sm:grid-cols-2 xl:grid-cols-3 gap-8">

          {ageData.map((item, index) => (

            <motion.div
              key={index}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
              viewport={{ once: true }}
              whileHover={{
                y: -12,
              }}
              className="group"
            >

              <div className="relative overflow-hidden rounded-[35px] bg-white border border-gray-100 shadow-[0_20px_70px_rgba(0,0,0,0.08)] p-8 h-full">

                {/* BIG NUMBER */}
                <h1 className="absolute top-4 right-5 text-[90px] font-black text-[#07294d]/5">

                  0{index + 1}

                </h1>

                {/* TOP GRADIENT LINE */}
                <div
                  className={`absolute top-0 left-0 w-full h-[7px] bg-gradient-to-r ${item.color}`}
                ></div>

                {/* ICON */}
                <div
                  className={`w-20 h-20 rounded-[28px] bg-gradient-to-br ${item.color} text-white flex items-center justify-center text-3xl shadow-2xl mb-8 group-hover:scale-110 transition duration-500`}
                >

                  {item.icon}

                </div>

                {/* CLASS */}
                <h3 className="text-3xl font-black text-[#07294d] mb-3">

                  {item.className}

                </h3>

                {/* SMALL LINE */}
                <div className="w-16 h-[4px] bg-[#d4af37] rounded-full mb-6"></div>

                {/* AGE */}
                <div className="bg-[#f8fafc] rounded-2xl px-6 py-5 border border-gray-100">

                  <p className="text-sm uppercase tracking-[3px] text-gray-400 font-semibold mb-2">
                    Eligible Age
                  </p>

                  <h4 className="text-2xl font-black text-[#07294d]">
                    {item.age}
                  </h4>

                </div>

                {/* FOOTER */}
                <div className="mt-8 flex items-center justify-between">

                  <p className="text-gray-500 font-medium">
                    Admission Open
                  </p>

                  <div className="w-12 h-12 rounded-full bg-[#07294d] text-white flex items-center justify-center shadow-lg">

                    →
                  </div>

                </div>

              </div>

            </motion.div>

          ))}

        </div>

      </div>

    </section>
  );
};

export default AgeCriteria;