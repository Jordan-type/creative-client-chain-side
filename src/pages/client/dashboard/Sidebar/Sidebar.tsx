import React, { useState } from "react";
import { useRouter } from "next/router";
import Link from "next/link";

// importing icons

import {
    MdSpaceDashboard,
    MdTask,
    MdMessage,
    MdAccountBalanceWallet,
    MdLocalOffer,
    MdOutlineSettingsSuggest,
} from "react-icons/md";

import {
    PiShootingStarBold,
    PiSignpostBold,
    PiPlant,
    PiFinnTheHumanFill,
} from "react-icons/pi";

import { GiStarsStack } from "react-icons/gi";

const Sidebar = () => {
    const router = useRouter();
    const { pathname } = router;

    const [ordersDropdownOpen, setOrdersDropdownOpen] = useState(false);
    const [reviewDropdownOpen, setReviewDropdownOpen] = useState(false);

    const toggleOrdersDropdown = () => {
        setOrdersDropdownOpen(!ordersDropdownOpen);
    };

    const toggleReviewDropdown = () => {
        setReviewDropdownOpen(!reviewDropdownOpen);
    };

    const orders = [
        {
            key: "1",
            label: (
                <Link href="/client/dashboard/orders/completeorders">
                    Completed Orders
                </Link>
            ),
        },
        {
            key: "2",
            label: (
                <Link href="/client/dashboard/orders/activeorders">
                    Active Orders
                </Link>
            ),
        },
        {
            key: "3",
            label: (
                <Link href="/client/dashboard/orders/cancelorders">
                    Cancelled Orders
                </Link>
            ),
        },
    ];

    const reviews = [
        {
            key: "1",
            label: (
                <Link href="/client/dashboard/reviews/myreviews">
                    My Reviews
                </Link>
            ),
        },
        {
            key: "2",
            label: (
                <Link href="/client/dashboard/reviews/writtenreviews">
                    Written Reviews
                </Link>
            ),
        },
    ];

    return (
        <div className="w-full h-full">
            <div className="flex flex-col justify-start items-start w-full h-full gap-2 relative">
                {/* Dashboard */}
                <Link
                    href="/client/dashboard"
                    className={`flex py-2 px-5 gap-2 justify-start w-full items-center font-semibold text-lg text-primaryColor hover:text-purple-700 ${
                        pathname === "/client/dashboard"
                            ? "bg-purple-100 leftArrowIcon text-purple-700"
                            : ""
                    }`}
                >
                    <MdSpaceDashboard className="text-xl" />
                    <p>Dashboard</p>
                </Link>

                {/* Orders */}
                <div className="relative w-full">
                    <button
                        onClick={toggleOrdersDropdown}
                        className={`${
                            pathname.startsWith("/client/dashboard/orders")
                                ? "bg-purple-100 leftArrowIcon text-purple-700"
                                : ""
                        } flex gap-2 py-2 px-5 justify-start w-full items-center font-semibold text-lg text-primaryColor hover:text-purple-700`}
                    >
                        <MdTask className="text-xl" />
                        <p>Orders</p>
                    </button>
                    {ordersDropdownOpen && (
                        <div className="absolute top-full left-20 z-50 mt-1 w-44 bg-white border border-gray-300 shadow-lg rounded-lg">
                            {orders.map((order) => (
                                <div
                                    key={order.key}
                                    className="py-2 px-4 hover:text-purple-600"
                                >
                                    {order.label}
                                </div>
                            ))}
                        </div>
                    )}
                </div>

                <Link
                    href="/client/messages"
                    className={`${
                        pathname === "/client/messages"
                            ? "bg-purple-100 leftArrowIcon text-purple-700"
                            : ""
                    } py-2 px-5 flex gap-2 justify-start w-full items-center font-semibold text-lg text-primaryColor hover:text-purple-700`}
                >
                    <MdMessage className="text-xl" />
                    <p>Message</p>
                </Link>

                {/* Reviews */}
                <div className="relative w-full">
                    <button
                        onClick={toggleReviewDropdown}
                        className={`${
                            pathname.startsWith("/client/dashboard/reviews")
                                ? "bg-purple-100 leftArrowIcon text-purple-700"
                                : ""
                        } flex gap-2 py-2 px-5 justify-start w-full items-center font-semibold text-lg text-primaryColor hover:text-purple-700`}
                    >
                        <PiShootingStarBold className="text-xl" />
                        <p>Reviews</p>
                    </button>
                    {reviewDropdownOpen && (
                        <div className="absolute top-full left-20 z-50 mt-1 w-40 bg-white border border-gray-300 shadow-lg rounded-lg">
                            {reviews.map((review) => (
                                <div
                                    key={review.key}
                                    className="py-2 px-4 hover:text-purple-600"
                                >
                                    {review.label}
                                </div>
                            ))}
                        </div>
                    )}
                </div>

                <Link
                    href="/client/post/job"
                    className={`${
                        pathname === "/client/post/job"
                            ? "bg-purple-100 leftArrowIcon text-purple-700"
                            : ""
                    } py-2 px-5 flex gap-2 justify-start w-full items-center font-semibold text-lg text-primaryColor hover:text-purple-700`}
                >
                    <PiSignpostBold className="text-xl" />
                    <p>Post a Job</p>
                </Link>

                <Link
                    href="/client/referralprogram"
                    className={`${
                        pathname === "/client/referralprogram"
                            ? "bg-purple-100 leftArrowIcon text-purple-700"
                            : ""
                    } py-2 px-5 flex gap-2 justify-start w-full items-center font-semibold text-lg text-primaryColor hover:text-purple-700`}
                >
                    <PiPlant className="text-xl" />
                    <p>Referral Program</p>
                </Link>

                <Link
                    href="/client/wallet"
                    className={`${
                        pathname === "/client/wallet"
                            ? "bg-purple-100 leftArrowIcon text-purple-700"
                            : ""
                    } py-2 px-5 flex gap-2 justify-start w-full items-center font-semibold text-lg text-primaryColor hover:text-purple-700`}
                >
                    <MdAccountBalanceWallet className="text-xl" />
                    <p>Wallet</p>
                </Link>

                <Link
                    href="/client/rewards"
                    className={`${
                        pathname === "/client/rewards"
                            ? "bg-purple-100 leftArrowIcon text-purple-700"
                            : ""
                    } py-2 px-5 flex gap-2 justify-start w-full items-center font-semibold text-lg text-primaryColor hover:text-purple-700`}
                >
                    <MdLocalOffer className="text-xl" />
                    <p>Rewards</p>
                </Link>

                <div className="border w-full border-purple-900" />

                <Link
                    href="/client/profile"
                    className={`${
                        pathname === "/client/profile"
                            ? "bg-purple-100 leftArrowIcon text-purple-700"
                            : ""
                    } py-2 px-5 flex gap-2 justify-start w-full items-center font-semibold text-lg text-primaryColor hover:text-purple-700`}
                >
                    <PiFinnTheHumanFill className="text-xl" />
                    <p>Profile</p>
                </Link>

                <Link
                    href="/user/setting"
                    className={`${
                        pathname === "/user/setting"
                            ? "bg-purple-100 leftArrowIcon text-purple-700"
                            : ""
                    } py-2 px-5 flex gap-2 justify-start w-full items-center font-semibold text-lg text-primaryColor hover:text-purple-700`}
                >
                    <MdOutlineSettingsSuggest className="text-xl" />
                    <p>Setting</p>
                </Link>
            </div>
        </div>
    );
};

export default Sidebar;
