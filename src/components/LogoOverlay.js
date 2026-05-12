import React from "react";
import imgsrc from "../assets/PHOTO-2026-03-07-23-51-58.jpg";

const LogoBar = () => {
  return (
    <div className="w-full bg-white border-b border-gray-200">

      <div className="max-w-7xl mx-auto px-6">

        {/* REMOVE EXTRA SPACE */}
        <div className="-mt-8 py-1 inline-block">

          <img
            src={imgsrc}
            alt="logo"
            className="h-16 w-auto object-contain rounded-md"
          />

        </div>

      </div>

    </div>
  );
};

export default LogoBar;