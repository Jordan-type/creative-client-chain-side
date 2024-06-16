import value1 from "../../assets/value1.png";
import value2 from "../../assets/value2.png";
import value3 from "../../assets/value3.png";
const Values = () => {
    const values = [
        {
            img: value1,
            title: "Values",
            desc: "Foster Collaboration: ‘If you want to go fast, go alone. if you want to go far, go together’ African Proverb",
        },
        {
            img: value2,
            title: "Transparency",
            desc: "Openness and communication to build trust that leads to collective success.",
        },
        {
            img: value3,
            title: "Development",
            desc: ": Through education and supportive infrastructure, to make creatives in Africa competitive on both the local and international stages.",
        },
    ];
    return (
        <div className="px-14 py-20">
            <h2 className="font-bold text-center text-[48px]">Our Values</h2>
            <div className="flex flex-wrap items-center lg:justify-between justify-center my-6">
                {values.map((items, i) => {
                    return (
                        <div
                            key={i}
                            className="flex items-center m-6 justify-center flex-col gap-6 w-[300px]"
                        >
                            <img src={items.img} alt="" />
                            <h2 className="font-semibold italic text-[#4D4D4D] text-2xl">
                                {items.title}
                            </h2>
                            <p className="text-[#6B6B6B] text-center">
                                {items.desc}
                            </p>
                        </div>
                    );
                })}
            </div>
        </div>
    );
};
export default Values;
