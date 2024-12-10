"use client";

import React, { useState, Suspense } from "react";
import { useRouter } from "next/navigation";
import Script from "next/script";
import { CardBody, CardContainer, CardItem } from "../componentsPage/3d-card";
import { FloatingNavDemo } from "@/components/Navbar/floatnavbarcomb";
import { AlertCircle } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import "./payment.page.css";

declare global {
  interface Window {
    Razorpay: any;
  }
}

const PaymentPageContent = () => {
  const searchParams = useSearchParams();
  const cardParam = searchParams.get("card");
  const card = cardParam ? JSON.parse(decodeURIComponent(cardParam)) : null;

  const [isProcessing, setIsProcessing] = useState(false);
  const router = useRouter();

  if (!card) {
    return (
      <div className="min-h-screen bg-black/95 flex items-center justify-center p-4">
        <div className="bg-red-500/10 border border-red-500/20 rounded-lg p-6 max-w-md w-full text-center">
          <AlertCircle className="w-12 h-12 text-red-500 mx-auto mb-4" />
          <p className="text-red-400 text-lg font-medium">Project not found!</p>
          <p className="text-red-400/80 mt-2">Please check the URL and try again.</p>
        </div>
      </div>
    );
  }

  const handlePayment = async () => {
    setIsProcessing(true);
    try {
      const response = await fetch("/api/create-order", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ amount: card.amount * 100 }),
      });

      const data = await response.json();
      const options = {
        key: process.env.NEXT_PUBLIC_RAZORPAY_KEY_ID,
        amount: card.amount * 1000,
        currency: "INR",
        name: "Your Company Name",
        description: card.projectName,
        order_id: data.orderId,
        handler: (response: any) => {
          console.log("Payment Successful", response);
          router.push(
            `/users/DownloadPage?downloadUrl=${encodeURIComponent(
              card.downloadUrl || ""
            )}`
          );
        },
        prefill: {
          name: "John Doe",
          email: "johndoe@example.com",
          contact: "9999999999",
        },
        theme: {
          color: "#3399cc",
        },
      };
      console.log(card.amount);
      const rzp1 = new window.Razorpay(options);
      rzp1.open();
    } catch (error) {
      console.error("Payment Failed", error);
    } finally {
      setIsProcessing(false);
    }
  };

  return (
    <div className="min-h-screen">
      <FloatingNavDemo />
      <Script src="https://checkout.razorpay.com/v1/checkout.js" />
      <div
        className="payment-background relative"
        style={{
          backgroundImage: `url(${card.projectImage?.src || "/default-image.png"})`,
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/60 to-black/50" />

        <div className="relative w-full lg:w-1/2 flex flex-col justify-end min-h-screen p-8 lg:p-10 gap-6">
          <div className="space-y-2">
            <h1 className="metallic-text text-4xl lg:text-5xl font-bold tracking-tight">
              {card.projectName}
            </h1>
            <p className="text-white/60 text-lg">
              Secure your copy with a one-time payment
            </p>
          </div>

          <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-xl p-6 shadow-xl">
            <div className="flex items-start gap-3 text-white/80">
              <AlertCircle className="w-5 h-5 mt-0.5 flex-shrink-0 text-amber-400" />
              <div className="space-y-2 text-sm">
                <p className="font-medium text-white">
                  Important Payment Information
                </p>
                <p>
                  Payment cancellations can only be verified manually. If
                  payment is successful and the file is downloaded, the payment
                  cannot be refunded. If payment is successful but the file is
                  not downloaded, please follow the steps provided on the
                  download page to resolve the issue.
                </p>
              </div>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4">
            <Link
              href={card.projectUrl}
              className="group flex items-center justify-center gap-2 px-6 py-3 
                bg-white/5 hover:bg-white/10 
                backdrop-blur-md 
                border border-white/10 
                rounded-xl 
                text-white font-medium 
                transition-all duration-300 
                hover:scale-[1.02] hover:border-white/20"
            >
              <span className="metallic-text">View Site</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                />
              </svg>
            </Link>

            <button
              onClick={handlePayment}
              disabled={isProcessing}
              className="group flex items-center justify-center gap-2 px-6 py-3
                bg-white/10 hover:bg-white/15 
                backdrop-blur-md 
                border border-white/20 
                rounded-xl 
                text-white font-medium 
                transition-all duration-300 
                hover:scale-[1.02] hover:border-white/30
                disabled:opacity-50 disabled:hover:scale-100 disabled:cursor-not-allowed
                relative overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/5 to-white/0 animate-shimmer" />
              {isProcessing ? (
                <>
                  <span>Processing...</span>
                  <svg className="animate-spin h-4 w-4" viewBox="0 0 24 24">
                    <circle
                      className="opacity-25"
                      cx="12"
                      cy="12"
                      r="10"
                      stroke="currentColor"
                      strokeWidth="4"
                      fill="none"
                    />
                    <path
                      className="opacity-75"
                      fill="currentColor"
                      d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                    />
                  </svg>
                </>
              ) : (
                <>
                  <span className="metallic-text">Pay ₹{card.amount}</span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-4 w-4 transition-transform duration-300 group-hover:scale-110"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z"
                    />
                  </svg>
                </>
              )}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

const PaymentPage = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <PaymentPageContent />
  </Suspense>
);

export default PaymentPage;
