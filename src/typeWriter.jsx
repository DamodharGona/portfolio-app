import React, { useState } from "react";
import Typewriter from "typewriter-effect";
import { TEXT_PRIMARY } from "./constants/colors";

function Practice() {
  const [isPaused, setIsPaused] = useState(false);
  return (
    <>
      {/* Add the keyframes as a style tag */}
      <style>{`
        @keyframes float {
          0%, 100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-15px);
          }
        }
      `}</style>

      <div className="flex">
        <div
          className={`${TEXT_PRIMARY} font-inter font-extrabold text-7xl flex gap-x-2`}
          style={{
            animation: isPaused ? "float 3s ease-in-out infinite" : "none",
          }}
        >
          <p>Hi I'm</p>
          <Typewriter
            options={{ html: true, loop: true }}
            onInit={(typewriter) => {
              typewriter
                .typeString("Damodhar Reddy Gona")
                .callFunction(() => {
                  console.log("String typed out!");
                  setIsPaused(true);
                })
                .pauseFor(3000)
                .callFunction(() => {
                  setIsPaused(false);
                })
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
