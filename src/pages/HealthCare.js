import React from "react";
import { motion } from "framer-motion";
import {
  FaHeartbeat,
  FaUserNurse,
  FaClinicMedical,
  FaShieldAlt,
  FaProcedures,
  FaAmbulance,
  FaHandHoldingMedical,
  FaPlusCircle,
} from "react-icons/fa";

const healthcareFeatures = [
  {
    title: "Healthcare Centre",
    desc: "A modern and well-equipped healthcare centre accessible during school hours.",
    icon: <FaClinicMedical />,
  },

  {
    title: "Nursing Assistance",
    desc: "Qualified nursing attendants ensure immediate care and support during emergencies.",
    icon: <FaUserNurse />,
  },

  {
    title: "Emergency Support",
    desc: "Quick response and medical attention for student safety and well-being.",
    icon: <FaAmbulance />,
  },

  {
    title: "Safe Environment",
    desc: "A healthy and secure environment that prioritizes student wellness and care.",
    icon: <FaShieldAlt />,
  },
];

const Healthcare = () => {
  return (
    <section className="relative overflow-hidden bg-[#f5f9ff]">

      {/* ================= HERO SECTION ================= */}
      <div className="relative min-h-screen flex items-center overflow-hidden">

        {/* BG IMAGE */}
        <div className="absolute inset-0">

          <img
            src="https://images.unsplash.com/photo-1584515933487-779824d29309?auto=format&fit=crop&w=2000&q=80"
            alt="healthcare"
            className="w-full h-full object-cover"
          />

          {/* OVERLAY */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#041c38]/96 via-[#041c38]/88 to-[#041c38]/55"></div>

        </div>

        {/* LIGHT EFFECTS */}
        <div className="absolute top-[-150px] right-[-150px] w-[600px] h-[600px] bg-red-400/10 rounded-full blur-3xl"></div>

        <div className="absolute bottom-[-180px] left-[-150px] w-[550px] h-[550px] bg-pink-400/10 rounded-full blur-3xl"></div>

        {/* GRID */}
        <div className="absolute inset-0 opacity-[0.05] bg-[linear-gradient(to_right,#ffffff_1px,transparent_1px),linear-gradient(to_bottom,#ffffff_1px,transparent_1px)] bg-[size:90px_90px]"></div>

        {/* MAIN */}
        <div className="max-w-[1750px] mx-auto px-6 relative z-10 w-full">

          <div className="grid lg:grid-cols-2 gap-24 items-center">

            {/* LEFT */}
            <div>

              {/* TAG */}
              <motion.div
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7 }}
                className="inline-flex items-center gap-4 bg-white/10 border border-white/10 backdrop-blur-2xl px-8 py-4 rounded-full mb-12"
              >

                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-red-400 to-pink-500 flex items-center justify-center text-white shadow-xl text-xl">

                  <FaHeartbeat />

                </div>

                <p className="uppercase tracking-[8px] text-white text-sm font-bold">
                  Student Healthcare
                </p>

              </motion.div>

              {/* HEADING */}
              <motion.h1
                initial={{ opacity: 0, y: 60 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="text-6xl md:text-8xl xl:text-[130px] font-black leading-[0.9] text-black"
              >

                Care.
                <br />

                <span className="text-pink-300">
                  Safety.
                </span>

                <br />

                Wellness.

              </motion.h1>

              {/* LINE */}
              <motion.div
                initial={{ width: 0 }}
                animate={{ width: "240px" }}
                transition={{ duration: 1 }}
                className="h-[9px] bg-gradient-to-r from-red-400 via-pink-400 to-red-500 rounded-full mt-14 mb-14"
              ></motion.div>

              {/* TEXT */}
              <motion.p
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1 }}
                className="text-[#dbeafe] text-2xl xl:text-3xl leading-[58px] max-w-[850px] font-medium"
              >

                Cambridge International School, Nakodar
                provides a well-equipped healthcare centre
                with dedicated nursing assistance to ensure
                immediate care, comfort and safety for all students
                during school hours.

              </motion.p>

              {/* BUTTONS */}
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1.1 }}
                className="flex flex-wrap gap-7 mt-16"
              >

                <button className="px-12 py-5 bg-gradient-to-r from-red-400 to-pink-500 text-white rounded-full text-lg font-bold shadow-[0_25px_70px_rgba(255,0,80,0.35)] hover:scale-105 transition duration-300">

                  Healthcare Facilities

                </button>

                <button className="px-12 py-5 border border-white/20 bg-white/10 backdrop-blur-2xl text-white rounded-full text-lg font-bold hover:bg-white hover:text-[#041c38] transition duration-300">

                  Student Safety

                </button>

              </motion.div>

            </div>

            {/* RIGHT IMAGE */}
            <motion.div
              initial={{ opacity: 0, scale: 0.92 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.9 }}
              className="relative"
            >

              {/* IMAGE */}
              <div className="relative overflow-hidden rounded-[70px] shadow-[0_45px_160px_rgba(0,0,0,0.45)]">

                <img
                  src="https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=1800&q=80"
                  alt="healthcare"
                  className="w-full h-[920px] object-cover"
                />

                {/* OVERLAY */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>

                {/* CARD */}
                <div className="absolute bottom-10 left-10 right-10">

                  <div className="bg-white/10 border border-white/10 backdrop-blur-2xl rounded-[40px] p-9">

                    <div className="flex items-start gap-7">

                      <div className="w-24 h-24 rounded-[30px] bg-gradient-to-br from-red-400 to-pink-500 text-white flex items-center justify-center text-5xl shadow-2xl">

                        <FaHandHoldingMedical />

                      </div>

                      <div>

                        <h3 className="text-4xl font-black text-white mb-4">
                          Immediate Medical Care
                        </h3>

                        <p className="text-[#dbeafe] text-xl leading-9">

                          Students receive timely medical support
                          and attention in a secure healthcare environment.

                        </p>

                      </div>

                    </div>

                  </div>

                </div>

              </div>

              {/* FLOATING CARD */}
              <motion.div
                animate={{ y: [0, -18, 0] }}
                transition={{ duration: 4, repeat: Infinity }}
                className="absolute -bottom-14 -left-12 bg-white rounded-[40px] p-8 shadow-[0_35px_120px_rgba(0,0,0,0.18)]"
              >

                <div className="flex items-center gap-6">

                  <div className="w-20 h-20 rounded-[28px] bg-[#041c38] text-white flex items-center justify-center text-4xl shadow-xl">

                    <FaPlusCircle />

                  </div>

                  <div>

                    <h3 className="text-2xl font-black text-[#041c38]">
                      Emergency Ready
                    </h3>

                    <p className="text-gray-500 mt-1">
                      Care • Safety • Wellness
                    </p>

                  </div>

                </div>

              </motion.div>

            </motion.div>

          </div>

          {/* STATS */}
          <motion.div
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
            className="grid grid-cols-2 lg:grid-cols-4 gap-8 mt-28"
          >

            <div className="bg-white/10 border border-white/10 backdrop-blur-2xl rounded-[40px] p-10 text-center">

              <h2 className="text-6xl font-black text-white mb-4">
                Care
              </h2>

              <p className="text-[#dbeafe] text-lg font-semibold">
                Student Wellness
              </p>

            </div>

            <div className="bg-gradient-to-br from-red-400 to-pink-500 rounded-[40px] p-10 text-center shadow-2xl">

              <h2 className="text-6xl font-black text-white mb-4">
                Safe
              </h2>

              <p className="text-white/90 text-lg font-semibold">
                Medical Support
              </p>

            </div>

            <div className="bg-white/10 border border-white/10 backdrop-blur-2xl rounded-[40px] p-10 text-center">

              <h2 className="text-6xl font-black text-white mb-4">
                Nurse
              </h2>

              <p className="text-[#dbeafe] text-lg font-semibold">
                Emergency Assistance
              </p>

            </div>

            <div className="bg-white/10 border border-white/10 backdrop-blur-2xl rounded-[40px] p-10 text-center">

              <h2 className="text-6xl font-black text-white mb-4">
                Health
              </h2>

              <p className="text-[#dbeafe] text-lg font-semibold">
                First Priority
              </p>

            </div>

          </motion.div>

        </div>

      </div>

      {/* ================= FEATURES ================= */}
      <div className="max-w-[1750px] mx-auto px-6 py-36">

        {/* HEADING */}
        <div className="text-center mb-24">

          <p className="uppercase tracking-[7px] text-pink-500 font-bold mb-5">
            Healthcare Facilities
          </p>

          <h2 className="text-5xl md:text-7xl font-black text-[#041c38]">
            Wellness & Medical Support
          </h2>

          <div className="w-48 h-[8px] bg-gradient-to-r from-red-400 to-pink-500 rounded-full mx-auto mt-8"></div>

        </div>

        {/* GRID */}
        <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-8">

          {healthcareFeatures.map((item, index) => (

            <motion.div
              key={index}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: index * 0.08 }}
              viewport={{ once: true }}
              whileHover={{ y: -15 }}
              className="group bg-white rounded-[42px] p-10 shadow-[0_25px_90px_rgba(0,0,0,0.08)] relative overflow-hidden"
            >

              {/* TOP BAR */}
              <div className="absolute top-0 left-0 w-full h-[8px] bg-gradient-to-r from-red-400 via-pink-500 to-red-400"></div>

              {/* BG SHAPE */}
              <div className="absolute top-0 right-0 w-40 h-40 bg-pink-50 rounded-bl-[100px]"></div>

              {/* ICON */}
              <div className="relative z-10 w-24 h-24 rounded-[32px] bg-gradient-to-br from-red-400 to-pink-500 text-white flex items-center justify-center text-5xl shadow-2xl mb-8">

                {item.icon}

              </div>

              {/* TITLE */}
              <h3 className="relative z-10 text-3xl font-black text-[#041c38] mb-5 leading-tight">
                {item.title}
              </h3>

              {/* LINE */}
              <div className="w-20 h-[6px] bg-pink-200 rounded-full mb-7"></div>

              {/* DESC */}
              <p className="relative z-10 text-gray-600 leading-9 text-lg">
                {item.desc}
              </p>

            </motion.div>

          ))}

        </div>

      </div>

    </section>
  );
};

export default Healthcare;