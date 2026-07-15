import React from "react";
import { motion } from "framer-motion";
import {
  FaCheckCircle,
} from "react-icons/fa";


import heroImg from "../assets/uploads/school.jpg";
import schoolImg from "../assets/uploads/cis-38.jpeg";




export default function AboutUs(){


const menuItems = [
  {
    title: "The School",
    path: "/about",
  },
  {
    title: "Chairperson Message",
    path: "/chairmen",
  },
  {
    title: "Director",
    path: "/director",
  },
  {
    title: "Principal Message",
    path: "/principal-message",
  },
  {
    title: "Faculty",
    path: "/faculty",
  },
  {
    title: "History of School",
    path: "/history",
  },
  {
    title: "School Information",
    path: "/school-information",
  },
  {
    title: "School Management",
    path: "/school-management",
  },
  {
    title: "Vision and Mission",
    path: "/vision-mission",
  },
  {
    title: "Visiting Dignitaries",
    path: "/visiting-dignitaries",
  },
];




const programs=[
"Foster a keen interest among the students for learning and in striving for the phenomenal level of achievement.",

"Help our students acquire the knowledge and life skills relevant for the dynamically changing world.",

"Instil in our students highest standards of behaviour and sensitivity to good human values.",

"Maintain frequent and open relation with parents thus working in union for the better future of our students.",

"Offer a wide spectrum of activities and opportunities to promote excellence, confidence and exposure among our students."
];



return(

<div className="
w-full
bg-[#f4f7fb]
overflow-hidden
text-gray-800
">



{/* ================= HERO ================= */}


<section className="
relative
h-[560px]
overflow-hidden
">


<motion.img

initial={{scale:1.15}}

animate={{scale:1}}

transition={{duration:2}}

src={heroImg}

alt="school"

className="
w-full
h-full
object-cover
"

/>



<div className="
absolute
inset-0
bg-gradient-to-r
from-[#031426]/95
via-[#07294d]/80
to-[#07294d]/40
">
</div>



<div className="
absolute
top-0
left-0
w-[500px]
h-[500px]
bg-[#d4af37]/20
blur-[120px]
rounded-full
">
</div>





<motion.div

initial={{opacity:0,y:50}}

animate={{opacity:1,y:0}}

transition={{duration:1}}

className="
absolute
inset-0
flex
items-center
justify-end
px-8
md:px-24
"

>


<div className="text-right">


<p className="
uppercase
tracking-[8px]
text-[#facc15]
font-semibold
mb-4
">

Welcome To

</p>



<h1 className="
text-white
text-6xl
md:text-8xl
font-black
">

About Us

</h1>



<div className="
flex
justify-end
items-center
gap-3
mt-6
">


<div className="
w-24
h-[4px]
bg-[#facc15]
rounded-full
">
</div>


<p className="
text-white/80
text-sm
">

Home / About Us

</p>


</div>


</div>



</motion.div>



</section>
{/* ================= MAIN SECTION ================= */}


<section
className="
max-w-[1400px]
mx-auto
px-6
py-20
grid
lg:grid-cols-[330px_minmax(0,1fr)]
gap-12
items-start
"
>





{/* ================= SIDEBAR ================= */}


<motion.div

initial={{
opacity:0,
x:-50
}}

whileInView={{
opacity:1,
x:0
}}

transition={{
duration:.7
}}

viewport={{
once:true
}}

className="
bg-[#07294d]
rounded-[35px]
overflow-hidden
shadow-[0_25px_60px_rgba(0,0,0,.18)]
sticky
top-8
"

>


<div className="
h-2
bg-gradient-to-r
from-[#facc15]
to-[#d4af37]
">
</div>




<div className="p-8">


<h2 className="
text-white
text-3xl
font-black
mb-8
">

ABOUT US

</h2>



<div className="space-y-3">


{
menuItems.map((item,index)=>(


<motion.button

key={index}

whileHover={{
x:8
}}

transition={{
duration:.25
}}

className={`
w-full
flex
items-center
gap-4
px-5
py-4
rounded-2xl
text-left
transition-all
duration-300

${
index===0

?

"bg-white text-[#07294d] shadow-lg"

:

"text-white/90 hover:bg-white/10"
}

`}

>


<span className={`
text-xl

${
index===0
?
"text-[#d4af37]"
:
"text-[#facc15]"
}

`}>

{item.icon}

</span>



<span className="
text-[15px]
font-medium
">

{item.title}

</span>


</motion.button>


))
}



</div>


</div>


</motion.div>







{/* ================= RIGHT CONTENT ================= */}



<motion.div

initial={{
opacity:0,
x:50
}}

whileInView={{
opacity:1,
x:0
}}

transition={{
duration:.8
}}

viewport={{
once:true
}}

className="
bg-white
rounded-[45px]
p-8
md:p-14
shadow-[0_20px_60px_rgba(0,0,0,.08)]
relative
overflow-hidden
"

>



<div className="
absolute
right-0
top-0
w-80
h-80
bg-[#facc15]/10
rounded-full
blur-3xl
">
</div>





{/* TITLE */}


<div className="
relative
z-10
mb-10
">


<p className="
text-[#d4af37]
uppercase
tracking-[6px]
font-bold
text-sm
">

Excellence In Education

</p>



<h2 className="
text-5xl
md:text-6xl
font-black
text-[#07294d]
mt-3
">

The Genesis

</h2>



<div className="
w-24
h-1
bg-[#d4af37]
rounded-full
mt-5
">
</div>


</div>








{/* ================= STATS ================= */}


<div className="
grid
grid-cols-2
md:grid-cols-4
gap-4
mb-12
relative
z-10
">


{
[
["15+","Years Excellence"],
["CBSE","Affiliated"],
["Nursery","To XII"],
["100%","Holistic Growth"]
]
.map((item,index)=>(


<div

key={index}

className="
bg-[#f4f7fb]
rounded-2xl
p-5
text-center
border
border-gray-100
"


>


<h3 className="
text-2xl
font-black
text-[#07294d]
">

{item[0]}

</h3>


<p className="
text-sm
text-gray-500
mt-1
">

{item[1]}

</p>


</div>


))
}



</div>







{/* ================= IMAGES ================= */}



<div className="
grid
md:grid-cols-2
gap-7
mb-12
relative
z-10
">


<motion.div

whileHover={{
scale:1.03
}}

className="
rounded-[30px]
overflow-hidden
bg-[#f3f6fa]
shadow-lg
"

>


<img

src={heroImg}

alt="school"

className="
w-full
h-[330px]
object-contain
"

/>


</motion.div>




<motion.div

whileHover={{
scale:1.03
}}

className="
rounded-[30px]
overflow-hidden
shadow-lg
"

>


<img

src={schoolImg}

alt="campus"

className="
w-full
h-[330px]
object-cover
"

/>


</motion.div>



</div>

{/* ================= GENESIS CONTENT ================= */}


<div
className="
relative
z-10
space-y-7
text-[17px]
md:text-[18px]
leading-[38px]
text-[#374151]
"
>


<p>

Cambridge International School, Nakodar affiliated to CBSE, New Delhi
with English as its medium of instruction is a premier institution of the
peaceful and prosperous Doaba region of Punjab. The school is committed
to provide value-oriented quality education of global standards that
unfolds the unique potential of the child and we use the multi-dimensional
child-centric approach, which is both interactive and pragmatic.

</p>




<p>

Our students have the courage and zeal to think 'out of the box',
transform their bodies, hearts and souls to become global citizens,
moving continuously onwards in their pursuit of excellence.

The educators constantly guide and motivate the students to make optimum
use of the infrastructure and hone their 21st century skills to perfection.

</p>




<p>

The school is a premium, purpose-built and offers world class standards
from Nursery to Grade XII.

</p>




<p>

It is not only about quality of learning and teaching but also about
creating a warm, enthusiastic and exciting environment in which young
people can learn to succeed.

</p>





{/* ================= PROGRAM BOX ================= */}



<motion.div

whileHover={{
scale:1.01
}}

transition={{
duration:.3
}}

className="
mt-10
bg-gradient-to-br
from-[#f8fafc]
to-[#eef4fb]
border-l-8
border-[#d4af37]
rounded-[30px]
p-8
md:p-10
shadow-lg
"

>



<h3
className="
text-3xl
font-black
text-[#07294d]
mb-7
"
>

Our Educational Programmes Are Designed To:

</h3>




<div className="space-y-5">


{
programs.map((item,index)=>(


<motion.div

key={index}

initial={{
opacity:0,
x:-20
}}

whileInView={{
opacity:1,
x:0
}}

transition={{
delay:index*.1
}}

viewport={{
once:true
}}

className="
flex
gap-4
items-start
"

>


<div
className="
min-w-[34px]
h-[34px]
rounded-full
bg-[#07294d]
text-[#facc15]
flex
items-center
justify-center
shadow-md
"
>

<FaCheckCircle />

</div>




<p className="
text-gray-600
leading-7
">

{item}

</p>



</motion.div>


))
}



</div>


</motion.div>




</div>






</motion.div>


</section>

{/* ================= LOCATION ================= */}

<section className="max-w-[1400px] mx-auto px-6 pb-20">

  <motion.div
    initial={{ opacity: 0, y: 50 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.7 }}
    viewport={{ once: true }}
    className="bg-white rounded-[40px] overflow-hidden shadow-[0_20px_60px_rgba(0,0,0,.08)]"
  >

    {/* Heading */}
    <div className="bg-[#07294d] px-10 py-8 flex flex-col md:flex-row md:items-center md:justify-between">

      <div>

        <p className="uppercase tracking-[6px] text-[#facc15] text-sm font-semibold">
          Reach Us
        </p>

        <h2 className="text-4xl font-black text-white mt-2">
          Visit Our Campus
        </h2>

      </div>

      <div className="mt-6 md:mt-0 text-white/80 text-right">

        <p className="font-medium">
          Cambridge International School
        </p>

        <p className="text-sm">
          Nakodar, Punjab, India
        </p>

      </div>

    </div>

    {/* Map */}
    <div className="h-[420px]">

      <iframe
        title="Cambridge International School Location"
        src="https://maps.google.com/maps?q=Cambridge%20International%20School%20Nakodar&t=&z=15&ie=UTF8&iwloc=&output=embed"
        width="100%"
        height="100%"
        style={{ border: 0 }}
        loading="lazy"
        allowFullScreen
      />

    </div>

  </motion.div>

</section>






</div>

);

}