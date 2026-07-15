import React from "react";
import { motion } from "framer-motion";
import {
  FaCheckCircle,
  FaArrowRight,
} from "react-icons/fa";

import nurtureBg from "../assets/uploads/bg.jpg";

const features = [
  "Qualified, Experienced & Caring Teachers",
  "Smart Classrooms with Digital Boards",
  "Fully Air Conditioned Campus",
  "Activity Based Learning Environment",
  "Well Equipped Language Laboratory",
  "Indoor & Outdoor Sports Facilities",
  "Swimming Pool Training",
  "Safe & Secure Transport Facility",
  "Sibling Fee Concession",
  "Admissions Open",
];


const NurturingTalents = () => {
  return (
    <section
      className="relative bg-cover bg-center overflow-hidden"
      style={{
        backgroundImage:`url(${nurtureBg})`
      }}
    >

      <div className="absolute inset-0 bg-[#021427]/80"></div>


      <div className="absolute -top-32 -left-32 w-[350px] h-[350px] rounded-full bg-[#d4af37]/10 blur-[120px]"></div>

      <div className="absolute -bottom-32 -right-32 w-[350px] h-[350px] rounded-full bg-[#d4af37]/10 blur-[120px]"></div>



      <div className="relative z-10 max-w-[1250px] mx-auto px-5 py-16">


        <div className="grid lg:grid-cols-2 gap-12 items-center">


          {/* LEFT */}

          <motion.div
            initial={{opacity:0,x:-50}}
            whileInView={{opacity:1,x:0}}
            transition={{duration:.7}}
            viewport={{once:true}}
          >

            <span className="uppercase tracking-[5px] text-[#d4af37] text-sm font-bold">
              Nurturing Talents
            </span>


            <h2 className="text-white font-black leading-tight text-4xl md:text-6xl mt-4">

              Inspiring
              <br/>

              Young Minds

              <span className="block text-[#d4af37]">
                For Tomorrow
              </span>

            </h2>


            <p className="text-white/75 text-base md:text-lg leading-8 mt-6 max-w-lg">

              Cambridge International School provides a caring environment
              where students explore their creativity, skills and confidence
              through quality education.

            </p>



            <div className="flex flex-wrap gap-4 mt-8">


              <button className="px-6 py-3 rounded-full bg-[#d4af37] text-[#07294d] font-bold flex items-center gap-2 hover:scale-105 transition">

                Explore Campus
                <FaArrowRight/>

              </button>



              <button className="px-6 py-3 rounded-full border border-white text-white hover:bg-white hover:text-[#07294d] transition">

                Apply Now

              </button>


            </div>


          </motion.div>





          {/* RIGHT */}


          <motion.div
            initial={{opacity:0,x:50}}
            whileInView={{opacity:1,x:0}}
            transition={{duration:.7}}
            viewport={{once:true}}
          >

            <div className="rounded-[28px] bg-white/10 backdrop-blur-xl border border-white/20 p-6 md:p-8 shadow-xl">


              <h3 className="text-2xl font-bold text-white mb-6">
                Our Key Highlights
              </h3>



              <div className="grid sm:grid-cols-2 gap-4">


                {features.map((item,index)=>(

                  <motion.div
                    key={index}
                    initial={{opacity:0,y:15}}
                    whileInView={{opacity:1,y:0}}
                    transition={{
                      delay:index*.05
                    }}
                    viewport={{once:true}}
                    className="flex items-center gap-3 bg-white/5 rounded-xl p-3 hover:bg-white/10 transition group"
                  >


                    <div className="min-w-[34px] h-[34px] rounded-full bg-[#d4af37] flex items-center justify-center text-[#07294d]">

                      <FaCheckCircle size={15}/>

                    </div>


                    <p className="text-white text-sm leading-5 group-hover:text-[#d4af37] transition">

                      {item}

                    </p>


                  </motion.div>


                ))}


              </div>



            </div>


          </motion.div>



        </div>


      </div>


    </section>
  );
};


export default NurturingTalents;