import React from "react";
import Typewriter from "typewriter-effect";
import { TEXT_PRIMARY } from "./constants/colors";

function Practice() {
  return (
    <>
      <div className="flex">
        <div
          className={`${TEXT_PRIMARY} font-inter font-extrabold text-7xl flex gap-x-2`}
        >
          <p>Hi I'm</p>
          <Typewriter
            options={{ html: true, loop: true }}
            onInit={(typewriter) => {
              typewriter
                .changeDelay(50)
                .typeString("Damodhar Reddy Gona")
                .callFunction(() => {
                  console.log("String typed out!");
                })
                .pauseFor(3000)
                .deleteAll()
                .callFunction(() => {
                  console.log("All strings were deleted");
                })
                .start();
            }}
          />
        </div>
      </div>
    </>
  );
}

export default Practice;
