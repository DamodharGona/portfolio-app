import React from "react";
import Typewriter from "typewriter-effect";
import { TEXT_PRIMARY } from "./constants/colors";

function Practice() {
  return (
    <>
      <div
        className={`${TEXT_PRIMARY} flex flex-wrap justify-center font-inter font-extrabold text-3xl md:text-5xl md:flex-row xl:text-7xl xl:flex-row gap-x-2`}
      >
        <Typewriter
          options={{ html: true, loop: true }}
          onInit={(typewriter) => {
            typewriter
              .changeDelay(50)
              .typeString("Damodhar Reddy Gona")
              .pauseFor(3000)
              .deleteAll()
              .start();
          }}
        />
      </div>
    </>
  );
}

export default Practice;
