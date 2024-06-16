import founder from "../../assets/founder.png";
import linkedin from "../../assets/linkedin.svg";
const Founder = () => {
    return (
        <div className="sm:px-14 px-8 pb-16">
            <div className="bg-gradient-to-b from-[#402C5D] to-[#0C0801] gap-x-10 rounded-lg min-h-[500px] lg:py-0 py-20 sm:px-20 px-8 flex lg:flex-row flex-col lg:justify-between justify-center items-center">
                <img src={founder} alt="" />
                <div className="">
                    <h2 className="text-white font-[Poppins] font-semibold text-[40px]">
                        Founder & CEO
                    </h2>
                    <p className="text-white text-lg font-normal font-[Poppins] my-2 mb-3">
                        My mission is to create a business that has lasting
                        social impact and that will enable African youth and
                        women in the Creative sector to lead sustainable lives
                    </p>
                    <p className="text-white text-lg font-normal font-[Poppins]">
                        -Rinah Lidonde
                    </p>
                    <img className="mt-10" src={linkedin} alt="" />
                </div>
            </div>
        </div>
    );
};
export default Founder;
