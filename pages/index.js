import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import Footer from "../components/footer";
import Header from "../components/header";
import { animate, motion } from "framer-motion";


import home from "../public/home.png";

const heroImageVarient = {
  initial: {
    x: "-100vw",
    opacity: 0,
  },
  animate: {
    x: 0,
    opacity: 1,
    transition: {
      ease: "anticipate",
      delay: 0.9,
      type: "spring",
      stiffness: 120,
      duration: 1.3,
    },
  },
};
const heroDescContainerChildComponents = {
  initial: {
    y: -100,
    opacity: 0,
  },
  animate: {
    y: 0,
    opacity: 1,
    transition: {
      ease: "anticipate",
      duration: 1,
    },
  },
};
export default function Home() {
  return (
    <div className=" text-white bg-black w-fit h-fit  lg:w-full">
      <Head>
        <title>NWC</title>
        <meta name="description" content="NWC department " />
        <link rel="icon" href="/nwc.png" />
      </Head>
      <Header textColor={"white"} />
      {/* <section>
      <div className="  flex  px-auto   h-max  ">
        <motion.div
          className="hero-image hidden lg:block  mx-auto   my-auto"
          variants={heroImageVarient}
          initial="initial"
          animate="animate"
        >
          <Image alt="homegif" src={home} width={1024} height={1024} />
        </motion.div>
        <div className="hero-desc-container ">
          <div className="font-extrabold lora flex flex-col items-start md:items-center lg:items-start md:w-full  mb-5">
            <motion.h1
              className="font-extrabold font-lora text-[150px] md:text-[175px] lg:text-[95px] mb-5 "
              initial={{
                color: "white",
              }}
              whileInView={{
                color: [
                  "#ffffff",
                  "#ffffff",
                  "#007CF0",
                  "#00b5f8",
                  "#00cce9",
                  "#00DFD8",
                  "#ffffff",
                  "#ffffff",
                  "#ffffff",
                  "#ffffff",
                  "#ffffff",
                  "#ffffff",
                  "#ffffff",
                  "#ffffff",
                  "#ffffff",
                  "#ffffff",
                  "#ffffff",
                  "#ffffff",
                ],
              }}
              transition={{
                repeat: Infinity,
                duration: 9,
                ease: "linear",
              }}
            > NWC </motion.h1>

            <motion.h1
              className="font-extrabold text-[175px]  lg:text-[95px] mb-5   "
              initial={{
                color: "white",
              }}
              animate={{
                color: [
                  "#ffffff",
                  "#ffffff",
                  "#ffffff",
                  "#ffffff",
                  "#ffffff",
                  "#ffffff",
                  "#ffffff",
                  "#7928CA",
                  "#ac06ba",
                  "#d000a8",
                  "#eb0094",
                  "#FF0080",
                  "#ffffff",
                  "#ffffff",
                  "#ffffff",
                  "#ffffff",
                  "#ffffff",
                  "#ffffff",
                ],
              }}
              transition={{
                repeat: Infinity,
                duration: 9,
                ease: "linear",
              }}
            >
              Association
            </motion.h1>
            <motion.h1
              className="font-extrabold text-[150px] md:text-[175px] lg:text-[95px] mb-5 text-transparent "
              initial={{
                color: "white",
              }}
              animate={{
                color: [
                  "#ffffff",
                  "#ffffff",
                  "#ffffff",
                  "#ffffff",
                  "#ffffff",
                  "#ffffff",
                  "#ffffff",
                  "#ffffff",
                  "#ffffff",
                  "#ffffff",
                  "#ffffff",
                  "#ffffff",
                  "#FF4D4D",
                  "#ff6e3d",
                  "#ff8e2d",
                  "#ffad23",
                  "#F9CB28",
                  "#ffffff",
                ],
              }}
              transition={{
                repeat: Infinity,
                duration: 9,
                ease: "linear",
              }}
            >
              SRM KTR
            </motion.h1>
          </div>
          <h5 className="font-extrabold text-4xl xs:text-5xl lg:mb-5">
            The official student association of the Department of NWC, SRM IST
            KTR.
          </h5>

          <div className="flex justify-center lg:mt-10    lg:hidden">
            <Image alt="homegif" src={home} width={1024} height={1024} />
          </div>
          <div className="flex justify-center py-20 lg:justify-start  w-full ">
            <Link href="/notice">
              <button className="bg-[#010D51] border-4 border-black font-bold mx-auto  text-xl mt-1 rounded-3xl w-56 h-24">
                Join Now!
              </button>
            </Link>
          </div>
        </div>
      </div>
      </section> */}
      <div className="  flex py-2 px-36 h-fit xl:py-24 ">
        <motion.div
          className="hero-image hidden lg:block"
          variants={heroImageVarient}
          initial="initial"
          animate="animate"
        >
          <Image alt="homegif" src="/home.png" width={1024} height={1024} />
        </motion.div>
        <motion.div
          className="hero-desc-container py-40 lg:py-24 flex flex-col w-screen  items-start"
          initial="initial"
          animate="animate"
          transition={{
            staggerChildren: 0.7,
          }}
        >
          <motion.h1
            className="font-extrabold text-7xl mb-5"
            variants={heroDescContainerChildComponents}
          >
            <div className="text-transparent bg-clip-text bg-gradient-to-r from-[#7928CA] to-[#FF0080]">NWC</div> 
            <div className="">ASSOCIATION </div>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#007CF0] to-[#00DFD8]">SRM KTR</span>
          </motion.h1>
          <motion.h5
            className="font-extrabold text-xl  lg:mb-5"
            variants={heroDescContainerChildComponents}
          >
            The official student association of the Department of NWC, SRM IST
            KTR.
          </motion.h5>

          <motion.div
            className=" lg:mt-10 mx-auto lg:hidden"
            variants={heroDescContainerChildComponents}
          >
            <Image alt="homegif" src="/home.png" width={720} height={720} />
          </motion.div>
          
          <motion.div
            className="flex justify-center  lg:justify-start  w-full "
            variants={heroDescContainerChildComponents}
          >
           {/*  <Link href="/notice"> */}
              {/* <button className=" bg-[#010D51] border-4 border-black font-bold mx-auto  text-xl mt-1 rounded-3xl w-44 h-12">
                Join Now!
              </button> */}
              
              <div class="grid gap-8 items-start justify-center mt-10 xl:mt-0">
    <div class="relative group">
      <div class="absolute -inset-0.5 bg-gradient-to-r from-pink-600 to-purple-600 rounded-lg blur opacity-75 group-hover:opacity-100 transition duration-1000 group-hover:duration-200 animate-tilt"></div>
      <button class="relative px-7 py-4 bg-black rounded-lg leading-none flex items-center divide-x divide-gray-600">

        <Link href="/notice" >
              Join Now &rarr;
              </Link>
        
      </button>
    </div>
              </div>
              
            
          </motion.div>
        </motion.div>
      </div>
      <section>
      <div class="bg-[#414345] min-h-screen text-white">
  <h1 class="text-6xl font-semibold text-center pt-16">Our Unbeatable Features</h1>
  <p class="text-2xl text-center text-gray-300 pb-16">Take a look, and fall in love with our product</p>
  <div class="grid grid-cols-1 sm:grid-cols-2 gap-x-16 gap-y-24 p-8">
    <div class="flex flex-col items-center">
      <div class="p-4 bg-yellow-200 rounded-full">
        <svg class="w-24 text-yellow-600 animate-pulse" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
          

        </svg>
      </div>
      <h3 class="font-semibold text-3xl mt-4 text-center">Innovation at NWC</h3>
      <p class="text-gray-300 text-xl text-center">We can bet on it</p>
    </div>
    <div class="flex flex-col items-center">
      <div class="p-4 bg-blue-200 rounded-full">
        <svg class="w-24 text-blue-600 animate-spin-slow" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
      </div>
      <h3 class="font-semibold text-3xl mt-4 text-center">Great Infrastructure of NWC department</h3>
    </div>
    <div class="flex flex-col items-center">
      <div class="p-4 bg-green-200 rounded-full">
        <svg class="w-24 text-green-600 animate-wiggle" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11 5.882V19.24a1.76 1.76 0 01-3.417.592l-2.147-6.15M18 13a3 3 0 100-6M5.436 13.683A4.001 4.001 0 017 6h1.832c4.1 0 7.625-1.234 9.168-3v14c-1.543-1.766-5.067-3-9.168-3H7a3.988 3.988 0 01-1.564-.317z" />
        </svg>
      </div>
      <h3 class="font-semibold text-3xl mt-4 text-center">Regular announcement of events</h3>
      <p class="text-gray-300 text-xl text-center">We will keep you updated</p>
    </div>
    <div class="flex flex-col items-center">
      <div class="p-4 bg-pink-200 rounded-full">
        <svg class="w-24 text-pink-600 animate-beat" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
          <path fill-rule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clip-rule="evenodd" />
        </svg>
      </div>
      <h3 class="font-semibold text-3xl mt-4 text-center">Students Will love it</h3>
      <p class="text-gray-300 text-xl text-center">And we can guarantee that!</p>
    </div>
  </div>
</div>


      </section>
      <Footer />
    </div>
  );
}
