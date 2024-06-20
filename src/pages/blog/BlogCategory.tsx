import React, { useState } from "react";

const BlogCategory: React.FC = () => {
    const categories: string[] = [
        "All", // Show all categories
        "Tech", // Technology-related posts
        "Art", // Art and creative posts
        "Science", // Science-related posts
        "Travel", // Travel and adventure posts
        "Food", // Food and cooking-related posts
        "Fashion", // Fashion and style-related posts
        "Health", // Health and wellness posts
        "Sports", // Sports and fitness-related posts
        "Music", // Music and entertainment posts
        "Books", // Book reviews and literary posts
        "Business", // Business and entrepreneurship posts
        "Lifestyle", // General lifestyle and personal development posts
        "DIY", // Do-It-Yourself and crafting posts
        "Gaming", // Video games and gaming-related posts
        "Pets", // Pet care and animal-related posts
        "Movies", // Movie reviews and film-related posts
    ];
    const [selectedCategory, setSelectedCategory] = useState<string>("All");

    const handleCategoryClick = (category: string) => {
        console.log(category);
        setSelectedCategory(category);
    };

    return (
        <div className="blog_category-bg flex flex-col md:flex-row lg:flex-row xl:flex-row justify-start items-start gap-8 lg:gap-3 md:gap-3 xl:gap-3 py-8 px-2 lg:px-32 xl:px-32 md:px-20 h-full w-full rounded-lg font-roboto">
            <div className="font-light w-full lg:w-fit md:w-fit xl:w-fit">
                <p className="text-white text-center text-xl lg:text-sm md:text-sm xl:text-sm flex items-center justify-center gap-1">
                    Category{" "}
                    <span className="hidden md:block lg:block xl:block">:</span>
                </p>
            </div>

            <div className="flex justify-start items-center flex-wrap gap-3">
                {categories.map((item, index) => (
                    <p
                        key={index}
                        className={`cursor-pointer px-3 font-medium py-1 text-xs rounded-full w-fit ${
                            selectedCategory === item
                                ? "text-primaryColor bg-white"
                                : "bg-[rgba(255,255,255,0.1)] text-white"
                        }`}
                        onClick={() => handleCategoryClick(item)}
                    >
                        {item}
                    </p>
                ))}
            </div>
        </div>
    );
};

export default BlogCategory;
