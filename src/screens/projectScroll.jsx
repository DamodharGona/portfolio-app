import ProjectComponent from "@/components/homeScreenComponents/Projects/projects";
import { TEXT_PRIMARY } from "@/constants/colors";
import React, { useEffect } from "react";
import { easeInOut, motion } from "framer-motion";

function ProjectScrollContent() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="bg-black">
      <div
        className={`${TEXT_PRIMARY} font-SpaceGrotesk font-extrabold text-xl sticky top-0 px-3 py-5 bg-black/70 backdrop-blur-lg z-50`}
      >
        Damodhar Reddy Gona
      </div>
      <div className="h-100 flex flex-col justify-center items-center text-[min(10vw,6rem)]">
        <div className="flex mb-5 md:mb-10 xl:mb-12">
          <motion.p
            initial={{
              y: 100,
              opacity: 0,
            }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, ease: easeInOut }}
            className={`${TEXT_PRIMARY} font-Inter font-medium`}
          >
            My
          </motion.p>

          <motion.p
            initial={{ y: 100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.1, ease: easeInOut }}
            className={`${TEXT_PRIMARY} font-Inter font-medium`}
          >
            Projects
          </motion.p>
        </div>
        <motion.hr
          initial={{
            y: 100,
            opacity: 0,
          }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.3, ease: easeInOut }}
          className="w-[min(50vw,32rem)] h-px  bg-gray-300/30 border-0"
        />
      </div>

      <div className="mt-20 py-18 px-5 md:px-8 xl:px-10">
        <ProjectComponent />
      </div>
    </div>
  );
}

export default ProjectScrollContent;
