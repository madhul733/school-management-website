import React from "react";
import {
  FaPhoneAlt,
  FaEnvelope,
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaYoutube,
} from "react-icons/fa";

const Topbar = () => {
  return (
    <div className="w-full bg-[#0b2c4a] text-white text-sm">

      <div className="max-w-7xl mx-auto flex justify-end items-center gap-6 px-6 py-2">

        {/* PHONE */}
        <a
          href="tel:   9781300975"
          className="flex items-center gap-2 hover:opacity-80"
        >
          <FaPhoneAlt className="text-xs" />
    9781300975
        </a>

        {/* EMAIL */}
        <a
          href="mailto:cisnakodar@gmail.com"
          className="flex items-center gap-2 hover:opacity-80"
        >
          <FaEnvelope className="text-xs" />
         cisnakodar@gmail.com
        </a>

        {/* DIVIDER */}
        <span className="h-4 w-[1px] bg-white/30"></span>

        {/* SOCIAL ICONS */}
        <div className="flex items-center gap-4 text-yellow-400">

          <a
            href="https://www.facebook.com/cisnakodar/"
            target="_blank"
            rel="noreferrer"
            className="hover:scale-110 transition"
          >
            <FaFacebookF />
          </a>

          <a
            href="https://www.instagram.com/cisnakodar/"
            target="_blank"
            rel="noreferrer"
            className="hover:scale-110 transition"
          >
            <FaInstagram />
          </a>

          <a href="#" className="hover:scale-110 transition">
            <FaTwitter />
          </a>

          <a href="#" className="hover:scale-110 transition">
            <FaYoutube />
          </a>

        </div>

      </div>

    </div>
  );
};

export default Topbar;