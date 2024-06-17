import React from "react";
import Sidebar from "../Sidebar/Sidebar";

const user = {
    name: "Alexander",
};

const ClientReviews = () => {
    return (
        <main className="h-full w-full">
            {/* Main div */}
            <section className="w-full h-full flex flex-col-reverse md:flex-row lg:flex-row justify-start gap-5 lg:gap-0 md:gap-0">
                {/* Sidebar */}
                <div className=" w-full lg:w-1/5 h-full">
                    <Sidebar />
                </div>

                {/* Content */}

                <div className=" w-full lg:w-4/5 h-full flex flex-col justify-start items-center p-5 bg-primaryColor min-h-screen rounded-r-lg rounded-b-lg gap-5">
                    <h1 className="text-3xl lg:text-5xl font-garamond text-white font-semibold mb-5 w-full">
                        {user.name} Reviews,
                    </h1>
                </div>
            </section>
        </main>
    );
};

export default ClientReviews;
