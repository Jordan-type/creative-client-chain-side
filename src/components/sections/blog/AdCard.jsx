import React from "react";

const AdCard = ({ img, link }) => {
    return (
        <div className="ad-container bg-gray-100 rounded-lg overflow-hidden max-w-2xl">
            <a href={link} target="_blank" rel="noopener noreferrer">
                <img src={img} alt="Advertisement" className="ad-image" />
            </a>
        </div>
    );
};

export default AdCard;
