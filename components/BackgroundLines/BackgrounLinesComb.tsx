import React from "react";
import { BackgroundLines } from "./BackgroundLines";
import Link from "next/link";

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
      <Link href='/users/componentsPage' className="mt-[3%] relative inline-flex h-11 overflow-hidden rounded-full p-[1px] focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50">
        <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
        <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-slate-950 px-6 py-1 text-sm font-medium text-white backdrop-blur-3xl">
          ✨ Browse Templates
        </span>
      </Link>
    </BackgroundLines>
  );
}
