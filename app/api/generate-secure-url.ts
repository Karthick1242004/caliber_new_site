// pages/api/generate-secure-url.ts
import { NextApiRequest, NextApiResponse } from "next";
import jwt from "jsonwebtoken";

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== "POST") return res.status(405).json({ error: "Method not allowed" });

  const { downloadUrl } = req.body;
  const token = jwt.sign({ downloadUrl }, process.env.SECRET_KEY!, { expiresIn: "15m" });
  res.status(200).json({ token });
}
