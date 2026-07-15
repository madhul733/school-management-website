import React from "react";
import { motion } from "framer-motion";
import {
  FaUser,
  FaUserGraduate,
  FaMoneyBillWave,
  FaArrowRight,
} from "react-icons/fa";
import { HiDocumentText } from "react-icons/hi";
import { MdOutlineScience } from "react-icons/md";

import bgImage from "../assets/emmanuel-phaeton-uetBemnemC4-unsplash.jpg";

const services = [
  {
    title: "ANKUR (NURSERY) REGISTRATION",
    icon: <HiDocumentText />,
  },
  {
    title: "SIF 6.0",
    icon: <MdOutlineScience />,
    highlight: true,
  },
  {
    title: "WE #ACT4SDGs",
    icon: <HiDocumentText />,
  },
  {
    title: "ERP LOGIN",
    icon: <FaUser />,
  },
  {
    title: "ALUMNI REGISTRATION",
    icon: <FaUserGraduate />,
  },
  {
    title: "PAY FEE",
    icon: <FaMoneyBillWave />,
  },
];

export default function ServicesSection() {
  return (
    <section className="relative pt-28 pb-20 overflow-hidden">

      {/* Wave */}

      <div className="absolute top-0 left-0 w-full rotate-180 z-20">

        <svg
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
          className="w-full h-20"
        >
          <path
            d="M321.39,56.44C179.11,89.92,0,45.71,0,45.71V0H1200V27.35c-95.89,26.84-194.61,46.43-291.48,42.91C752.28,64.46,636.13,8.73,489.44,17.3,407.79,22.09,363.94,46.66,321.39,56.44Z"
            fill="#ffffff"
          />
        </svg>

      </div>

      {/* Background */}

      <div
        className="absolute inset-0"
        style={{
          backgroundImage: `url(${bgImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />

      {/* Overlay */}

      <div className="absolute inset-0 bg-gradient-to-br from-[#021427]/90 via-[#07294d]/80 to-[#021427]/90"></div>

      {/* Glow */}

      <div className="absolute -top-32 left-0 w-80 h-80 rounded-full bg-[#d4af37]/20 blur-[110px]"></div>

      <div className="absolute bottom-0 right-0 w-80 h-80 rounded-full bg-[#d4af37]/10 blur-[110px]"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-6">

        {/* Heading */}

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: .7 }}
          viewport={{ once: true }}
          className="text-center mb-14"
        >

          <span className="uppercase tracking-[6px] text-[#d4af37] font-bold">

            Quick Access

          </span>

          <h2 className="text-4xl md:text-5xl font-black text-white mt-4">

            Student Services

          </h2>

          <p className="text-white/70 max-w-2xl mx-auto mt-5 leading-7">

            Easy access to essential school services, student portal,
            registrations and online fee payment.

          </p>

        </motion.div>

        {/* Cards */}

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((item, index) => (

  <motion.div
    key={index}
    initial={{ opacity: 0, y: 40 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{
      duration: 0.5,
      delay: index * 0.08,
    }}
    viewport={{ once: true }}
    whileHover={{
      y: -8,
      scale: 1.02,
    }}
    className={`group relative overflow-hidden rounded-[24px] transition-all duration-500 border
    ${
      item.highlight
        ? "bg-[#07294d] border-[#d4af37] shadow-[0_20px_50px_rgba(0,0,0,.45)]"
        : "bg-white/10 backdrop-blur-lg border-white/20 hover:border-[#d4af37] hover:bg-white/15"
    }`}
  >

    {/* Gold Line */}

    <div className="absolute top-0 left-0 w-full h-[3px] bg-gradient-to-r from-transparent via-[#d4af37] to-transparent"></div>

    <div className="p-6">

      {/* Icon */}

      <div
        className={`w-14 h-14 rounded-full flex items-center justify-center text-2xl transition-all duration-500
        ${
          item.highlight
            ? "bg-[#d4af37] text-[#07294d]"
            : "bg-white/15 text-[#d4af37] group-hover:bg-[#d4af37] group-hover:text-[#07294d]"
        }`}
      >

        {item.icon}

      </div>

      {/* Title */}

      <h3 className="mt-5 text-lg font-bold text-white leading-7 min-h-[60px]">

        {item.title}

      </h3>

      {/* Divider */}

      <div className="w-10 h-[3px] rounded-full bg-[#d4af37] my-4"></div>

      {/* Small Description */}

      <p className="text-white/70 text-sm leading-6">

        Access this service quickly through the Cambridge portal.

      </p>

      {/* Footer */}

      <div className="flex items-center justify-between mt-6">

        <span className="text-[#d4af37] text-sm font-semibold">

          Open

        </span>

        <div className="w-10 h-10 rounded-full border border-[#d4af37] flex items-center justify-center text-[#d4af37] group-hover:bg-[#d4af37] group-hover:text-[#07294d] transition-all">

          <FaArrowRight />

        </div>

      </div>

    </div>
  </motion.div>

))}
        </div>

      </div>

      {/* Decorative Blur */}

      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[420px] h-[420px] rounded-full bg-[#d4af37]/10 blur-[140px] pointer-events-none"></div>

    </section>
  );
}