import { MdOutlineEmail } from "react-icons/md";
import forgot from "../../assets/forgotpass.png";
import InputField from "../ui/InputField";
import { useRouter } from "next/router";
import Image from "next/image";

import { useState } from "react";
import { message } from "antd";


const ForgotPassword = () => {
    const [messageApi, contextHolder] = message.useMessage();

    const router = useRouter();
    const [info, setInfo] = useState({
        email: "",
        repeatEmail: "",
    });

    const handleChange = (e: any) => {
        setInfo({ ...info, [e.target.name]: e.target.value });
    };

    const handleSubmit = () => {
        if (!info.email || !info.repeatEmail) {
            messageApi.open({
                type: "warning",
                content: "Fields cannot be empty",
            });
        } else if (info.email !== info.repeatEmail) {
            messageApi.open({
                type: "warning",
                content: "Email does not match",
            });
        } else {
            router.push("/otp");
        }
    };
    return (
        <div className="flex items-center h-screen relative justify-between">
            {contextHolder}
            <div className="flex flex-col items-center justify-center h-full lg:flex-[0.5] flex-1">
                <h2 className="font-bold text-[40px]">Forgot your password?</h2>
                <div className="max-w-[400px]">
                    <div className="flex flex-col gap-y-3 mt-10">
                        <InputField
                            name={"email"}
                            onChange={handleChange}
                            placeholder={"Email"}
                            type={"email"}
                            icon={
                                <MdOutlineEmail className="text-[#C4C9ED] text-2xl" />
                            }
                        />
                        <InputField
                            name={"repeatEmail"}
                            onChange={handleChange}
                            placeholder={"Repeat Email"}
                            type={"email"}
                            icon={
                                <MdOutlineEmail className="text-[#C4C9ED] text-2xl" />
                            }
                        />
                    </div>
                    <button
                        onClick={handleSubmit}
                        className="w-full text-white bg-primaryColor rounded-lg py-3 mt-6 font-semibold text-xl"
                    >
                        GET OTP
                    </button>
                </div>
            </div>
            <div className="bg-primaryColor lg:flex hidden items-center justify-center flex-col h-screen flex-[0.5]">
                <Image className="max-w-[400px]" src={forgot} alt="" />
                <h2 className="text-center text-[#E0EAFF] font-bold text-xl mt-6">
                    Forgot your password?
                </h2>
                <p className="text-center font-medium text-[#E0EAFF]">
                    You can get them back easily.
                </p>
            </div>
        </div>
    );
};
export default ForgotPassword;
