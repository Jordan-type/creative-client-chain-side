import React from "react";
import { Link } from "react-router-dom";

// Icons

import { FaHeart } from "react-icons/fa";
import { AiFillStar } from "react-icons/ai";

// Fake Images
import blogPostImage from "../../../../assets/slide1.jpg";
import serviceImg from "../../../../assets/creative/cate1.png";
import serviceImg2 from "../../../../assets/creative/cate-2.png";
import serviceImg3 from "../../../../assets/creative/cate3.png";

// importing Images
import photographyImg from "../../../../assets/client/dashboard/explore1.png";
import videographyImg from "../../../../assets/client/dashboard/explore2.png";
import makeupImage from "../../../../assets/client/dashboard/explore3.png";
import writerImage from "../../../../assets/client/dashboard/explore4.png";
import modelImage from "../../../../assets/client/dashboard/explore5.png";
import fashionImage from "../../../../assets/client/dashboard/explore6.png";

// Fake data
const exploreData = [
    {
        link: "/category/photography",
        title: "Photography",
        itemImg: photographyImg,
    },
    {
        link: "/category/videography",
        title: "Videography",
        itemImg: videographyImg,
    },
    {
        link: "/category/makeupartist",
        title: "Makeup Artist",
        itemImg: makeupImage,
    },
    {
        link: "/category/writer",
        title: "Writer",
        itemImg: writerImage,
    },
    {
        link: "/category/model",
        title: "Model",
        itemImg: modelImage,
    },
    {
        link: "/category/fashionstylist",
        title: "Fashion stylist",
        itemImg: fashionImage,
    },
];

const postData = [
    {
        id: 1123,
        postImage: blogPostImage,
        title: "Number 1 Blog post, Hello World !! Good news!",
        description:
            "Lorem ipsum dolor sit amet etur adipisicing elit. Quisquam, quidem. Lorem ipsum dolor",
        tags: ["photography", "videography"],
        timestamp: new Date("2023-09-30T12:00:00").getTime(),
    },
    {
        id: 114311,
        postImage: blogPostImage,
        title: "Number 2 Blog post, Hello World !! Good news!",
        description:
            "Lorem ipsum dolor sit amet etur adipisicing elit. Quisquam, quidem. Lorem ipsum dolor",
        tags: ["photography", "videography"],
        timestamp: new Date("2023-07-30T12:00:00").getTime(),
    },
    {
        id: 1153411,
        postImage: blogPostImage,
        title: "Number 3 Blog post, Hello World !! Good news!",
        description:
            "Lorem ipsum dolor sit amet etur adipisicing elit. Quisquam, quidem. Lorem ipsum dolor",
        tags: ["photography", "videography"],
        timestamp: new Date("2023-06-30T12:00:00").getTime(),
    },
];

const creativeAds = [
    {
        id: 234,
        gig_img: serviceImg,
        title: "Hository building for the Internet Archive",
        creative_data: {
            profile_icon: serviceImg,
            name: "Aysha Karim",
            seller_level: "Top Rated",
        },
        review_data: {
            rating: 5,
            sold_count: 230,
        },
        gig_price: "2000",
    },
    {
        id: 2334254,

        gig_img: serviceImg2,
        title: "I will be your Photographer",
        creative_data: {
            profile_icon: serviceImg2,
            name: "Jamila Smith",
            seller_level: "Top Rated",
        },
        review_data: {
            rating: 5,
            sold_count: 230,
        },
        gig_price: "2000",
    },
    {
        id: 234643,

        gig_img: serviceImg3,
        title: "Job Title for Service Img",
        creative_data: {
            profile_icon: serviceImg3,
            name: "Kobuj Collection",
            seller_level: "Top Rated",
        },
        review_data: {
            rating: 5,
            sold_count: 230,
        },
        gig_price: "2000",
    },
];

