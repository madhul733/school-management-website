import React from "react";
import {
  FaFacebookF,
  FaInstagram,
  FaYoutube,
  FaPhoneAlt,
  FaMapMarkerAlt,
  FaArrowRight,
  FaGraduationCap,
} from "react-icons/fa";

import { MdEmail } from "react-icons/md";
import { motion } from "framer-motion";


export default function Footer(){

const links=[
"About School",
"Academics",
"Admissions",
"Faculty",
"School Facilities",
"Contact Us"
];


return(

<footer className="bg-[#071d36] text-white">


<div className="max-w-7xl mx-auto px-6 py-14">


{/* HEADER */}

<div className="
flex
flex-col
md:flex-row
items-center
justify-between
pb-8
border-b
border-white/10
gap-6
">


<div className="flex items-center gap-4">


<div className="
w-16 h-16
rounded-full
border-2
border-[#d4af37]
flex
items-center
justify-center
text-[#d4af37]
text-3xl
">

<FaGraduationCap/>

</div>


<div>

<h2 className="
text-2xl
md:text-3xl
font-bold
tracking-wide
">

Cambridge International School

</h2>


<div className="
w-20
h-[2px]
bg-[#d4af37]
my-2
"></div>


<p className="text-gray-400 text-sm">

Nurturing Excellence • Building Future Leaders

</p>


</div>


</div>



<div className="text-center md:text-right">


<p className="text-[#d4af37] font-semibold">

Affiliated & Trusted Education

</p>


<p className="text-gray-400 text-sm">

Quality Learning Environment

</p>


</div>



</div>





{/* MAIN */}


<div className="
grid
md:grid-cols-3
gap-12
py-10
">



{/* SCHOOL */}


<div>


<h3 className="
text-lg
font-bold
text-[#d4af37]
mb-5
">

Our School

</h3>


<p className="
text-gray-300
text-sm
leading-7
">

Cambridge International School focuses on
academic excellence, values, creativity and
overall development of every student.

</p>



<div className="flex gap-3 mt-6">


{
[
<FaFacebookF/>,
<FaInstagram/>,
<FaYoutube/>
].map((icon,i)=>(

<motion.div

key={i}

whileHover={{scale:1.1}}

className="
w-10
h-10
rounded-full
bg-white/10
flex
items-center
justify-center
hover:bg-[#d4af37]
hover:text-[#071d36]
transition
cursor-pointer
"

>

{icon}

</motion.div>


))
}


</div>


</div>







{/* LINKS */}



<div>


<h3 className="
text-lg
font-bold
text-[#d4af37]
mb-5
">

Quick Links

</h3>


<div className="space-y-3">


{
links.map((item,i)=>(


<div

key={i}

className="
flex
gap-3
items-center
text-gray-300
text-sm
hover:text-[#d4af37]
transition
cursor-pointer
"

>

<FaArrowRight className="text-xs"/>

{item}

</div>


))
}


</div>


</div>








{/* CONTACT */}


<div>


<h3 className="
text-lg
font-bold
text-[#d4af37]
mb-5
">

Get In Touch

</h3>



<div className="space-y-5 text-sm text-gray-300">



<div className="flex gap-4 items-center">

<FaPhoneAlt className="text-[#d4af37]"/>

+91 97813 00975

</div>



<div className="flex gap-4 items-center">

<MdEmail className="text-[#d4af37]"/>

cisnakodar@gmail.com

</div>



<div className="flex gap-4">

<FaMapMarkerAlt className="text-[#d4af37] mt-1"/>

<p>

Nakodar, Punjab
<br/>
India

</p>

</div>



</div>



</div>



</div>




{/* BOTTOM */}


<div className="
border-t
border-white/10
pt-6
text-center
text-sm
text-gray-400
">


© 2026 
<span className="text-[#d4af37] font-semibold">
 Cambridge International School
</span>

&nbsp; | &nbsp;

Designed for Excellence


</div>



</div>


</footer>

)

}