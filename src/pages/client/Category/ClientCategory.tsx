import React, { useState } from "react";
import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import { Modal } from "antd";
import ClientCategoryCard from "./ClientCategoryCard";
import ClientCateModal from "./ClientCateModal";

import img_cate from "../../../assets/client-category.png";
import cate1 from "../../../assets/client/cate1.png";
import cate2 from "../../../assets/client/cate2.png";
import cate3 from "../../../assets/client/cate3.png";
import cate4 from "../../../assets/client/cate4.png";
import cate5 from "../../../assets/client/cate5.png";
import cate6 from "../../../assets/client/cate6.png";

interface CategoryItem {
    cateImg: StaticImageData;
    title: string;
}

const cateData: CategoryItem[] = [
    { cateImg: cate1, title: "Model" },
    { cateImg: cate2, title: "Videographer" },
    { cateImg: cate3, title: "Makeup Artist" },
    { cateImg: cate4, title: "Writer" },
    { cateImg: cate5, title: "Fashion Stylists" },
    { cateImg: cate6, title: "Photographer" },
];

const ClientCategory: React.FC = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const showModal = () => {
        setIsModalOpen(true);
    };

    const handleCancel = () => {
        setIsModalOpen(false);
    };

    return (
        <div className="main-container font-garamond flex flex-col md:flex-row lg:flex-row h-auto w-full items-stretch justify-center">
            <div className="flex flex-col left-side min-h-screen w-full lg:w-[60%] px-10 py-10 lg:py-16 ">
                {/* Heading */}
                <div className=" flex w-[90%] justify-between font-bold items-center text-sm lg:text-xl">
                    <Link href="/" className="text-primaryColor">
                        creative
                        <span className="text-secondaryColor">list</span>
                    </Link>
                </div>
                {/* Title */}
                <div className="flex flex-col justify-center items-center px-4 text-left my-10 lg:my-12 gap-5 lg:gap-10">
                    <h1 className="text-primaryColor text-xl text-center lg:text-4xl font-semibold line leading-snug">
                        Find the Perfect Freelancer for Your Project
                    </h1>
                    <input
                        type="text"
                        placeholder="Search"
                        className=" w-11/12 py-2 px-3 bg-[#EEEEEE] placeholder:text-gray-500 rounded-lg"
                    />
                </div>
                {/* Button */}
                <div className="flex flex-wrap w-full justify-center items-center gap-4 h-[500px] overflow-y-scroll overflow-x-hidden scrollbar-hidden p-5">
                    {cateData.map((item, i) => (
                        <ClientCategoryCard cateImg={item.cateImg} title={item.title} key={i} />
                    ))}
                </div>
                <p className="text-[#000] text-center text-md lg:text-lg mt-10">
                    Skill not listed?{" "}
                    <span className="text-primaryColor font-bold cursor-pointer underline" onClick={showModal}>
                        Click Here
                    </span>
                </p>
                <Modal open={isModalOpen} width={700} onCancel={handleCancel} footer={null}>
                    <ClientCateModal handleCancel={handleCancel} />
                </Modal>
            </div>
            <div className="flex flex-col items-center bg-primaryColor justify-center w-full lg:w-[50%] min-h-screen gap-5 px-5 py-5">
                <h1 className="text-white text-center mt-4 lg:mt-2 text-2xl lg:text-4xl font-semibold leading-[2] lg:leading-[2]">
                    Post Your Job and Connect with
                    <div className="" /> Talented Freelancers
                </h1>
                <Link href="/client/post/job" className="my-48 lg:my-8 py-4 text-xl lg:text-xl hover:bg-primaryColor duration-300 px-10 rounded-full hover:text-white border border-transparent hover:border-white bg-[#fff] text-primaryColor font-semibold font-roboto">
                    Post a job
                </Link>
                <Image src={img_cate} alt="creativelist_client" className="w-[450px] h-auto" />
            </div>
        </div>
    );
};

export default ClientCategory;
