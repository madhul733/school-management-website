import React from "react";
import { motion } from "framer-motion";
import {
  FaMoneyBillWave,
  FaGraduationCap,
  FaBus,
  FaCheckCircle,
} from "react-icons/fa";

const schoolFees = [
  {
    className: "Pre-Nursery",
    fee: "Rs. 2700 / Month",
  },

  {
    className: "Nursery, KG-I & KG-II",
    fee: "Rs. 3400 / Month",
  },

  {
    className: "Classes 1st to 4th",
    fee: "Rs. 3500 / Month",
  },

  {
    className: "Classes 5th to 8th",
    fee: "Rs. 3750 / Month",
  },

  {
    className: "Classes 9th to 10th",
    fee: "Rs. 4000 / Month",
  },
];

const class11Fees = [
  {
    stream: "Humanities",
    fee: "Rs. 4300 / Month",
  },

  {
    stream: "Commerce",
    fee: "Rs. 4500 / Month",
  },

  {
    stream: "Non Medical",
    fee: "Rs. 4900 / Month",
  },

  {
    stream: "Medical",
    fee: "Rs. 5300 / Month",
  },
];

const rules = [
  "Three photographs of student are required.",
  "One photograph each of mother and father.",
  "Birth certificate must be submitted.",
  "Transfer certificate from previous school (if applicable).",
  "Previous report card sheet (if applicable).",
  "Completed application form must be submitted within one week.",
  "Admission is subject to management approval.",
  "Parents and student may be invited for interaction.",
];

const uniforms = [
  "https://images.unsplash.com/photo-1513258496099-48168024aec0?q=80&w=1200&auto=format&fit=crop",

  "https://images.unsplash.com/photo-1509062522246-3755977927d7?q=80&w=1200&auto=format&fit=crop",

  "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?q=80&w=1200&auto=format&fit=crop",

  "https://images.unsplash.com/photo-1588072432836-e10032774350?q=80&w=1200&auto=format&fit=crop",

  "https://images.unsplash.com/photo-1497486751825-1233686d5d80?q=80&w=1200&auto=format&fit=crop",

  "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?q=80&w=1200&auto=format&fit=crop",

  "https://images.unsplash.com/photo-1511629091441-ee46146481b6?q=80&w=1200&auto=format&fit=crop",

  "https://images.unsplash.com/photo-1516534775068-ba3e7458af70?q=80&w=1200&auto=format&fit=crop",
];

