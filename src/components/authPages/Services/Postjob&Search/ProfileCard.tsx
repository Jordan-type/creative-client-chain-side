import React from "react";
import { Link } from "react-router-dom";

const ProfileCard = ({ name, image, description }) => {
    return (
        <div className="flex border border-gray-200 p-10 h-full w-auto flex-col justify-center items-center rounded-md font-garamond gap-2">
            <img src={image} alt={name} className="h-12 w-12 rounded-md" />

            <h2 className="font-bold text-2xl text-gray-700">Hi {name},</h2>
            <p className="font-normal text-lg w-44 text-center text-gray-700">
                {description}
            </p>
            <Link
                to={"/client/post/job"}
                className=" mt-2 px-3 py-2 bg-primaryColor font-roboto text-white text-sm rounded-md hover:bg-purple-900 duration-300"
            >
                Post a request
            </Link>
        </div>
    );
};

export default ProfileCard;
