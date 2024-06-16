import React, { Suspense, lazy } from "react";
import GallerySlider from "./GallerySlider";
import "./Gallery.css";
import Loader from "../../loader/Loader";

// import GalleryCard from "./GalleryCard";

const LazyGalleryCard = lazy(() => import("./GalleryCard"));

const Gallery = () => {
    return (
        <div className="mt-14 lg:mt-16">
            <div className="flex flex-col">
                <div>
                    <GallerySlider />
                </div>
                <div className=" flex px-6 py-4 ">
                    <Suspense fallback={<Loader />}>
                        <LazyGalleryCard />
                    </Suspense>
                    {/* <GalleryCard />  */}
                </div>
                <div className="flex justify-center w-full mt-4">
                    <button className="bg-primaryColor text-white hover:bg-purple-950 duration-300 px-6 py-2 rounded-md">
                        See More
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Gallery;
