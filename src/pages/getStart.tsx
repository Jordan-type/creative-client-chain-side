import React from "react";
import Image from "next/image"
import Link from "next/link";
import img_getstart from "../assets/getstart.png";
import { useRouter } from 'next/router';

const GetStart: React.FC = () => {
    const router = useRouter();


    const handleCreativeSignUpClick = () => {
        router.push("/creative/register");  
    }

    const handleClientSignUpClick = () => {
        router.push("/client/register");  
    }


    return (
        <div className="main-container font-garamond flex h-auto w-full items-start justify-between">
            <div className="flex flex-col left-side  w-full gap-2 px-10 py-10 lg:py-12 ">
                {/* Heading */}
                <div className=" flex w-[90%] justify-between font-bold items-center text-sm lg:text-xl">
                    <Link href={"/"} className="text-primaryColor">
                        creative
                        <span className="text-secondaryColor">list</span>
                    </Link>

                    <Link
                        href={"/about"}
                        className="text-secondaryColor hover:text-primaryColor"
                    >
                        About
                    </Link>
                </div>
                {/* Title */}
                <div className="flex flex-col justify-start text-left my-10 lg:my-6 gap-5 lg:gap-10">
                    <h1 className="text-primaryColor text-4xl lg:text-6xl font-semibold line leading-snug">
                        Open Doors to <br /> Success: <br /> Get Started with
                        Us!
                    </h1>
                    <p className="text-secondaryColor w-full lg:w-[600px] text-md lg:text-xl">
                        Welcome to our Get Started page! Choose to Hire talented
                        professionals or Sign up with your skills. Join our
                        thriving community and unlock endless opportunities for
                        collaboration and success.
                    </p>
                </div>
                {/* Button */}

                <div className="flex w-full gap-4">
                    <Link
                        href={"/client/register"}
                        className="bg-primaryColor text-center hover:bg-purple-950 text-white w-[150px] duration-300 py-3 rounded-3xl"
                    >
                        Hire Creative
                    </Link>
                        <button
                            onClick={handleCreativeSignUpClick}
                            className="bg-transparent border text-center border-primaryColor hover:bg-purple-950 w-[150px] duration-300 py-3 rounded-3xl text-primaryColor hover:text-[#fff]"
                        >
                        Skill sign up
                    </button>
                </div>
                <p className="text-secondaryColor text-md lg:text-lg mt-8">
                    By signing up, you agree to the{" "}
                    <span className="font-bold">Terms of Service</span>
                </p>
            </div>
            <div className="getstart_right_side h-full w-[50%]  hidden lg:block md:block ">
                <Image
                    src={img_getstart}
                    alt="creativelist_getstart"
                    className="w-full h-screen"
                />
            </div>
        </div>
    );
};

export default GetStart;
