import React from "react";
import { motion } from "framer-motion";
import {
  FaSchool,
  FaEnvelope,
  FaPhoneAlt,
  FaClipboardCheck,
  FaCalendarAlt,
  FaCertificate,
  FaGlobe,
  FaUniversity,
} from "react-icons/fa";

/* ================= IMAGES ================= */
import heroImg from "../assets/uploads/school.jpg";


export default function SchoolInformation() {

  const infoCards = [
    {
      number: "2016",
      label: "Established",
    },
    {
      number: "CBSE",
      label: "Recognized By",
    },
    {
      number: "1631134",
      label: "Affiliation No.",
    },
    {
      number: "Global",
      label: "Learning Vision",
    },
  ];

  const schoolInfo = [
    {
      title: "Name of the School",
      value:
        "Cambridge International School, Pandori Khaas Road, Nakodar",
      icon: <FaSchool />,
    },
    {
      title: "Year of Establishment",
      value: "2016",
      icon: <FaCalendarAlt />,
    },
    {
      title: "NOC Obtained",
      value: "YES",
      icon: <FaClipboardCheck />,
    },
    {
      title: "NOC Number",
      value: "SSA/RTE/NKD-1/05/2015-18",
      icon: <FaCertificate />,
    },
    {
      title: "NOC Issuing Date",
      value: "05/04/2016",
      icon: <FaCalendarAlt />,
    },
    {
      title: "Recognized By",
      value: "YES, CBSE",
      icon: <FaUniversity />,
    },
    {
      title: "Affiliation Status",
      value: "Provisional",
      icon: <FaCertificate />,
    },
    {
      title: "Affiliation Number",
      value: "1631134",
      icon: <FaCertificate />,
    },
    {
      title: "Affiliated Since",
      value: "2017",
      icon: <FaGlobe />,
    },
  ];

  return (
    <div className="w-full bg-[#f5f8fc] overflow-hidden">

      {/* ================= HERO SECTION ================= */}
      <section className="relative min-h-screen flex items-center overflow-hidden bg-[#021427]">

        {/* BG IMAGE */}
        <motion.img
          initial={{ scale: 1.12 }}
          animate={{ scale: 1 }}
          transition={{ duration: 2 }}
          src={heroImg}
          alt="school"
          className="absolute inset-0 w-full h-full object-cover"
        />

        {/* OVERLAY */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#021427]/95 via-[#07294d]/80 to-[#07294d]/40"></div>

        {/* GOLD GLOW */}
        <div className="absolute top-[-100px] left-[-100px] w-[450px] h-[450px] bg-[#facc15]/10 rounded-full blur-3xl"></div>

        <div className="absolute bottom-[-120px] right-[-120px] w-[500px] h-[500px] bg-[#facc15]/10 rounded-full blur-3xl"></div>

        {/* LINES */}
        <div className="absolute left-20 top-0 w-[1px] h-full bg-white/10"></div>
        <div className="absolute left-32 top-0 w-[1px] h-full bg-white/5"></div>

        {/* CONTENT */}
        <div className="relative z-10 max-w-[1450px] mx-auto px-6 md:px-16 w-full">

          <motion.div
            initial={{ opacity: 0, y: 80 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="max-w-[900px]"
          >

            {/* TAG */}
            <div className="flex items-center gap-4 mb-8">

              <div className="w-16 h-[4px] bg-[#facc15] rounded-full"></div>

              <p className="uppercase tracking-[8px] text-[#facc15] text-sm md:text-lg font-semibold">
                Cambridge International School
              </p>

            </div>

            {/* HEADING */}
            <h1 className="text-white text-6xl md:text-8xl font-black leading-[0.95] tracking-tight">

              School
              <span className="text-[#facc15]"> Information</span>

            </h1>

            {/* TEXT */}
            <p className="text-white/75 text-lg md:text-2xl leading-10 mt-12 max-w-[760px]">

              Delivering excellence in education with innovation,
              integrity, and a strong commitment towards holistic
              student development.

            </p>

          </motion.div>

        </div>

      </section>

      {/* ================= FLOATING INFO CARDS ================= */}
      <section className="relative z-20 max-w-[1450px] mx-auto px-6 -mt-24">

        <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-8">

          {infoCards.map((item, index) => (

            <motion.div
              key={index}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -10 }}
              className="relative overflow-hidden rounded-[35px] bg-white/80 backdrop-blur-xl border border-white/20 shadow-[0_20px_50px_rgba(0,0,0,0.08)] p-10"
            >

              {/* GLOW */}
              <div className="absolute top-0 right-0 w-40 h-40 bg-[#facc15]/10 blur-2xl rounded-full"></div>

              <div className="relative z-10">

                <h2 className="text-5xl font-black text-[#07294d]">
                  {item.number}
                </h2>

                <div className="w-16 h-[4px] bg-[#facc15] rounded-full my-5"></div>

                <p className="text-gray-600 text-lg tracking-wide">
                  {item.label}
                </p>

              </div>

            </motion.div>

          ))}

        </div>

      </section>

      {/* ================= MAIN SECTION ================= */}
      <section className="max-w-[1450px] mx-auto px-6 py-28">

        <motion.div
          initial={{ opacity: 0, y: 80 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="relative overflow-hidden rounded-[45px] bg-white shadow-[0_25px_70px_rgba(0,0,0,0.08)]"
        >

          {/* TOP STRIP */}
          <div className="h-3 w-full bg-gradient-to-r from-[#facc15] via-[#fbbf24] to-[#facc15]"></div>

          {/* BG GLOW */}
          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#facc15]/5 blur-3xl rounded-full"></div>

          <div className="grid lg:grid-cols-[420px_1fr]">

            {/* ================= LEFT PANEL ================= */}
            <div className="relative bg-[#07294d] overflow-hidden p-12">

              {/* GLOW */}
              <div className="absolute top-0 right-0 w-[300px] h-[300px] bg-[#facc15]/10 blur-3xl rounded-full"></div>

              {/* SMALL LINES */}
              <div className="absolute left-10 top-0 w-[1px] h-full bg-white/10"></div>

              <div className="relative z-10">

                <p className="uppercase tracking-[6px] text-[#facc15] font-semibold mb-5">
                  Official Contact
                </p>

                <h2 className="text-4xl font-bold text-white leading-tight mb-14">

                  School
                  <br />
                  Directory

                </h2>

                {/* EMAIL BOX */}
                <motion.div
                  whileHover={{ x: 8 }}
                  className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-[30px] p-7 mb-8"
                >

                  <div className="flex items-start gap-5">

                    <div className="w-16 h-16 rounded-2xl bg-[#facc15] text-[#07294d] flex items-center justify-center text-2xl shadow-xl">

                      <FaEnvelope />

                    </div>

                    <div>

                      <h4 className="text-white text-xl font-bold mb-3">
                        Email Address
                      </h4>

                      <p className="text-white/70 leading-8 text-lg">
                        cisnakodar@gmail.com
                        <br />
                        info@cisnakodar.in
                        <br />
                        feedback@cisnakodar.in
                      </p>

                    </div>

                  </div>

                </motion.div>

                {/* PHONE BOX */}
                <motion.div
                  whileHover={{ x: 8 }}
                  className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-[30px] p-7"
                >

                  <div className="flex items-start gap-5">

                    <div className="w-16 h-16 rounded-2xl bg-[#facc15] text-[#07294d] flex items-center justify-center text-2xl shadow-xl">

                      <FaPhoneAlt />

                    </div>

                    <div>

                      <h4 className="text-white text-xl font-bold mb-3">
                        Phone Numbers
                      </h4>

                      <p className="text-white/70 leading-8 text-lg">
                        +91-1821-252975
                        <br />
                        +91-1821-253975
                      </p>

                    </div>

                  </div>

                </motion.div>

              </div>

            </div>

            {/* ================= RIGHT PANEL ================= */}
            <div className="p-10 md:p-16 lg:p-20 relative z-10">

              <p className="uppercase tracking-[6px] text-[#facc15] font-semibold mb-5">
                Institutional Information
              </p>

              <h2 className="text-5xl md:text-6xl font-bold text-[#07294d] leading-[1.15] mb-16">

                Official
                <br />
                School Details

              </h2>

              {/* INFO ROWS */}
              <div className="space-y-6">

                {schoolInfo.map((item, index) => (

                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: 40 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.05 }}
                    viewport={{ once: true }}
                    whileHover={{ x: 5 }}
                    className="group grid md:grid-cols-[70px_320px_1fr] items-start gap-6 border-b border-gray-200 pb-8"
                  >

                    {/* ICON */}
                    <div className="w-16 h-16 rounded-2xl bg-[#edf3fb] text-[#07294d] flex items-center justify-center text-2xl group-hover:bg-[#07294d] group-hover:text-white transition duration-300">

                      {item.icon}

                    </div>

                    {/* TITLE */}
                    <h3 className="text-[#07294d] text-xl font-bold leading-8">
                      {item.title}
                    </h3>

                    {/* VALUE */}
                    <p className="text-gray-600 text-lg leading-8">
                      {item.value}
                    </p>

                  </motion.div>

                ))}

              </div>

            </div>

          </div>

        </motion.div>

      </section>


    </div>
  );
}