import React from "react";
import { motion } from "framer-motion";
import {
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
  FaPaperPlane,
  FaFacebookF,
  FaInstagram,
  FaYoutube,
} from "react-icons/fa";

const contactInfo = [
  {
    title: "Phone Number",
    value: "+91 98765 43210",
    icon: <FaPhoneAlt />,
  },

  {
    title: "Email Address",
    value: "info@cambridgeschool.com",
    icon: <FaEnvelope />,
  },

  {
    title: "School Address",
    value: "Nakodar, Punjab",
    icon: <FaMapMarkerAlt />,
  },
];

const ContactPage = () => {
  return (
    <section className="bg-[#071120] overflow-hidden min-h-screen relative">

      {/* ================= BACKGROUND ================= */}
      <div className="absolute inset-0">

        {/* GRADIENT */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#071120] via-[#0f172a] to-[#071120]"></div>

        {/* GLOW EFFECTS */}
        <div className="absolute top-[-150px] left-[-100px] w-[500px] h-[500px] bg-cyan-500/20 rounded-full blur-3xl"></div>

        <div className="absolute bottom-[-150px] right-[-100px] w-[500px] h-[500px] bg-blue-500/20 rounded-full blur-3xl"></div>

        {/* GRID */}
        <div className="absolute inset-0 opacity-[0.05] bg-[linear-gradient(to_right,#ffffff_1px,transparent_1px),linear-gradient(to_bottom,#ffffff_1px,transparent_1px)] bg-[size:80px_80px]"></div>

      </div>

      {/* ================= MAIN ================= */}
      <div className="max-w-[1800px] mx-auto px-6 py-24 relative z-10">

        {/* TOP HEADING */}
        <motion.div
          initial={{ opacity: 0, y: 70 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center max-w-[1100px] mx-auto mb-24"
        >

          {/* TAG */}
          <div className="inline-flex items-center gap-4 px-8 py-4 rounded-full bg-white/5 border border-white/10 backdrop-blur-2xl mb-10">

            <div className="w-12 h-12 rounded-full bg-gradient-to-br from-cyan-400 to-blue-500 text-white flex items-center justify-center text-xl shadow-[0_0_30px_rgba(0,255,255,0.35)]">

              <FaPaperPlane />

            </div>

            <p className="uppercase tracking-[8px] text-cyan-300 text-sm font-bold">
              Contact Cambridge
            </p>

          </div>

          {/* HEADING */}
          <h1 className="text-6xl md:text-8xl xl:text-[130px] font-black leading-[0.9] text-white">

            Let’s Start
            <br />

            A
            <span className="text-cyan-300">
              {" "}Conversation
            </span>

          </h1>

          {/* LINE */}
          <div className="w-52 h-[8px] bg-gradient-to-r from-cyan-400 via-blue-500 to-cyan-400 rounded-full mx-auto mt-10 mb-10"></div>

          {/* TEXT */}
          <p className="text-[#dbeafe] text-2xl leading-[52px] font-medium">

            Reach out to us for admissions, academic queries
            and school information. Our team is always ready
            to assist and guide you.

          </p>

        </motion.div>

        {/* ================= MAIN GRID ================= */}
        <div className="grid lg:grid-cols-[0.9fr_1.1fr] gap-10 items-start">

          {/* ================= LEFT PANEL ================= */}
          <motion.div
            initial={{ opacity: 0, x: -70 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative"
          >

            {/* MAIN CARD */}
            <div className="relative overflow-hidden rounded-[50px] border border-white/10 bg-white/5 backdrop-blur-2xl p-10 shadow-[0_25px_100px_rgba(0,0,0,0.35)]">

              {/* BG SHAPE */}
              <div className="absolute -top-20 -right-20 w-60 h-60 bg-cyan-400/10 rounded-full blur-3xl"></div>

              {/* HEADING */}
              <div className="relative z-10">

                <p className="uppercase tracking-[7px] text-cyan-300 font-bold mb-4">
                  Contact Information
                </p>

                <h2 className="text-5xl font-black text-white leading-[1.1] mb-12">

                  We’d Love
                  <br />

                  To Hear From You

                </h2>

              </div>

              {/* INFO CARDS */}
              <div className="space-y-8 relative z-10">

                {contactInfo.map((item, index) => (

                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7, delay: index * 0.08 }}
                    viewport={{ once: true }}
                    className="flex items-center gap-6 p-7 rounded-[35px] bg-white/5 border border-white/10 backdrop-blur-xl"
                  >

                    {/* ICON */}
                    <div className="w-24 h-24 rounded-[30px] bg-gradient-to-br from-cyan-400 to-blue-500 text-white flex items-center justify-center text-4xl shadow-[0_0_35px_rgba(0,255,255,0.25)]">

                      {item.icon}

                    </div>

                    {/* CONTENT */}
                    <div>

                      <h3 className="text-2xl font-black text-white mb-2">

                        {item.title}

                      </h3>

                      <p className="text-[#dbeafe] text-lg leading-8">

                        {item.value}

                      </p>

                    </div>

                  </motion.div>

                ))}

              </div>

              {/* SOCIAL */}
              <div className="relative z-10 mt-14">

                <p className="uppercase tracking-[6px] text-cyan-300 font-bold mb-6">
                  Follow Us
                </p>

                <div className="flex gap-5">

                  {[FaFacebookF, FaInstagram, FaYoutube].map(
                    (Icon, index) => (

                      <motion.a
                        key={index}
                        href="/"
                        whileHover={{ y: -8 }}
                        className="w-20 h-20 rounded-[28px] bg-white/5 border border-white/10 text-white flex items-center justify-center text-3xl hover:bg-cyan-400 hover:text-[#071120] transition duration-300"
                      >

                        <Icon />

                      </motion.a>

                    )
                  )}

                </div>

              </div>

            </div>

          </motion.div>

          {/* ================= RIGHT FORM ================= */}
          <motion.div
            initial={{ opacity: 0, x: 70 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative"
          >

            {/* FORM BOX */}
            <div className="relative overflow-hidden rounded-[50px] border border-white/10 bg-white/5 backdrop-blur-2xl p-10 md:p-14 shadow-[0_25px_100px_rgba(0,0,0,0.35)]">

              {/* SHAPE */}
              <div className="absolute -bottom-20 -left-20 w-60 h-60 bg-blue-500/10 rounded-full blur-3xl"></div>

              {/* HEADING */}
              <div className="relative z-10">

                <p className="uppercase tracking-[7px] text-cyan-300 font-bold mb-4">
                  Send Message
                </p>

                <h2 className="text-5xl font-black text-white mb-12">

                  Contact Form

                </h2>

              </div>

              {/* FORM */}
              <form className="relative z-10 space-y-8">

                {/* ROW */}
                <div className="grid md:grid-cols-2 gap-8">

                  <div>

                    <label className="block text-white text-lg font-bold mb-3">
                      Full Name
                    </label>

                    <input
                      type="text"
                      placeholder="Enter your name"
                      className="w-full h-[72px] px-6 rounded-2xl bg-white/5 border border-white/10 text-white placeholder:text-gray-400 outline-none focus:border-cyan-400 transition"
                    />

                  </div>

                  <div>

                    <label className="block text-white text-lg font-bold mb-3">
                      Phone Number
                    </label>

                    <input
                      type="text"
                      placeholder="Enter phone number"
                      className="w-full h-[72px] px-6 rounded-2xl bg-white/5 border border-white/10 text-white placeholder:text-gray-400 outline-none focus:border-cyan-400 transition"
                    />

                  </div>

                </div>

                {/* EMAIL */}
                <div>

                  <label className="block text-white text-lg font-bold mb-3">
                    Email Address
                  </label>

                  <input
                    type="email"
                    placeholder="Enter your email"
                    className="w-full h-[72px] px-6 rounded-2xl bg-white/5 border border-white/10 text-white placeholder:text-gray-400 outline-none focus:border-cyan-400 transition"
                  />

                </div>

                {/* MESSAGE */}
                <div>

                  <label className="block text-white text-lg font-bold mb-3">
                    Your Message
                  </label>

                  <textarea
                    rows="7"
                    placeholder="Write your message..."
                    className="w-full p-6 rounded-2xl bg-white/5 border border-white/10 text-white placeholder:text-gray-400 outline-none focus:border-cyan-400 transition resize-none"
                  ></textarea>

                </div>

                {/* BUTTON */}
                <button
                  type="submit"
                  className="w-full h-[75px] rounded-2xl bg-gradient-to-r from-cyan-400 to-blue-500 text-white text-xl font-black shadow-[0_0_40px_rgba(0,255,255,0.25)] hover:scale-[1.02] transition duration-300"
                >

                  Send Message

                </button>

              </form>

            </div>

          </motion.div>

        </div>

      </div>

    </section>
  );
};

export default ContactPage;