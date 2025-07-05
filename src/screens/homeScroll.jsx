import React, { useContext, useEffect } from "react";
import AboutComponent from "@/components/homeScreenComponents/about";
import MySkillsComponent from "@/components/homeScreenComponents/MySkills/mySkills";
import ProjectComponent from "@/components/homeScreenComponents/Projects/projects";
import {
  TEXT_PRIMARY,
  TEXT_SECONDARY,
  TEXT_TERTIARY,
} from "@/constants/colors";
import Form from "@/components/homeScreenComponents/contact/form";
import ContactComponent from "@/components/homeScreenComponents/contact/contact";
import { showContext } from "@/context/showCardContext";
import ShowCard from "@/components/homeScreenComponents/showCard";
import Practice from "@/typeWriter";
import { easeOut, motion } from "framer-motion";

function HomeScrollContent() {
  const { show } = useContext(showContext);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className=" bg-black">
      <div>
        <div
          className={`${TEXT_PRIMARY} font-SpaceGrotesk font-extrabold text-xl sticky top-0 px-3 py-5 bg-black/70 backdrop-blur-lg z-50`}
        >
          Damodhar Reddy Gona
        </div>
        <div className="flex justify-center h-194 items-center">
          <div className="flex flex-col items-center justify-center mb-24">
            <div className="flex flex-col md:flex-row md:gap-x-2 items-center">
              <p
                className={`${TEXT_PRIMARY} font-inter font-extrabold text-3xl md:text-5xl xl:text-7xl`}
              >
                Hi I'm
              </p>
              <div className="w-fit">
                <Practice />
              </div>
            </div>

            <motion.div
              initial={{
                y: 50,
                opacity: 0,
              }}
              transition={{
                duration: 1,
                delay: 1.5,
                ease: easeOut,
              }}
              animate={{
                y: 0,
                opacity: 1,
              }}
              className={`${TEXT_SECONDARY} text-sm md:text-[16px]`}
            >
              An Aspiring Developer who loves coding
            </motion.div>
          </div>
        </div>
        <div className="mt-50 px-5">
          <AboutComponent />
        </div>
        <div className="mt-80 flex flex-col px-5">
          <div className="flex flex-col mb-10">
            <p
              className={`${TEXT_PRIMARY} font-Inter font-extrabold text-white text-3xl md:text-5xl  xl:text-5xl`}
            >
              My
            </p>
            <p
              className={`${TEXT_PRIMARY} font-Inter font-extrabold text-white text-3xl md:text-5xl  xl:text-5xl`}
            >
              Skills
            </p>
          </div>
          <MySkillsComponent gridColumns="md:grid-cols-3" />
        </div>
        <div className="mt-80 px-5">
          <div className="flex flex-col mb-10">
            <p
              className={`${TEXT_PRIMARY} font-Inter font-extrabold text-3xl md:text-5xl  xl:text-5xl`}
            >
              My
            </p>
            <p
              className={`${TEXT_PRIMARY} font-Inter font-extrabold text-3xl md:text-5xl  xl:text-5xl`}
            >
              Projects
            </p>
          </div>

          <ProjectComponent />
        </div>
        <div className="flex flex-col px-5 mt-80 py-3">
          <div className="flex flex-col gap-x-1 w-fit mb-6 md:w-1/2 ">
            <p
              className={`${TEXT_PRIMARY} font-Inter font-extrabold text-3xl md:text-5xl  xl:text-5xl`}
            >
              Contact Me
            </p>
            <p className={`${TEXT_TERTIARY} font-SpaceGrotesk font-normal`}>
              Have a question or want to work together? Send me message using
              this form
            </p>
          </div>
          <div className="flex flex-col gap-y-4 w-full md:flex-row md:gap-x-10 xl:flex-row xl:gap-x-10 mb-15">
            <div className="w-3/4">
              <Form />
            </div>
            <ContactComponent />
          </div>
        </div>
      </div>
      {show && <ShowCard />}
    </div>
  );
}

export default HomeScrollContent;
