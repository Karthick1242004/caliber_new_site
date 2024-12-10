// pages/api/validate-token.ts
import type { NextApiRequest, NextApiResponse } from "next";
import jwt from "jsonwebtoken";

const SECRET_KEY = process.env.SECRET_KEY as string;

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  const { token } = req.body;

  try {
    const decoded = jwt.verify(token, SECRET_KEY) as { downloadUrl: string };
    res.status(200).json({ downloadUrl: decoded.downloadUrl });
  } catch (error) {
    console.error("Invalid token:", error);
    res.status(400).json({ error: "Invalid or expired token" });
  }
}
