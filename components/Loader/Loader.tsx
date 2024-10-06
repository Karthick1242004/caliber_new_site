"use client";
import React from "react";
import { MultiStepLoader as Loader } from "./multi-step-loader";

const loadingStates = [
  { text: "Now , Say my name" },
  { text: "You are ' Heisenberg ' !" },
  { text: "You are goddamn right" },
];

export function MultiStepLoaderDemo({ loading }: { loading: boolean }) {
  return (
    <div className="w-full h-[60vh] flex items-center justify-center">
      <Loader loadingStates={loadingStates} loading={loading} duration={1800} />
    </div>
  );
}
