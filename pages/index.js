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

export default function Home() {
  return (
    <div className=" text-white bg-black w-fit h-fit  lg:w-full">
      <Head>
        <title>NWC</title>
        <meta name="description" content="NWC department " />
        <link rel="icon" href="/nwc.png" />
      </Head>
      <Header textColor={"white"} />
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
          <div className="font-extrabold flex flex-col items-start md:items-center md:w-full  mb-5">
            <motion.h1
              className="font-extrabold text-[150px] md:text-[175px] lg:text-[95px] mb-5 "
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
            >
              NWC
            </motion.h1>

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

          <div className="flex justify-center lg:mt-10  border-8  lg:hidden">
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

      <Footer />
    </div>
  );
}
