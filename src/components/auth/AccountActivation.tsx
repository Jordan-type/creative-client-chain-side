import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import Image from "next/image";
import { message } from "antd";

import InputField from "../ui/InputField";
import passicon from "../../assets/passicon.svg";
import newpass from "../../assets/newpass.png";
import { verifyAccount } from "@/config/ApiConfig";

const AccountActivation: React.FC = () => {
  const [messageApi, contextHolder] = message.useMessage();
  const [verificationCode, setVerificationCode] = useState("");
  const [token, setToken] = useState<string | null>(null);
  const router = useRouter();

  useEffect(() => {
    if (router.query.token) {
      setToken(router.query.token as string);
    }
  }, [router.query.token]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setVerificationCode(e.target.value);
  };

  const handleSubmit = async (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    if (!verificationCode || !token) {
      messageApi.open({
        type: "warning",
        content: "Verification code or token is missing",
      });
      return;
    }
    try {
      const response = await verifyAccount({ token, activation_code: verificationCode });
      console.log(
        "🚀 ~ file: AccountActivation.tsx ~ line 66 ~ handleSubmit ~ response",
        response
      )
      if (response?.success) {
        messageApi.open({
          type: "success",
          content: "Account verified successfully",
        });

        router.push("/auth/signin");

      } else {
        messageApi.open({
          type: "error",
          content: response.message || "Failed to verify account",
        });
      }
    } catch (error) {
      messageApi.error("Error verifying account");
      console.error(error);
    }   
  };

  return (
    <div className="flex items-center h-screen relative justify-between">
      {contextHolder}
      <div className="flex flex-col items-center justify-center h-full lg:flex-[0.5] flex-1">
        <h2 className="font-bold text-[40px]">Welcome to CreativeList!</h2>
        <p className="font-normal text-[#71717A] text-xl">
          Please put the 6 digit Verification Code
        </p>

        <div className="max-w-[400px]">
          <div className="flex flex-col gap-y-3 mt-10">
            <InputField
              placeholder={"Verification Code"}
              onChange={handleChange}
              name="activation_code"
              type={"text"}
              icon={<Image className="max-w-[24px]" src={passicon} alt="" />}
            />
          </div>
          <button 
            onClick={handleSubmit}
            className="w-full text-white bg-primaryColor rounded-lg py-3 mt-6 font-semibold text-xl">
            VERIFY ACCOUNT
          </button>
        </div>
      </div>
      <div className="bg-primaryColor lg:flex hidden items-center justify-center flex-col h-screen flex-[0.5]">
        <Image className="max-w-[400px]" src={newpass} alt="" />
        <h2 className="text-center text-[#E0EAFF] font-bold text-xl mt-6">
          Welcome to Creative List!
        </h2>
        <p className="text-center font-medium text-[#E0EAFF]">
          After verifying you will gain access to your CreativeList account!
        </p>
      </div>
    </div>
  );
};

export default AccountActivation;
