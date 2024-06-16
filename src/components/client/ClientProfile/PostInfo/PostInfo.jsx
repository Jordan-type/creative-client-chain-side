import React, { useState } from "react";
import { FaEllipsisH, FaHeart, FaRegHeart } from "react-icons/fa";
import { Link } from "react-router-dom";

const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

const slowrender = async () => {
    await sleep(200000);
};

slowrender();

const PostInfo = ({ user }) => {
    const { userPosts } = user;

    const [dropdownStates, setDropdownStates] = useState(
        userPosts.reduce((acc, post) => {
            acc[post.id] = false;
            return acc;
        }, {})
    );

    const handleDropdownToggle = (id) => {
        // Toggle the state for the clicked post
        setDropdownStates((prevStates) => ({
            ...prevStates,
            [id]: !prevStates[id],
        }));
    };

    return (
        <div className="flex flex-col items-center justify-center w-full h-full">
            {/* User posts */}
            <div className="w-full max-h-[1200px] overflow-y-auto scrollbar-hidden">
                {userPosts.map((post) => {
                    const {
                        id,
                        title,
                        content,
                        mentions,
                        postImage,
                        liked,
                        likes,
                    } = post;

                    return (
                        <div
                            key={id}
                            className="p-4 border rounded bg-white flex flex-col gap-4 mb-4"
                        >
                            <div className="flex justify-end relative">
                                <button
                                    onClick={() => handleDropdownToggle(id)}
                                >
                                    <FaEllipsisH className="text-gray-600" />
                                </button>
                                {/* Add a dropdown for reporting */}
                                {dropdownStates[id] && (
                                    <div className="absolute top-0 right-0 mt-8 bg-white border border-gray-300 rounded shadow">
                                        <ul className="py-1">
                                            <button
                                                onClick={() => console.log(id)}
                                                className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
                                            >
                                                Report
                                            </button>
                                        </ul>
                                    </div>
                                )}
                            </div>
                            <img
                                src={postImage}
                                alt={title}
                                className="h-500px max-h-[500px] w-450px max-w-full object-cover"
                            />
                            <div className="flex items-center gap-2">
                                {liked ? (
                                    <button>
                                        <FaHeart className="text-red-500" />
                                    </button>
                                ) : (
                                    <button>
                                        <FaRegHeart />
                                    </button>
                                )}

                                <p>{likes} Likes</p>
                            </div>
                            <p>{content}</p>
                            <div className="flex gap-2">
                                {mentions.map((mention, index) => (
                                    <Link
                                        to={`/${mention.username}`}
                                        key={index}
                                    >
                                        <img
                                            src={mention.avatar}
                                            alt={mention.username}
                                            className="h-8 w-8 rounded-full object-cover"
                                        />
                                    </Link>
                                ))}
                            </div>
                        </div>
                    );
                })}
            </div>
        </div>
    );
};

export default PostInfo;
