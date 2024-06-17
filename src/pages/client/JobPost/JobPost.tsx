import React from "react";
import Image from "next/image";
import { Link } from "react-router-dom";
import potjob from "../../../assets/client/postjob.png";

const JobPost: React.FC = () => {
    return (
        <div className="h-full w-full">
            <div className="flex flex-col w-full font-garamond">
                {/* Nav */}
                <div className="flex p-5 justify-between items-center ">
                    <Link
                        to="/"
                        className="text-primaryColor text-md lg:text-xl font-roboto font-bold "
                    >
                        creative
                        <span className="text-secondaryColor">list</span>
                    </Link>
                </div>
                {/* Title */}
                <h1 className="text-2xl mt-6 lg:text-5xl text-primaryColor w-full text-center font-bold">
                    Hire Top Talent for Your Project
                </h1>
                {/* Content */}
                <div className="flex w-full flex-col lg:flex-row items-center lg:items-start mt-4 gap-5 justify-between">
                    {/* Image */}
                    <div className="flex gap-5 lg:gap-3 flex-col w-full lg:w-[30%] items-center justify-center h-full mt-2 lg:mt-10 px-5 py-10 text-primaryColor">
                        <h1 className="text-start text-2xl lg:text-4xl font-semibold">
                            Let’s Start...
                        </h1>
                        <p className="text-center text-xl lg:text-xl text-black">
                            Connect with skilled freelancers, post your job, and
                            find the perfect match!
                        </p>
                        <Image
                            src={potjob}
                            alt="creativelist"
                            className="w-60 h-full"
                        />
                    </div>

                    {/* Job Description */}
                    <div className="flex flex-col ml-5 w-full lg:w-[60%] items-center justify-center h-full px-5 py-10 text-center text-primaryColor">
                        <form className="flex flex-col gap-5 h-full w-full items-center justify-center">
                            <div className="flex flex-col gap-3 w-full items-start">
                                <label
                                    htmlFor="title"
                                    className="text-lg font-bold"
                                >
                                    *Enter Job Title:
                                </label>
                                <input
                                    type="text"
                                    name="title"
                                    placeholder="Web Developer, Graphic Designer, Content Writer..."
                                    className="bg-[#8098f973] text-[#000] placeholder:text-[#2D31A6] border-2 p-3 border-[#8098F9] rounded-lg w-full lg:w-10/12"
                                />
                            </div>

                            <div className="flex flex-col gap-3 w-full items-start">
                                <label
                                    htmlFor="location"
                                    className="text-lg font-bold"
                                >
                                    *Enter Job Location:
                                </label>
                                <input
                                    type="text"
                                    name="location"
                                    placeholder="City, State, or Remote"
                                    className="bg-[#8098f973] text-[#000] placeholder:text-[#2D31A6] border-2 p-3 border-[#8098F9] rounded-lg w-full lg:w-10/12"
                                />
                            </div>

                            <div className="flex flex-col gap-3 w-full items-start">
                                <label
                                    htmlFor="timeline"
                                    className="text-lg font-bold"
                                >
                                    *Enter Project Timeline:
                                </label>
                                <input
                                    type="text"
                                    name="timeline"
                                    placeholder="1 week, 2 months, flexible..."
                                    className="bg-[#8098f973] text-[#000] placeholder:text-[#2D31A6] border-2 p-3 border-[#8098F9] rounded-lg w-full lg:w-10/12"
                                />
                            </div>

                            <div className="flex flex-col gap-3 w-full items-start">
                                <label
                                    htmlFor="budget"
                                    className="text-lg font-bold"
                                >
                                    *Enter Job Budget:
                                </label>
                                <input
                                    type="text"
                                    name="budget"
                                    placeholder="Enter your budget range"
                                    className="bg-[#8098f973] text-[#000] placeholder:text-[#2D31A6] border-2 p-3 border-[#8098F9] rounded-lg w-full lg:w-10/12"
                                />
                            </div>

                            <div className="flex flex-col gap-3 w-full items-start">
                                <label
                                    htmlFor="description"
                                    className="text-lg font-bold"
                                >
                                    *Enter Job Description:
                                </label>
                                <textarea
                                    rows={5}
                                    name="description"
                                    placeholder="Provide detailed description of the job..."
                                    className="bg-[#8098f973] text-[#000] placeholder:text-[#2D31A6] border-2 p-3 border-[#8098F9] rounded-lg w-full lg:w-10/12"
                                />
                            </div>

                            <div className="flex flex-col mt-10 w-full items-start">
                                <button className="bg-primaryColor rounded-md hover:bg-purple-900 px-10 w-full lg:w-80 py-3 text-xl font-bold text-white">
                                    Post
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default JobPost;
