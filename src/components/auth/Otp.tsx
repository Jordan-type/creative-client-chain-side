import React, { useState } from "react";
import passicon from "../../assets/passicon.svg";
import newpass from "../../assets/newpass.png";
import { useNavigate } from "react-router-dom";
import Link from "next/link"
import Image from "next/image"
import { message } from "antd";

const Otp = () => {
    const [messageApi, contextHolder] = message.useMessage();

    const navigate = useNavigate();
    const [info, setInfo] = useState({
        password: "",
        confirmPassword: "",
    });

    const handleChange = (e: any) => {
        setInfo({ ...info, [e.target.name]: e.target.value });
    };

    const handleSubmit = () => {
        if (!info.password || !info.confirmPassword) {
            messageApi.open({
                type: "warning",
                content: "Fields cannot be empty",
            });
        } else if (info.password !== info.confirmPassword) {
            messageApi.open({
                type: "warning",
                content: "Password does not match",
            });
        } else {
            navigate("/");
        }
    };
    return (
        <div className="flex items-center h-screen relative justify-between">
            {contextHolder}
            <div className="flex flex-col items-center justify-center h-full lg:flex-[0.5] flex-1">
                <h2 className="font-bold text-[40px]">
                    Enter your new password?
                </h2>
                <p className="font-normal text-[#71717A] text-xl">
                    This is the last step in recovering your password.
                </p>

                <div className="max-w-[400px]">
                    <div className="flex flex-col gap-y-3 mt-10">
                        <div className="bg-[#EAEFFF] border-2 flex items-center gap-x-2 border-inputBorderColor rounded-lg w-[400px] px-2 py-3">
                            <Image
                                className="max-w-[24px]"
                                src={passicon}
                                alt=""
                            />
                            <input
                                name="password"
                                onChange={handleChange}
                                type={"password"}
                                className="bg-transparent outline-none border-none w-full"
                                placeholder={"Password"}
                            />
                        </div>
                        <div className="bg-[#EAEFFF] border-2 flex items-center gap-x-2 border-inputBorderColor rounded-lg w-[400px] px-2 py-3">
                            <img
                                className="max-w-[24px]"
                                src={passicon}
                                alt=""
                            />
                            <input
                                name="confirmPassword"
                                onChange={handleChange}
                                type={"password"}
                                className="bg-transparent outline-none border-none w-full"
                                placeholder={"Confirm Password"}
                            />
                        </div>
                    </div>
                    <button
                        onClick={handleSubmit}
                        className="w-full text-white bg-primaryColor rounded-lg py-3 mt-6 font-semibold text-xl"
                    >
                        SUBMIT
                    </button>
                </div>
            </div>
            <div className="bg-primaryColor lg:flex hidden items-center justify-center flex-col h-screen flex-[0.5]">
                <Image className="max-w-[400px]" src={newpass} alt="" />
                <h2 className="text-center text-[#E0EAFF] font-bold text-xl mt-6">
                    This is the end!
                </h2>
                <p className="text-center font-medium text-[#E0EAFF]">
                    After entering the new password you will gain access to your
                    account.
                </p>
            </div>
        </div>
    );
};
export default Otp;
