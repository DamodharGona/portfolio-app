import {
  TEXT_PRIMARY,
  TEXT_SECONDARY,
  TEXT_TERTIARY,
} from "@/constants/colors";
import { showContext, showDetailsContext } from "@/context/showCardContext";
import React, { useContext } from "react";
import { HiMiniViewfinderCircle } from "react-icons/hi2";

function SkillBox({
  image,
  technologies,
  about,
  title,
  subtitle,
  description,
}) {
  const { setShow } = useContext(showContext);
  const { setShowDetails } = useContext(showDetailsContext);
  const handleOnclick = () => {
    setShow(true);
    const detail = { description: description, technologies: technologies };
    setShowDetails(detail);
  };
  return (
    <div className="border border-zinc-800 p-4 flex flex-col bg-gray-300/10 rounded-md justify-between">
      <div className="mb-3">
        <div className="flex justify-end mt-3 mb-5 mr-3">
          <HiMiniViewfinderCircle
            onClick={handleOnclick}
            className={`text-white hover:cursor-pointer`}
            size={30}
          />
        </div>
        <img
          src={image}
          className="border border-zinc-800 rounded-md mb-2"
          style={{ width: "50px", height: "50px" }}
        />

        <p className={`${TEXT_PRIMARY} font-Inter font-bold text-2xl mb-1`}>
          {title}
        </p>

        <p className={`${TEXT_SECONDARY} font-SpaceGrotesk font-semibold mb-2`}>
          {subtitle}
        </p>
        <p className={`${TEXT_TERTIARY} font-SpaceGrotesk font-normal`}>
          {about}
        </p>
      </div>
      <div className="flex gap-x-3">
        {technologies.map((technology, index) => {
          return (
            <div key={index} className="flex gap-x-1">
              <span className={`${technology.iconColor}`}>
                {technology.Icon}
              </span>
              <p className={`${TEXT_PRIMARY} text-sm`}>{technology.name}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default SkillBox;
