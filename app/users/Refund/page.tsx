"use client";
import { FloatingNavDemo } from "@/components/Navbar/floatnavbarcomb";
import { TextGenerateEffect } from "../../../components/TextEffect/text-generate-effect";

const words1 = `Due to the nature of our digital products, all sales are final once the purchase is completed. We do not offer refunds, exchanges, or returns for website templates or source code after the download is made available to the buyer.`;
const words2 = `In cases where the product is proven to be defective or not as described, please contact us within 7 days of purchase. We will assess the issue, and if deemed appropriate, offer a replacement or a solution to resolve the defect.`;
const words3 = `For refund inquiries or issues with your purchase, please reach out to our support team at  calibertech875@gmail.com at any time for any clarifications, we will respond to you in 2-3 working days as soon as possible.`;

export default function Page() {
  return( 
    <div>
       <FloatingNavDemo/>
       <h1 className="text-center metallic-text text-5xl font-medium mt-[10%] pb-[20px]">Caliber's refund policy</h1>
       <div className="flex flex-col px-[18%] mt-[2%] gap-10 pb-10">
       <div className="flex flex-col text-justify">
       <h1 className="metallic-text text-3xl font-medium">Refunds for Digital Products</h1>
       <TextGenerateEffect words={words1} />
       </div>
       <div className="flex flex-col text-justify">
       <h1 className="metallic-text text-3xl font-medium">Exceptions</h1>
       <TextGenerateEffect words={words2} />
       </div>
       <div className="flex flex-col text-justify">
       <h1 className="metallic-text text-3xl font-medium">Contact Information</h1>
       <TextGenerateEffect words={words3} />
       </div>
       </div>
  </div>
  );
}
