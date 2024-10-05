import React from "react";
import { FlipWords } from "./flip-words";

export function FlipWordsDemo() {
  const words = ["better", "cute", "beautiful", "modern"];

  return (
    <div className="h-[50rem] flex justify-center items-center px-4 max-500:ml-[10%]">
      <div className="text-6xl mx-auto font-normal text-neutral-400 max-500:text-5xl ">
        Build
        <FlipWords words={words} /> <br />
        websites with Caliber Tech 
      </div>
    </div>
  );
}
