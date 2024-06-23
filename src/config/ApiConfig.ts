import { signIn } from "next-auth/react";
import { transactionType } from "viem";
import { UserSignUpDetails, verifyAccountData } from "@/types/types";

export type dataSignInUser = {
  email: string;
  password: string;
};

export type registerUser = {
  first_name: string;
  last_name: string;
  username: string;
  phoneNumber: string;
  userAddress: `0x${string}` | undefined;
  email: string;
  userType: string;
  password: string;
};

export const signInUser = async (userDetails: dataSignInUser) => {
  try {
    const res = await signIn("credentials", {
      redirect: false,
      email: userDetails.email,
      password: userDetails.password,
    });

    console.log("response", res);

    if (res?.error) {
      throw new Error(res.error);
    }

    return res;
  } catch (error) {
    console.log("failed to login User", error);
    throw error;
  }
};

export const userSignUp = async (userDetails:UserSignUpDetails) => {
  try {
    const res = await fetch("/api/signup", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        first_name: userDetails.first_name,
        last_name: userDetails.last_name,
        username: userDetails.username,
        phone_number: userDetails.phone_number,
        userAddress: userDetails.userAddress,
        userType: userDetails.userType,
        email: userDetails.email,
        password: userDetails.password,
      }),
    });
    return res;
  } catch (error) {
    console.log("failed to register", error);
  }
};



export const verifyAccount = async ({ token, activation_code }: verifyAccountData) => {
  try {
    const res = await fetch("/api/verify-account", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ token, activation_code }),
    });

    if (!res.ok) {
      throw new Error("Failed to verify account");
    }

    const data = await res.json();
    console.log("response", data);
    return data;
  } catch (error) {
    console.log("failed to verify account", error);
    throw error;
  }
};




export type GigData = {
  title: string;
  description: string;
  location: string;
  gigType: string;
  skills: string[];
  salary: number;
  duration: number;
  deadline: string;
  maxApplicants: number;
  cover: string;
  images: string[];
  shortTitle: string;
  shortDesc: string;
  deliveryTime: string;
  revisionNumber: number;
  features: string[];
  categoryName: string;
  subcategoryName: string;
  totalStars: number;
  starNumber?: number;
};

export const createGig = async (gigData: GigData, token: string) => {
  try {
    const res = await fetch("http://localhost:5000/api/v1/create-gig", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${token}`,
      },
      body: JSON.stringify(gigData),
    });

    if (!res.ok) {
      const errorResponse = await res.json();
      throw new Error(errorResponse.message || "Failed to create gig");
    }

    const data = await res.json();
    return data;
  } catch (error) {
    console.log("Failed to create gig", error);
    throw error;
  }
};



