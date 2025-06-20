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

function HomePage() {
  const { show } = useContext(showContext);

  return (
    <div className="bg-black h-screen overflow-auto">
      <div>
        <div className="flex flex-row gap-x-2 p-3">
          <Button
            className={`${TEXT_SECONDARY} font-SpaceGrotesk font-medium  border-1 border-gray-400/20`}
          >
            Projects
          </Button>
          <Button
            className={`${TEXT_SECONDARY} font-SpaceGrotesk font-medium border-1 border-gray-400/20`}
          >
            About
          </Button>
          <Button
            className={`${TEXT_SECONDARY} font-SpaceGrotesk font-medium border-1 border-gray-400/20`}
          >
            Contact
          </Button>
        </div>
        <div className="flex justify-center mt-10">
          <div className="flex flex-col gap-y-2 p-3 w-fit items-center justify-center h-100">
            <h1
              className={`${TEXT_PRIMARY} font-Inter font-extrabold text-7xl`}
            >
              Hi I<>&apos;</>m Damodhar Reddy
            </h1>
            <p className="text-white">An Aspiring Developer</p>
            <Button
              className={`${TEXT_SECONDARY} font-SpaceGrotesk font-medium border-1 border-gray-400/20`}
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
          <div className="flex gap-x-10">
            <Form />
            <ContactComponent />
          </div>
        </div>
      </div>
      {show && <ShowCard />}
    </div>
  );
}

export default HomePage;
