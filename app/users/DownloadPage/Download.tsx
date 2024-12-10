"use client";

import { useSearchParams } from "next/navigation";
import { Suspense } from "react";
import { CloudOffIcon as CloudDown, Mail, Camera } from "lucide-react";
import { FloatingNavDemo } from "@/components/Navbar/floatnavbarcomb";

function DownloadPageContent() {
  const searchParams = useSearchParams();
  const downloadUrl = searchParams.get("downloadUrl");

  const Disclaimer = () => (
    <div className="mt-8 max-w-md mx-auto text-white/90 text-sm">
      <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10">
        <p className="text-center">
          If you face any issues after payment, please contact us at{" "}
          <a
            href="mailto:calibertech875@gmail.com"
            className="text-[#F5E6D3] hover:text-[#F5E6D3]/80 transition-colors inline-flex items-center gap-1"
          >
            <Mail className="w-4 h-4" />
            calibertech875@gmail.com
          </a>
        </p>
        <div className="mt-4 space-y-2 pl-4">
          <div className="flex items-start gap-2">
            <Camera className="w-4 h-4 mt-1 text-[#F5E6D3]" />
            <p>A screenshot of your payment receipt, including the time.</p>
          </div>
          <div className="flex items-start gap-2">
            <Camera className="w-4 h-4 mt-1 text-[#F5E6D3]" />
            <p>A screenshot of this webpage.</p>
          </div>
        </div>
        <p className="mt-4 text-center text-white/80">
          We will assist you in resolving the issue promptly.
        </p>
      </div>
    </div>
  );

  if (!downloadUrl) {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen bg-black p-4">
        <FloatingNavDemo />
        <div className="w-full max-w-md p-6 rounded-xl bg-red-500/10 border border-red-500/20">
          <p className="text-red-400 text-lg text-center">
            No download URL found. This might happen due to a processing error
            after your payment.
          </p>
        </div>
        <Disclaimer />
      </div>
    );
  }

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-black p-4">
      <FloatingNavDemo />
      <div className="relative group">
        <div className="absolute -inset-1 bg-gradient-to-r from-[#F5E6D3]/30 to-[#F5E6D3]/10 rounded-lg blur opacity-0 group-hover:opacity-100 transition-all duration-500"></div>
        <a
          href={downloadUrl}
          className="relative flex items-center gap-2 bg-[#F5E6D3] hover:bg-[#F5E6D3]/90 text-[#333333] px-8 py-3 rounded-lg shadow-[0_2px_10px_rgba(245,230,211,0.15)] transition-all duration-300 group-hover:shadow-[0_2px_20px_rgba(245,230,211,0.25)]"
          target="_blank"
          rel="noopener noreferrer"
        >
          <CloudDown className="w-5 h-5 group-hover:scale-110 transition-transform duration-300" />
          <span className="font-medium">Download</span>
        </a>
      </div>
      <Disclaimer />
    </div>
  );
}

export default function DownloadPage() {
  return (
    <Suspense fallback={<div className="min-h-screen flex items-center justify-center bg-black text-white">Loading...</div>}>
      <DownloadPageContent />
    </Suspense>
  );
}
