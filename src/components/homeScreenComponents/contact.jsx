import { TEXT_PRIMARY, TEXT_TERTIARY } from "@/constants/colors";
import React from "react";
import { FaGithub } from "react-icons/fa";
import { IoLogoLinkedin } from "react-icons/io";

function ContactComponent() {
  return (
    <div className="flex flex-col">
      <p className={`${TEXT_TERTIARY} font-SpaceGrotesk font-light`}>Email</p>
      <p className={`${TEXT_PRIMARY} font-SpaceGrotesk font-normal`}>
        gonadamodharreddy999@gmail.com
      </p>
      <p className={`${TEXT_TERTIARY} font-SpaceGrotesk font-light mt-4 mb-2`}>
        Socials
      </p>
      <div className="flex flex-col gap-y-1">
        <div className="flex flex-row gap-x-2 items-center">
          <FaGithub color="white" />
          <p className={`${TEXT_PRIMARY} font-SpaceGrotesk font-normal`}>
            Github
          </p>
        </div>
        <div className="flex gap-x-2 items-center">
          <IoLogoLinkedin color="white" />
          <p className={`${TEXT_PRIMARY} font-SpaceGrotesk font-normal`}>
            LinkedIn
          </p>
        </div>
      </div>
    </div>
  );
}

export default ContactComponent;
