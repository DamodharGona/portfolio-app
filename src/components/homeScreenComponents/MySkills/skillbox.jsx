import { TEXT_PRIMARY, TEXT_TERTIARY } from "@/constants/colors";
import { showContext, showDetailsContext } from "@/context/showCardContext";
import React, { useContext } from "react";
import { HiMiniViewfinderCircle } from "react-icons/hi2";
import { easeInOut, motion } from "framer-motion";
function SkillBox({ image, technologies, about, title, description }) {
  const { setShow } = useContext(showContext);
  const { setShowDetails } = useContext(showDetailsContext);
  const handleOnclick = () => {
    setShow(true);
    const detail = { description: description, technologies: technologies };
    setShowDetails(detail);
  };
  const boxVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0 },
  };
  return (
    <div className="border border-zinc-800 p-4 flex flex-col bg-gray-300/10 rounded-md justify-between">
      <div className="mb-3">
        <div className="flex justify-end mt-3 mb-5 mr-3">
          <HiMiniViewfinderCircle
            onClick={handleOnclick}
            className={`text-white hover:cursor-pointer`}
            size={30}
          />
        </div>
        <img
          src={image}
          className="border border-zinc-800 rounded-md mb-2"
          style={{ width: "50px", height: "50px" }}
        />

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
          className={`${TEXT_TERTIARY} font-SpaceGrotesk font-normal`}
        >
          {about}
        </motion.p>
      </div>
      <div className="flex gap-x-3">
        {technologies.map((technology, index) => {
          return (
            <motion.div
              variants={boxVariants}
              initial="hidden"
              whileInView="visible"
              transition={{ ease: easeInOut, duration: 0.6, delay: 0.4 }}
              viewport={{ once: true, amount: 0.3 }}
              key={index}
              className="flex gap-x-1"
            >
              <span className={`${technology.iconColor}`}>
                {technology.Icon}
              </span>
              <p className={`${TEXT_PRIMARY} text-sm`}>{technology.name}</p>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}

export default SkillBox;
