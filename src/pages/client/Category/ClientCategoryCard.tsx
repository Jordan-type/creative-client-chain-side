import React from "react";
import Image, { StaticImageData } from "next/image";

interface ClientCategoryCardProps {
    cateImg: StaticImageData;
    title: string;
}

const ClientCategoryCard: React.FC<ClientCategoryCardProps> = ({ cateImg, title }) => {
    return (
        <div className="flex font-garamond flex-col gap-2 items-center justify-center w-52 h-52 p-5 bg-white rounded-lg shadow-lg hover:shadow-2xl cursor-pointer">
            <Image src={cateImg} alt={title} className="w-auto h-20" />
            <p className="text-center mt-4 font-bold text-xl text-[#000]">
                {title}
            </p>
        </div>
    );
};

export default ClientCategoryCard;
