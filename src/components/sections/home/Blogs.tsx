import blog1 from "../../assets/blog1.png";
import blog2 from "../../assets/blog2.png";
import blog3 from "../../assets/blog3.png";
import { BsArrowRight } from "react-icons/bs";
const Blogs = () => {
    const blogData = [
        {
            img: blog1,
            title: "Disease detection, check up in the laboratory",
            desc: "In this case, the role of the health laboratory is very important to do a disease detection...",
        },
        {
            img: blog2,
            title: "Herbal medicines that are safe for consumption",
            desc: "Herbal medicine is very widely used at this time because of its very good for your health...",
        },
        {
            img: blog3,
            title: "Natural care for healthy facial skin",
            desc: "A healthy lifestyle should start from now and also for your skin health.There are some...",
        },
    ];
    return (
        <div className="px-14 py-20">
            <h2 className="text-center font-bold text-[40px]">
                Latest from Blog
            </h2>
            <p className="text-2xl text-center">
                See how you can up your career status
            </p>
            <div className="grid mt-10 gap-y-8 place-items-center lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 w-full">
                {blogData.map((items, i) => {
                    return (
                        <div key={i} className="w-[300px] blog rounded-md ">
                            <img src={items.img} alt="" />
                            <div className="px-6 py-4">
                                <h2 className="font-bold text-xl">
                                    {items.title}
                                </h2>
                                <p className="text-[#7D7987] font-light my-2">
                                    {items.desc}
                                </p>
                                <div className="text-[#4089ED] flex items-center gap-4">
                                    <p className="font-semibold">Read More</p>
                                    <BsArrowRight className="font-semibold" />
                                </div>
                            </div>
                        </div>
                    );
                })}
            </div>
        </div>
    );
};
export default Blogs;
