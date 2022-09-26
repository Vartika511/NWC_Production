import Head from "next/head";
import Image from "next/image";
import Footer from "../components/footer";
import Header from "../components/header";


import MemberCard from "../components/membercard";
import { animate, motion } from "framer-motion";
import amrit from "../public/amrit.png";
import arvindg from "../public/arvindg.png";
import safamaam from "../public/safamaam.jpeg";
import vision from "../public/vision.png"
import mission from "../public/mission.png"


export default function Aboutus() {
  return (
    <div className="bg-white h-fit w-screen lg:h-fit ">
      <Head>
        <title>About NWC</title>
        <meta name="description" content="About NWC Club " />
        <link rel="icon" href="/nwc.png" />
      </Head>
    <Header textColor={"black"}/>  
      <div className=" flex flex-col  justify-evenly items-center w-full h-fit sm:h-screen lg:h-full    ">
        <div className="aboutus flex flex-col items-center lg:w-full px-10 text-black">
          <h1 className="text-6xl w-fit text-left pb-10 font-extrabold bg-gradient-to-r text-transparent bg-clip-text from-[#FF0066] to-[#6600FF] "> 
          About Us</h1>
          <p className="text-2xl md:text-4xl font-bold  ">
          NWC is a student association formed exclusively for the 
        Specializations in Information Technology,Internet of Things,Computer Networking, Cybersecurity, and Cloud Computing 
          of the Computer Science Engineering branch under the umbrella of ‘School of Computing ’.
          </p>
        
        </div>

        {/* vision and mission cards */}
        <div className="visionMission flex flex-wrap justify-evenly   w-full md:h-fit ">
          <div className="vision my-10 mx-auto md:mx-0 md:my-0 md:mb-5 lg:my-8 border-2 border-black rounded-xl  flex  justify-center items-center  h-80 w-96 lg:w-80  ">
             <div className="vision-image flex items-center ">
              <Image src={vision} width="200" height="200" />
              </div>
              <div className="vision-desc   w-48">
                  <p className="text-left ">
                   Magna eu mollit voluptate nulla reprehenderit nostrud. Minim voluptate eu est duis excepteur occaecat nisi esse fugiat. Ipsum sunt aliqua voluptate do veniam dolore culpa in nulla tempor ad.
                  </p>
              </div>
          </div>
          <div className="mission mb-5 mx-auto md:mx-0 border-2 lg:my-8 border-black rounded-xl  flex  justify-center items-center  h-80 w-96 lg:w-80  ">
             <div className="mission-image flex items-center ">
              <Image src={mission} width="200" height="200" />
              </div>
              <div className="vision-desc   w-48">
                  <p className="text-left ">
                   Magna eu mollit voluptate nulla reprehenderit nostrud. Minim voluptate eu est duis excepteur occaecat nisi esse fugiat. Ipsum sunt aliqua voluptate do veniam dolore culpa in nulla tempor ad.
                  </p>
              </div>
          </div>
        
        </div>
      
        
      </div>
      <div className="faculty-members bg-black border-8 border-black  h-fit w-fit sm:w-full ">

        <motion.h1
          className="font-bold mb-20 text-center text-9xl bg-gradient-to-r text-transparent bg-clip-text from-[#3494E6] to-[#EC6EAD]"
          initial={{
            opacity: 0,
          }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, amount: 1 }}
          transition={{
            ease: "anticipate",
            duration: 1,
          }}
        >
          Our Team
        </motion.h1>
        <motion.h1
          className="font-bold mb-20 text-left text-white pl-20 text-5xl"
          initial={{
            opacity: 0,
          }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, amount: 1 }}
          transition={{
            ease: "anticipate",
            duration: 1,
          }}
        >
          Faculty Members
        </motion.h1>
        <div className="flex flex-col justify-around ">
          {/* Faculty members */}
          <div className="mt-10 md:my-10    w-full flex justify-around flex-wrap">
            <div className="member mb-10 lg:mb-0 ">

            <MemberCard
              src={safamaam}
              name={"Ms. M. Safa"}
              designation={"President"}
              desc={"Assistant Professor NWC SRM IST"}
              knowmore={"Know more"}
              knowmoreSrc={"https://www.linkedin.com/in/safa-m-32417122b"}
            />
            </div>
            <div className="member mb-10 lg:mb-0">

            <MemberCard
              src={safamaam}
              name={"Ms. M. Safa"}
              designation={"President"}
              desc={"Assistant Professor NWC SRM IST"}
              knowmore={"Know more"}
              knowmoreSrc={"https://www.linkedin.com/in/safa-m-32417122b"}
            />
            </div>
            <MemberCard
              src={safamaam}
              name={"Ms. M. Safa"}
              designation={"President"}
              desc={"Assistant Professor NWC SRM IST"}
              knowmore={"Know more"}
              knowmoreSrc={"https://www.linkedin.com/in/safa-m-32417122b"}
            />
          </div>
          </div>

      </div>
        <div className="board-members mx-auto w-screen bg-white text-black">
          <motion.h1
          className="font-bold mb-20 text-left w-fit bg-white text-black pl-20  text-5xl"
          initial={{
            opacity: 0,
          }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, amount: 1 }}
          transition={{
            ease: "anticipate",
            duration: 1,
          }}
        >
          Board Members
        </motion.h1>
          <div className="flex  w-fit md:w-full justify-around flex-wrap items-center ">
         
            <div className="my-10 w-fit md:w-min">
              <MemberCard
                src={arvindg}
                name={"Mr. Aravind G"}
                designation={"Vice-President"}
                desc={"CSE 4th year SRM IST"}
                knowmore={"Know more"}
                knowmoreSrc={"https://www.linkedin.com/in/safa-m-32417122b"}
              />
            </div>
            <div className="lg:my-10 w-fit md:w-min">
              <MemberCard
                src={amrit}
                name={"Mr. Armit Anand"}
                designation={"Joint-Secretary"}
                desc={"CSE 3rd year SRM IST"}
                knowmore={"Know more"}
                knowmoreSrc={"https://www.linkedin.com/in/anandamrit174"}
              />
            </div>
          </div>
        </div>
      <Footer/>
   
    </div>
  );
}
