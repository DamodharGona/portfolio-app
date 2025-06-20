import React from "react";
import { Button } from "../ui/button";
import { TEXT_PRIMARY, TEXT_SECONDARY } from "@/constants/colors";

function Form() {
  const handleOnSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <div className="flex flex-col w-3/4">
      <form onSubmit={handleOnSubmit} className="flex flex-col">
        <label className={`${TEXT_PRIMARY} font-SpaceGrotesk font-medium mb-1`}>
          Name
        </label>
        <input
          placeholder="Damodhar"
          className={`${TEXT_SECONDARY} font-SpaceGrotesk font-normal bg-gray-300/10 border border-gray-400/20 p-2 rounded-md mb-3`}
        />

        <label className={`${TEXT_PRIMARY} font-SpaceGrotesk font-medium mb-1`}>
          Email
        </label>
        <input
          placeholder="example@gmail.com"
          className={`${TEXT_SECONDARY} font-SpaceGrotesk font-normal bg-gray-300/10 border border-gray-400/20 p-2 rounded-md mb-3`}
        />
        <label className={`${TEXT_PRIMARY} font-SpaceGrotesk font-medium mb-1`}>
          Message
        </label>
        <textarea
          placeholder="Hi this is Damodar from example. Just wanted to say hi!"
          className={`${TEXT_SECONDARY} font-SpaceGrotesk font-normal border bg-gray-300/10 border-gray-400/20 rounded-md p-2 mb-3`}
        />
        <Button className="bg-white text-black font-SpaceGrotesk font-medium">
          Submit
        </Button>
      </form>
    </div>
  );
}

export default Form;
