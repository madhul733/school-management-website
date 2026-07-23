import React, { useEffect, useState } from "react";
import schoolLogo from "../assets/PHOTO-2026-03-07-23-51-58.jpg";

export default function PopupModal() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    // CHECK IF PAGE WAS RELOADED
    const navEntries = performance.getEntriesByType("navigation");

    if (navEntries.length > 0 && navEntries[0].type === "reload") {
      const timer = setTimeout(() => {
        setOpen(true);
      }, 500);

      return () => clearTimeout(timer);
    }
  }, []);

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-[99999] flex items-center justify-center px-4">
      {/* BACKDROP */}
      <div
        className="absolute inset-0 z-0 bg-black/70 backdrop-blur-sm"
        onClick={() => setOpen(false)}
      ></div>

      {/* MODAL */}
      <div className="relative z-10 w-full max-w-lg bg-white rounded-2xl shadow-[0_40px_100px_rgba(0,0,0,0.6)] overflow-hidden animate-scaleIn">
        {/* CLOSE */}
        <button
          onClick={() => setOpen(false)}
          className="absolute top-3 right-3 z-20 bg-[#0f172a] text-white w-9 h-9 rounded-full flex items-center justify-center hover:scale-110 transition"
        >
          ✕
        </button>

        {/* TOP SECTION */}
        <div className="text-center px-6 pt-12 pb-8">
          {/* LOGO */}
          <div className="flex justify-center mb-6">
            <div className="relative w-32 h-32">
              {/* GLOW */}
              <div className="absolute inset-0 rounded-full bg-gradient-to-br from-blue-100 to-blue-200 blur-[2px] opacity-60"></div>

              {/* MAIN CIRCLE */}
              <div className="relative w-full h-full rounded-full bg-white shadow-[0_10px_30px_rgba(0,0,0,0.25)] border border-gray-200 flex items-center justify-center">
                {/* INNER RING */}
                <div className="absolute inset-2 rounded-full border border-blue-100"></div>

                {/* IMAGE */}
                <img
                  src={schoolLogo}
                  alt="School Logo"
                  className="w-20 h-20 object-contain drop-shadow-sm"
                />
              </div>
            </div>
          </div>

          {/* TEXT */}
          <h2 className="text-lg font-semibold text-gray-700 tracking-wide">
            Welcome to Cambridge International School
          </h2>

          <p className="text-sm text-gray-500 mt-1">
            Nakodar, Punjab
          </p>
        </div>

        {/* DIVIDER */}
        <div className="w-full h-[1px] bg-gray-200"></div>

        {/* BLUE SECTION */}
        <div className="bg-gradient-to-r from-[#1e3a8a] to-[#2563eb] text-white text-center px-6 py-8">
          <p className="text-sm opacity-90 mb-2 tracking-wide">
            Click here to explore our
          </p>

          <h3 className="text-xl font-bold">
            Academic Excellence & Results
          </h3>

          <p className="text-sm mt-2 opacity-80">
            Session 2025–26
          </p>
        </div>

        {/* BUTTON */}
        <div className="p-6 text-center">
          <button className="px-8 py-3 bg-[#0f172a] text-white rounded-lg shadow-md hover:shadow-xl hover:scale-105 transition-all duration-300">
            VIEW DETAILS
          </button>
        </div>
      </div>
    </div>
  );
}