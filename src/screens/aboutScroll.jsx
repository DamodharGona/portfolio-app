import ContactComponent from "@/components/homeScreenComponents/contact";
import Form from "@/components/homeScreenComponents/form";
import MySkillsComponent from "@/components/homeScreenComponents/MySkills/mySkills";
import ShowCard from "@/components/homeScreenComponents/showCard";
import { TEXT_PRIMARY, TEXT_TERTIARY } from "@/constants/colors";
import { showContext } from "@/context/showCardContext";
import React, { useContext, useEffect } from "react";
import { MdKeyboardArrowDown } from "react-icons/md";

function AboutScrollContent() {
  const { show } = useContext(showContext);

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
      <div
        className={`${TEXT_PRIMARY} font-Inter font-medium text-8xl h-194 flex flex-col justify-center items-center`}
      >
        <p>Aspiring</p>
        <p>Developer</p>
        <span className={`${TEXT_PRIMARY} motion-translate-y-loop-25`}>
          <MdKeyboardArrowDown size={50} />
        </span>
      </div>
      <div className="py-20 px-20">
        <div>
          <hr className="h-px my-8 bg-gray-300/30 border-0" />
        </div>
        <div className="flex gap-x-133">
          <p className={`${TEXT_PRIMARY} font-Inter font-medium text-2xl`}>
            About
          </p>
          <div className="flex flex-col gap-y-5">
            <p
              className={`${TEXT_PRIMARY} font-SpaceGrotesk font-normal text-5xl`}
            >
              Fueled by a love for building, driven by a desire to solve.{" "}
            </p>
            <p
              className={`${TEXT_TERTIARY} font-SpaceGrotesk font-normal text-2xl`}
            >
              I’m an aspiring developer whose curiosity for creating things in
              software led me into the world of code. What began as a
              fascination quickly turned into determination — facing bugs, logic
              errors, and self-doubt head-on. I didn’t start with all the
              answers, but I kept pushing, learning, and building, one challenge
              at a time. Each roadblock became a stepping stone, and now,
              whether it’s a mobile app or a web platform, I see every problem
              as a chance to grow and create something meaningful.
            </p>
          </div>
        </div>

        <div>
          <hr className="h-px my-8 bg-gray-300/30 border-0" />
        </div>
        <div className="flex gap-x-133">
          <p className={`${TEXT_PRIMARY} font-Inter font-medium  text-2xl`}>
            Skills
          </p>
          <MySkillsComponent gridColumns="grid-cols-2" />
        </div>
        {show && <ShowCard />}
        <div>
          <hr className="h-px my-8 bg-gray-300/30 border-0" />
        </div>
        <div className="flex gap-x-113">
          <p className={`${TEXT_PRIMARY} font-Inter font-medium text-2xl`}>
            Technologies
          </p>
          <p
            className={`${TEXT_PRIMARY} font-SpaceGrotesk font-normal text-5xl`}
          >
            React.js, Flutter, Java, Node.js
          </p>
        </div>
        <div>
          <hr className="h-px my-8 bg-gray-300/30 border-0" />
        </div>

        <div className="flex gap-x-80">
          <div className="flex flex-col gap-y-4">
            <p className={`${TEXT_PRIMARY} font-Inter font-medium text-2xl`}>
              Contact
            </p>
            <ContactComponent />
          </div>
          <div className="w-[50rem]">
            <Form />
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutScrollContent;
