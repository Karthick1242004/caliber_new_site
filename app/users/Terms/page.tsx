"use client";
import { FloatingNavDemo } from "@/components/Navbar/floatnavbarcomb";
import { TextGenerateEffect } from "../../../components/TextEffect/text-generate-effect";

const words1 = `By purchasing a product from Caliber Tech, you agree to comply with our Terms and Conditions. This agreement outlines your rights and responsibilities in connection to our products and services.`;
const words2 = `Templates and source code purchased through Caliber Tech are licensed for personal and/or commercial use, with no rights to resale, redistribution, or unauthorized distribution.`;
const words3 = `All content on Caliber Tech, including but not limited to website templates, source code, and 3D interactive elements, is protected by copyright. Unauthorized duplication, distribution, or resale is prohibited.`;
const words4 = `All prices are listed in [currency], and payments are processed through Razorpay. You are responsible for any taxes associated with your purchase.`;
const words5 = `Caliber Tech is not liable for any damages resulting from the use or inability to use our products, including but not limited to lost profits, data loss, or service interruptions.`;
const words6 = `We may update our Terms and Conditions periodically. Changes will be effective upon posting, so please review these terms before each purchase.`;
const words7 = `For any inquiries or , please reach out to our support team at  calibertech875@gmail.com at any time for any clarifications, we will respond to you in 2-3 working days as soon as possible.`;

export default function Page1() {
  return( 
    <div>
       <FloatingNavDemo/>
       <h1 className="text-center metallic-text text-5xl font-medium mt-[10%] pb-[20px]">Caliber's Terms and Conditions</h1>
       <div className="flex flex-col px-[18%] mt-[2%] gap-10 pb-10">
       <div className="flex flex-col text-justify">
       <h1 className="metallic-text text-3xl font-medium">1. Acceptance of Terms</h1>
       <TextGenerateEffect words={words1} />
       </div>
       <div className="flex flex-col text-justify">
       <h1 className="metallic-text text-3xl font-medium">2. Use of Digital Products</h1>
       <TextGenerateEffect words={words2} />
       </div>
       <div className="flex flex-col text-justify">
       <h1 className="metallic-text text-3xl font-medium">3. Intellectual Property Rights</h1>
       <TextGenerateEffect words={words3} />
       </div>
       <div className="flex flex-col text-justify">
       <h1 className="metallic-text text-3xl font-medium">4. Payment and Taxes</h1>
       <TextGenerateEffect words={words4} />
       </div>
       <div className="flex flex-col text-justify">
       <h1 className="metallic-text text-3xl font-medium">5. Limitation of Liability</h1>
       <TextGenerateEffect words={words5} />
       </div>
       <div className="flex flex-col text-justify">
       <h1 className="metallic-text text-3xl font-medium">6. Changes to Terms</h1>
       <TextGenerateEffect words={words6} />
       </div>
       <div className="flex flex-col text-justify">
       <h1 className="metallic-text text-3xl font-medium">7. Contact Information</h1>
       <TextGenerateEffect words={words7} />
       </div>
       </div>
      
  </div>
  );
}
