import React from "react";
import {
  FaUser,
  FaUserGraduate,
  FaMoneyBillWave,
} from "react-icons/fa";
import { HiDocumentText } from "react-icons/hi";
import { MdOutlineScience } from "react-icons/md";

import bgImage from "../assets/emmanuel-phaeton-uetBemnemC4-unsplash.jpg";

export default function ServicesSection() {
  const services = [
    {
      title: "ANKUR (NURSERY) REGISTRATION PROCESS 2026-27",
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

  return (
    <div
      className="relative w-full px-6 md:px-20 py-20"
      style={{
        backgroundImage: `url(${bgImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* DARK OVERLAY */}
      <div className="absolute inset-0 bg-black/60"></div>

      <div className="relative grid md:grid-cols-3 gap-10">
        {services.map((item, index) => (
          <div
            key={index}
            className={`relative group p-12 text-center transition-all duration-500 cursor-pointer rounded-2xl
            ${
              item.highlight
                ? "bg-[#0f172a] text-white shadow-[0_25px_70px_rgba(0,0,0,0.5)] scale-[1.05] border border-[#d4af37]"
                : "bg-white/90 backdrop-blur-md text-[#0f172a] border border-transparent hover:border-[#d4af37] hover:shadow-[0_25px_60px_rgba(212,175,55,0.35)] hover:-translate-y-2"
            }`}
          >
            {/* 🔥 STRONG GOLD TOP LINE */}
            <div className="absolute top-0 left-0 w-full h-[3px] bg-gradient-to-r from-transparent via-[#d4af37] to-transparent opacity-80 group-hover:opacity-100"></div>

            {/* ICON */}
            <div
              className={`text-5xl mb-6 flex justify-center transition-all duration-500
              ${
                item.highlight
                  ? "text-[#d4af37] drop-shadow-[0_0_10px_rgba(212,175,55,0.8)]"
                  : "text-[#1e3a8a] group-hover:text-[#d4af37] group-hover:scale-110 group-hover:drop-shadow-[0_0_8px_rgba(212,175,55,0.6)]"
              }`}
            >
              {item.icon}
            </div>

            {/* TITLE */}
            <h3 className="font-semibold text-[17px] leading-relaxed tracking-wide group-hover:text-[#b8962e] transition duration-300">
              {item.title}
            </h3>

            {/* 🔥 GOLD HOVER LINE */}
            {!item.highlight && (
              <div className="absolute bottom-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-[#d4af37] to-transparent opacity-0 group-hover:opacity-100 transition duration-500"></div>
            )}

            {/* 🔥 GOLD GLOW ON HOVER */}
            {!item.highlight && (
              <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition duration-500 pointer-events-none shadow-[inset_0_0_25px_rgba(212,175,55,0.25)]"></div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}