const FeeStructure = () => {
  return (
    <section className="relative w-full py-32 bg-gradient-to-br from-[#f8fbff] via-[#f5f7fc] to-[#eef4ff] overflow-hidden">

      {/* BG GLOW */}
      <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-[#d4af37]/10 blur-3xl rounded-full"></div>

      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-[#07294d]/10 blur-3xl rounded-full"></div>

      {/* GRID */}
      <div className="absolute inset-0 opacity-[0.03] bg-[linear-gradient(to_right,#07294d_1px,transparent_1px),linear-gradient(to_bottom,#07294d_1px,transparent_1px)] bg-[size:60px_60px]"></div>

      <div className="max-w-[1500px] mx-auto px-6 relative z-10">

        {/* ================= HEADING ================= */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="text-center mb-24"
        >

          <div className="inline-flex items-center gap-3 px-7 py-4 rounded-full bg-white shadow-[0_10px_40px_rgba(0,0,0,0.06)] border border-[#d4af37]/20 mb-10">

            <FaMoneyBillWave className="text-[#d4af37] text-lg" />

            <p className="uppercase tracking-[5px] text-[#d4af37] font-black text-sm">
              Session 2025 – 2026
            </p>

          </div>

          <h2 className="text-5xl md:text-7xl xl:text-8xl font-black text-[#07294d] leading-[1.05]">

            <span className="relative inline-block pb-5">

              Fee Structure

              <span className="absolute left-0 bottom-1 w-full h-5 bg-[#d4af37]/25 rounded-full"></span>

            </span>

          </h2>

          <p className="max-w-[950px] mx-auto text-gray-600 text-xl leading-10 mt-12">

            Transparent and structured fee plans designed
            to support quality education and holistic learning.

          </p>

        </motion.div>

        {/* ================= TOP CARDS ================= */}
        <div className="grid md:grid-cols-3 gap-8 mb-24">

          {[
            {
              title: "Prospectus Registration",
              fee: "Rs. 2000",
              icon: <FaGraduationCap />,
            },

            {
              title: "Admission Fee",
              fee: "Rs. 37000",
              icon: <FaMoneyBillWave />,
            },

            {
              title: "Annual Charges",
              fee: "Rs. 11000",
              icon: <FaBus />,
            },
          ].map((item, index) => (

            <motion.div
              key={index}
              whileHover={{ y: -10 }}
              className="relative bg-white rounded-[40px] shadow-[0_25px_80px_rgba(0,0,0,0.08)] overflow-hidden group"
            >

              <div className="absolute top-0 left-0 h-[7px] w-full bg-gradient-to-r from-[#d4af37] via-[#facc15] to-[#d4af37]"></div>

              <div className="p-10">

                <div className="w-20 h-20 rounded-[25px] bg-[#07294d] text-white flex items-center justify-center text-3xl shadow-xl mb-8">

                  {item.icon}

                </div>

                <h3 className="text-2xl font-black text-[#07294d] mb-4">
                  {item.title}
                </h3>

                <h4 className="text-4xl font-black text-[#d4af37]">
                  {item.fee}
                </h4>

              </div>

            </motion.div>

          ))}

        </div>

        {/* ================= TUITION FEES ================= */}
        <div className="bg-white rounded-[45px] overflow-hidden shadow-[0_25px_90px_rgba(0,0,0,0.08)] mb-24">

          <div className="h-[8px] w-full bg-gradient-to-r from-[#07294d] via-[#0b4a80] to-[#07294d]"></div>

          <div className="p-10 md:p-14">

            <h3 className="text-4xl font-black text-[#07294d] mb-14">
              Tuition Fee Structure
            </h3>

            <div className="space-y-7">

              {schoolFees.map((item, index) => (

                <motion.div
                  key={index}
                  whileHover={{ scale: 1.01 }}
                  className="flex items-center justify-between bg-[#f8fafc] rounded-[28px] px-8 py-7 hover:shadow-xl transition duration-500"
                >

                  <div className="flex items-center gap-5">

                    <div className="w-16 h-16 rounded-[22px] bg-[#07294d] text-white flex items-center justify-center text-2xl shadow-lg">

                      🎓

                    </div>

                    <div>

                      <h4 className="text-2xl font-black text-[#07294d]">
                        {item.className}
                      </h4>

                      <p className="text-gray-500 mt-1">
                        Monthly Tuition Fee
                      </p>

                    </div>

                  </div>

                  <div className="px-6 py-4 rounded-2xl bg-[#d4af37]/10">

                    <h5 className="text-2xl font-black text-[#d4af37]">
                      {item.fee}
                    </h5>

                  </div>

                </motion.div>

              ))}

            </div>

          </div>

        </div>

        {/* ================= CLASS 11 ================= */}
        <div className="bg-white rounded-[45px] overflow-hidden shadow-[0_25px_90px_rgba(0,0,0,0.08)] mb-24">

          <div className="h-[8px] w-full bg-gradient-to-r from-[#d4af37] via-[#facc15] to-[#d4af37]"></div>

          <div className="p-10 md:p-14">

            <h3 className="text-4xl font-black text-[#07294d] mb-14">
              Fee Structure For Class XI
            </h3>

            <div className="grid md:grid-cols-2 gap-8">

              {class11Fees.map((item, index) => (

                <motion.div
                  key={index}
                  whileHover={{ y: -10 }}
                  className="rounded-[35px] bg-[#f8fafc] p-8 shadow-lg"
                >

                  <div className="w-20 h-20 rounded-[26px] bg-[#07294d] text-white flex items-center justify-center text-4xl shadow-2xl mb-8">

                    📘

                  </div>

                  <h4 className="text-3xl font-black text-[#07294d] mb-4">
                    {item.stream}
                  </h4>

                  <h5 className="text-4xl font-black text-[#d4af37]">
                    {item.fee}
                  </h5>

                </motion.div>

              ))}

            </div>

          </div>

        </div>

        {/* ================= SCHOLARSHIP ================= */}
        <motion.div
          initial={{ opacity: 0, scale: 0.97 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="relative rounded-[50px] overflow-hidden p-14 md:p-20 text-white mb-24 bg-gradient-to-br from-[#021427] via-[#07294d] to-[#0b4a80]"
        >

          <div className="absolute top-[-100px] right-[-100px] w-[300px] h-[300px] bg-[#d4af37]/20 blur-3xl rounded-full"></div>

          <div className="relative z-10">

            <div className="w-24 h-24 rounded-[30px] bg-white text-[#07294d] flex items-center justify-center text-5xl shadow-2xl mb-10">

              🏆

            </div>

            <h3 className="text-5xl font-black mb-6 leading-tight">
              Scholarship For
              <br />
              Bright Students
            </h3>

            <div className="w-28 h-[5px] bg-[#d4af37] rounded-full mb-10"></div>

            <p className="text-xl leading-10 text-white/85 max-w-[1100px]">

              Cambridge International School proudly supports
              talented and high-achieving students through
              scholarships and fee support initiatives.

            </p>

          </div>

        </motion.div>

        {/* ================= RULES ================= */}
        <div className="bg-white rounded-[45px] shadow-[0_25px_90px_rgba(0,0,0,0.08)] p-10 md:p-14 mb-32">

          <h3 className="text-4xl font-black text-[#07294d] mb-14">
            Admission Guidelines
          </h3>

          <div className="grid md:grid-cols-2 gap-8">

            {rules.map((item, index) => (

              <motion.div
                key={index}
                whileHover={{ scale: 1.02 }}
                className="flex items-start gap-5 bg-[#f8fafc] rounded-[28px] p-6 hover:shadow-xl transition duration-500"
              >

                <div className="w-12 h-12 rounded-full bg-[#07294d] text-white flex items-center justify-center flex-shrink-0 shadow-lg">

                  <FaCheckCircle />

                </div>

                <p className="text-gray-700 text-lg leading-8">
                  {item}
                </p>

              </motion.div>

            ))}

          </div>

        </div>

        {/* ================= SCHOOL UNIFORMS ================= */}
        <section>

          {/* HEADING */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="text-center mb-24"
          >

            <div className="inline-flex items-center gap-3 px-7 py-4 rounded-full bg-white shadow-[0_10px_40px_rgba(0,0,0,0.06)] border border-[#d4af37]/20 mb-10">

              <span className="text-[#d4af37] text-xl">👔</span>

              <p className="uppercase tracking-[5px] text-[#d4af37] font-black text-sm">
                Dress Code
              </p>

            </div>

            <h2 className="text-5xl md:text-7xl xl:text-8xl font-black text-[#07294d] leading-[1.05]">

              <span className="relative inline-block pb-5">

                School Uniforms

                <span className="absolute left-0 bottom-1 w-full h-5 bg-[#d4af37]/25 rounded-full"></span>

              </span>

            </h2>

            <p className="max-w-[900px] mx-auto text-gray-600 text-xl leading-10 mt-12">

              Our uniforms reflect discipline, elegance,
              confidence and the proud identity of
              Cambridge International School.

            </p>

          </motion.div>

          {/* GRID */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">

            {uniforms.map((img, index) => (

              <motion.div
                key={index}
                whileHover={{ y: -12 }}
                className="group relative overflow-hidden rounded-[38px] bg-white shadow-[0_25px_80px_rgba(0,0,0,0.1)]"
              >

                <img
                  src={img}
                  alt="uniform"
                  className="w-full h-[380px] object-cover group-hover:scale-110 transition duration-700"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-[#021427]/80 via-transparent to-transparent"></div>

                <div className="absolute top-0 left-0 w-full h-[7px] bg-gradient-to-r from-[#d4af37] via-[#facc15] to-[#d4af37]"></div>

                <div className="absolute bottom-5 left-5 right-5">

                  <div className="bg-white/90 backdrop-blur-xl rounded-[25px] px-5 py-5 shadow-2xl">

                    <div className="flex items-center justify-between gap-4">

                      <div>

                        <h4 className="text-[#07294d] text-xl font-black">
                          Cambridge Uniform
                        </h4>

                        <p className="text-gray-600 text-sm mt-1 leading-6">
                          Elegant • Disciplined • Professional
                        </p>

                      </div>

                      <div className="w-14 h-14 rounded-2xl bg-[#07294d] text-white flex items-center justify-center text-2xl shadow-xl">

                        🎓

                      </div>

                    </div>

                  </div>

                </div>

              </motion.div>

            ))}

          </div>

        </section>

      </div>

    </section>
  );
};

export default FeeStructure;