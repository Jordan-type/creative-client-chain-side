import React from "react";
import { Link } from "react-router-dom";

// import icons
import { AiFillStar } from "react-icons/ai";
import { FaFacebook, FaTwitter } from "react-icons/fa";

const ProfileInfo = ({ user }) => {
    const {
        username,
        userReview,
        userImage,
        userRating,
        userInbox,
        socialLinks,
    } = user;

    return (
        <div className="flex flex-col items-center justify-center w-full h-full">
            {/* User Image, name, rating , button, social icons */}
            <div className="flex flex-col w-full items-center justify-center gap-2">
                {/* img */}
                <div className="h-28 w-28 rounded-full overflow-hidden my-2">
                    <img src={userImage} alt={username} />
                </div>

                <div className="flex w-full items-center justify-between mt-4">
                    {/* name */}

                    <p className="text-lg font-garamond font-bold">
                        {username}
                    </p>
                    <p className="flex justify-center text-[#FFBE5B] items-center gap-2 text-[15px] font-roboto font-bold">
                        <AiFillStar className="text-lg" />
                        {userRating}
                    </p>
                </div>

                {/* buttons */}
                <div className="w-full flex flex-col gap-4 mt-5">
                    <Link
                        to="/client/post/job"
                        className="p-2 w-full font-semibold text-center rounded-md bg-primaryColor hover:bg-purple-700 text-white duration-200"
                    >
                        Post a Job
                    </Link>

                    <Link
                        to="/client/orders"
                        className="p-2 w-full font-semibold text-center rounded-md bg-primaryColor hover:bg-purple-700 text-white duration-200"
                    >
                        Active Orders
                    </Link>
                </div>

                {/* Social  Links */}

                <p className="font-bold w-full mt-5 border-b">Social links</p>

                <div className="flex gap-5 mt-5">
                    {socialLinks.map((socialLink, index) => (
                        <a
                            key={index}
                            href={socialLink.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="hover:text-primaryColor duration-200 text-3xl"
                        >
                            {socialLink.platform === "Facebook" && (
                                <FaFacebook className="text-[#1877F2]" />
                            )}
                            {socialLink.platform === "Twitter" && (
                                <FaTwitter className="text-[#00acee]" />
                            )}
                        </a>
                    ))}
                </div>
            </div>

            {/* User inbox */}

            <div className="w-full max-h-500px border  mt-5">
                {/* Inbox title */}
                <div className="flex items-center justify-between border-b py-5 px-3">
                    <h2 className="text-lg font-semibold text-secondaryColor">
                        Inbox
                    </h2>
                    <Link
                        to="user/inbox"
                        className="text-primaryColor hover:underline"
                    >
                        View All
                    </Link>
                </div>

                {/* Inbox messages */}
                <div className="flex flex-col overflow-y-auto">
                    {userInbox.map((message, index) => (
                        <Link
                            to={`/user/inbox/${index}`}
                            key={index}
                            className="flex items-center gap-3 p-2 border-b rounded hover:bg-gray-200"
                        >
                            <div className="h-16 w-20 flex justify-center items-center rounded-full overflow-hidden">
                                <img
                                    src={message.avatar}
                                    alt={message.sender}
                                    className="h-10 w-10 rounded-full object-cover"
                                />
                            </div>
                            <div className="w-11/12">
                                <p className="font-bold">{message.sender}</p>
                                <p className="line-clamp-1">
                                    {message.message}
                                </p>
                            </div>
                            <p className="text-gray-500 text-xs text-right">
                                {message.timestamp}
                            </p>
                        </Link>
                    ))}
                </div>
            </div>

            {/* user Review */}

            <div className="w-full max-h-500px border  mt-5">
                {/* Review title */}
                <div className="flex items-center justify-between border-b py-5 px-3">
                    <h2 className="text-lg font-semibold text-secondaryColor">
                        Reviews
                    </h2>
                    <Link
                        to="/reviews"
                        className="text-primaryColor hover:underline"
                    >
                        View All
                    </Link>
                </div>

                {/* Review entries */}
                <div className="flex flex-col overflow-y-auto max-h-[500px] font-garamond">
                    {userReview.map((review, index) => (
                        <div
                            key={index}
                            className="flex flex-col items-start gap-3 p-2 border-b rounded mt-4"
                        >
                            <div className="w-full flex justify-start gap-5 items-center rounded-full overflow-hidden">
                                <img
                                    src={review.avatar}
                                    alt={review.reviewer}
                                    className="h-10 w-10 rounded-full object-cover"
                                />

                                <div className="flex flex-col gap-1">
                                    <p className="font-bold">
                                        {review.reviewer}
                                    </p>
                                    <div className="flex items-center text-[#FFBE5B] font-roboto gap-2">
                                        <AiFillStar />
                                        <p>{review.rating}</p>
                                    </div>
                                </div>
                            </div>
                            <div className="w-full text-lg">
                                <p>{review.reviewText}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default ProfileInfo;
