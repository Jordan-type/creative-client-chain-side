import map from "../../assets/map.png";
const AboutInfo = () => {
    return (
        <div className="py-44 px-24 ">
            <div className="flex lg:flex-row flex-col justify-between items-center">
                <div className="lg:max-w-[50%] ">
                    <h2 className="text-[#212936] text-[40px] font-bold">
                        About Us
                    </h2>
                    <p className="text-secondaryColor text-2xl my-6">
                        CreativeList's objective is to help creatives and their
                        clients connect with each other with ease.
                    </p>
                    <p className="text-secondaryColor text-2xl my-6">
                        Our goal is to provide creatives with reliable
                        opportunities to sell their expertise and portfolio.{" "}
                    </p>
                    <p className="text-secondaryColor text-2xl my-6">
                        Leveraging the gig economy, we found that freelancing in
                        this growing creative industry, poses a viable option
                        for Kenyan youth to gain a source of income, and in the
                        long run, become Creative Entrepreneurs and create jobs
                        from their own businesses.{" "}
                    </p>
                </div>
                <div>
                    <img src={map} alt="" />
                </div>
            </div>
        </div>
    );
};
export default AboutInfo;
