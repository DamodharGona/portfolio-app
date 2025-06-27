import { TEXT_PRIMARY, TEXT_TERTIARY } from "@/constants/colors";
import React from "react";
import { FaGithub } from "react-icons/fa";
import { IoLogoLinkedin } from "react-icons/io";

function ContactComponent() {
  return (
    <div className="flex flex-col w-fit">
      <p className={`${TEXT_TERTIARY} font-SpaceGrotesk font-light`}>Email</p>
      <a
        href="https://mail.google.com/mail/?view=cm&fs=1&to=gonadamodharreddy999@gmail.com"
        target="_blank"
        rel="noopener noreferrer"
        className={`${TEXT_PRIMARY} font-SpaceGrotesk font-normal text-wrap break-all w-full block`}
      >
        gonadamodharreddy999@gmail.com
      </a>
      <p className={`${TEXT_TERTIARY} font-SpaceGrotesk font-light mt-4 mb-2`}>
        Socials
      </p>
      <div className="flex flex-col gap-y-1">
        <div className="flex flex-row gap-x-2 items-center">
          <FaGithub color="white" />
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://github.com/DamodharGona"
            className={`${TEXT_PRIMARY} font-SpaceGrotesk font-normal`}
          >
            Github
          </a>
        </div>
        <div className="flex gap-x-2 items-center">
          <IoLogoLinkedin color="white" />
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://www.linkedin.com/in/damodharreddygona/"
            className={`${TEXT_PRIMARY} font-SpaceGrotesk font-normal`}
          >
            LinkedIn
          </a>
        </div>
      </div>
    </div>
  );
}

export default ContactComponent;
