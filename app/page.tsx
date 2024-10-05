"use client";
import React, { useState, useEffect } from 'react';
import { useInView } from 'react-intersection-observer';
import Loader from '../components/Loader/Loader'; 
import { BackgroundLinesDemo } from '@/components/BackgroundLines/BackgrounLinesComb';
import { FloatingNavDemo } from '@/components/Navbar/floatnavbarcomb';
import { TimelineDemo } from '@/components/Timeline/timelinecomb';
import { TimelineDemores } from '@/components/Timeline/timelinecombresponsive';
import { FlipWordsDemo } from '@/components/Fliptext/Fliptextcomb';
import { MacbookScrollDemo } from '@/components/Macbook/macbookcomb';
import { FollowingPointerDemo } from '@/components/Payment/Paymentcomb';
import './globals.css'
import GoogleGeminiEffectDemo from '@/components/Googlescroll/geminicomb';



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
        inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
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
    }, 2500);

    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return <Loader />;
  }

  return (
    <div className="">
      <BackgroundLinesDemo/>
      <FloatingNavDemo/>
      <TimelineDemores/>
      <FlipWordsDemo/>
      <MacbookScrollDemo/>
      <div className='text-center pt-20 pb-10'>
        <h1 className='text-5xl metallic-text font-bold'>Our Pricings</h1>
        <div className='flex flex-row justify-center align-middle py-20 flex-wrap px-[15%] max-767:gap-5 max-1151:gap-5 max-767:px-4'>
          <FollowingPointerDemo/>
          <FollowingPointerDemo/>
          <FollowingPointerDemo/>
        </div>
      </div>
      <GoogleGeminiEffectDemo/>
    </div>
  );
}
