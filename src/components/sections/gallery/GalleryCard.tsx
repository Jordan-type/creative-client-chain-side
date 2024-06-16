import React from "react";
import img_1 from "../../assets/getstart.png";
import img_2 from "../../assets/slide4.jpg";
import img_3 from "../../assets/category1.png";
import img_4 from "../../assets/category2.png";
import img_5 from "../../assets/category3.png";
import img_6 from "../../assets/service1.png";
import img_7 from "../../assets/service2.png";
import img_8 from "../../assets/service3.png";
import Image from "next/image";

const cardData = [
    {
        image: img_1,
        category: "Fashion",
        title: "Your Favorite Fashion Designer",
        author: "Kira Moyia",
        price: "1234",
    },
    {
        image: img_2,
        category: "Fashion",
        title: "Your Favorite Fashion Designer",
        author: "Kira Moyia",
        price: "1234",
    },
    {
        image: img_3,
        category: "Fashion",
        title: "Your Favorite Fashion Designer",
        author: "Kira Moyia",
        price: "1234",
    },
    {
        image: img_6,
        category: "Fashion",
        title: "Your Favorite Fashion Designer",
        author: "Kira Moyia",
        price: "1234",
    },

    {
        image: img_7,
        category: "Fashion",
        title: "Your Favorite Fashion Designer",
        author: "Kira Moyia",
        price: "1234",
    },
    {
        image: img_4,
        category: "Fashion",
        title: "Your Favorite Fashion Designer",
        author: "Kira Moyia",
        price: "1234",
    },
    {
        image: img_5,
        category: "Fashion",
        title: "Your Favorite Fashion Designer",
        author: "Kira Moyia",
        price: "1234",
    },
    {
        image: img_1,
        category: "Fashion",
        title: "Your Favorite Fashion Designer",
        author: "Kira Moyia",
        price: "1234",
    },
    {
        image: img_8,
        category: "Fashion",
        title: "Your Favorite Fashion Designer",
        author: "Kira Moyia",
        price: "1234",
    },
    {
        image: img_4,
        category: "Fashion",
        title: "Your Favorite Fashion Designer",
        author: "Kira Moyia",
        price: "1234",
    },

    {
        image: img_4,
        category: "Fashion",
        title: "Your Favorite Fashion Designer",
        author: "Kira Moyia",
        price: "1234",
    },
    // Add more card data objects if you have multiple cards
];

const GalleryCard = () => {
    return (
        <div className="columns-1 md:columns-3 lg:columns-4 xl:columns-4 leading-none gap-2">
            {cardData.map((card, index) => (
                <div
                    key={index}
                    className="inline-block m-2 min-w-full rounded overflow-hidden h-fit  border border-gray-200 font-montserrat"
                    // Remove fixed height and allow cards to adjust their height
                >
                    <Image
                        className="h-auto w-full object-cover" // Remove "object-cover" class and set width to full
                        src={card.image}
                        alt={card.title}
                    />
                    <div className="flex flex-col w-full gap-2 p-4">
                        <div className="font-semibold  text-xs text-[#6D6D71]">
                            {card.category}
                        </div>
                        <p className="text-[#424242] text-lg line-clamp-1 font-bold">
                            {card.title}
                        </p>
                        <p className="text-[#62646A] ">by {card.author}</p>
                        <div className="flex items-center w-full mt-4 justify-between gap-2">
                            <button className="px-2 py-1 border border-primaryColor text-sm bg-transparent hover:bg-primaryColor hover:text-white text-primaryColor  duration-300">
                                Connect With Creatived
                            </button>
                            <p className="text-gray-700 text-sm">
                                Price: ${card.price}
                            </p>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default GalleryCard;
