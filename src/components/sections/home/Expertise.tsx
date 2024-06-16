import category1 from "../../../assets/category1.png";
import category2 from "../../../assets/category2.png";
import category3 from "../../../assets/category3.png";
import category4 from "../../../assets/category4.png";
import category5 from "../../../assets/category5.png";
import category6 from "../../../assets/category6.png";
import { CgChevronRightO } from "react-icons/cg";
import Image from "next/image"


const Expertise = () => {
    const data = [
        {
            img: category1,
            title: "Photographer",
        },
        {
            img: category2,
            title: "Videographer",
        },
        {
            img: category3,
            title: "Makeup Artist",
        },
        {
            img: category4,
            title: "Writer",
        },
        {
            img: category5,
            title: "Fashion Stylist",
        },
        {
            img: category6,
            title: "Model",
        },
    ];
    return (
        <div className="py-24 px-8">
            <div className="flex items-center justify-center flex-col text-center">
                <h2 className="font-bold text-[40px]">
                    Explore a World of Expertise
                </h2>
                <p className="text-2xl mt-1"> Discover Our Categories</p>
            </div>
            <div className="grid mt-10 gap-y-6 gap-x-6 lg:grid-cols-3 place-items-center sm:grid-cols-2 grid-cols-1">
                {data.map((items, i) => {
                    return (
                        <div key={i} className="relative">
                            <Image src={items.img} alt="" />
                            <div className="absolute flex items-center justify-between w-full bottom-0 left-0">
                                <div className="px-6 py-4 bg-[rgba(255,255,255,0.8)] w-[70%]">
                                    <p className="text-center">{items.title}</p>
                                </div>
                                <CgChevronRightO className="text-white mr-10 text-2xl" />
                            </div>
                        </div>
                    );
                })}
            </div>
        </div>
    );
};
export default Expertise;
