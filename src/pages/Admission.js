import React from "react";
import { motion } from "framer-motion";
import {
  FaUserGraduate,
  FaBirthdayCake,
  FaGlobe,
  FaSchool,
  FaUserTie,
  FaPaperPlane,
  FaDownload,
} from "react-icons/fa";

const AdmissionForm = () => {
  return (
    <section className="relative w-full py-28 bg-[#f7f9fc] overflow-hidden">

      {/* ================= BACKGROUND GLOW ================= */}
      <div className="absolute top-[-120px] left-[-120px] w-[350px] h-[350px] bg-[#d4af37]/10 blur-3xl rounded-full"></div>

      <div className="absolute bottom-[-120px] right-[-120px] w-[350px] h-[350px] bg-[#07294d]/10 blur-3xl rounded-full"></div>

      {/* ================= MAIN ================= */}
      <div className="max-w-[1450px] mx-auto px-6 relative z-10">

        {/* ================= HEADING ================= */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >

          <p className="uppercase tracking-[7px] text-[#d4af37] font-bold mb-5">
            Admissions Open
          </p>

          {/* HEADING */}
          <h2 className="text-5xl md:text-7xl font-black text-[#07294d] leading-[1.1]">

            <span className="relative inline-block pb-5">

              Admission Form

              {/* UNDERLINE */}
              <span className="absolute left-0 bottom-1 w-full h-5 bg-[#d4af37]/25 rounded-full"></span>

            </span>

          </h2>

          <p className="max-w-[850px] mx-auto text-gray-600 text-lg leading-9 mt-10 mb-10">

            Begin your child’s educational journey with
            Cambridge International School by filling out
            the admission form below.

          </p>

          {/* ================= DOWNLOAD BUTTON ================= */}
          <motion.a
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            href={require("../assets/admission-form.jpeg")}
            download
            className="inline-flex items-center gap-4 px-8 py-5 rounded-2xl bg-[#d4af37] text-[#07294d] font-bold shadow-[0_20px_40px_rgba(212,175,55,0.25)] hover:bg-[#e5be45] transition duration-300"
          >

            <FaDownload />

            Download Admission Form

          </motion.a>

        </motion.div>

        {/* ================= FORM CARD ================= */}
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="bg-white rounded-[40px] shadow-[0_20px_80px_rgba(0,0,0,0.08)] border border-gray-100 overflow-hidden"
        >

          {/* TOP BAR */}
          <div className="h-[8px] w-full bg-gradient-to-r from-[#d4af37] via-[#facc15] to-[#d4af37]"></div>

          <div className="grid lg:grid-cols-3">

            {/* ================= LEFT SIDE ================= */}
            <div className="bg-[#07294d] p-12 relative overflow-hidden">

              {/* BG CIRCLE */}
              <div className="absolute top-[-70px] right-[-70px] w-[200px] h-[200px] border-[25px] border-white/5 rounded-full"></div>

              <h3 className="text-4xl font-black text-white leading-tight mb-6">

                Admission
                <br />
                Enquiry

              </h3>

              <div className="w-20 h-[4px] bg-[#d4af37] rounded-full mb-10"></div>

              <p className="text-white/70 text-lg leading-9 mb-12">

                Fill out the admission form and our team
                will contact you shortly regarding
                the admission process.

              </p>

              {/* FEATURES */}
              <div className="space-y-6">

                {[
                  "Experienced Faculty",
                  "Smart Classrooms",
                  "Holistic Development",
                  "Safe & Secure Campus",
                ].map((item, index) => (

                  <div
                    key={index}
                    className="flex items-center gap-4"
                  >

                    <div className="w-4 h-4 rounded-full bg-[#d4af37]"></div>

                    <p className="text-white font-medium">
                      {item}
                    </p>

                  </div>

                ))}

              </div>

            </div>

            {/* ================= RIGHT SIDE ================= */}
            <div className="lg:col-span-2 p-10 lg:p-14">

              <form className="grid md:grid-cols-2 gap-8">

                {/* STUDENT NAME */}
                <div>

                  <label className="text-[#07294d] font-bold mb-3 flex items-center gap-3">

                    <FaUserGraduate className="text-[#d4af37]" />

                    Student Name

                  </label>

                  <input
                    type="text"
                    placeholder="Enter student name"
                    className="w-full h-14 px-5 rounded-2xl border border-gray-200 outline-none focus:border-[#d4af37] focus:ring-4 focus:ring-[#d4af37]/10 transition"
                  />

                </div>

                {/* DOB */}
                <div>

                  <label className="text-[#07294d] font-bold mb-3 flex items-center gap-3">

                    <FaBirthdayCake className="text-[#d4af37]" />

                    Date Of Birth

                  </label>

                  <input
                    type="date"
                    className="w-full h-14 px-5 rounded-2xl border border-gray-200 outline-none focus:border-[#d4af37] focus:ring-4 focus:ring-[#d4af37]/10 transition"
                  />

                </div>

                {/* NATIONALITY */}
                <div>

                  <label className="text-[#07294d] font-bold mb-3 flex items-center gap-3">

                    <FaGlobe className="text-[#d4af37]" />

                    Nationality

                  </label>

                  <input
                    type="text"
                    placeholder="Enter nationality"
                    className="w-full h-14 px-5 rounded-2xl border border-gray-200 outline-none focus:border-[#d4af37] focus:ring-4 focus:ring-[#d4af37]/10 transition"
                  />

                </div>

                {/* CLASS */}
                <div>

                  <label className="text-[#07294d] font-bold mb-3 flex items-center gap-3">

                    <FaSchool className="text-[#d4af37]" />

                    Admission Class

                  </label>

                  <input
                    type="text"
                    placeholder="Class applying for"
                    className="w-full h-14 px-5 rounded-2xl border border-gray-200 outline-none focus:border-[#d4af37] focus:ring-4 focus:ring-[#d4af37]/10 transition"
                  />

                </div>

                {/* FATHER NAME */}
                <div className="md:col-span-2">

                  <label className="text-[#07294d] font-bold mb-3 flex items-center gap-3">

                    <FaUserTie className="text-[#d4af37]" />

                    Father's Name

                  </label>

                  <input
                    type="text"
                    placeholder="Enter father's name"
                    className="w-full h-14 px-5 rounded-2xl border border-gray-200 outline-none focus:border-[#d4af37] focus:ring-4 focus:ring-[#d4af37]/10 transition"
                  />

                </div>

                {/* MESSAGE */}
                <div className="md:col-span-2">

                  <label className="text-[#07294d] font-bold mb-3">
                    Additional Message
                  </label>

                  <textarea
                    rows="5"
                    placeholder="Write your message..."
                    className="w-full px-5 py-4 rounded-3xl border border-gray-200 outline-none focus:border-[#d4af37] focus:ring-4 focus:ring-[#d4af37]/10 transition resize-none"
                  ></textarea>

                </div>

                {/* BUTTON */}
                <div className="md:col-span-2">

                  <motion.button
                    whileHover={{ scale: 1.03 }}
                    whileTap={{ scale: 0.95 }}
                    className="px-10 py-5 rounded-2xl bg-[#07294d] text-white font-bold flex items-center gap-4 shadow-[0_20px_40px_rgba(7,41,77,0.25)] hover:bg-[#0b3d6d] transition duration-300"
                  >

                    Submit Form

                    <FaPaperPlane />

                  </motion.button>

                </div>

              </form>

            </div>

          </div>

        </motion.div>

      </div>

    </section>
  );
};

export default AdmissionForm;