// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";

import { CREATIVE_BACKEND } from "@/constants/constant";
import { UserSignUpDetails } from "@/types/types";



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
      return res.status(405).json({ success: false, message: "Method Not Allowed" });
    }

    const { first_name,
        last_name,
        username,
        phone_number, 
         email,
        password,
        userType,
        userAddress }:UserSignUpDetails = req.body;

    // Perform any necessary validation of transaction data here

    const result = await fetch(`${CREATIVE_BACKEND}/signup`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      
    
        
      },
      body: JSON.stringify({
        first_name:first_name,
        last_name:last_name,
        username:username,
        phone_number:`+${phone_number}`, 
         email:email,
        password:password,
        userType:userType,
        userAddress:userAddress
        
      }),
    });

    if (!result.ok) {
      console.log("the result",result)
      throw new Error("Failed to create transaction");
    }

    const data = await result.json();

    return res.status(200).json({ success: true, data: data });
  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ success: false, message: "Internal Server Error" });
  }
}