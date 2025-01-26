require('dotenv').config();
import { NextRequest, NextResponse } from "next/server";
import Razorpay from 'razorpay';

const razorpay = new Razorpay({
    key_id: process.env.RAZORPAY_KEY_ID!, // non-null assertion
    key_secret: process.env.RAZORPAY_KEY_SECRET!,
});

export async function POST(request: NextRequest) {
    try {
        // Parse the request body to get the amount
        const { amount } = await request.json();

        const order = await razorpay.orders.create({
            amount: amount, // Use the amount passed from the client
            currency: "INR",
            receipt: "receipt_" + Math.random().toString(36).substring(7),
        });
        return NextResponse.json({ orderId: order.id }, { status: 200 });
    } catch (error) {
        console.log("Error creating order:", error);
        return NextResponse.json(
            { error: "Error creating order" },
            { status: 500 }
        );
    }
}
