import React from "react";
import BlogSlider from "./BlogSlider";
import BlogSubscribe from "./BlogSubscribe";
import BlogCategory from "./BlogCategory";
import BlogCard from "./BlogCard";

const Blog: React.FC = () => {
    return (
        <div className="mt-24 flex flex-col px-2 lg:px-5">
            {/* Title */}
            <div className="w-full flex flex-col justify-center items-center">
                <h1 className="text-primaryColor text-3xl font-garamond font-bold">
                    Explore Our Blog
                </h1>
                <p className="text-secondaryColor text-lg">
                    Insights, Inspiration, and Expertise
                </p>
            </div>
            {/* Slider  */}
            <div className="my-14">
                <BlogSlider />
            </div>
            {/* Subscribe */}
            <div className="my-5 mx-0 lg:mx-16 xl:mx-16 md:mx-14">
                <BlogSubscribe />
            </div>
            {/* Category */}
            <div className="my-14">
                <BlogCategory />
            </div>
            {/* Blog Post */}
            <div className="my-5 mx-16">
                <BlogCard />
            </div>
        </div>
    );
};

export default Blog;
