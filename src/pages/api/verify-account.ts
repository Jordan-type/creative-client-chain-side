import type { NextApiRequest, NextApiResponse } from "next";
import { CREATIVE_BACKEND } from "@/constants/constant";

type ApiResponse = {
  success: boolean;
  message?: string;
  data?: any;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<ApiResponse>
) {
  try {
    if (req.method !== "POST") {
      return res
        .status(405)
        .json({ success: false, message: "Method Not Allowed" });
    }

    const { activation_code, token }: { activation_code: string; token: string } = req.body;

    if (!activation_code || !token) {
      return res.status(400).json({ success: false, message: "Missing activation code or token" });
    }

    // Perform any necessary validation of transaction data here
    const result = await fetch(`${CREATIVE_BACKEND}/account-activation?token=${token}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ activation_code }),
    });

    if (!result.ok) {
      const errorData = await result.json();
      return res.status(result.status).json({ success: false, message: errorData.message || "Failed to activate account" });
    }

    const data = await result.json();

    return res.status(200).json({ success: true, data });
  } catch (error: any) {
    return res.status(500).json({ success: false, message: error.message });
  }
}
