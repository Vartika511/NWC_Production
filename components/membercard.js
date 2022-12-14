import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";


const cardVarient = {
  initial: {
    opacity: 0,
  },
  animate: {
    opacity: 1,
  },
};
const cardImageVarient = {
  initial: {
    y: 75,
  },
  animate: {
    y: 0,
    transition: {
      duration: 0.65,
      ease: "anticipate",
    },
  },
};
const cardDescChildVarient = {
  initial: {
    opacity: 0,
    y: 130,
  },
  animate: {
    y: 0,
    opacity: 1,
    transition: {
      ease: "anticipate",
      duration: 1.2,
    },
  },
};

export default function MemberCard(props) {
  const { src, name, designation, desc, knowmore,knowmoreSrc } = props;
  return (
    <motion.div
      className="h-84 w-80 m-7 rounded-xl flex flex-col justify-center items-center text-black bg-white border-2 border-black hover:bg-gradient-to-r from-[#141E30] to-[#243B55]  hover:text-white hover:border-white "
      initial="initial"
      whileInView={"animate"}
      variants={cardVarient}
      viewport={{ once: true, amount: 1 }}
      transition={{
        when: "beforeChildren",
        staggerChildren: 0.4,
      }}
    >
      <motion.div
        className="card-image -mt-20 rounded-xl z-10"
        variants={cardImageVarient}
      >
        <Image
          alt="images"
          className="rounded-xl "
          src={src}
          width="250"
          height="250"
        />
      </motion.div>
      <motion.div
        className="card-desc flex flex-col justify-center Description"
        transition={{
          staggerChildren: 0.3,
        }}
      >
        <motion.h1 variants={cardDescChildVarient}>{name}</motion.h1>
        <motion.h2 variants={cardDescChildVarient}>{designation}</motion.h2>
        <motion.h4 variants={cardDescChildVarient}>{desc}</motion.h4>
        <motion.button
          className=" text-xs font-thin mb-6 mt-2 hover:text-base hover:font-extrabold"
          variants={cardDescChildVarient}
        > <Link href={knowmoreSrc}>
              
                 {knowmore}
              
           </Link>
         
        </motion.button>
      </motion.div>
    </motion.div>
  );
}
