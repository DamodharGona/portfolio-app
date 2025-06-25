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
      <div className="h-100 flex flex-col justify-center items-center">
        <div className="flex">
          <motion.p
            initial={{
              y: 100,
              opacity: 0,
            }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, ease: easeInOut }}
            className={`${TEXT_PRIMARY} font-Inter font-medium text-8xl`}
          >
            My
          </motion.p>

          <motion.p
            initial={{ y: 100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.1, ease: easeInOut }}
            className={`${TEXT_PRIMARY} font-Inter font-medium text-8xl`}
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
          className="w-130 h-px mt-20 bg-gray-300/30 border-0"
        />
      </div>

      <div className="mt-20 py-18 px-10">
        <ProjectComponent />
      </div>
    </div>
  );
}

export default ProjectScrollContent;
