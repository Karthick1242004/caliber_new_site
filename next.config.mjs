/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        domains: [
            'ui.aceternity.com', 
            'images.unsplash.com', 
            'mineportfolioimages.s3.us-east-2.amazonaws.com', 
            'assets.aceternity.com', 
            'api.microlink.io', 
            'pbs.twimg.com' ,
            'encrypted-tbn0.gstatic.com',
            'uxwing.com',
        ],
    },
    env: {
        RAZORPAY_KEY_ID: process.env.RAZORPAY_KEY_ID,
        RAZORPAY_KEY_SECRET: process.env.RAZORPAY_KEY_SECRET,
        NEXT_PUBLIC_RAZORPAY_KEY_ID: process.env.NEXT_PUBLIC_RAZORPAY_KEY_ID,
    },
};

export default nextConfig;
