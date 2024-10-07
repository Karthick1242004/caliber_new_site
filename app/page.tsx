"use client";
import React, { useState, useEffect } from "react";
import { useInView } from "react-intersection-observer";
import { MultiStepLoaderDemo } from "../components/Loader/Loader"; 
import { BackgroundLinesDemo } from "@/components/BackgroundLines/BackgrounLinesComb";
import { FloatingNavDemo } from "@/components/Navbar/floatnavbarcomb";
import { TimelineDemo } from "@/components/Timeline/timelinecomb";
import { TimelineDemores } from "@/components/Timeline/timelinecombresponsive";
import { FlipWordsDemo } from "@/components/Fliptext/Fliptextcomb";
import { MacbookScrollDemo } from "@/components/Macbook/macbookcomb";
import { FollowingPointerDemo } from "@/components/Services/Paymentcomb";
import GoogleGeminiEffectDemo from "@/components/Googlescroll/geminicomb";
import "./globals.css";
import { LinkPreviewDemo } from "@/components/Linkpreview/Linkcomb";

interface FadeUpComponentProps {
  children: React.ReactNode;
}

const FadeUpComponent: React.FC<FadeUpComponentProps> = ({ children }) => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  return (
    <div
      ref={ref}
      className={`transition-opacity duration-1000 transform ${
        inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
      }`}
    >
      {children}
    </div>
  );
};

export default function Page() {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 4600); 
    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return <MultiStepLoaderDemo loading={loading} />;
  }

  return (
    <div>
      <FadeUpComponent>
      <BackgroundLinesDemo />
      </FadeUpComponent>
      <FloatingNavDemo />
      <FadeUpComponent>
      <TimelineDemores />
      </FadeUpComponent>
      <FadeUpComponent>
      <FlipWordsDemo />
      </FadeUpComponent>
      
      <FadeUpComponent>
      <MacbookScrollDemo />
      </FadeUpComponent>
      <FadeUpComponent>
      <div className="text-center pt-20 pb-10">
        <h1 className="text-5xl metallic-text font-bold">Our Services</h1>
        <div className="flex flex-row justify-center align-middle py-20 flex-wrap px-[15%] max-767:gap-5 max-1151:gap-5 max-767:px-4">
          <FollowingPointerDemo />
          <FollowingPointerDemo />
          <FollowingPointerDemo />
        </div>
      </div>
      </FadeUpComponent>
      <FadeUpComponent>
      <GoogleGeminiEffectDemo />
      </FadeUpComponent>
      <FadeUpComponent>
      <LinkPreviewDemo/>
      </FadeUpComponent>
    </div>
  );
}
