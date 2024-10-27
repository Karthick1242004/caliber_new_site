"use client";
import { FloatingNavDemo } from "@/components/Navbar/floatnavbarcomb";
import { TextGenerateEffect } from "../../../components/TextEffect/text-generate-effect";

const words1 = `We value your privacy and are committed to protecting your personal information. This privacy policy outlines how we collect, use, and safeguard information when you use our services and products.`;
const words2 = `Personal data we may collect includes name, email address, payment information, and other details necessary for fulfilling orders and providing support. We collect information through forms you complete on our site, direct communication, and purchase transactions.`;
const words3 = `We use your personal data to process orders, communicate updates, improve services, and ensure secure transactions. Your information will not be shared with third parties except as necessary for payment processing and legal compliance.`;
const words4 = `Our website may use cookies to enhance user experience, track site usage, and personalize content. You can manage cookie preferences in your browser settings, though certain site features may be affected.`;
const words5 = `We implement standard security measures to protect your data from unauthorized access, alteration, or disclosure. While we strive to secure user data, no method of transmission over the internet is completely secure.`;
const words6 = `If you have questions or concerns regarding this privacy policy, please reach out to our support team at calibertech875@gmail.com. We will respond within 2-3 business days.`;

export default function Page() {
  return( 
    <div>
       <FloatingNavDemo/>
       <h1 className="text-center metallic-text text-5xl font-medium mt-[10%] pb-[20px]">Caliber Tech Privacy Policy</h1>
       <div className="flex flex-col px-[18%] mt-[2%] gap-10 pb-10">
       
       <div className="flex flex-col text-justify">
       <h1 className="metallic-text text-3xl font-medium">Introduction</h1>
       <TextGenerateEffect words={words1} />
       </div>
       
       <div className="flex flex-col text-justify">
       <h1 className="metallic-text text-3xl font-medium">Information Collection</h1>
       <TextGenerateEffect words={words2} />
       </div>
       
       <div className="flex flex-col text-justify">
       <h1 className="metallic-text text-3xl font-medium">Use of Information</h1>
       <TextGenerateEffect words={words3} />
       </div>
       
       <div className="flex flex-col text-justify">
       <h1 className="metallic-text text-3xl font-medium">Cookies</h1>
       <TextGenerateEffect words={words4} />
       </div>
       
       <div className="flex flex-col text-justify">
       <h1 className="metallic-text text-3xl font-medium">Data Security</h1>
       <TextGenerateEffect words={words5} />
       </div>
       
       <div className="flex flex-col text-justify">
       <h1 className="metallic-text text-3xl font-medium">Contact Information</h1>
       <TextGenerateEffect words={words6} />
       </div>
       
       </div>
    </div>
  );
}
