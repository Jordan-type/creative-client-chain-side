import React, { useState } from "react";
import { MdOutlineMail } from "react-icons/md";
import { FaRegUser } from "react-icons/fa";
import Link from "next/link"
import Image from "next/image"
import { message } from "antd";

import passicon from "../../assets/passicon.svg";
import signup from "../../assets/signup.png";
import InputField from "../ui/InputField";
import Input from "antd/es/input/Input";

const Signup = () => {
    const [messageApi, contextHolder] = message.useMessage();

    const [info, setInfo] = useState({
        first_name: "",
        last_name: "",
        username: "",
        phone_number: "",
        userAddress: "",
        email: "",
        userType:"creative",
        password: "",
        confirmPassword: "",
    });

    const handleChange = (e: any) => {
        setInfo({ ...info, [e.target.name]: e.target.value });
    };
    const handleSubmit = () => {
        if (
            !info.first_name ||
            !info.last_name ||
            !info.username ||
            !info.phone_number ||
            !info.userAddress ||
            !info.email ||
            !info.userType ||
            !info.password ||
            !info.confirmPassword
        ) {
            messageApi.open({
                type: "warning",
                content: "Fields cannot be empty",
            });
        } else if (!info.email.includes("@")) {
            messageApi.open({
                type: "warning",
                content: "Not a valid email",
            });
        } else if (info.password !== info.confirmPassword) {
            messageApi.open({
                type: "warning",
                content: "Password does not match",
            });
        } else {
            messageApi.open({
                type: "success",
                content: "Signup Success",
            });
        }
    };
    return (
        <div className="flex items-center h-screen relative justify-between">
            {contextHolder}
            <div className="flex flex-col items-center justify-center h-full lg:flex-[0.5] flex-1">
                <div className="max-w-[400px]">
                    <h2 className="font-bold text-[40px]">
                        Create your Account
                    </h2>
                    <p className="font-normal text-[#71717A] text-xl">
                        Unlock all features
                    </p>
                    <div className="flex flex-col gap-y-3 mt-6">
                        <InputField
                            onChange={handleChange}
                            name={"first_name"}
                            placeholder={"First Name"}
                            type={"text"}
                            icon={null}
                        />
                        <InputField
                            onChange={handleChange}
                            name={"last_name"}
                            placeholder={"Last Name"}
                            type={"text"}
                            icon={null}
                        />
                        <InputField
                            onChange={handleChange}
                            name={"phone_number"}
                            placeholder={"Phone Number"}
                            type={"text"}
                            icon={null}
                        />
                        <InputField
                            onChange={handleChange}
                            name={"userAddress"}
                            placeholder={"Address"}
                            type={"text"}
                            icon={null}
                        />
                        <InputField
                            onChange={handleChange}
                            name={"username"}
                            placeholder={"Username"}
                            type={"text"}
                            icon={
                                <FaRegUser className="text-[#C4C9ED] text-xl" />
                            }
                        />
                        <InputField
                            onChange={handleChange}
                            name={"email"}
                            placeholder={"Email"}
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
                                onChange={handleChange}
                                name="password"
                                type={"password"}
                                className="bg-transparent outline-none border-none w-full"
                                placeholder={"Password"}
                            />
                        </div>
                        <div className="bg-[#EAEFFF] border-2 flex items-center gap-x-2 border-inputBorderColor rounded-lg w-[400px] px-2 py-3">
                            <Image
                                className="max-w-[24px]"
                                src={passicon}
                                alt=""
                            />
                            <input
                                onChange={handleChange}
                                name="confirmPassword"
                                type={"password"}
                                className="bg-transparent outline-none border-none w-full"
                                placeholder={"Confirm Password"}
                            />
                        </div>
                    </div>
                    <div className="flex items-center gap-2 mt-2">
                        <input type="checkbox" />
                        <p className="font-light text-[#71717A]">
                            Accept{" "}
                            <span className="text-[#8098F9] font-semibold">
                                terms and conditions
                            </span>
                        </p>
                    </div>
                    <button
                        onClick={handleSubmit}
                        className="w-full text-white bg-primaryColor rounded-lg py-3 mt-6 font-semibold text-xl"
                    >
                        Signup
                    </button>
                    <p className="text-[#71717A] font-light text-center mt-2">
                        You have an account?{" "}
                        <Link
                            href={"/login"}
                            className="text-[#8098F9] font-semibold"
                        >
                            Login now
                        </Link>
                    </p>
                </div>
            </div>
            <div className="bg-secondaryColor lg:flex hidden items-center justify-center flex-col h-screen flex-[0.5]">
                <Image className="max-w-[400px]" src={signup} alt="" />
                <h2 className="text-center text-[#E0EAFF] font-bold text-xl mt-6">
                    Join us!.
                </h2>
                <p className="text-center font-medium text-[#E0EAFF]">
                    Just go through the boring process of creating an account.
                </p>
            </div>
        </div>
    );
};
export default Signup;
