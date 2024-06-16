import React from "react";
import "./SearchPost.css";

const SearchServices = () => {
    return (
        <div className="w-full service_search font-roboto rounded-md p-8">
            <div className="flex h-full flex-col justify-center w-full gap-3">
                <div className="text-white flex flex-col items-start justify-start w-full gap-3">
                    <h1 className="font-medium text-5xl mb-6">
                        Search for Services and Freelancers
                    </h1>
                    <p className="font-normal text-xl">
                        We're here to help you transition, launch & grow your
                        new online business.
                    </p>
                </div>

                {/* Input */}
                <div className="flex items-start justify-start max-w-4xl">
                    <input
                        type="text"
                        placeholder="Search for Services and Freelancers"
                        className="w-full px-2 py-1 text-lg "
                    />
                    <button className="px-4 py-1 bg-primaryColor hover:bg-purple-900 text-white text-lg font-medium">
                        Search
                    </button>
                </div>
            </div>
        </div>
    );
};

export default SearchServices;
