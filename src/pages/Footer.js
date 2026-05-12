import React from "react";
import {
  FaFacebookF,
  FaInstagram,
  FaYoutube,
  FaPhoneAlt,
  FaUserTie,
  FaImage,
  FaQuestion,
  FaMapMarkerAlt,
  FaArrowRight,
} from "react-icons/fa";

import { MdEmail } from "react-icons/md";
import { motion } from "framer-motion";

export default function Footer() {

  const quickLinks = [
    "Virtual Tour",
    "Canteen",
    "Curriculum",
    "Library",
    "Teachers",
    "Admissions",
    "Activities",
    "Contact Us",
  ];

  return (
    <footer className="w-full overflow-hidden">

      {/* ================= TOP STRIP ================= */}
      <div className="bg-gradient-to-r from-[#facc15] via-[#fbbf24] to-[#facc15] py-8 px-6 md:px-20 relative">

        {/* Glow */}
        <div className="absolute inset-0 bg-white/10 backdrop-blur-[2px]"></div>

        <div className="max-w-6xl mx-auto grid md:grid-cols-3 rounded-[30px] overflow-hidden bg-white/20 backdrop-blur-lg shadow-[0_10px_40px_rgba(0,0,0,0.18)] relative z-10 border border-white/20">

          {[
            { title: "Career", icon: <FaUserTie /> },
            { title: "Picture Gallery", icon: <FaImage /> },
            { title: "What's New?", icon: <FaQuestion /> },
          ].map((item, index) => (
            <motion.div
              key={index}
              whileHover={{ y: -6 }}
              transition={{ duration: 0.3 }}
              className="relative group flex flex-col items-center justify-center py-9 cursor-pointer hover:bg-white/20 transition-all duration-300"
            >

              {index !== 2 && (
                <div className="hidden md:block absolute right-0 top-1/2 -translate-y-1/2 h-20 w-[1px] bg-black/10"></div>
              )}

              <div className="w-16 h-16 rounded-2xl bg-white/40 flex items-center justify-center mb-4 group-hover:scale-110 transition duration-300 shadow-lg">

                <div className="text-3xl text-[#0f172a]">
                  {item.icon}
                </div>

              </div>

              <p className="font-semibold text-[#0f172a] tracking-wide text-lg">
                {item.title}
              </p>

            </motion.div>
          ))}

        </div>

      </div>

      {/* ================= MAIN FOOTER ================= */}
      <div className="bg-[#07294d] text-white py-20 px-6 md:px-20 relative overflow-hidden">

        {/* BACKGROUND GLOW */}
        <div className="absolute top-0 left-0 w-[400px] h-[400px] bg-[#facc15]/10 blur-3xl rounded-full"></div>

        <div className="absolute bottom-0 right-0 w-[300px] h-[300px] bg-blue-400/10 blur-3xl rounded-full"></div>

        <div className="grid lg:grid-cols-4 gap-14 relative z-10">

          {/* ================= QUICK LINKS ================= */}
          <div>

            <h3 className="text-[#facc15] text-3xl font-bold mb-8">
              Quick Links
            </h3>

            <div className="grid grid-cols-2 gap-y-4 gap-x-5">

              {quickLinks.map((item, i) => (
                <motion.div
                  key={i}
                  whileHover={{ x: 6 }}
                  transition={{ duration: 0.25 }}
                  className="flex items-center gap-2 text-gray-300 hover:text-[#facc15] transition duration-300 cursor-pointer text-[15px]"
                >

                  <FaArrowRight className="text-[11px]" />

                  <span>{item}</span>

                </motion.div>
              ))}

            </div>

          </div>

          {/* ================= BRAND ================= */}
          <div className="flex flex-col items-center text-center justify-center">

            <h2 className="text-4xl font-bold text-[#facc15] mb-5 leading-tight">
              Cambridge
              <br />
              International
              <br />
              School
            </h2>

            <div className="w-20 h-[3px] bg-[#facc15] rounded-full mb-5"></div>

            <p className="text-gray-300 leading-8 text-[15px] max-w-[280px]">
              Empowering students with knowledge, values,
              leadership and global vision for a brighter future.
            </p>

            {/* SOCIALS */}
            <div className="flex gap-4 mt-8">

              {[
                {
                  icon: <FaFacebookF />,
                  link: "https://facebook.com",
                },
                {
                  icon: <FaInstagram />,
                  link: "https://instagram.com",
                },
                {
                  icon: <FaYoutube />,
                  link: "https://youtube.com",
                },
              ].map((social, i) => (
                <motion.a
                  key={i}
                  href={social.link}
                  target="_blank"
                  rel="noreferrer"
                  whileHover={{
                    y: -5,
                    scale: 1.08,
                  }}
                  className="w-12 h-12 rounded-full bg-white/10 border border-white/10 backdrop-blur-md flex items-center justify-center hover:bg-[#facc15] hover:text-[#07294d] transition-all duration-300 shadow-lg"
                >
                  {social.icon}
                </motion.a>
              ))}

            </div>

          </div>

          {/* ================= CONTACT ================= */}
          <div>

            <h3 className="text-[#facc15] text-3xl font-bold mb-8">
              Contact Us
            </h3>

            <div className="space-y-6 text-gray-300">

              <motion.div
                whileHover={{ x: 5 }}
                className="flex items-center gap-4"
              >

                <div className="w-11 h-11 rounded-xl bg-white/10 flex items-center justify-center text-[#facc15]">
                  <FaPhoneAlt />
                </div>

                <span className="text-[15px]">
                  +91 97813 00975
                </span>

              </motion.div>

              <motion.div
                whileHover={{ x: 5 }}
                className="flex items-center gap-4"
              >

                <div className="w-11 h-11 rounded-xl bg-white/10 flex items-center justify-center text-[#facc15]">
                  <MdEmail />
                </div>

                <span className="text-[15px]">
                  cisnakodar@gmail.com
                </span>

              </motion.div>

              <motion.div
                whileHover={{ x: 5 }}
                className="flex items-start gap-4"
              >

                <div className="w-11 h-11 rounded-xl bg-white/10 flex items-center justify-center text-[#facc15] mt-1">
                  <FaMapMarkerAlt />
                </div>

                <p className="text-[15px] leading-7">
                  Cambridge International School,
                  <br />
                  Nakodar, Punjab, India
                </p>

              </motion.div>

            </div>

          </div>

          {/* ================= MAP ================= */}
          <div>

            <h3 className="text-[#facc15] text-3xl font-bold mb-8">
              Location & Map
            </h3>

            <motion.div
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
              className="rounded-[28px] overflow-hidden shadow-[0_15px_40px_rgba(0,0,0,0.35)] border border-white/10"
            >

              <iframe
                title="map"
                src="https://maps.google.com/maps?q=nakodar&t=&z=13&ie=UTF8&iwloc=&output=embed"
                width="100%"
                height="260"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
              ></iframe>

            </motion.div>

          </div>

        </div>

        {/* ================= COPYRIGHT ================= */}
        <div className="border-t border-white/10 mt-16 pt-7 text-center text-gray-300 text-[15px] relative z-10">

          © 2026{" "}
          <span className="text-[#facc15] font-medium">
            Cambridge International School
          </span>{" "}
          | All Rights Reserved

        </div>

      </div>

    </footer>
  );
}