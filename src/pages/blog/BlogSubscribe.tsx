import React from "react";
import { LuMailPlus } from "react-icons/lu";

const BlogSubscribe = () => {
    return (
        <div className="flex flex-col lg:flex-row md:flex-row xl:flex-row justify-between items-center p-5 lg:p-8 gap-5 blog_subscribe-bg h-full w-full rounded-lg">
            <div className="flex flex-col items-center text-center lg:items-start gap-3 font-roboto">
                <p className="text-white text-xl font-light">
                    <span className="font-bold">Subscribe</span> to our blog
                </p>

                <p className="text-white text-lg font-light">
                    Get our fresh, new content straight to your inbox.
                </p>
            </div>

            <div>
                <button className="flex justify-center items-center gap-2 px-6 py-3 bg-white hover:bg-primaryColor hover:text-white duration-300 rounded-3xl text-primaryColor">
                    <p className="text-xl ">
                        <LuMailPlus />
                    </p>
                    <p className="text-md ">Subscribe now</p>
                </button>
            </div>
        </div>
    );
};

export default BlogSubscribe;
