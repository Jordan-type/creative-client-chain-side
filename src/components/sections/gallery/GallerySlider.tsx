import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";

import slide1 from "../../assets/slide6.png";

import slide2 from "../../assets/slide8.png";
import slide3 from "../../assets/slide9.jpg";
import Image from "next/image";

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

const GallerySlider = () => {
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
                    delay: 2500,
                    disableOnInteraction: false,
                    pauseOnMouseEnter: true,
                }}
                centeredSlides={true}
                className="w-full h-80 flex items-center justify-center m-auto"
                style={{
                    "--swiper-pagination-color": "#fff",
                }}
            >
                {gallerySlideData?.map((item, i) => {
                    const _id = 12;
                    const { img, title, subTitle } = item;

                    return (
                        <SwiperSlide
                            key={i}
                            className="font-garamond h-full w-full"
                        >
                            {/* Added the id here */}

                            <div
                                className="h-full w-full flex items-center"
                                style={{
                                    background: `url(${img})`,
                                    backgroundSize: "cover",
                                    backgroundRepeat: "no-repeat",
                                    backgroundPosition: "center",
                                }}
                            >
                                <div className="flex gallery_slide_bg flex-col justify-center h-full w-full p-8">
                                    <h1 className="text-white text-2xl lg:text-5xl my-4 font-semibold ">
                                        {title}
                                    </h1>
                                    <div className="flex my-2 items-center gap-5">
                                        {/* Sub Title */}

                                        <p className="text-[#fff] text-xs lg:text-xl">
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

export default GallerySlider;
