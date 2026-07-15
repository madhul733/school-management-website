import React from "react";
import {
  FaBullseye,
  FaLightbulb,
  FaCheckCircle,
} from "react-icons/fa";

import { motion } from "framer-motion";


export default function VisionMission() {


const cards = [
{
title:"VISION",
icon:<FaBullseye/>,
text:
`We are committed in creating the future leaders of our country`,

points:[
{
title:"Leadership",
desc:"We envision today's children as tomorrow's leadership icons."
},
{
title:"MI-aided methodology",
desc:"The mi-aided methodology helps children to discover their own creative and aesthetic potential."
}
]

},


{
title:"MISSION",
icon:<FaLightbulb/>,
text:
`We believe that human rights of a child are non-negotiable.`,

points:[
{
title:"Interactive Illume",
desc:"The pedagogy, Interactive Illume, is specifically developed and designed to help children realize their exceptional capabilities in a methodical, synergetic, and self-paced manner."
},
{
title:"Cambridge Teachers",
desc:"Our training mechanism is designed to arm teachers with practical and effective techniques which are best suited for kids."
}
]

}

];




return (

<section className="
relative
py-20
bg-gradient-to-b
from-white
to-[#f4f7fb]
overflow-hidden
">


{/* Glow */}

<div className="
absolute
top-0
left-0
w-[350px]
h-[350px]
bg-[#d4af37]/10
blur-3xl
rounded-full
">
</div>


<div className="
max-w-[1250px]
mx-auto
px-6
relative
z-10
">



{/* Heading */}

<div className="text-center mb-14">


<p className="
uppercase
tracking-[7px]
text-[#d4af37]
font-bold
text-sm
">

Cambridge International School

</p>



<h2 className="
text-4xl
md:text-6xl
font-black
text-[#07294d]
mt-4
">

Vision 
<span className="text-[#d4af37]">
&
</span>
 Mission

</h2>


</div>






{/* Cards */}


<div className="
grid
lg:grid-cols-2
gap-8
">



{
cards.map((item,index)=>(


<motion.div

key={index}

initial={{
opacity:0,
y:50
}}

whileInView={{
opacity:1,
y:0
}}

transition={{
duration:.6,
delay:index*.15
}}

viewport={{
once:true
}}

whileHover={{
y:-8
}}

className="
relative
bg-white
rounded-[30px]
p-8
shadow-xl
border
border-gray-100
overflow-hidden
"

>


{/* GOLD LINE */}

<div className="
absolute
top-0
left-0
w-full
h-1
bg-[#d4af37]
">
</div>



<div className="flex items-center gap-5 mb-6">


<div className="
w-16
h-16
rounded-2xl
bg-[#07294d]
text-[#d4af37]
flex
items-center
justify-center
text-3xl
">

{item.icon}

</div>



<h3 className="
text-3xl
font-black
text-[#07294d]
">

{item.title}

</h3>


</div>




<p className="
text-gray-600
leading-7
mb-6
">

{item.text}

</p>




<div className="space-y-5">


{
item.points.map((point,i)=>(


<div key={i}>


<div className="
flex
items-center
gap-3
font-bold
text-[#07294d]
mb-2
">

<FaCheckCircle className="text-[#d4af37]"/>

{point.title}

</div>



<p className="
text-gray-600
text-sm
leading-6
pl-7
">

{point.desc}

</p>


</div>


))
}


</div>



</motion.div>


))
}


</div>


</div>


</section>

)

}