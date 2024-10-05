"use client";
import React from "react";
import { MultiStepLoader as Loader } from "./multi-step-loader";

const loadingStates = [
  { text: "1st rule of F**** C***" },
  { text: "Do not talk about F**** C***" },
  { text: "2nd rule of F**** C***" },
  { text: "You do NOT talk about F**** C***" },
];

export function MultiStepLoaderDemo({ loading }: { loading: boolean }) {
  return (
    <div className="w-full h-[60vh] flex items-center justify-center">
      <Loader loadingStates={loadingStates} loading={loading} duration={1500} />
    </div>
  );
}
