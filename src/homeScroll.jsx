import { Button } from "@/components/ui/button";
import React, { useContext } from "react";
import AboutComponent from "./components/homeScreenComponents/about";
import MySkillsComponent from "./components/homeScreenComponents/MySkills/mySkills";
import ProjectComponent from "./components/homeScreenComponents/Projects/projects";
import {
  TEXT_PRIMARY,
  TEXT_SECONDARY,
  TEXT_TERTIARY,
} from "./constants/colors";
import Form from "./components/homeScreenComponents/form";
import ContactComponent from "./components/homeScreenComponents/contact";
import { showContext } from "./context/showCardContext";
import ShowCard from "./components/homeScreenComponents/showCard";
import Practice from "./typeWriter";

function HomeScrollContent() {
  const { show } = useContext(showContext);

  return (
    <div className=" bg-black">
      <div>
        <div
          className={`${TEXT_PRIMARY} font-SpaceGrotesk font-extrabold text-xl sticky top-0 px-3 py-5 bg-black/70 backdrop-blur-lg z-50`}
        >
          Damodhar Reddy Gona
        </div>
        <div className="flex justify-center h-194 items-center">
          <div className="flex flex-col p-3 w-fit items-center justify-center h-100">
            <div>
              <Practice />
            </div>
            <p
              className={`${TEXT_SECONDARY} motion-preset-fade motion-duration-3000`}
            >
              An Aspiring Developer
            </p>
            x
            <Button
              className={`${TEXT_SECONDARY} font-SpaceGrotesk font-medium border-1 border-gray-400/20 motion-opacity-in-0 motion-translate-y-in-100 motion-blur-in-md`}
            >
              View Projects
            </Button>
          </div>
        </div>
        <div className="mt-80">
          <AboutComponent />
        </div>
        <div className="mt-80 flex">
          <MySkillsComponent />
        </div>
        <div className="mt-80">
          <ProjectComponent />
        </div>
        <div className="flex flex-col p-3 mt-80">
          <div className="flex flex-col gap-x-1 mb-6">
            <p className={`${TEXT_PRIMARY} font-Inter font-extrabold text-5xl`}>
              Contact Me
            </p>
            <p className={`${TEXT_TERTIARY} font-SpaceGrotesk font-normal`}>
              Have a question or want to work together? Send me message using
              this form
            </p>
          </div>
          <div className="flex gap-x-10 mb-15">
            <Form />
            <ContactComponent />
          </div>
        </div>
      </div>
      {show && <ShowCard />}
    </div>
  );
}

export default HomeScrollContent;
