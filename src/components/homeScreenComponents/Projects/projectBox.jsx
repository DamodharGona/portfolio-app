import { TEXT_PRIMARY, TEXT_SECONDARY } from "@/constants/colors";
import React from "react";

function ProjectBox({ title, description, image, tags }) {
  return (
    <div className="border border-gray-400/20 flex flex-col  bg-gray-300/10 w-fit rounded-md gap-y-3">
      <div>
        <img
          src={image}
          className="w-full  rounded-t-md"
          // style={{ height: "400px" }}
        />
      </div>
      <div className="p-5">
        <p className={`${TEXT_PRIMARY} font-Inter font-bold text-2xl mb-1`}>
          {title}
        </p>
        <p className={`${TEXT_SECONDARY} font-SpaceGrotesk font-normal mb-3`}>
          {description}
        </p>
        <div className="flex gap-x-2">
          {tags.map((tag, index) => {
            return (
              <button
                key={index}
                className="bg-white text-black w-fit rounded-2xl border px-2 text-sm"
              >
                {tag}
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default ProjectBox;