const ExploreInfo = () => {
    // Shorting the Recent Post
    const sortedPosts = postData
        .map((post) => ({
            ...post,
            timestamp: new Date(post.timestamp).getTime(),
        }))
        .sort((a, b) => b.timestamp - a.timestamp);

    const mostRecentPost = sortedPosts[0];

    // =====================

    // Function to shuffle an array
    const shuffleArray = (array) => {
        const shuffledArray = [...array];
        for (let i = shuffledArray.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [shuffledArray[i], shuffledArray[j]] = [
                shuffledArray[j],
                shuffledArray[i],
            ];
        }
        return shuffledArray;
    };

    // Shuffling the creativeAds array
    const shuffledAds = shuffleArray(creativeAds);

    const selectedGig = shuffledAds[0];

    // =======================

    return (
        <div className="w-full flex flex-col ">
            {/* explore */}
            <div className="w-full mb-5">
                <h1 className="w-full font-garamond text-primaryColor text-xl font-bold mb-4">
                    Explore
                </h1>
                <div className="flex flex-wrap gap-4 w-full justify-around">
                    {exploreData.map((items, i) => {
                        const { link, title, itemImg } = items;

                        return (
                            <Link
                                to={link}
                                className="h-28 w-32 relative group"
                                key={i}
                            >
                                <img
                                    src={itemImg}
                                    alt={title}
                                    className="w-full h-full object-cover"
                                />
                                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity bg-primaryColor bg-opacity-50 flex items-center justify-center duration-300 rounded-md">
                                    <h2 className="text-sm font-bold text-white">
                                        {title}
                                    </h2>
                                </div>
                            </Link>
                        );
                    })}
                </div>
            </div>

            {/* Ads */}
            <div className="w-full h-40 bg-gray-600 animate-pulse my-5 text-xl text-white font-semibold">
                Ads
            </div>

            {/* Add recent blog post */}
            <div className="w-full my-5">
                <h1 className="w-full font-garamond text-primaryColor font-bold text-xl mb-4">
                    Recent Blog Post:
                </h1>
                <div className="w-full flex">
                    <Link
                        to={`/blog/${mostRecentPost.id}`}
                        key={mostRecentPost.id}
                        className="w-full border border-gray-300 rounded-lg p-4 hover:shadow-md transition duration-300 flex flex-col gap-3"
                    >
                        <img
                            src={mostRecentPost.postImage}
                            alt={mostRecentPost.title}
                            className="w-full h-32 object-cover"
                        />
                        <div className="mt-2 flex justify-start items-center gap-4">
                            {mostRecentPost.tags.map((tag) => (
                                <span
                                    key={tag}
                                    className="bg-gray-300 text-gray-700 px-2 py-1 text-sm rounded-full"
                                >
                                    {tag}
                                </span>
                            ))}
                        </div>
                        <h2 className="text-lg font-semibold line-clamp-2">
                            {mostRecentPost.title}
                        </h2>
                        <p className="text-gray-500 w-full line-clamp-2">
                            {mostRecentPost.description}
                        </p>
                    </Link>
                </div>
            </div>

            {/* Add Creatives Addvertisement */}
            <div className="w-full my-5">
                <h1 className="my-5 w-full font-bold font-garamond text-2xl text-primaryColor">
                    Services You may interest:
                </h1>

                {selectedGig && (
                    <div key={selectedGig.id}>
                        {/* Added the id here */}

                        <div className="flex flex-col flex-wrap gap-2 justify-center items-center border border-[#E4E5E7] w-72">
                            <div className="w-full h-auto">
                                <img
                                    src={selectedGig.gig_img}
                                    alt={selectedGig.title}
                                    className="h-40 w-full object-cover"
                                />
                            </div>
                            {/* Ttitle and profile and rating */}
                            <div className="flex flex-col gap-2 w-full py-2 px-3">
                                <div className="flex w-full gap-2 items-center justify-start">
                                    <img
                                        src={
                                            selectedGig.creative_data
                                                .profile_icon
                                        }
                                        alt={selectedGig.creative_data.name}
                                        className="h-10 w-10 rounded-full"
                                    />
                                    <div className="flex flex-col gap-[2px]">
                                        <p className="font-bold text-md">
                                            {selectedGig.creative_data.name}
                                        </p>
                                        <p
                                            className={`font-medium text-sm ${
                                                selectedGig.creative_data
                                                    .seller_level ===
                                                "Top Rated"
                                                    ? "text-[#FFBE5B]"
                                                    : "text-[#B5B6BA]"
                                            }`}
                                        >
                                            {
                                                selectedGig.creative_data
                                                    .seller_level
                                            }
                                        </p>
                                    </div>
                                </div>

                                {/* Title */}
                                <h1 className="line-clamp-2 text-lg">
                                    {selectedGig.title}
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
                    </div>
                )}
            </div>
        </div>
    );
};

export default ExploreInfo;
