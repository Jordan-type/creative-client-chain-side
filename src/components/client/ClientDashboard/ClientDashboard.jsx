import React from "react";
import Sidebar from "./Sidebar/Sidebar";

// importing icons
import { IoWalletOutline } from "react-icons/io5";
import { MdOutlineBorderColor, MdOutlinePostAdd } from "react-icons/md";

// importing images
import photgraphyImg from "../../../assets/creative/cate1.png";
import modelImg from "../../../assets/creative/cate5.png";
import writerImg from "../../../assets/creative/cate3.png";

import { DoughnutChart, PieChart } from "./ClientCharts/ClientChart";

// user will come from database

const user = {
    name: "Alexander",
    categoryIHiredMost: [
        {
            id: 123,
            categoryImage: photgraphyImg,
            categoryName: "Photography",
            totalSpend: 345,
            totalNumbersOfOrders: 32,
            totalCompletedOrders: 12,
        },

        {
            id: 123453,
            categoryImage: modelImg,
            categoryName: "Models",
            totalSpend: 45465,
            totalNumbersOfOrders: 154,
            totalCompletedOrders: 56,
        },

        {
            id: 126463,
            categoryImage: writerImg,
            categoryName: "Makeup Artists",
            totalSpend: 5300,
            totalNumbersOfOrders: 32,
            totalCompletedOrders: 24,
        },
    ],
};

const ClientDashboard = () => {
    return (
        <main className="h-full w-full">
            {/* Main div */}
            <section className="w-full h-full flex flex-col-reverse md:flex-row lg:flex-row justify-start gap-5 lg:gap-0 md:gap-0">
                {/* Sidebar */}
                <div className=" w-full lg:w-1/5 h-full">
                    <Sidebar />
                </div>

                {/* Content */}

                <div className=" w-full lg:w-4/5 h-full flex flex-col justify-start items-center p-10 bg-primaryColor min-h-screen rounded-none lg:rounded-r-lg lg:rounded-b-lg gap-5">
                    <h1 className="text-3xl lg:text-5xl font-garamond text-white font-semibold mb-5 w-full">
                        Welcome {user.name},
                    </h1>

                    {/* Active orders 3 cards */}

                    <div className=" flex flex-col lg:flex-row w-full justify-between items-center gap-10 my-5">
                        {/* Monney */}
                        <div className="flex justify-between items-center bg-purple-50 w-5/6 lg:w-1/3 p-2 rounded-lg shadow-lg shadow-purple-950">
                            <div className="flex flex-col gap-1 justify-center items-start text-lg">
                                <p className="text-primaryColor font-bold">
                                    Available Balance
                                </p>
                                <p className="font-bold">$100,000</p>
                            </div>

                            <div className="p-3 flex justify-center items-center bg-purple-300 rounded-lg text-primaryColor text-2xl">
                                <IoWalletOutline />
                            </div>
                        </div>

                        {/* orders */}

                        <div className="flex justify-between items-center bg-purple-50 w-5/6 lg:w-1/3 p-2 rounded-lg shadow-lg shadow-purple-950">
                            <div className="flex flex-col gap-1 justify-center items-start text-lg">
                                <p className="text-primaryColor font-bold">
                                    Total Order
                                </p>
                                <p className="font-bold">34</p>
                            </div>

                            <div className="p-3 flex justify-center items-center bg-purple-300 rounded-lg text-primaryColor text-2xl">
                                <MdOutlineBorderColor />
                            </div>
                        </div>

                        {/* Post Job */}

                        <div className="flex justify-between items-center bg-purple-50 w-5/6 lg:w-1/3 p-2 rounded-lg shadow-lg shadow-purple-950">
                            <div className="flex flex-col gap-1 justify-center items-start text-lg">
                                <p className="text-primaryColor font-bold">
                                    Total Job Post
                                </p>
                                <p className="font-bold">4</p>
                            </div>

                            <div className="p-3 flex justify-center items-center bg-purple-300 rounded-lg text-primaryColor text-2xl">
                                <MdOutlinePostAdd />
                            </div>
                        </div>
                    </div>

                    {/* Hired from Category */}
                    <div className="flex flex-col justify-start items-start w-full gap-3 my-5">
                        {/* Title */}
                        <h1 className="text-3xl lg:text-5xl font-semibold text-center lg:text-left font-garamond text-[#fff]">
                            Categories you’ve hired the most in
                        </h1>

                        <div className="flex flex-col lg:flex-row w-full h-full justify-start items-center gap-5 my-5 ">
                            {user.categoryIHiredMost?.map((item) => {
                                const {
                                    categoryImage,
                                    categoryName,
                                    id,
                                    totalCompletedOrders,
                                    totalNumbersOfOrders,
                                    totalSpend,
                                } = item;
                                return (
                                    <div className="flex gap-1 justify-center items-start w-5/6 lg:w-1/3 bg-[#fff] rounded-lg shadow-lg shadow-purple-950">
                                        {/* image */}
                                        <div className="w-1/3 h-36 overflow-hidden">
                                            <img
                                                src={categoryImage}
                                                alt={categoryName}
                                                className="h-36 w-auto object-cover rounded-l-lg"
                                            />
                                        </div>

                                        {/* content */}

                                        <div className="w-2/3 flex flex-col justify-start items-start gap-2 p-2">
                                            <h1 className="text-md font-semibold uppercase text-primaryColor font-montserrat">
                                                {categoryName}
                                                <div className="border border-primaryColor" />
                                            </h1>

                                            {/* much the spend */}
                                            <div className="flex flex-col w-full h-full">
                                                <p className="text-xs font-semibold text-gray-900 ">
                                                    Spend: {totalSpend} /-
                                                </p>
                                                <div className="w-full border mt-2" />
                                            </div>

                                            {/* how many orders */}
                                            <div className="flex flex-col w-full h-full">
                                                <p className="text-xs font-semibold text-gray-900 ">
                                                    Total Order:{" "}
                                                    {totalNumbersOfOrders}
                                                </p>
                                                <div className="w-full border mt-2" />
                                            </div>

                                            {/* Complete order */}

                                            <div className="flex flex-col w-full h-full">
                                                <p className="text-xs font-semibold text-gray-900 ">
                                                    Complete Order:{" "}
                                                    {totalCompletedOrders} %
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                );
                            })}
                        </div>
                    </div>

                    {/* ================================================== */}
                    {/* ================================================== */}
                    {/* ================================================== */}
                    {/* ================================================== */}
                </div>
            </section>
        </main>
    );
};

export default ClientDashboard;
