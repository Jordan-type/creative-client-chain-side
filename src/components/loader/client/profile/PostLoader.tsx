import React from "react";

const PostLoader = () => {
    return (
        <div className="animate-pulse w-full max-h-[1200px] overflow-y-auto scrollbar-hidden">
            {/* Create a single placeholder loader */}
            <div className="p-4 border rounded bg-gray-200 flex flex-col gap-4 mb-4">
                <div className="h-4 bg-gray-300 rounded w-1/2"></div>
                <div className="h-40 bg-gray-300 rounded"></div>
                <div className="h-8 bg-gray-300 rounded w-1/3"></div>
                <div className="h-8 bg-gray-300 rounded w-1/2"></div>
            </div>
        </div>
    );
};

export default PostLoader;
