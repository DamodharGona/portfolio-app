import React, { useEffect, useState } from "react";
import { TEXT_PRIMARY, TEXT_TERTIARY } from "./constants/colors";
import { Outlet, useNavigate } from "react-router-dom";
import { FaRegCopyright } from "react-icons/fa";
import { easeInOut, motion } from "framer-motion";
import Lenis from "lenis";
import { GoArrowUpRight } from "react-icons/go";
import { IoIosLink } from "react-icons/io";

function HomePage() {
  const navigate = useNavigate();
  const [isHover, setIsHover] = useState(false);
  const [isEmail, setIsEmail] = useState(false);
  const [isLinkedIn, setIsLinkedIn] = useState(false);
  const [isHome, setIsHome] = useState(false);
  const [isAbout, setIsAbout] = useState(false);
  const [isProject, setIsProject] = useState(false);

  useEffect(() => {
    const lenis = new Lenis();
    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);
  }, []);

  return (
    <div className="">
      <div className="fixed inset-0 bg-zinc-900 bg-cover">
        <div className="flex flex-col h-full mt-40 gap-y-45">
          <div className="flex  px-10 mb-8">
            <div className="w-30">
              <p className={`${TEXT_TERTIARY} font-Inter font-normal`}>ABOUT</p>
              <div className="flex flex-col mt-3 gap-y-3">
                <div className="flex flex-col">
                  <div className="flex items-center">
                    <p
                      onMouseEnter={() => setIsHome(true)}
                      onMouseLeave={() => setIsHome(false)}
                      onClick={() => navigate("/")}
                      className={`${TEXT_PRIMARY} font-SpaceGrotesk font-normal hover:cursor-pointer`}
                    >
                      Home
                    </p>
                    {isHome && (
                      <motion.span
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ ease: easeInOut, duration: 0.3 }}
                      >
                        <GoArrowUpRight
                          className={`${TEXT_PRIMARY}`}
                          size={20}
                        />
                      </motion.span>
                    )}
                  </div>
                  {isHome && (
                    <motion.hr
                      initial={{ width: 0, opacity: 0 }}
                      animate={{ width: 42, opacity: 1 }}
                      transition={{ ease: easeInOut, duration: 0.3 }}
                      className="h-px bg-gray-300"
                      style={{ originX: 0 }}
                    />
                  )}
                </div>
                <div className="flex flex-col">
                  <div className="flex items-center">
                    <p
                      onMouseEnter={() => setIsAbout(true)}
                      onMouseLeave={() => setIsAbout(false)}
                      onClick={() => navigate("/aboutScreen")}
                      className={`${TEXT_PRIMARY} font-SpaceGrotesk font-normal hover:cursor-pointer`}
                    >
                      About
                    </p>
                    {isAbout && (
                      <motion.span
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ ease: easeInOut, duration: 0.3 }}
                      >
                        <GoArrowUpRight
                          className={`${TEXT_PRIMARY}`}
                          size={20}
                        />
                      </motion.span>
                    )}
                  </div>
                  {isAbout && (
                    <motion.hr
                      initial={{ width: 0, opacity: 0 }}
                      animate={{ width: 47, opacity: 1 }}
                      transition={{ ease: easeInOut, duration: 0.3 }}
                      className="h-px bg-gray-300"
                      style={{ originX: 0 }}
                    />
                  )}
                </div>
                <div className="flex flex-col">
                  <div className="flex items-center">
                    <p
                      onMouseEnter={() => setIsProject(true)}
                      onMouseLeave={() => setIsProject(false)}
                      onClick={() => navigate("/projectScreen")}
                      className={`${TEXT_PRIMARY} font-SpaceGrotesk font-normal hover:cursor-pointer`}
                    >
                      Projects
                    </p>
                    {isProject && (
                      <motion.span
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ ease: easeInOut, duration: 0.3 }}
                      >
                        <GoArrowUpRight
                          className={`${TEXT_PRIMARY}`}
                          size={20}
                        />
                      </motion.span>
                    )}
                  </div>{" "}
                  {isProject && (
                    <motion.hr
                      initial={{ width: 0, opacity: 0 }}
                      animate={{ width: 63, opacity: 1 }}
                      transition={{ ease: easeInOut, duration: 0.3 }}
                      className="h-px bg-gray-300"
                      style={{ originX: 0 }}
                    />
                  )}
                </div>
              </div>
            </div>
            <div className="flex flex-col">
              <p className={`${TEXT_TERTIARY} font-Inter font-normal`}>
                SOCIALS
              </p>
              <div className=" flex flex-col gap-y-3 mt-3">
                <div className="flex flex-col">
                  <div className="flex items-center gap-x-1">
                    <a
                      onMouseEnter={() => setIsEmail(true)}
                      onMouseLeave={() => setIsEmail(false)}
                      href="https://mail.google.com/mail/?view=cm&fs=1&to=gonadamodharreddy999@gmail.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`${TEXT_PRIMARY} font-SpaceGrotesk font-normal  hover:cursor-pointer`}
                    >
                      Email
                    </a>
                    {isEmail && (
                      <motion.span
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ ease: easeInOut, duration: 0.3 }}
                      >
                        <IoIosLink className={`${TEXT_PRIMARY}`} size={20} />
                      </motion.span>
                    )}
                  </div>
                  {isEmail && (
                    <motion.hr
                      initial={{ width: 0, opacity: 0 }}
                      animate={{ width: 40, opacity: 1 }}
                      transition={{ ease: easeInOut, duration: 0.3 }}
                      className="h-px bg-gray-300"
                      style={{ originX: 0 }}
                    />
                  )}
                </div>

                <div className="flex flex-col">
                  <div className="flex items-center gap-x-1">
                    <a
                      onMouseEnter={() => setIsHover(true)}
                      onMouseLeave={() => setIsHover(false)}
                      target="_blank"
                      rel="noopener noreferrer"
                      href="https://github.com/DamodharGona"
                      className={`${TEXT_PRIMARY} font-SpaceGrotesk font-normal  hover:cursor-pointer`}
                    >
                      Github
                    </a>
                    {isHover && (
                      <motion.span
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ ease: easeInOut, duration: 0.3 }}
                      >
                        <IoIosLink className={`${TEXT_PRIMARY}`} size={20} />
                      </motion.span>
                    )}
                  </div>
                  {isHover && (
                    <motion.hr
                      initial={{ width: 0, opacity: 0 }}
                      animate={{ width: 50, opacity: 1 }}
                      transition={{ ease: easeInOut, duration: 0.3 }}
                      className="h-px bg-gray-300"
                      style={{ originX: 0 }}
                    />
                  )}
                </div>

                <div className="flex flex-col w-fit">
                  <div className="flex items-center gap-x-1">
                    <a
                      onMouseEnter={() => setIsLinkedIn(true)}
                      onMouseLeave={() => setIsLinkedIn(false)}
                      target="_blank"
                      rel="noopener noreferrer"
                      href="https://www.linkedin.com/in/damodharreddygona/"
                      className={`${TEXT_PRIMARY} font-SpaceGrotesk font-normal  hover:cursor-pointer`}
                    >
                      LinkedIn
                    </a>
                    {isLinkedIn && (
                      <motion.span
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ ease: easeInOut, duration: 0.3 }}
                      >
                        <IoIosLink className={`${TEXT_PRIMARY}`} size={20} />
                      </motion.span>
                    )}
                  </div>
                  {isLinkedIn && (
                    <motion.hr
                      initial={{ width: 0, opacity: 0 }}
                      animate={{ width: 63, opacity: 1 }}
                      transition={{ ease: easeInOut, duration: 0.3 }}
                      className="h-px bg-gray-300"
                      style={{ originX: 0 }}
                    />
                  )}
                </div>
              </div>
            </div>
          </div>
          <div className="flex items-end px-5 pb-8">
            <p
              className={`${TEXT_PRIMARY} text-[18rem] font-SpaceGrotesk font-medium leading-none`}
            >
              Portfolio
            </p>
            <div
              className={`${TEXT_PRIMARY} flex flex-col gap-y-1 font-SpaceGrotesk font-normal ml-4 mb-8`}
            >
              <div className="flex gap-x-2 items-center">
                <FaRegCopyright /> <p>2025-2026</p>
              </div>
              <p>Damodhar Reddy Gona</p>
            </div>
          </div>
        </div>
      </div>

      {/* Scrollable Content Layer */}
      <div className="relative z-10">
        <div className="mb-176">
          <Outlet />
        </div>
      </div>
    </div>
  );
}

export default HomePage;
