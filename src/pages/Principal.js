import React from "react";
import { motion } from "framer-motion";
import {
  FaBookReader,
  FaChalkboardTeacher,
  FaUserGraduate,
  FaQuoteLeft,
} from "react-icons/fa";

import heroImg from "../assets/uploads/school.jpg";
import principalImg from "../assets/uploads/cis-principle.jpg";

export default function PrincipalMessage() {
  const highlights = [
    {
      icon: <FaBookReader />,
      title: "Learning Excellence",
      text: "Providing quality education with innovation, discipline and strong moral values.",
    },
    {
      icon: <FaChalkboardTeacher />,
      title: "Dedicated Faculty",
      text: "Committed teachers nurturing every learner through guidance and personal attention.",
    },
    {
      icon: <FaUserGraduate />,
      title: "Holistic Growth",
      text: "Developing confident, responsible and future-ready global citizens.",
    },
  ];

  return (
    <div className="w-full bg-[#f4f8fd] overflow-hidden">

      {/* ================= HERO ================= */}

      <section className="relative h-[620px] overflow-hidden">

        <motion.img
          initial={{ scale: 1.12 }}
          animate={{ scale: 1 }}
          transition={{ duration: 2 }}
          src={heroImg}
          alt="Principal"
          className="w-full h-full object-cover"
        />

        <div className="absolute inset-0 bg-gradient-to-r from-[#021427]/95 via-[#07294d]/80 to-[#07294d]/35"></div>

        <div className="absolute top-0 left-0 w-[520px] h-[520px] bg-[#facc15]/10 rounded-full blur-[130px]"></div>

        <motion.div
          initial={{ opacity: 0, y: 70 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="absolute inset-0 flex items-center"
        >
          <div className="max-w-[1450px] mx-auto w-full px-6 md:px-16">

            <div className="max-w-[760px]">

              <p className="uppercase tracking-[8px] text-[#facc15] text-sm md:text-lg font-semibold mb-5">
                Cambridge International School
              </p>

              <h1 className="text-white text-5xl md:text-7xl font-black leading-tight">
                Principal's
                <br />
                Message
              </h1>

              <div className="w-36 h-[5px] bg-[#facc15] rounded-full mt-8"></div>

              <p className="text-white/80 text-lg md:text-xl leading-9 mt-8 max-w-[650px]">
                Inspiring young minds with knowledge, values,
                confidence and excellence for a brighter tomorrow.
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
          className="bg-white rounded-[45px] overflow-hidden shadow-[0_25px_70px_rgba(0,0,0,.08)] relative"
        >

          <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-[#facc15] via-[#d4af37] to-[#facc15]"></div>

          <div className="grid lg:grid-cols-[1fr_430px]">

            {/* ================= CONTENT ================= */}

            <div className="relative p-10 md:p-16 lg:p-20">

              <div className="absolute bottom-0 left-0 w-[320px] h-[320px] bg-[#facc15]/10 rounded-full blur-3xl"></div>

              <FaQuoteLeft className="text-[#facc15] text-6xl mb-8 relative z-10" />

              <div className="relative z-10">

                <p className="uppercase tracking-[6px] text-[#d4af37] font-semibold mb-3">
                  A Message From The Principal
                </p>

                <h2 className="text-5xl font-black text-[#07294d] leading-tight mb-10">
                  Guiding Every Child
                  <br />
                  Towards Excellence
                </h2>

                <div className="space-y-8 text-[18px] leading-[40px] text-[#4b5563]">

                  <p className="font-semibold text-[#07294d]">
                    Dear Parent,
                  </p>

                  <p>
                    Thank you for your interest in Cambridge International School.
                    Within these pages we hope to convey the spirit of our school—
                    its warmth, purpose, thought and soul.
                  </p>

                  <p>
                    We intend to provide you and your child the information
                    needed to make a decision. Cambridge International School
                    is big enough to possess prime facilities and yet small
                    enough to identify and provide for the needs of every
                    individual learner.
                  </p>

                  <p>
                    We believe that every child deserves and needs a
                    high-quality, broad-based education in order to succeed
                    in life. Learning opportunities are planned and executed
                    to instill academic competence as well as acquire skills
                    required to confidently participate in the rapidly
                    changing world while staying connected to personal and
                    universal values.
                  </p>
                                    <p>
                    Cambridge International School aims to walk alongside
                    every student in the journey of self-discovery during
                    the school years and motivate them to set higher
                    standards in every sphere of life.
                  </p>

                  <p>
                    We warmly invite you to experience the encouraging,
                    caring and joyful atmosphere of our school. Our team
                    would be delighted to welcome you and take you around
                    the campus.
                  </p>

                  <p>
                    Looking forward to meeting you.
                  </p>

                  {/* ================= SIGNATURE BOX ================= */}

                  <motion.div
                    whileHover={{ scale: 1.01 }}
                    transition={{ duration: .3 }}
                    className="mt-10 bg-[#eef4fb] border-l-[6px] border-[#07294d] rounded-[30px] p-8 shadow-md"
                  >

                    <p className="italic text-[#4b5563] text-[19px] leading-9">
                      "Education is not merely the acquisition of knowledge,
                      but the development of character, confidence and
                      compassion that prepares every child for life."
                    </p>

                    <div className="mt-8">

                      <h3 className="text-3xl font-bold text-[#07294d]">
                        Mrs. Sandhya Dewan
                      </h3>

                      <p className="text-[#d4af37] font-semibold mt-2">
                        Principal
                      </p>

                      <p className="text-gray-500 mt-1">
                        Cambridge International School, Nakodar
                      </p>

                    </div>

                  </motion.div>

                </div>

              </div>

            </div>

            {/* ================= RIGHT IMAGE ================= */}

            <div className="relative bg-[#07294d] p-8 lg:p-10 overflow-hidden">

              <div className="absolute top-0 right-0 w-72 h-72 bg-[#facc15]/10 rounded-full blur-3xl"></div>

              <motion.div
                whileHover={{ y: -8 }}
                transition={{ duration: .3 }}
                className="relative z-10"
              >

                <div className="overflow-hidden rounded-[35px] shadow-[0_20px_50px_rgba(0,0,0,.35)]">

                  <img
                    src={principalImg}
                    alt="Principal"
                    className="w-full h-[620px] object-cover hover:scale-105 transition duration-700"
                  />

                </div>

                <div className="bg-white rounded-[28px] p-7 shadow-xl -mt-12 mx-6 relative z-20 text-center">

                  <h3 className="text-3xl font-bold text-[#07294d]">
                    Mrs. Sandhya Dewan
                  </h3>

                  <p className="text-[#d4af37] font-semibold mt-2 text-lg">
                    Principal
                  </p>

                </div>

              </motion.div>

            </div>

          </div>

        </motion.div>
                {/* ================= HIGHLIGHTS ================= */}

        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: .8 }}
          viewport={{ once: true }}
          className="grid md:grid-cols-3 gap-8 mt-20"
        >

          {highlights.map((item, index) => (

            <motion.div
              key={index}
              whileHover={{
                y: -8,
                transition: { duration: .3 }
              }}
              className="bg-white rounded-[30px] p-8 shadow-[0_15px_40px_rgba(0,0,0,.08)] border border-gray-100 relative overflow-hidden group"
            >

              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#facc15] to-[#d4af37]"></div>

              <div className="w-20 h-20 rounded-3xl bg-[#07294d] text-[#facc15] text-3xl flex items-center justify-center mb-7 group-hover:bg-[#facc15] group-hover:text-[#07294d] transition duration-500">

                {item.icon}

              </div>

              <h3 className="text-2xl font-bold text-[#07294d] mb-4">

                {item.title}

              </h3>

              <p className="text-gray-600 leading-8">

                {item.text}

              </p>

            </motion.div>

          ))}

        </motion.div>

      </section>

    </div>
  );
}