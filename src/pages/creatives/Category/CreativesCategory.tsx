import React, { useState } from "react";
import Image from "next/image";
import img1 from "../../../assets/creative/cate1.png";
import img2 from "../../../assets/creative/cate-2.png";
import img3 from "../../../assets/creative/cate3.png";
import img4 from "../../../assets/creative/cate4.png";
import img5 from "../../../assets/creative/cate5.png";
import img6 from "../../../assets/creative/cate6.png";
import "./CreativesStyle.css";
import CreativesCateModal from "./CreativesCateModal";
import { Modal } from "antd";

const creativeCateData = [
    { title: "Photographer", cover_img: img1 },
    { title: "Videographer", cover_img: img2 },
    { title: "Makeup Artist", cover_img: img3 },
    { title: "Writer", cover_img: img4 },
    { title: "Model", cover_img: img5 },
    { title: "Fashion Stylists", cover_img: img6 },
];

const CreativesCategory = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const showModal = () => {
        setIsModalOpen(true);
    };

    const handleCancel = () => {
        setIsModalOpen(false);
    };

    return (
        <div className="w-full h-full font-garamond ">
            <div className="flex flex-col w-full cate-bg min-h-screen justify-center items-center gap-4 p-10">
                <h1 className="text-2xl lg:text-5xl font-bold text-primaryColor my-4 ">
                    Select Your Skill
                </h1>
                {/* Cards */}
                <div className="grid grid-cols-1 lg:grid-cols-3  justify-center gap-8">
                    {creativeCateData.map((item, i) => (
                        <div
                            className={`w-auto lg:w-80 shadow-md hover:shadow-2xl bg-white cursor-pointer h-full lg:h-[380px] flex gap-2 flex-col rounded-md ${
                                i === 1 || i === 4 ? "mt-0 lg:mt-10" : "mt-0"
                            }`}
                            key={i}
                        >
                            <Image
                                src={item.cover_img}
                                alt="creativelist"
                                className="rounded-t-md w-52 lg:w-80 h-full"
                            />
                            <p className="text-center h-full text-xl font-semibold p-2">
                                {item.title}
                            </p>
                        </div>
                    ))}
                </div>
                <p className="text-[#000] text-center text-md lg:text-lg mt-10">
                    Skill not listed?{" "}
                    <span
                        className="text-primaryColor font-bold cursor-pointer underline"
                        onClick={showModal}
                    >
                        Click Here
                    </span>
                </p>
                <div className="creatives-modal">
                    <Modal
                        open={isModalOpen}
                        // onOk={handleOk}
                        width={700}
                        onCancel={handleCancel}
                        footer={null}
                        bodyStyle={{
                            backgroundColor: "#49326B",
                        }}
                    >
                        <CreativesCateModal handleCancel={handleCancel} />
                    </Modal>
                </div>
            </div>
        </div>
    );
};

export default CreativesCategory;
