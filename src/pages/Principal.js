import React from "react";
import { motion } from "framer-motion";
import {
  FaBookReader,
  FaChalkboardTeacher,
  FaUserGraduate,
  FaQuoteLeft,
} from "react-icons/fa";

/* ================= IMAGES ================= */
import heroImg from "../assets/photo-1580582932707-520aed937b7b.avif";

/* ================= FOOTER ================= */
import Footer from "./Footer";

export default function PrincipalMessage() {

  const highlights = [
    {
      icon: <FaBookReader />,
      title: "Learning Excellence",
      text: "Providing quality education with innovation, discipline, and values.",
    },
    {
      icon: <FaChalkboardTeacher />,
      title: "Dedicated Faculty",
      text: "Guiding students with care, knowledge, and modern teaching practices.",
    },
    {
      icon: <FaUserGraduate />,
      title: "Student Development",
      text: "Encouraging confidence, creativity, leadership, and holistic growth.",
    },
  ];

  return (
    <div className="w-full bg-[#f4f8fd] overflow-hidden">

      {/* ================= HERO SECTION ================= */}
      <section className="relative h-[620px] overflow-hidden">

        {/* HERO IMAGE */}
        <motion.img
          initial={{ scale: 1.12 }}
          animate={{ scale: 1 }}
          transition={{ duration: 2 }}
          src={heroImg}
          alt="principal"
          className="w-full h-full object-cover"
        />

        {/* OVERLAY */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#021427]/95 via-[#07294d]/78 to-[#07294d]/30"></div>

        {/* GLOW */}
        <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-[#facc15]/10 blur-3xl rounded-full"></div>

        {/* HERO CONTENT */}
        <motion.div
          initial={{ opacity: 0, y: 70 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="absolute inset-0 flex items-center"
        >

          <div className="max-w-[1450px] mx-auto w-full px-6 md:px-16">

            <div className="max-w-[760px]">

              <p className="uppercase tracking-[8px] text-[#facc15] text-sm md:text-lg mb-5 font-medium">
                Academic Leadership
              </p>

              <h1 className="text-white text-5xl md:text-7xl font-bold leading-[1.1]">

                Principal's
                <br />
                Message

              </h1>

              <div className="w-40 h-[5px] bg-[#facc15] rounded-full mt-8"></div>

              <p className="text-white/80 text-lg md:text-xl leading-9 mt-10 max-w-[650px]">
                Inspiring learners with knowledge, confidence,
                values, and excellence for a brighter future.
              </p>

            </div>

          </div>

        </motion.div>

      </section>

      {/* ================= MAIN SECTION ================= */}
      <section className="max-w-[1450px] mx-auto px-6 py-28">

        {/* ================= MAIN CARD ================= */}
        <motion.div
          initial={{ opacity: 0, y: 80 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="relative bg-white rounded-[45px] overflow-hidden shadow-[0_20px_60px_rgba(0,0,0,0.08)]"
        >

          {/* TOP STRIP */}
          <div className="absolute top-0 left-0 w-full h-3 bg-gradient-to-r from-[#facc15] via-[#fbbf24] to-[#facc15]"></div>

          {/* ================= GRID ================= */}
          <div className="grid lg:grid-cols-[1fr_430px]">

            {/* ================= CONTENT SIDE ================= */}
            <div className="relative p-10 md:p-16 lg:p-20 overflow-hidden">

              {/* Glow */}
              <div className="absolute bottom-0 left-0 w-[350px] h-[350px] bg-[#facc15]/10 blur-3xl rounded-full"></div>

              {/* Quote Icon */}
              <FaQuoteLeft className="text-[#facc15] text-7xl mb-8 relative z-10" />

              <div className="space-y-9 text-[19px] leading-[42px] text-[#4b5563] relative z-10">

                <h2 className="text-5xl font-bold text-[#07294d] leading-tight">

                  Nurturing Students
                  <br />
                  With Knowledge & Values

                </h2>

                <p className="italic text-[#07294d] font-medium text-[22px] leading-[40px]">
                  “Education empowers young minds to grow with confidence,
                  wisdom, and purpose.”
                </p>

                <p>
                  Dear Parent,
                </p>

                <p>
                  Thank you for your interest in Cambridge International
                  School. Within these pages, we hope to convey the true
                  spirit of our institution — its warmth, purpose, values,
                  and vision for the future of every learner.
                </p>

                <p>
                  We intend to provide you and your child with the
                  information needed to make an informed decision.
                  Cambridge International School is equipped with excellent
                  facilities while maintaining a nurturing environment
                  where every child receives personal care, guidance, and
                  opportunities to grow.
                </p>

                <p>
                  We strongly believe that every child deserves a
                  high-quality, broad-based education in order to succeed
                  in life. Our learning experiences are thoughtfully
                  planned to build academic excellence, confidence,
                  creativity, communication skills, and strong moral
                  values required for today’s rapidly changing world.
                </p>

                <p>
                  At Cambridge International School, students are
                  encouraged to discover their true potential and set
                  higher standards in every sphere of life. Our aim is to
                  guide them on a meaningful journey of self-discovery,
                  leadership, innovation, and holistic development.
                </p>

                <p>
                  We invite you to experience the encouraging, caring, and
                  joyful atmosphere of our school community. Our dedicated
                  team would be delighted to welcome you and take you
                  through the enriching learning environment we proudly
                  offer.
                </p>

                {/* ================= MESSAGE BOX ================= */}
                <motion.div
                  whileHover={{ scale: 1.01 }}
                  transition={{ duration: 0.3 }}
                  className="bg-[#eef4fb] border-l-[6px] border-[#07294d] p-9 rounded-[30px] shadow-md"
                >

                  <h3 className="text-3xl font-bold text-[#07294d] mb-5">
                    Principal's Message
                  </h3>

                  <p className="text-[19px] leading-[38px] text-[#4b5563] italic">
                    “We look forward to partnering with parents in shaping
                    confident, compassionate, and future-ready learners.”
                  </p>

                  <div className="mt-6">

                    <h4 className="text-2xl font-bold text-[#07294d]">
                      Mrs. Sandhya Dewan
                    </h4>

                    <p className="text-[#facc15] font-semibold mt-1">
                      Principal
                    </p>

                  </div>

                </motion.div>

              </div>

            </div>

            {/* ================= IMAGE SIDE ================= */}
            <div className="relative bg-[#07294d] p-8 lg:p-10 overflow-hidden">

              {/* Glow */}
              <div className="absolute top-0 right-0 w-72 h-72 bg-[#facc15]/10 blur-3xl rounded-full"></div>

              <motion.div
                whileHover={{ y: -8 }}
                transition={{ duration: 0.3 }}
                className="relative z-10"
              >

                {/* IMAGE */}
                <div className="overflow-hidden rounded-[35px] shadow-[0_20px_50px_rgba(0,0,0,0.4)]">

                  <img
                    src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=1200&auto=format&fit=crop"
                    alt="Principal"
                    className="w-full h-[600px] object-cover hover:scale-105 transition duration-700"
                  />

                </div>

                {/* NAME CARD */}
                <div className="bg-white rounded-[28px] p-7 shadow-2xl -mt-12 mx-6 relative z-20 text-center">

                  <h3 className="text-3xl font-bold text-[#07294d]">
                    Mrs. Sandhya Dewan
                  </h3>

                  <p className="text-[#facc15] font-semibold mt-2 text-lg tracking-wide">
                    Principal
                  </p>

                </div>

              </motion.div>

            </div>

          </div>

        </motion.div>

        {/* ================= HIGHLIGHTS ================= */}
        <div className="grid md:grid-cols-3 gap-8 mt-20">

          {highlights.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
              whileHover={{ y: -10 }}
              className="relative bg-white rounded-[35px] p-10 shadow-[0_15px_40px_rgba(0,0,0,0.08)] overflow-hidden"
            >

              {/* Glow */}
              <div className="absolute top-0 right-0 w-40 h-40 bg-[#facc15]/10 blur-2xl rounded-full"></div>

              <div className="relative z-10">

                <div className="w-20 h-20 rounded-3xl bg-[#07294d] text-white flex items-center justify-center text-3xl shadow-lg mb-8">

                  {item.icon}

                </div>

                <h3 className="text-3xl font-bold text-[#07294d] mb-5">
                  {item.title}
                </h3>

                <p className="text-gray-600 leading-8 text-[17px]">
                  {item.text}
                </p>

              </div>

            </motion.div>
          ))}

        </div>

      </section>

      {/* ================= FOOTER ================= */}
      <Footer />

    </div>
  );
}