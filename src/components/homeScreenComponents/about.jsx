import React from "react";
import { GoArrowUpRight } from "react-icons/go";
import { Button } from "../ui/button";
import { TEXT_PRIMARY, TEXT_SECONDARY } from "@/constants/colors";
import { easeInOut, motion } from "framer-motion";

function AboutComponent() {
  const boxVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0 },
  };
  return (
    <div className=" flex flex-col gap-y-3 ">
      <motion.p
        variants={boxVariants}
        initial="hidden"
        whileInView="visible"
        transition={{ ease: easeInOut, duration: 0.6 }}
        viewport={{ once: true, amount: 0.3 }}
        className={`${TEXT_PRIMARY} font-Inter font-extrabold text-5xl  mb-2`}
      >
        About Me
      </motion.p>
      <motion.p
        variants={boxVariants}
        initial="hidden"
        whileInView="visible"
        transition={{ ease: easeInOut, duration: 0.6, delay: 0.1 }}
        viewport={{ once: true, amount: 0.3 }}
        className="w-1/2 text-gray-300/60 font-SpaceGrotesk font-normal text-xl"
      >
        I'm an aspiring developer who loves building applications, whether it's
        mobile apps or web apps. I enjoy turning ideas into something real and
        useful through code. I'm always eager to learn new things and take on
        challenges. Every challenge helps me grow and become better at what I
        do.
      </motion.p>
      <motion.a
        variants={boxVariants}
        initial="hidden"
        whileInView="visible"
        transition={{ ease: easeInOut, duration: 0.6, delay: 0.13 }}
        viewport={{ once: true, amount: 0.3 }}
        href="/Deedy_CV.pdf"
        target="_blank"
        rel="noopener noreferrer"
      >
        <Button
          className={`${TEXT_SECONDARY} font-SpaceGrotesk font-medium border-1 border-gray-400/20 w-fit`}
        >
          {" "}
          View Resume <GoArrowUpRight />
        </Button>
      </motion.a>
    </div>
  );
}

export default AboutComponent;
