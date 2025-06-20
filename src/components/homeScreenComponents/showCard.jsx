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
      <div className=" flex flex-col bg-zinc-900  rounded-md border border-zinc-800 w-100 relative">
        <div>
          <img src={showDetails.image} className="rounded-t-md  w-full" />
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
