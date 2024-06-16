import freelance from "../../assets/freelance.png";
import quality from "../../assets/quality.png";
import payment from "../../assets/payment.png";
import protection from "../../assets/protection.png";
import Image from "next/image"

const Quality = () => {
    const data = [
        {
            icon: quality,
            title: "Proof of quality",
            subtitle:
                "Check any pro’s work samples, client reviews, and identity verification.",
        },
        {
            icon: payment,
            title: "Payment Security",
            subtitle:
                "Payment processed through a blockchain escrow to foster trust and build faith.",
        },
        {
            icon: protection,
            title: "IP Protection",
            subtitle:
                "Get signed release on creatives work with clear terms of use including duration.",
        },
    ];
    return (
        <div className="py-20 px-14">
            <div className="flex lg:flex-row flex-col lg:justify-between justify-center items-center">
                <div className="flex flex-col lg:items-start items-center gap-y-6 lg:max-w-[50%]">
                    <h2 className="font-bold text-4xl text-center">
                        A whole world of freelance talent at your fingertips
                    </h2>
                    <div>
                        {data.map((items, i) => {
                            return (
                                <div
                                    key={i}
                                    className="flex items-start gap-x-6 my-6"
                                >
                                    <Image src={items.icon} alt="" />
                                    <div className="flex flex-col gap-y-3">
                                        <h3 className="text-2xl font-bold">
                                            {items.title}
                                        </h3>
                                        <p className="text-lg">
                                            {items.subtitle}
                                        </p>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>
                <div className="">
                    <Image
                        className="sm:max-w-[600px] max-w-[320px]"
                        src={freelance}
                        alt=""
                    />
                </div>
            </div>
        </div>
    );
};
export default Quality;
