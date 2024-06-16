import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Pagination, Autoplay } from "swiper/modules";
import { Link } from "react-router-dom";

import slide_img from "../../assets/tech1.jpg";
import slide_img2 from "../../assets/tech2.jpg";
import author_img from "../../assets/author.jpg";

// This data will come dynamically. For now its static data. Remove it when we have database support. Here we will show our top blog posts

const slideData = [
    {
        // Id is included
        // id: Id will come from database
        title: "The Impact of Technology on the Workplace: How Technology is Changing",
        img: slide_img2,
        tag: "Technology",
        author_img: author_img,
        author_name: "Rina Maria",
        date: "July, 2021",
    },
    {
        // Id is included
        // id: Id will come from database
        title: "The Impact of Technology on the Workplace: How Technology is Changing",
        img: slide_img,
        tag: "Technology",
        author_img: author_img,
        author_name: "Rina Maria",
        date: "July, 2021",
    },
    {
        // Id is included
        // id: Id will come from database
        title: "The Impact of Technology on the Workplace: How Technology is Changing",
        img: slide_img2,
        tag: "Technology",
        author_img: author_img,
        author_name: "Rina Maria",
        date: "July, 2021",
    },
    {
        // Id is included
        // id: Id will come from database
        title: "The Impact of Technology on the Workplace: How Technology is Changing",
        img: slide_img,
        tag: "Technology",
        author_img: author_img,
        author_name: "Rina Maria",
        date: "July, 2021",
    },
];

const BlogSlider = () => {
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
                className="w-full h-96 flex items-center justify-center m-auto"
                style={{
                    "--swiper-pagination-color": "#fff",
                }}
            >
                {slideData?.map((item, i) => {
                    const _id = 12;
                    const { author_img, author_name, date, img, tag, title } =
                        item;

                    return (
                        <SwiperSlide key={i} className=" h-full w-full">
                            {/* Added the id here */}
                            <Link to={`/blog/${_id}`}>
                                <div
                                    className="h-full w-full flex rounded-md items-end"
                                    style={{
                                        background: `url(${img})`,
                                        backgroundSize: "cover",
                                        backgroundRepeat: "no-repeat",
                                        backgroundPosition: "center",
                                    }}
                                >
                                    <div className="flex flex-col justify-end h-full w-full lg:w-[70%] p-8">
                                        <p className="bg-primaryColor text-white px-2 py-1 rounded-md text-xs font-light max-w-fit text-center ">
                                            {tag}
                                        </p>
                                        <h1 className="text-white text-2xl lg:text-5xl my-4 font-semibold font-garamond">
                                            {title}
                                        </h1>
                                        <div className="flex my-2 items-center gap-5">
                                            {/* Authon img */}

                                            <img
                                                src={author_img}
                                                alt={author_name}
                                                className="h-10 w-10 rounded-full"
                                            />

                                            {/* Authon name */}
                                            <p className="text-[#fff] text-xs lg:text-sm">
                                                {author_name}
                                            </p>
                                            {/* Date */}
                                            <p className="text-[#fff] text-xs lg:text-sm">
                                                {date}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </Link>
                        </SwiperSlide>
                    );
                })}
            </Swiper>
        </>
    );
};

export default BlogSlider;
