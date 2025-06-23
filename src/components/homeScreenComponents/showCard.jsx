import { showContext, showDetailsContext } from "@/context/showCardContext";
import React, { useContext } from "react";
import { TEXT_TERTIARY } from "@/constants/colors";

function ShowCard() {
  const { setShow } = useContext(showContext);
  const { showDetails } = useContext(showDetailsContext);
  const handleCloseCard = () => {
    setShow(false);
  };
  return (
    <div className="bg-black/10 z-50 backdrop-blur-xs  flex h-screen fixed inset-0 items-center justify-center ">
      <div className=" flex flex-col bg-zinc-900  rounded-md border border-zinc-800 w-1/2 relative">
        <div className="flex rounded-tl-md rounded-tr-md">
          {showDetails.technologies.map((technology, index) => {
            return (
              <div key={index} className="flex-1 border-r border-zinc-900">
                <img className="h-full" src={technology.image} />
              </div>
            );
          })}
        </div>
        <div className="flex flex-col p-5">
          <p className={`${TEXT_TERTIARY} font-SpaceGrotesk font-normal`}>
            {showDetails.description}
          </p>
        </div>
        <button
          onClick={handleCloseCard}
          className="text-amber-600 text-3xl absolute top-2 right-4 hover: cursor-pointer "
        >
          x
        </button>
      </div>
    </div>
  );
}

export default ShowCard;
