import { TEXT_PRIMARY, TEXT_TERTIARY } from "@/constants/colors";
import React from "react";
import { easeInOut, motion } from "framer-motion";

function ProjectBox({ title, description, image, tags }) {
  const boxVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0 },
  };
  return (
    <div className="border border-gray-400/20 flex flex-col  bg-gray-300/10 w-fit rounded-md gap-y-3">
      <div>
        <img src={image} className="w-full  rounded-t-md" />
      </div>
      <div className="p-5">
        <motion.p
          variants={boxVariants}
          initial="hidden"
          whileInView="visible"
          transition={{ ease: easeInOut, duration: 0.6 }}
          viewport={{ once: true, amount: 0.3 }}
          className={`${TEXT_PRIMARY} font-Inter font-bold text-2xl mb-1`}
        >
          {title}
        </motion.p>
        <motion.p
          variants={boxVariants}
          initial="hidden"
          whileInView="visible"
          transition={{ ease: easeInOut, duration: 0.6, delay: 0.2 }}
          viewport={{ once: true, amount: 0.3 }}
          className={`${TEXT_TERTIARY} font-SpaceGrotesk font-normal mb-3`}
        >
          {description}
        </motion.p>
        <div className="flex gap-x-2">
          {tags.map((tag, index) => {
            return (
              <motion.button
                variants={boxVariants}
                initial="hidden"
                whileInView="visible"
                transition={{ ease: easeInOut, duration: 0.6, delay: 0.4 }}
                viewport={{ once: true, amount: 0.3 }}
                key={index}
                className="bg-white text-black w-fit rounded-2xl border px-2 text-sm"
              >
                {tag}
              </motion.button>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default ProjectBox;
