"use client";
import React, { useState } from "react";
import Script from "next/script";
import { SignupFormDemo } from "@/components/Form/Form";
import { FloatingNavDemo } from "@/components/Navbar/floatnavbarcomb";
import { useRouter } from "next/navigation";

declare global {
  interface Window {
    Razorpay: any;
  }
}

const PaymentPage = () => {
  const AMOUNT = 100;
  const [isProcessing, setIsProcessing] = useState(false);
  const router = useRouter();

  const handlePayment = async () => {
    setIsProcessing(true);
    try {
      const response = await fetch("/api/create-order", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ amount: AMOUNT * 100 }), 
      });
      const data = await response.json();

      const options = {
        key: process.env.NEXT_PUBLIC_RAZORPAY_KEY_ID,
        amount: AMOUNT * 100,
        currency: "INR",
        name: "Your Company Name",
        description: "Test Transaction",
        order_id: data.orderId,
        handler: (response: any) => {
          console.log("Payment Successful", response);
          router.push("/users/DownloadPage"); 
        },
        prefill: {
          name: "John",
          email: "john@email.com",
          contact: "9999999999",
        },
        theme: {
          color: "#3399cc",
        },
      };
      const rzp1 = new window.Razorpay(options);
      rzp1.open();
    } catch (error) {
      console.error("Payment Failed", error);
    } finally {
      setIsProcessing(false);
    }
  };

  return (
    <div>
      <FloatingNavDemo />
      <Script src="https://checkout.razorpay.com/v1/checkout.js" />
      <div className="h-[50rem] w-full bg-stone-900 bg-grid-white/[0.2] relative flex items-center justify-center">
        <div className="absolute pointer-events-none inset-0 flex items-center justify-center bg-black [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>
        <div className="relative z-20 border-white py-8">
          <SignupFormDemo handlePayment={handlePayment} isProcessing={isProcessing} />
        </div>
      </div>
    </div>
  );
};

export default PaymentPage;
