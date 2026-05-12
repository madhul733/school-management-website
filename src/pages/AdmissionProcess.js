import React from "react";
import { motion } from "framer-motion";
import {
  FaClipboardCheck,
  FaFileAlt,
  FaSchool,
  FaUserFriends,
  FaCheckCircle,
} from "react-icons/fa";

const documents = [
  "Four photographs of student (one attached to application form).",
  "One photograph of mother.",
  "One photograph of father.",
  "Attested copy of birth certificate issued by Municipal Corporation or competent authority.",
  "Transfer Certificate from previous school (if applicable).",
  "Report / Marksheet from previous school (if applicable).",
  "Completed application form must be submitted within one week.",
];

const Procedure = () => {
  return (
    <section className="relative w-full py-32 bg-gradient-to-br from-[#f8fbff] via-[#f5f7fc] to-[#eef4ff] overflow-hidden">

      {/* ================= BACKGROUND ================= */}
      <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-[#d4af37]/10 blur-3xl rounded-full"></div>

      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-[#07294d]/10 blur-3xl rounded-full"></div>

      {/* GRID */}
      <div className="absolute inset-0 opacity-[0.03] bg-[linear-gradient(to_right,#07294d_1px,transparent_1px),linear-gradient(to_bottom,#07294d_1px,transparent_1px)] bg-[size:60px_60px]"></div>

      {/* ================= MAIN ================= */}
      <div className="max-w-[1500px] mx-auto px-6 relative z-10">

        {/* ================= HEADING ================= */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="text-center mb-24"
        >

          {/* TAG */}
          <div className="inline-flex items-center gap-3 px-7 py-4 rounded-full bg-white shadow-[0_10px_40px_rgba(0,0,0,0.06)] border border-[#d4af37]/20 mb-10">

            <FaClipboardCheck className="text-[#d4af37]" />

            <p className="uppercase tracking-[5px] text-[#d4af37] font-black text-sm">
              Admissions Process
            </p>

          </div>

          {/* TITLE */}
          <h2 className="text-5xl md:text-7xl xl:text-8xl font-black text-[#07294d] leading-[1.05]">

            <span className="relative inline-block pb-5">

              Admission Procedure

              {/* UNDERLINE */}
              <span className="absolute left-0 bottom-1 w-full h-5 bg-[#d4af37]/25 rounded-full"></span>

            </span>

          </h2>

          {/* TEXT */}
          <p className="max-w-[1000px] mx-auto text-gray-600 text-xl leading-10 mt-12">

            Choosing the right school for your child is one of the
            most important decisions for every parent. Cambridge
            International School offers a vibrant learning environment,
            world-class infrastructure and value-based education for
            holistic development.

          </p>

        </motion.div>

        {/* ================= INTRO CARD ================= */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="relative bg-white rounded-[45px] overflow-hidden shadow-[0_25px_90px_rgba(0,0,0,0.08)] mb-24"
        >

          {/* TOP BAR */}
          <div className="absolute top-0 left-0 w-full h-[8px] bg-gradient-to-r from-[#d4af37] via-[#facc15] to-[#d4af37]"></div>

          <div className="grid lg:grid-cols-2 gap-10 p-10 md:p-16">

            {/* LEFT */}
            <div>

              <div className="w-20 h-20 rounded-[28px] bg-[#07294d] text-white flex items-center justify-center text-4xl shadow-2xl mb-8">

                <FaSchool />

              </div>

              <h3 className="text-4xl font-black text-[#07294d] mb-8 leading-tight">

                A Campus Designed
                <br />
                For Excellence

              </h3>

              <div className="w-24 h-[5px] bg-[#d4af37] rounded-full mb-10"></div>

              <p className="text-gray-600 text-lg leading-9">

                Our well-ventilated and air-conditioned classrooms,
                vibrant atmosphere and student-friendly environment
                ensure a positive learning experience for every child.

              </p>

            </div>

            {/* RIGHT */}
            <div className="bg-gradient-to-br from-[#07294d] to-[#0b4a80] rounded-[35px] p-10 text-white relative overflow-hidden">

              {/* BG SHAPE */}
              <div className="absolute top-[-50px] right-[-50px] w-[180px] h-[180px] border-[20px] border-white/5 rounded-full"></div>

              <div className="relative z-10">

                <div className="w-20 h-20 rounded-[28px] bg-white text-[#07294d] flex items-center justify-center text-4xl shadow-2xl mb-8">

                  <FaUserFriends />

                </div>

                <h3 className="text-4xl font-black mb-8">

                  Interaction &
                  <br />
                  Verification

                </h3>

                <p className="text-white/80 text-lg leading-9">

                  Parents and students may be invited for an
                  interaction session with the school management
                  during the admission process. Dates for the same
                  shall be duly notified.

                </p>

              </div>

            </div>

          </div>

        </motion.div>

        {/* ================= DOCUMENTS SECTION ================= */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="bg-white rounded-[45px] shadow-[0_25px_90px_rgba(0,0,0,0.08)] overflow-hidden mb-24"
        >

          {/* TOP BAR */}
          <div className="h-[8px] w-full bg-gradient-to-r from-[#07294d] via-[#0b4a80] to-[#07294d]"></div>

          <div className="p-10 md:p-16">

            {/* TITLE */}
            <div className="flex items-center gap-5 mb-14">

              <div className="w-20 h-20 rounded-[28px] bg-[#07294d] text-white flex items-center justify-center text-4xl shadow-2xl">

                <FaFileAlt />

              </div>

              <div>

                <h3 className="text-4xl font-black text-[#07294d]">
                  Required Documents
                </h3>

                <p className="text-gray-500 mt-2">
                  Documents required during verification process.
                </p>

              </div>

            </div>

            {/* DOCUMENT GRID */}
            <div className="grid md:grid-cols-2 gap-8">

              {documents.map((item, index) => (

                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: index * 0.05 }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.02 }}
                  className="flex items-start gap-5 bg-[#f8fafc] rounded-[30px] p-7 border border-gray-100 hover:shadow-xl transition duration-500"
                >

                  {/* ICON */}
                  <div className="w-12 h-12 rounded-full bg-[#07294d] text-white flex items-center justify-center flex-shrink-0 shadow-lg">

                    <FaCheckCircle />

                  </div>

                  {/* TEXT */}
                  <p className="text-gray-700 text-lg leading-8">
                    {item}
                  </p>

                </motion.div>

              ))}

            </div>

          </div>

        </motion.div>

        {/* ================= IMPORTANT NOTE ================= */}
        <motion.div
          initial={{ opacity: 0, scale: 0.97 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="relative rounded-[50px] overflow-hidden p-14 md:p-20 text-white bg-gradient-to-br from-[#021427] via-[#07294d] to-[#0b4a80]"
        >

          {/* GLOW */}
          <div className="absolute top-[-100px] right-[-100px] w-[300px] h-[300px] bg-[#d4af37]/20 blur-3xl rounded-full"></div>

          {/* SHAPE */}
          <div className="absolute bottom-[-80px] left-[-80px] w-[250px] h-[250px] border-[30px] border-white/5 rounded-full"></div>

          <div className="relative z-10">

            {/* ICON */}
            <div className="w-24 h-24 rounded-[30px] bg-white text-[#07294d] flex items-center justify-center text-5xl shadow-2xl mb-10">

              ⚠️

            </div>

            {/* TITLE */}
            <h3 className="text-5xl font-black mb-8 leading-tight">

              Important
              <br />
              Instructions

            </h3>

            <div className="w-28 h-[5px] bg-[#d4af37] rounded-full mb-10"></div>

            {/* TEXT */}
            <p className="text-xl leading-10 text-white/85 max-w-[1200px]">

              Care must be taken to ensure that the entire application
              form is duly filled and signed. The date of birth must
              exactly match the birth certificate. Submission or
              registration of the form does not guarantee admission.
              The decision of the school management shall be final
              in all matters related to admissions.

            </p>

          </div>

        </motion.div>

      </div>

    </section>
  );
};

export default Procedure;