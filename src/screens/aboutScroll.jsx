import ContactComponent from "@/components/homeScreenComponents/contact";
import Form from "@/components/homeScreenComponents/form";
import MySkillsComponent from "@/components/homeScreenComponents/MySkills/mySkills";
import ShowCard from "@/components/homeScreenComponents/showCard";
import { TEXT_PRIMARY, TEXT_TERTIARY } from "@/constants/colors";
import { showContext } from "@/context/showCardContext";
import React, { useContext, useEffect } from "react";
import { MdKeyboardArrowDown } from "react-icons/md";
import { easeInOut, motion, useAnimation } from "framer-motion";

function AboutScrollContent() {
  const { show } = useContext(showContext);
  const controls = useAnimation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const boxVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0 },
  };
  return (
    <div className="bg-black">
      <div
        className={`${TEXT_PRIMARY} font-SpaceGrotesk font-extrabold text-xl sticky top-0 px-3 py-5 bg-black/70 backdrop-blur-lg z-50`}
      >
        Damodhar Reddy Gona
      </div>
      <div
        className={`${TEXT_PRIMARY} font-Inter font-medium text-8xl h-194 flex flex-col justify-center items-center text-[min(10vw,6rem)]`}
      >
        <motion.p
          variants={boxVariants}
          initial="hidden"
          whileInView="visible"
          transition={{ ease: easeInOut, duration: 0.6 }}
          viewport={{ once: true, amount: 0.3 }}
        >
          Aspiring
        </motion.p>
        <motion.p
          variants={boxVariants}
          initial="hidden"
          whileInView="visible"
          transition={{ ease: easeInOut, duration: 0.6, delay: 0.1 }}
          viewport={{ once: true, amount: 0.3 }}
        >
          Developer
        </motion.p>
        <motion.span
          variants={boxVariants}
          initial="hidden"
          animate={controls} // attach it here
          whileInView="visible"
          transition={{ ease: easeInOut, duration: 0.6, delay: 0.3 }}
          onAnimationComplete={() => {
            controls.start({ y: [0, 20, 0] }); // example animation
          }}
          viewport={{ once: true, amount: 0.3 }}
          className={`${TEXT_PRIMARY}`}
        >
          <MdKeyboardArrowDown size={50} />
        </motion.span>
      </div>
      <div className="py-20 px-5 md:px-10 xl:px-20">
        <div>
          <hr className="h-px my-2 md:my-6 xl:my-8 bg-gray-300/30 border-0" />
        </div>
        <div className="flex flex-col gap-y-3 py-5 md:flex-row md:gap-x-50 xl:flex-row xl:gap-x-130 md:py-5 xl:py-5">
          <p
            className={`${TEXT_PRIMARY} font-Inter font-medium text-2xl sm:mb-5`}
          >
            About
          </p>
          <div className="flex flex-col gap-y-5">
            <motion.p
              variants={boxVariants}
              initial="hidden"
              whileInView="visible"
              transition={{ ease: easeInOut, duration: 0.6 }}
              viewport={{ once: true, amount: 0.3 }}
              className={`${TEXT_PRIMARY} font-SpaceGrotesk text-xl md:font-normal md:text-5xl. xl:font-normal xl:text-5xl `}
            >
              Fueled by a love for building, driven by a desire to solve.{" "}
            </motion.p>
            <motion.p
              variants={boxVariants}
              initial="hidden"
              whileInView="visible"
              transition={{ ease: easeInOut, duration: 0.6, delay: 0.2 }}
              viewport={{ once: true, amount: 0.3 }}
              className={`${TEXT_TERTIARY} font-SpaceGrotesk md:font-normal md:text-2xl xl:font-normal xl:text-2xl`}
            >
              I’m an aspiring developer whose curiosity for creating things in
              software led me into the world of code. What began as a
              fascination quickly turned into determination — facing bugs, logic
              errors, and self-doubt head-on. I didn’t start with all the
              answers, but I kept pushing, learning, and building, one challenge
              at a time. Each roadblock became a stepping stone, and now,
              whether it’s a mobile app or a web platform, I see every problem
              as a chance to grow and create something meaningful.
            </motion.p>
          </div>
        </div>

        <div>
          <hr className="h-px my-2 md:my-6 xl:my-8 bg-gray-300/30 border-0" />
        </div>
        <div className="flex flex-col gap-y-3  py-5 md:flex-row md:gap-x-50 xl:flex-row xl:gap-x-133 md:py-5 xl:py-5">
          <p
            className={`${TEXT_PRIMARY} font-Inter font-medium  text-2xl sm:mb-5`}
          >
            Skills
          </p>
          <MySkillsComponent gridColumns="grid-cols-2" />
        </div>
        {show && <ShowCard />}
        <div>
          <hr className="h-px my-2 md:my-6 xl:my-8 bg-gray-300/30 border-0" />
        </div>
        <div className="flex flex-col gap-y-3 py-5 md:flex-row md:gap-x-28 xl:flex-row xl:gap-x-111 md:py-5 xl:py-5">
          <p
            className={`${TEXT_PRIMARY} font-Inter font-medium text-2xl sm:mb-5`}
          >
            Technologies
          </p>
          <motion.p
            variants={boxVariants}
            initial="hidden"
            whileInView="visible"
            transition={{ ease: easeInOut, duration: 0.6 }}
            viewport={{ once: true, amount: 0.4 }}
            className={`${TEXT_PRIMARY} font-SpaceGrotesk text-xl md:font-normal md:text-5xl xl:font-normal xl:text-5xl`}
          >
            React.js, Flutter, Java, Node.js
          </motion.p>
        </div>
        <div>
          <hr className="h-px my-2 md:my-6 xl:my-8 bg-gray-300/30 border-0" />
        </div>

        <div className="flex flex-col gap-y-3 py-5 md:flex-row md:gap-x-18 md:py-5 xl:flex-row xl:gap-x-78 xl:py-5">
          <div className="flex flex-col gap-y-4">
            <p
              className={`${TEXT_PRIMARY} font-Inter font-medium text-2xl sm:mb-5`}
            >
              Contact
            </p>
            <div className="md:w-50 xl:w-72">
              <ContactComponent />
            </div>
          </div>
          <div className="max-w-full md:w-[50rem] xl:max-w-full">
            <Form />
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutScrollContent;
