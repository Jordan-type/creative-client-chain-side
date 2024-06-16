import React from "react";

import modal1 from "../../../assets/client/modal1.png";

const ClientCateModal = ({ handleCancel }) => {
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("click");
    };

    return (
        <div className="h-full w-full flex py-10 px-8 flex-col gap-3 font-garamond justify-center items-center">
            {/* Image */}
            <div className="bg-primaryColor mt-2 p-5 flex items-center justify-center rounded-md">
                <img
                    src={modal1}
                    className="w-[550px] h-auto"
                    alt="creativelist"
                />
            </div>
            {/* Description */}
            <div className="w-full p-4 text-center">
                <p className="text-xl text-primaryColor font-bold">
                    Sorry the skill you're looking for isn't listed yet. Kindly
                    share the name(s) of the skill(s) you need that are not yet
                    featured below. Include your contact details and we'll let
                    you know as soon as we have them onboard.
                </p>
            </div>
            {/* Form */}

            <form
                className="flex flex-col gap-3 w-full p-5 font-roboto"
                onSubmit={handleSubmit}
            >
                {/* ================================= */}
                {/* ================================= */}
                {/* ================================= */}
                {/* ================================= */}
                <div className="flex flex-col gap-2">
                    <label
                        htmlFor="text"
                        className="text-secondaryColor font-bold"
                    >
                        Skils Name:
                    </label>
                    <input
                        type="text"
                        id="text"
                        name="text"
                        placeholder="Skils Name"
                        className="border border-[#D1D1D1] rounded-lg p-3 placeholder:text-[#ACACAC]"
                    />
                </div>
                {/* ================================= */}
                {/* ================================= */}
                {/* ================================= */}
                {/* ================================= */}
                {/* ================================= */}
                {/* ================================= */}
                {/* ================================= */}
                {/* ================================= */}
                <div className="flex flex-col gap-2">
                    <label
                        htmlFor="text"
                        className="text-secondaryColor font-bold"
                    >
                        Your Name:
                    </label>
                    <input
                        type="text"
                        id="text"
                        name="text"
                        placeholder="Your Name"
                        className="border border-[#D1D1D1] rounded-lg p-3 placeholder:text-[#ACACAC]"
                    />
                </div>
                {/* ================================= */}
                {/* ================================= */}
                {/* ================================= */}
                {/* ================================= */}
                {/* ================================= */}
                {/* ================================= */}
                {/* ================================= */}
                {/* ================================= */}
                <div className="flex flex-col gap-2">
                    <label
                        htmlFor="text"
                        className="text-secondaryColor font-bold"
                    >
                        Write your Email:
                    </label>
                    <input
                        type="text"
                        id="text"
                        name="text"
                        placeholder="Your Email"
                        className="border border-[#D1D1D1] rounded-lg p-3 placeholder:text-[#ACACAC]"
                    />
                </div>
                {/* ================================= */}
                {/* ================================= */}
                {/* ================================= */}
                {/* ================================= */}
                {/* ================================= */}
                {/* ================================= */}
                {/* ================================= */}
                {/* ================================= */}
                <div className="flex flex-col gap-2">
                    <label
                        htmlFor="text"
                        className="text-secondaryColor font-bold"
                    >
                        Write your WhatsApp Number:
                    </label>
                    <input
                        type="number"
                        id="text"
                        name="text"
                        placeholder="WhatsApp Number"
                        className="border border-[#D1D1D1] rounded-lg p-3 placeholder:text-[#ACACAC]"
                    />
                </div>
                {/* ================================= */}
                {/* ================================= */}
                {/* ================================= */}
                {/* ================================= */}
                {/* Button */}
            </form>
            <div className="w-full flex gap-2 items-end justify-end p-4 font-roboto">
                <button
                    onClick={handleCancel}
                    className="py-2 px-4 border border-[#4F4F4F] text-[#4F4F4F] rounded-lg hover:bg-[#4F4F4F] hover:text-white duration-300 text-md"
                >
                    No, cancel
                </button>
                <button
                    onClick={handleSubmit}
                    className="py-2 px-4 bg-[#4F4F4F] border border-[#4F4F4F] hover:bg-[#444444] text-white rounded-lg duration-300 text-md"
                >
                    Yes, confirm
                </button>
            </div>
        </div>
    );
};

export default ClientCateModal;
