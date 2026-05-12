import React, { useState } from "react";
import { Link } from "react-router-dom";

const NavBar = () => {

  const [open, setOpen] = useState(null);

  const menu = [
    { name: "HOME", path: "/" },

    {
      name: "ABOUT SCHOOL",
      submenu: [
        {
          label: "The School",
          path: "/about",
        },
        {
          label: "Chairperson Message",
          path: "/chairmen",
        },
        {
          label: "Director",
          path: "/director",
        },
        {
          label: "Principal Message",
          path: "/principal-message",
        },
        {
          label: "Faculty",
          path: "/faculty",
        },
        {
          label: "History of School",
          path: "/history",
        },
        {
          label: "School Information",
          path: "/school-information",
        },
        {
          label: "School Management",
          path: "/school-management",
        },
        {
          label: "Vision and Mission",
          path: "/vision-mission",
        },
        {
          label: "Visiting Dignitaries",
          path: "/visiting-dignitaries",
        },
      ],
    },

    {
      name: "ADMISSIONS",
      submenu: [
        {
          label: "Admission",
          path: "/admission-form",
        },
        {
          label: "Age Criteria",
          path: "/age-criteria",
        },
        {
          label: "Fee Structure",
          path: "/fee-structure",
        },
        {
          label: "Procedure",
          path: "/procedure",
        },
        {
          label: "Requirements",
          path: "/requirement",
        },
      ],
    },

    {
      name: "CURRICULUM",
      submenu: [
        {
          label: "Play School & Kindergarden",
          path: "/play-kindergarden",
        },
        {
          label: "Primary School",
          path: "/primary-curriculum",
        },
        {
          label: "Middle School",
          path: "/middle-curriculum",
        },
        {
          label: "High School",
          path: "/high-curriculum",
        },
        {
          label: "Book List",
          path: "/book-list",
        },
      ],
    },

    {
      name: "INFRASTRUCTURE",
      submenu: [
        {
          label: "Classrooms",
          path: "/classrooms",
        },
        {
          label: "Library",
          path: "/library",
        },
        {
          label: "Labs (Physics, Chemistry, ICT)",
          path: "/labs",
        },
        {
          label: "Sports",
          path: "/sports",
        },
        {
          label: "Transportation",
          path: "/transportation",
        },
        {
          label: "Healthcare Centre",
          path: "/healthcare",
        },
        {
          label: "Music & Dance",
          path: "/music",
        },
      ],
    },

    {
      name: "ACTIVITIES",
      submenu: [
        {
          label: "Co-Curricular Activities",
          path: "/co-curricular",
        },
        {
          label: "Education Trips",
          path: "/education-trips",
        },
        {
          label: "Sports",
          path: "/sports",
        },
        {
          label: "Morning Assembly",
          path: "/morning-assembly",
        },
        {
          label: "Value Based Education",
          path: "/value",
        },
      ],
    },

    {
      name: "AWARDS",
      path: "/awards",
    },

    {
      name: "FAQS",
      path: "/faqs",
    },

    {
      name: "CAREER",
      path: "/career",
    },

    {
      name: "CONTACT",
      path: "/contact",
    },

    {
      name: "HELP DESK",
      submenu: [
        {
          label: "Feedback",
          path: "/feedback",
        },
      ],
    },

    {
      name: "STUDENT LIFE",
      submenu: [
        {
          label: "PTM",
          path: "/ptm",
        },
        {
          label: "School Houses",
          path: "/school-houses",
        },
      ],
    },
  ];

  return (

    <div className="sticky top-0 z-[9999]">

      <nav className="w-full bg-white/95 backdrop-blur-xl border-b border-gray-200 shadow-[0_8px_30px_rgba(0,0,0,0.08)]">

        <div className="max-w-7xl mx-auto px-6">

          <ul className="flex justify-between items-center text-[13px] font-semibold text-gray-700 whitespace-nowrap">

            {menu.map((item, index) => (

              <li
                key={index}
                className="relative py-5"
                onMouseEnter={() => setOpen(index)}
                onMouseLeave={() => setOpen(null)}
              >

                {/* ================= MAIN MENU ================= */}
                {item.path ? (

                  <Link
                    to={item.path}
                    className="relative group cursor-pointer transition duration-300 px-1"
                  >

                    <span className="hover:text-[#0b2c4a] transition duration-300">

                      {item.name}

                    </span>

                    {/* UNDERLINE */}
                    <span className="absolute left-0 -bottom-2 w-0 h-[3px] bg-[#0b2c4a] rounded-full transition-all duration-300 group-hover:w-full"></span>

                  </Link>

                ) : (

                  <span className="relative group cursor-pointer px-1">

                    <span className="hover:text-[#0b2c4a] transition duration-300">

                      {item.name}

                    </span>

                    {/* UNDERLINE */}
                    <span className="absolute left-0 -bottom-2 w-0 h-[3px] bg-[#0b2c4a] rounded-full transition-all duration-300 group-hover:w-full"></span>

                  </span>

                )}

                {/* ================= DROPDOWN ================= */}
                {item.submenu && open === index && (

                  <ul className="absolute left-0 top-full mt-0 bg-white shadow-[0_15px_40px_rgba(0,0,0,0.12)] border border-gray-100 rounded-2xl min-w-[280px] py-3 z-[9999] overflow-hidden">

                    {item.submenu.map((sub, i) => (

                      <li key={i}>

                        <Link
                          to={sub.path}
                          className="block px-6 py-4 text-sm text-gray-700 hover:bg-[#edf3fb] hover:text-[#07294d] transition duration-300 whitespace-nowrap"
                        >

                          {sub.label}

                        </Link>

                      </li>

                    ))}

                  </ul>

                )}

              </li>

            ))}

          </ul>

        </div>

      </nav>

    </div>

  );
};

export default NavBar;