import React from "react";
import { TEXT_PRIMARY, TEXT_TERTIARY } from "./constants/colors";
import { Outlet, useNavigate } from "react-router-dom";
import { FaRegCopyright } from "react-icons/fa";

function HomePage() {
  const navigate = useNavigate();
  return (
    <div className="">
      <div className="fixed inset-0 bg-zinc-900 bg-cover">
        <div className="flex flex-col h-full mt-40 gap-y-45">
          <div className="flex gap-x-5 px-10 mb-8">
            <div>
              <p className={`${TEXT_TERTIARY} font-Inter font-normal`}>ABOUT</p>
              <p
                onClick={() => navigate("/")}
                className={`${TEXT_PRIMARY} font-SpaceGrotesk font-normal mt-3 hover:cursor-pointer hover:motion-preset-seesaw-lg`}
              >
                Home
              </p>
              <p
                onClick={() => navigate("/aboutScreen")}
                className={`${TEXT_PRIMARY} font-SpaceGrotesk font-normal mt-2 hover:cursor-pointer hover:motion-preset-seesaw-lg`}
              >
                About
              </p>
              <p
                className={`${TEXT_PRIMARY} font-SpaceGrotesk font-normal mt-2 hover:cursor-pointer hover:motion-preset-seesaw-lg`}
              >
                Projects
              </p>
            </div>
            <div>
              <p className={`${TEXT_TERTIARY} font-Inter font-normal`}>
                SOCIALS
              </p>
              <p
                className={`${TEXT_PRIMARY} font-SpaceGrotesk font-normal mt-3 hover:cursor-pointer hover:motion-preset-seesaw-lg`}
              >
                Github
              </p>
              <p
                className={`${TEXT_PRIMARY} font-SpaceGrotesk font-normal mt-2 hover:cursor-pointer hover:motion-preset-seesaw-lg`}
              >
                LinkedIn
              </p>
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
