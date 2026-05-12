import React from "react";
import { motion } from "framer-motion";
import {
  FaClipboardCheck,
  FaCheckCircle,
  FaFileSignature,
  FaUserGraduate,
  FaExclamationTriangle,
  FaSchool,
} from "react-icons/fa";

const requirements = [
  "Four photographs of student (one attached to application form).",

  "One photograph of mother.",

  "One photograph of father.",

  "Attested copy of birth certificate clearly specifying date of birth issued by Municipal Corporation or competent authority.",

  "Transfer Certificate from previous school (if applicable).",

  "Report / Marksheet from previous school (if applicable).",

  "Completed application form must be submitted within one week of issuance.",
];

const Requirements = () => {
  return (
    <section className="relative w-full py-32 overflow-hidden bg-gradient-to-br from-[#f8fbff] via-[#f5f7fc] to-[#eef4ff]">

      {/* ================= BACKGROUND ================= */}
      <div className="absolute top-[-120px] left-[-120px] w-[420px] h-[420px] bg-[#d4af37]/10 blur-3xl rounded-full"></div>

      <div className="absolute bottom-[-120px] right-[-120px] w-[420px] h-[420px] bg-[#07294d]/10 blur-3xl rounded-full"></div>

      {/* GRID */}
      <div className="absolute inset-0 opacity-[0.03] bg-[linear-gradient(to_right,#07294d_1px,transparent_1px),linear-gradient(to_bottom,#07294d_1px,transparent_1px)] bg-[size:70px_70px]"></div>

      {/* ================= MAIN ================= */}
      <div className="max-w-[1550px] mx-auto px-6 relative z-10">

        {/* ================= HERO ================= */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="text-center mb-28"
        >

          {/* TAG */}
          <div className="inline-flex items-center gap-3 px-8 py-4 rounded-full bg-white border border-[#d4af37]/20 shadow-[0_15px_40px_rgba(0,0,0,0.05)] mb-10">

            <FaClipboardCheck className="text-[#d4af37] text-lg" />

            <p className="uppercase tracking-[6px] text-[#d4af37] text-sm font-black">
              Verification Process
            </p>

          </div>

          {/* HEADING */}
          <h1 className="text-5xl md:text-7xl xl:text-8xl font-black text-[#07294d] leading-[1.05]">

            <span className="relative inline-block pb-5">

              Admission
              <br />
              Requirements

              {/* UNDERLINE */}
              <span className="absolute left-0 bottom-2 w-full h-5 bg-[#d4af37]/25 rounded-full"></span>

            </span>

          </h1>

          {/* TEXT */}
          <p className="max-w-[1100px] mx-auto text-gray-600 text-xl leading-10 mt-14">

            The following documents are required during
            the verification and identification process.
            Kindly ensure that all documents are complete,
            accurate and submitted within the specified timeline.

          </p>

        </motion.div>

        {/* ================= FEATURE TOP ================= */}
        <div className="grid lg:grid-cols-3 gap-8 mb-24">

          {[
            {
              title: "Document Verification",
              desc: "All submitted documents are carefully verified by the school administration.",
              icon: <FaFileSignature />,
            },

            {
              title: "Admission Review",
              desc: "Application forms are reviewed thoroughly before confirmation.",
              icon: <FaSchool />,
            },

            {
              title: "Student Interaction",
              desc: "Parents and students may be invited for interaction with management.",
              icon: <FaUserGraduate />,
            },
          ].map((item, index) => (

            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
              viewport={{ once: true }}
              whileHover={{ y: -12 }}
              className="group relative overflow-hidden rounded-[40px] bg-white shadow-[0_25px_80px_rgba(0,0,0,0.08)] border border-white/60"
            >

              {/* TOP BAR */}
              <div className="absolute top-0 left-0 w-full h-[7px] bg-gradient-to-r from-[#d4af37] via-[#facc15] to-[#d4af37]"></div>

              {/* GLOW */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-500 bg-gradient-to-br from-[#d4af37]/5 to-[#07294d]/5"></div>

              <div className="relative z-10 p-10">

                {/* ICON */}
                <div className="w-20 h-20 rounded-[28px] bg-[#07294d] text-white flex items-center justify-center text-4xl shadow-2xl mb-8">

                  {item.icon}

                </div>

                {/* TITLE */}
                <h3 className="text-3xl font-black text-[#07294d] mb-5 leading-tight">
                  {item.title}
                </h3>

                {/* LINE */}
                <div className="w-20 h-[5px] bg-[#d4af37] rounded-full mb-7"></div>

                {/* DESC */}
                <p className="text-gray-600 text-lg leading-9">
                  {item.desc}
                </p>

              </div>

            </motion.div>

          ))}

        </div>

        {/* ================= REQUIREMENTS ================= */}
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="relative overflow-hidden rounded-[50px] bg-white shadow-[0_30px_100px_rgba(0,0,0,0.08)] mb-28"
        >

          {/* TOP BAR */}
          <div className="absolute top-0 left-0 w-full h-[8px] bg-gradient-to-r from-[#07294d] via-[#0b4a80] to-[#07294d]"></div>

          <div className="p-10 md:p-16">

            {/* HEADER */}
            <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-10 mb-16">

              <div className="flex items-center gap-6">

                {/* ICON */}
                <div className="w-24 h-24 rounded-[32px] bg-[#07294d] text-white flex items-center justify-center text-5xl shadow-2xl">

                  <FaClipboardCheck />

                </div>

                <div>

                  <h2 className="text-4xl md:text-5xl font-black text-[#07294d]">
                    Required Documents
                  </h2>

                  <p className="text-gray-500 mt-3 text-lg">
                    Submit the following documents along with the admission form.
                  </p>

                </div>

              </div>

              {/* BADGE */}
              <div className="px-8 py-5 rounded-[25px] bg-[#d4af37]/10 border border-[#d4af37]/20">

                <p className="text-[#07294d] font-black text-xl">
                  Admissions Open 2025–26
                </p>

              </div>

            </div>

            {/* GRID */}
            <div className="grid md:grid-cols-2 gap-8">

              {requirements.map((item, index) => (

                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: index * 0.05 }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.02 }}
                  className="group relative overflow-hidden rounded-[35px] bg-[#f8fafc] border border-gray-100 p-8 hover:shadow-[0_20px_50px_rgba(0,0,0,0.08)] transition duration-500"
                >

                  {/* HOVER BAR */}
                  <div className="absolute top-0 left-0 w-full h-[5px] bg-gradient-to-r from-[#d4af37] to-[#facc15] scale-x-0 group-hover:scale-x-100 origin-left transition duration-500"></div>

                  <div className="flex items-start gap-5">

                    {/* CHECK */}
                    <div className="w-14 h-14 rounded-full bg-[#07294d] text-white flex items-center justify-center text-lg flex-shrink-0 shadow-xl">

                      <FaCheckCircle />

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

        {/* ================= IMPORTANT NOTICE ================= */}
        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="relative overflow-hidden rounded-[55px] bg-gradient-to-br from-[#021427] via-[#07294d] to-[#0b4a80] p-14 md:p-20 text-white"
        >

          {/* GLOW */}
          <div className="absolute top-[-120px] right-[-120px] w-[320px] h-[320px] bg-[#d4af37]/20 blur-3xl rounded-full"></div>

          {/* SHAPE */}
          <div className="absolute bottom-[-80px] left-[-80px] w-[260px] h-[260px] border-[28px] border-white/5 rounded-full"></div>

          <div className="relative z-10">

            {/* ICON */}
            <div className="w-24 h-24 rounded-[32px] bg-white text-[#07294d] flex items-center justify-center text-5xl shadow-2xl mb-10">

              <FaExclamationTriangle />

            </div>

            {/* TITLE */}
            <h2 className="text-5xl md:text-6xl font-black leading-tight mb-8">

              Important
              <br />
              Instructions

            </h2>

            {/* LINE */}
            <div className="w-32 h-[6px] bg-[#d4af37] rounded-full mb-12"></div>

            {/* CONTENT */}
            <div className="space-y-10">

              <p className="text-xl leading-10 text-white/85 max-w-[1250px]">

                Care must be taken to ensure that the
                entire application form is completely
                filled and duly signed. The date of birth
                must exactly match the birth certificate.

              </p>

              <p className="text-xl leading-10 text-white/85 max-w-[1250px]">

                Submission or registration of the form
                does not guarantee admission. In all matters
                related to admissions, the decision of the
                school management shall be final.

              </p>

              <p className="text-xl leading-10 text-white/85 max-w-[1250px]">

                Parents and students may be invited for
                an interaction with the school management
                during the admission process. Dates for
                the same shall be duly notified.

              </p>

            </div>

          </div>

        </motion.div>

      </div>

    </section>
  );
};

export default Requirements;