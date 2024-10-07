"use client";
import React from "react";
import { motion } from "framer-motion";
import { LinkPreview } from "./link-preview";

export function LinkPreviewDemo() {
  return (
    <div className="flex justify-center items-center h-[40rem] flex-col px-4 max-750:mt-[-50%] ">
      <p className="text-neutral-400 text-xl md:text-3xl max-w-3xl mx-auto mb-10 max-750:text-center">
        <LinkPreview url="https://tailwindcss.com" className="font-bold">
          Tailwind CSS
        </LinkPreview>{" "}
        with{" "}
        <LinkPreview url="https://react.dev/" className="font-bold">
          React JS 
        </LinkPreview> or{" "}
        <LinkPreview url="https://nextjs.org/" className="font-bold">
           Next JS
        </LinkPreview>{" "}
        are a great way to build modern websites.
      </p>
      <p className="text-neutral-400 text-xl md:text-3xl max-w-3xl mx-auto max-750:text-center">
        Visit{" "}
        <LinkPreview
          url="https://raw.githubusercontent.com/Karthick1242004/caliber_new_site/refs/heads/main/components/images/calibernewsite.png"
          className="font-bold bg-clip-text text-transparent bg-gradient-to-br from-purple-500 to-pink-500 "
        >
         Caliber Tech
        </LinkPreview>{" "}
        to make this come true based on your wishes.
      </p>
    </div>
  );
}
