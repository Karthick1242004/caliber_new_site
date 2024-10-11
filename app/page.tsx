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
import Footer from '../components/Footer/Footer'
import "./globals.css";
import { LinkPreviewDemo } from "@/components/Linkpreview/Linkcomb";
import Link from "next/link";

interface FadeUpComponentProps {
  children: React.ReactNode;
}

const FadeUpComponent: React.FC<FadeUpComponentProps> = ({ children }) => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
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
    }, 4750);
    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return <MultiStepLoaderDemo loading={loading} />;
  }

  const blogData = [
    {
      slug: "amazing-tailwindcss-grid-layouts",
      author: "Caliber Tech",
      date: "28th March, 2023",
      title: "Fullstack Applications Development",
      description:
        "Have a groundbreaking idea for a full-stack application but worried about costs? Let's bring your vision to life without breaking the bank! Connect with me, and we'll turn your concept into reality with minimal expenses.",
      image: "/demo/thumbnail.png",
      authorAvatar: "/manu.png",
    },
    {
      slug: "responsive-ui-components",
      author: "Tech Enthusiast",
      date: "1st April, 2023",
      title: "Advanced Frontend Development",
      description:
        "Want to elevate your brand to the next level? Let's collaborate and make it happen with innovative designs and unique styles that stand out. Together, we can create a captivating brand identity that sets you apart from the competition.",
      image: "/demo/thumbnail2.png",
      authorAvatar: "/avatar2.png",
    },
    {
      slug: "modern-frontend-workflows",
      author: "Dev Guru",
      date: "5th April, 2023",
      title: "Website Maintanance And Hosting",
      description:
        "Regular updates to your website and applications are essential to stay ahead in today's fast-paced digital world. Contact us for top-notch maintenance and update services to ensure your platforms are always performing at their best.",
      image: "/demo/thumbnail3.png",
      authorAvatar: "/avatar3.png",
    },
  ];

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
            {blogData.map((data, index) => (
              <FollowingPointerDemo key={index} blogContent={data} />
            ))}
          </div>
        </div>
      </FadeUpComponent>

      <FadeUpComponent>
        <GoogleGeminiEffectDemo />
      </FadeUpComponent>

      <FadeUpComponent>
        <LinkPreviewDemo />
      </FadeUpComponent>

      <FadeUpComponent>
        <Footer />
      </FadeUpComponent>

      <FadeUpComponent>
        <div className="mt-[5%] pb-[30px]">
          <p className="metallic-text text-center text-sm">
            Built and maintained by -{" "}
            <Link href="https://calibertech.vercel.app/" className="text-blue-500">
              {" "}
              @calibertech
            </Link>
          </p>
        </div>
      </FadeUpComponent>
    </div>
  );
}
