import React from "react";
import { BackgroundLines } from "./BackgroundLines";

export function BackgroundLinesDemo() {
  return (
    <BackgroundLines className="flex items-center justify-center w-full flex-col px-4">
      {/* <h2 className="bg-clip-text text-white flex justfiy-center align-middle items-center text-center bg-gradient-to-b from-neutral-600 to-white text-8xl max-500:text-6xl font-sans py-10 relative z-20 font-bold tracking-tight"> */}

      <h2 className="bg-clip-text text-transparent flex justfiy-center align-middle items-center text-center bg-gradient-to-b  from-neutral-600 to-white text-8xl max-500:text-6xl  font-sans py-10 relative z-20 font-bold tracking-tight">
        Welcome to, <br /> Caliber Tech.
      </h2>
      <p className="max-w-2xl mx-auto text-sm md:text-lg text-neutral-400 text-center">
      Caliber Tech is a dynamic startup specializing in building customized web applications tailored to our clients' needs. Scroll to explore more.
      </p>
    </BackgroundLines>
  );
}
