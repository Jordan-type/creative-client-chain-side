import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";

import slide1 from "../../../assets/slide6.png";

import slide2 from "../../../assets/slide8.png";
import slide3 from "../../../assets/slide9.jpg";

// Gallery Slide Data
const gallerySlideData = [
    {
        img: slide1,
        title: "Showcase of Excellence: Inspiring Works and Creative Brilliance",
        subTitle:
            "Immerse yourself in our gallery of exceptional projects, where talent and creativity intertwine to inspire and captivate.",
    },

    {
        img: slide2,
        title: "Beyond Boundaries: The Artistry of Infinite Possibilities",
        subTitle:
            "Dive into an ethereal realm of boundless creativity, where imagination knows no limits and inspiration knows no end.",
    },

    {
        img: slide3,
        title: "Spectrum of Colors: A Kaleidoscope of Visual Splendor",
        subTitle:
            "Experience a symphony of hues, where colors dance in harmony, creating an awe-inspiring tapestry of visual delight.",
    },
];

const BottomSlider = () => {
    return (
        <>
            <Swiper
                pagination={{
                    dynamicBullets: true,
                    clickable: true,
                }}
                slidesPerView={1}
                spaceBetween={30}
                loop={true}
                modules={[Pagination, Autoplay]}
                autoplay={{
                    delay: 3000,
                    disableOnInteraction: false,
                    pauseOnMouseEnter: true,
                }}
                centeredSlides={true}
                className="w-full h-52 m-auto abcd"
                style={{
                    "--swiper-pagination-color": "#fff",
                    left: "0",
                    "--swiper-pagination-bottom": "20px",
                    // "--swiper-pagination-right": "auto",
                    // "--swiper-pagination-left": "-80px !important",
                    "--swiper-pagination-top": "auto",
                } as React.CSSProperties
            }
            >
                {gallerySlideData?.map((item, i) => {
                    const _id = 12;
                    const { img, title, subTitle } = item;

                    return (
                        <SwiperSlide
                            key={i}
                            className="font-roboto h-full w-full"
                        >
                            {/* Added the id here */}

                            <div
                                className="h-full w-full flex items-start"
                                style={{
                                    background: `url(${img})`,
                                    backgroundSize: "cover",
                                    backgroundRepeat: "no-repeat",
                                    backgroundPosition: "center",
                                }}
                            >
                                <div className="flex gallery_slide_bg flex-col justify-start h-full w-full px-8 py-4">
                                    <h1 className="text-white text-lg lg:text-3xl my-2 font-bold ">
                                        {title}
                                    </h1>
                                    <div className="flex items-center gap-5">
                                        {/* Sub Title */}

                                        <p className="text-[#fff] text-xs lg:text-xl font-light">
                                            {subTitle}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                    );
                })}
            </Swiper>
        </>
    );
};

export default BottomSlider;
