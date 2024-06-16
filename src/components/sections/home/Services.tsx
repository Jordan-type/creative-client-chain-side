import service1 from "../../assets/service1.png";
import service2 from "../../assets/service2.png";
import service3 from "../../assets/service3.png";
const Services = () => {
    return (
        <div className="mt-20 px-8">
            <div className="flex items-center justify-center flex-col text-center">
                <h2 className="font-bold text-[40px]">Trending Services</h2>
                <p className="text-2xl mt-1">
                    Most viewed and all-time top talented sellers{" "}
                </p>
            </div>
            <div className="grid gap-y-6 mt-10 lg:grid-cols-3 place-items-center sm:grid-cols-2 grid-cols-1">
                <img src={service1} alt="" />
                <img src={service2} alt="" />
                <img src={service3} alt="" />
            </div>
        </div>
    );
};
export default Services;
