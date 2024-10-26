"use client";
import { PlaceholdersAndVanishInput } from "./placeholders-and-vanish-input"; 
export function PlaceholdersAndVanishInputDemo({ onChange, onSubmit }: { onChange: (e: React.ChangeEvent<HTMLInputElement>) => void, onSubmit: (e: React.FormEvent<HTMLFormElement>) => void }) {
  const placeholders = [
    "What's the first rule of Fight Club?",
    "Who is Tyler Durden?",
    "Where is Andrew Laeddis hiding?",
    "Write a JavaScript method to reverse a string",
    "How to assemble your own PC?",
  ];

  return (
    <div className="h-[40rem] flex flex-col justify-center items-center px-4">
      <h2 className="mb-10 sm:mb-20 text-xl text-center sm:text-5xl metallic-text">
        Search for UI template here
      </h2>
      
      {/* Render the input bar, passing down the onChange and onSubmit functions */}
      <PlaceholdersAndVanishInput
        placeholders={placeholders}
        onChange={onChange}
        onSubmit={onSubmit}
      />
    </div>
  );
}
