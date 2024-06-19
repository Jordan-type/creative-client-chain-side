import React from "react";
import ProfileCard from "./Postjob&Search/ProfileCard";
import avatar from "../../../assets/author.jpg";
import SearchServices from "./Postjob&Search/SearchServices";
import CardsContainer from "./Cards/CardsContainer";
import card_img from "../../../assets/category1.png";
import card_img2 from "../../../assets/category2.png";
import card_img3 from "../../../assets/category3.png";
import card_img4 from "../../../assets/category4.png";
import profile_img from "../../../assets/freelance.png";
import BottomSlider from "./BottomSlider/BottomSlider";

const cardData = [
    {
        gig_img: card_img,
        title: "I will be your Photographer",
        creative_data: {
            profile_icon: profile_img,
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
        gig_img: card_img4,
        title: "I will be your Photographer",
        creative_data: {
            profile_icon: profile_img,
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
        gig_img: card_img2,
        title: "I will be your Photographer",
        creative_data: {
            profile_icon: profile_img,
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
        gig_img: card_img4,
        title: "I will be your Photographer",
        creative_data: {
            profile_icon: profile_img,
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
        gig_img: card_img3,
        title: "I will be your Photographer",
        creative_data: {
            profile_icon: profile_img,
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
        gig_img: card_img3,
        title: "I will be your Photographer",
        creative_data: {
            profile_icon: profile_img,
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
        gig_img: card_img4,
        title: "I will be your Photographer",
        creative_data: {
            profile_icon: profile_img,
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
        gig_img: card_img3,
        title: "I will be your Photographer",
        creative_data: {
            profile_icon: profile_img,
            name: "Aysha Karim",
            seller_level: "Top Rated",
        },
        review_data: {
            rating: 5,
            sold_count: 230,
        },
        gig_price: "2000",
    },
];

const ServicesPage = () => {
    return (
        <div className="h-full w-full">
            <div className="flex flex-col h-full w-full p-3">
                {/* Search & post a job */}
                <div className="flex flex-col gap-3 lg:flex-row md:flex-row xl:flex-row  ">
                    <ProfileCard
                        name="Rina"
                        image={avatar}
                        description="Get matched with creatives for your project"
                    />
                    <SearchServices />
                </div>
                {/* Recently Visited */}
                <div className="mt-4">
                    <CardsContainer
                        title={"Recently Visited Services"}
                        cardData={cardData}
                        color={"#404145"}
                    />
                </div>
                {/* top rated */}
                <div className="mt-4">
                    <CardsContainer
                        title={"Top Rated"}
                        cardData={cardData}
                        color={"#FFC107"}
                    />
                </div>
                {/* Most Visited */}
                <div className="mt-4">
                    <CardsContainer
                        title={"Most Visited"}
                        cardData={cardData}
                        color={"#1DBF73"}
                    />
                </div>
                {/* New Signup */}
                <div className="mt-4">
                    <CardsContainer
                        title={"New Signup"}
                        cardData={cardData}
                        color={"#005C79"}
                    />
                </div>
                {/* Bottom slider */}
                <div className="my-4">
                    <BottomSlider />
                </div>
            </div>
        </div>
    );
};

export default ServicesPage;
