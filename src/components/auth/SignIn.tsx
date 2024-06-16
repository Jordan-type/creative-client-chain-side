import React, { useState, ChangeEvent } from 'react';
import { MdOutlineMail } from "react-icons/md";
import { Divider, message } from "antd";
import { RiEyeLine, RiEyeOffLine } from "react-icons/ri";
import { useRouter } from "next/router";
import Link from "next/link"
import Image from "next/image"

import login from "../../assets/login.png";
import colorgoogle from "../../assets/colorgoogle.svg";
import colorlinkedin from "../../assets/colorlinkedin.svg";
import passicon from "../../assets/passicon.svg";
import InputField from "../ui/InputField";

import { signInUser, userSignUp } from "@/config/ApiConfig"

const Login: React.FC = () => {

    const router = useRouter();
    const [messageApi, contextHolder] = message.useMessage();

    const [password, setPassword] = useState<string>("");
    const [showPassword, setShowPassword] = useState<boolean>(false);
    const [email, setEmail] = useState<string>("");

    const handlePasswordChange = (e: ChangeEvent<HTMLInputElement>) => {
        setPassword(e.target.value);
    };

    const toggleShowPassword = () => {
        setShowPassword(!showPassword);
    };

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        setEmail(e.target.value);
    };

    const handleLogin = async () => {
        console.log("email address", email)
        console.log("password", password)
        
        if (!email || !password) {
            messageApi.open({
              type: "warning",
              content: "Fields cannot be empty",
            });
            return;
          } else if (!email.includes("@")) {
            messageApi.open({
              type: "warning",
              content: "Not a valid email",
            });
            return;
          }
        
        
        try {
           const res = await signInUser({ email, password })

           console.log(
            "response from login",
            res
           )

           if (res?.error) {
            messageApi.open({
                type: "error",
                content: res.error,
            });
        } else {
            messageApi.open({
                type: "success",
                content: "Login Success",
            });

            router.push("/dashboard");
        }

    } catch (error: any) {
        messageApi.open({
            type: "error",
            content: error.message || "An unexpected error occurred. Please try again.",
        });
        console.log("failed to login User", error);
    }
};

    return (
        <div className="flex items-center h-screen relative justify-between">
            {contextHolder}
            <div className="flex flex-col items-center justify-center h-full lg:flex-[0.5] flex-1">
                <div className="max-w-[400px]">
                    <h2 className="font-bold text-[40px]">
                        Login to your Account
                    </h2>
                    <p className="font-normal text-[#71717A] text-xl">
                        Welcome back! Select method to log in:
                    </p>
                    <div className="flex items-center my-4 gap-x-5 justify-between">
                        <div className="border-2 flex-[0.5] border-inputBorderColor flex items-center justify-center gap-2 rounded-lg px-6 py-2">
                            <Image
                                className="max-w-[20px]"
                                src={colorgoogle}
                                alt=""
                            />
                            <p>Google</p>
                        </div>
                        <div className="border-2 flex-[0.5] border-inputBorderColor flex items-center justify-center gap-2 rounded-lg px-6 py-2">
                            <Image
                                className="max-w-[20px]"
                                src={colorlinkedin}
                                alt=""
                            />
                            <p>Linkedin</p>
                        </div>
                    </div>
                    <Divider
                        style={{
                            color: "#71717A",
                            fontSize: "14px",
                            marginBottom: "16px",
                        }}
                    >
                        or continue with email
                    </Divider>
                    <div className="flex flex-col gap-y-5">
                        <InputField
                            placeholder={"Email"}
                            name="email"
                            onChange={handleChange}
                            type={"email"}
                            icon={
                                <MdOutlineMail className="text-[#C4C9ED] text-2xl" />
                            }
                        />
                        <div className="bg-[#EAEFFF] border-2 flex items-center gap-x-2 border-inputBorderColor rounded-lg w-[400px] px-2 py-3">
                            <Image
                                className="max-w-[24px]"
                                src={passicon}
                                alt=""
                            />
                            <input
                                name="password"
                                className="bg-transparent outline-none border-none w-full"
                                type={showPassword ? "text" : "password"}
                                placeholder="password"
                                value={password}
                                onChange={handlePasswordChange}
                            />
                            <button onClick={toggleShowPassword}>
                                {showPassword ? (
                                    <RiEyeOffLine className="text-[#C4C9ED] text-2xl" />
                                ) : (
                                    <RiEyeLine className="text-[#C4C9ED] text-2xl" />
                                )}
                            </button>
                        </div>
                    </div>
                    <div className="flex justify-between items-center w-full mt-2">
                        <div className="flex items-center gap-2">
                            <input type="checkbox" />
                            <p className="font-light text-[#71717A]">
                                Remember
                            </p>
                        </div>
                        <Link
                            href={"/forgot"}
                            className="text-[#8098F9] font-semibold"
                        >
                            Forgot Password?
                        </Link>
                    </div>
                    <button
                        onClick={handleLogin}
                        className="w-full text-white bg-primaryColor rounded-lg py-3 mt-6 font-semibold text-xl"
                    >
                        LOGIN
                    </button>
                    <p className="text-[#71717A] font-light text-center mt-2">
                        Don’t have account?{" "}
                        <Link
                            href={"/getstart"}
                            className="text-[#8098F9] font-semibold"
                        >
                            Create an account
                        </Link>
                    </p>
                </div>
            </div>
            <div className="bg-primaryColor lg:flex hidden items-center justify-center flex-col h-screen flex-[0.5]">
            <Image
                                        className="max-w-[400px]"
                                        src={login}
                                        width="24"
                                        height="24"
                                        alt="Connect with any device"
                                    />
      
                <h2 className="text-center text-[#E0EAFF] font-bold text-xl mt-6">
                    Connect with any device.
                </h2>
                <p className="text-center font-medium text-[#E0EAFF]">
                    Everything you need is an internet connection
                </p>
            </div>
        </div>
    );
};

export default Login;
