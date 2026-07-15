import React from "react";
import { motion } from "framer-motion";
import {
  FaAward,
  FaQuoteLeft,
  FaUserGraduate,
  FaGlobeAsia,
} from "react-icons/fa";

/* ================= IMAGES ================= */
import heroImg from "../assets/uploads/school.jpg";
import chairpersonImg from "../assets/uploads/chairmen.jpg";



export default function ChairpersonMessage() {

  const highlights = [
    {
      icon: <FaAward />,
      title: "Excellence",
      text: "Creating a culture of discipline, leadership, and academic excellence.",
    },
    {
      icon: <FaUserGraduate />,
      title: "Student Growth",
      text: "Empowering students with confidence, creativity, and strong values.",
    },
    {
      icon: <FaGlobeAsia />,
      title: "Global Vision",
      text: "Preparing future-ready learners for a rapidly evolving world.",
    },
  ];

  return (
    <div className="w-full bg-[#f4f8fd] overflow-hidden">

      {/* ================= HERO SECTION ================= */}
      <section className="relative h-[600px] overflow-hidden">

        {/* HERO IMAGE */}
        <motion.img
          initial={{ scale: 1.12 }}
          animate={{ scale: 1 }}
          transition={{ duration: 2 }}
          src={heroImg}
          alt="hero"
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

          <div className="max-w-[1400px] mx-auto w-full px-6 md:px-16">

            <div className="max-w-[720px]">

              <p className="uppercase tracking-[8px] text-[#facc15] text-sm md:text-lg mb-5 font-medium">
                Leadership & Inspiration
              </p>

              <h1 className="text-white text-5xl md:text-7xl font-bold leading-[1.1]">

                Chairperson's
                <br />
                Message

              </h1>

              <div className="w-40 h-[5px] bg-[#facc15] rounded-full mt-8"></div>

              <p className="text-white/80 text-lg md:text-xl leading-9 mt-10 max-w-[650px]">
                Shaping young minds with excellence, discipline,
                innovation, and values for a brighter tomorrow.
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

          {/* TOP DESIGN */}
          <div className="absolute top-0 left-0 w-full h-3 bg-gradient-to-r from-[#facc15] via-[#fbbf24] to-[#facc15]"></div>

          {/* ================= GRID ================= */}
          <div className="grid lg:grid-cols-[1fr_430px]">

            {/* ================= CONTENT SIDE ================= */}
            <div className="relative p-10 md:p-16 lg:p-20 overflow-hidden">

              {/* Glow */}
              <div className="absolute bottom-0 left-0 w-[350px] h-[350px] bg-[#facc15]/10 blur-3xl rounded-full"></div>

              {/* Quote */}
              <FaQuoteLeft className="text-[#facc15] text-7xl mb-8 relative z-10" />

              <div className="space-y-9 text-[19px] leading-[42px] text-[#4b5563] relative z-10">

                <h2 className="text-5xl font-bold text-[#07294d] leading-tight">

                  Empowering Young Minds
                  <br />
                  Through Education & Values

                </h2>

                <p>
                  I have always believed that, “Education is not preparation
                  for life; Education is life itself.” Education is the most
                  noble and powerful way of empowering an individual. Good
                  education is the greatest gift we can give to our future
                  generations, and a school is not only the fulcrum of
                  education but it is a temple where pure minds get knowledge
                  and wisdom to usher in a better tomorrow.
                </p>

                <p>
                  A school thus, has to be a compassionate community imparting
                  not just knowledge but giving children a strong foundation
                  which keeps them grounded to values and gives them the courage
                  to conquer the world. Every child is God’s precious gift to
                  mankind and it is the school that has the utmost
                  responsibility for shaping innocent minds to strive for
                  excellence, which is the only mantra for success and strong
                  character building.
                </p>

                <p>
                  We wish to develop a school which nurtures compassionate
                  learners, where every child acquires wisdom, confidence, and
                  leadership qualities. We believe healthy competition begins
                  with improving oneself and building one’s own capabilities.
                  Our institution offers a broad and challenging curriculum
                  that stimulates creativity, innovation, ethics, teamwork,
                  and holistic growth.
                </p>

                <p>
                  At Cambridge International School, Nakodar, we strongly
                  believe that every child is bestowed with special talents.
                  Our educational approach goes beyond academics by providing
                  opportunities in sports, music, creative arts, adventure
                  activities, communication skills, and co-curricular
                  development so that students can fulfil all their
                  aspirations.
                </p>

                <p>
                  The management and teachers follow the rich traditions of
                  “Guru-Shishya Parampara” while adopting the best
                  international practices to empower students morally and
                  intellectually. Our vision is to shape global citizens who
                  possess compassion, confidence, innovation, and the courage
                  to achieve excellence in every field.
                </p>

                <p>
                  Our association with Learning Wings Education Systems further
                  strengthens our commitment towards providing world-class
                  education through holistic learning practices and modern
                  teaching methods.
                </p>

                {/* ================= QUOTE BOX ================= */}
                <motion.div
                  whileHover={{ scale: 1.01 }}
                  transition={{ duration: 0.3 }}
                  className="bg-[#eef4fb] border-l-[6px] border-[#07294d] p-9 rounded-[30px] shadow-md"
                >

                  <h3 className="text-3xl font-bold text-[#07294d] mb-5">
                    Chairperson's Vision
                  </h3>

                  <p className="text-[19px] leading-[38px] text-[#4b5563] italic">
                    “I welcome you to Cambridge International School, Nakodar
                    and assure a learning journey that will pave the way for a
                    wholesome personality and a bright future.”
                  </p>

                  <div className="mt-6">

                    <h4 className="text-2xl font-bold text-[#07294d]">
                      R.R. Angra
                    </h4>

                    <p className="text-[#facc15] font-semibold mt-1">
                      Chairperson
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
                  src={chairpersonImg}
                    alt="Chairperson"
                    className="w-full h-[600px] object-cover hover:scale-105 transition duration-700"
                  />

                </div>

                {/* NAME CARD */}
                <div className="bg-white rounded-[28px] p-7 shadow-2xl -mt-12 mx-6 relative z-20 text-center">

                  <h3 className="text-3xl font-bold text-[#07294d]">
                    R.R. Angra
                  </h3>

                  <p className="text-[#facc15] font-semibold mt-2 text-lg tracking-wide">
                    Chairperson
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

     

    </div>
  );
}