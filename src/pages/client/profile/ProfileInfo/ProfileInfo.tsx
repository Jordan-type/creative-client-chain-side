import React from "react";
import { AiFillStar } from "react-icons/ai";
import { FaFacebook, FaTwitter } from "react-icons/fa";
import Link from "next/link";
import Image, { StaticImageData } from "next/image";
import { User } from "../../../../types/types";



interface ProfileInfoProps {
    user: User;
}

const ProfileInfo = ({ user }:ProfileInfoProps) => {
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
            {/* User Image, name, rating, button, social icons */}
            <div className="flex flex-col w-full items-center justify-center gap-2">
                <div className="h-28 w-28 rounded-full overflow-hidden my-2">
                    <Image 
                        width={40}
                        height={40} 
                        src={userImage} 
                        alt={username} />
                </div>
                <div className="flex w-full items-center justify-between mt-4">
                    <p className="text-lg font-garamond font-bold">
                        {username}
                    </p>
                    <p className="flex justify-center text-[#FFBE5B] items-center gap-2 text-[15px] font-roboto font-bold">
                        <AiFillStar className="text-lg" />
                        {userRating}
                    </p>
                </div>
                <div className="w-full flex flex-col gap-4 mt-5">
                    <Link
                        href="/client/jobpost"
                        className="p-2 w-full font-semibold text-center rounded-md bg-primaryColor hover:bg-purple-700 text-white duration-200"
                    >
                        Post a Job
                    </Link>
                    <Link
                        href="/client/orders"
                        className="p-2 w-full font-semibold text-center rounded-md bg-primaryColor hover:bg-purple-700 text-white duration-200"
                    >
                        Active Orders
                    </Link>
                </div>
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
            <div className="w-full max-h-500px border mt-5">
                <div className="flex items-center justify-between border-b py-5 px-3">
                    <h2 className="text-lg font-semibold text-secondaryColor">
                        Inbox
                    </h2>
                    <Link
                        href="/user/inbox"
                        className="text-primaryColor hover:underline"
                    >
                        View All
                    </Link>
                </div>
                <div className="flex flex-col overflow-y-auto">
                    {userInbox.map((message, index) => (
                        <Link
                            href={`/user/inbox/${index}`}
                            key={index}
                            className="flex items-center gap-3 p-2 border-b rounded hover:bg-gray-200"
                        >
                            <div className="h-16 w-20 flex justify-center items-center rounded-full overflow-hidden">
                                <Image
                                    src={message.avatar}
                                    alt={message.sender}
                                    width={20}
                                    height={20}
                                    className="h-10 w-10 rounded-full object-cover"
                                />
                            </div>
                            <div className="w-11/12">
                                <p className="font-bold">{message.sender}</p>
                                <p className="line-clamp-1">{message.message}</p>
                            </div>
                            <p className="text-gray-500 text-xs text-right">
                                {message.timestamp}
                            </p>
                        </Link>
                    ))}
                </div>
            </div>
            <div className="w-full max-h-500px border mt-5">
                <div className="flex items-center justify-between border-b py-5 px-3">
                    <h2 className="text-lg font-semibold text-secondaryColor">
                        Reviews
                    </h2>
                    <Link
                        href="/reviews"
                        className="text-primaryColor hover:underline"
                    >
                        View All
                    </Link>
                </div>
                <div className="flex flex-col overflow-y-auto max-h-[500px] font-garamond">
                    {userReview.map((review, index) => (
                        <div
                            key={index}
                            className="flex flex-col items-start gap-3 p-2 border-b rounded mt-4"
                        >
                            <div className="w-full flex justify-start gap-5 items-center rounded-full overflow-hidden">
                                <Image
                                    src={review.avatar}
                                    alt={review.reviewer}
                                    width={20}
                                    height={20}
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
