import React from "react";
import { GoArrowUpRight } from "react-icons/go";
import { Button } from "../ui/button";
import { TEXT_PRIMARY, TEXT_SECONDARY } from "@/constants/colors";

function AboutComponent() {
  return (
    <div className=" flex flex-col p-3 gap-y-3 ">
      <p className={`${TEXT_PRIMARY} font-Inter font-extrabold text-5xl  mb-2`}>
        About Me
      </p>
      <p className="w-1/2 text-white font-SpaceGrotesk font-normal text-xl">
        I<>&apos;</>m an aspiring developer who loves building applications,
        whether it<>&apos;</>s mobile apps or web apps. I enjoy turning ideas
        into something real and useful through code. I<>&apos;</>m always eager
        to learn new things and take on challenges. Every challenge helps me
        grow and become better at what I do.
      </p>
      <Button
        className={`${TEXT_SECONDARY} font-SpaceGrotesk font-medium border-1 border-gray-400/20 w-fit`}
      >
        {" "}
        View Resume <GoArrowUpRight />
      </Button>
    </div>
  );
}

export default AboutComponent;
