import { signIn } from "next-auth/react";
import { transactionType } from "viem";
import { UserSignUpDetails } from "@/types/types";

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
        phoneNumber: userDetails.phone_number,
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
