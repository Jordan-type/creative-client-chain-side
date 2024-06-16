import React from "react";
import { BsArrowRight } from "react-icons/bs";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { FaHeart } from "react-icons/fa";
import { AiFillStar } from "react-icons/ai";

const CardsContainer = ({ title, cardData, color }) => {
    console.log(color);
    return (
        <div className="flex flex-col w-full border border-gray-200 rounded-md p-5 font-roboto">
            <div className="flex flex-row justify-between items-center my-8">
                <div className="flex items-center gap-2">
                    <h1
                        className={`text-2xl font-bold`}
                        style={{ color: color }}
                    >
                        {title}
                    </h1>
                    <p className="text-2xl font-bold text-[#404145]">
                        <BsArrowRight />
                    </p>
                </div>
                {/* Button */}
            </div>
            {/* Card */}

            {/* ================================== */}

            <Swiper
                slidesPerView={4}
                spaceBetween={50}
                loop={true}
                className="w-full"
                style={{
                    "--swiper-pagination-color": "#fff",
                }}
                breakpoints={{
                    // When window width is >= 640px
                    300: {
                        slidesPerView: 1,
                        spaceBetween: 20,
                    },
                    400: {
                        slidesPerView: 1,
                        spaceBetween: 20,
                    },
                    640: {
                        slidesPerView: 1,
                        spaceBetween: 20,
                    },
                    // When window width is >= 768px
                    768: {
                        slidesPerView: 2,
                        spaceBetween: 30,
                    },
                    // When window width is >= 1024px
                    1024: {
                        slidesPerView: 4,
                        spaceBetween: 40,
                    },
                }}
            >
                {cardData?.map((item, i) => {
                    return (
                        <SwiperSlide key={i} className="">
                            {/* Added the id here */}

                            <div className="flex flex-col flex-wrap gap-2 justify-center items-center border border-[#E4E5E7] w-72">
                                <div className="">
                                    <img
                                        src={item.gig_img}
                                        alt={item.title}
                                        className="max-w-60"
                                    />
                                </div>
                                {/* Ttitle and profile and rating */}
                                <div className="flex flex-col gap-2 w-full py-2 px-3">
                                    <div className="flex w-full gap-2 items-center justify-start">
                                        <img
                                            src={
                                                item.creative_data.profile_icon
                                            }
                                            alt={item.creative_data.name}
                                            className="h-10 w-10 rounded-full"
                                        />
                                        <div className="flex flex-col gap-[2px]">
                                            <p className="font-bold text-md">
                                                {item.creative_data.name}
                                            </p>
                                            <p
                                                className={`font-medium text-sm ${
                                                    item.creative_data
                                                        .seller_level ===
                                                    "Top Rated"
                                                        ? "text-[#FFBE5B]"
                                                        : "text-[#B5B6BA]"
                                                }`}
                                            >
                                                {
                                                    item.creative_data
                                                        .seller_level
                                                }
                                            </p>
                                        </div>
                                    </div>

                                    {/* Title */}
                                    <h1 className="line-clamp-2 text-lg">
                                        {item.title}
                                    </h1>
                                    <div className="flex border-b gap-1 text-lg justify-start items-center w-full">
                                        <AiFillStar
                                            color="#FFBE5B"
                                            className="text-xl"
                                        />
                                        {/* Add dynamic star */}
                                        <p className="text-[#FFBE5B] text-md font-bold">
                                            5.0
                                        </p>
                                        <p className="text-[#B5B6BA] text-sm font-normal">
                                            (342)
                                        </p>
                                    </div>
                                </div>
                                {/* Favorite and price */}
                                <div className="flex w-full items-center justify-between py-2 px-3">
                                    <FaHeart className="text-[#B5B6BA] text-2xl cursor-pointer" />
                                    <div className="flex flex-col items-end">
                                        <p className="text-xs font-bold text-[#74767E]">
                                            STARTING AT
                                        </p>
                                        <p className="text-md text-[#404145] font-medium">
                                            K 2344
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                    );
                })}
            </Swiper>
        </div>
    );
};

export default CardsContainer;
