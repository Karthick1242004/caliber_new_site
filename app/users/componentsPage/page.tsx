"use client";

import React, { useState } from "react";
import { CardBody, CardContainer, CardItem } from "./3d-card";
import { PlaceholdersAndVanishInputDemo } from "@/components/Searchbar/placeholdercomb";
import cardData from "../../../components/cardData"; 
import Link from "next/link";
import Image from "next/image";
import { FloatingNavDemo } from "@/components/Navbar/floatnavbarcomb";
import Footer from "@/components/Footer/Footer";

export default function Page() {
  const [filteredProjects, setFilteredProjects] = useState(cardData);

  // Function to handle input change
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const searchTerm = e.target.value.toLowerCase();
    const filtered = cardData.filter((project) =>
      project.projectName.toLowerCase().includes(searchTerm)
    );
    setFilteredProjects(filtered);
  };

  // Function to handle form submission
  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("submitted");
  };

  return (
    <div>
      <FloatingNavDemo />
      <PlaceholdersAndVanishInputDemo onChange={handleChange} onSubmit={onSubmit} />
      <div className="flex flex-row flex-wrap justify-center gap-[2%] px-[3%] projects-section">
        {filteredProjects.map((card, index) => (
          <CardContainer key={index} className="inter-var">
            <CardBody className="bg-black relative group/card dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.1] border-white/[0.2] w-auto sm:w-[30rem] h-auto rounded-xl p-6 border">
              <div className="flex flex-row justify-between">
                <CardItem translateZ="50" className="text-xl font-bold text-white dark:text-white metallic-text">
                  {card.projectName}
                </CardItem>
                <CardItem className="text-white font-mono metallic-text">
                  {card.projectType}
                </CardItem>
              </div>
              <CardItem
                as="p"
                translateZ="60"
                className="text-neutral-500 text-sm max-w-full mt-2 dark:text-white text-justify"
              >
                {card.projectContent}
              </CardItem>
              <CardItem translateZ="100" className="w-full mt-4">
                <Image
                  src={card.projectImage.src} // Ensure the correct image path is used
                  height="1000"
                  width="1000"
                  className="h-60 w-full object-cover rounded-xl group-hover/card:shadow-xl"
                  alt={card.projectName}
                />
              </CardItem>
              <div className="flex justify-between items-center mt-20">
                <CardItem
                  translateZ={20}
                  as={Link}
                  href={card.projectUrl}
                  target="__blank"
                  className="px-4 py-2 rounded-xl text-xs font-normal dark:text-white metallic-text"
                >
                  Try Now →
                </CardItem>
                <Link
                  href='/users/componentsPage'
                  target="__blank"
                  className="px-4 py-2 rounded-xl bg-white dark:bg-white dark:text-black text-black text-xs font-bold"
                >
                  {card.amount}
                </Link>
              </div>
            </CardBody>
          </CardContainer>
        ))}
      </div>
      <div className="mt-[12%]">
      <Footer/>
      </div>
      <div className="mt-[3%] pb-[40px]">
          <p className="metallic-text text-center text-sm">
            Built and maintained by -{" "}
            <Link href="https://calibertech.vercel.app/" className="text-blue-500">
              {" "}
              @calibertech
            </Link>
          </p>
        </div>
    </div>
  );
}
