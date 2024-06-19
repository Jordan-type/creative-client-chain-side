import React, { useState } from "react";
import slide_img from "../../assets/tech1.jpg";
import slide_img2 from "../../assets/tech2.jpg";
import author_img from "../../assets/author.jpg";
import Link from "next/link";
import Image, { StaticImageData } from "next/image";

interface CardData {
    title: string;
    img: StaticImageData | string;
    tag: string;
    author_img: StaticImageData | string;
    author_name: string;
    date: string;
}

const cardData: CardData[] = [
    {
        // Id is included
        // id: Id will come from database
        title: "The Impact of Technology on the Workplace: How Technology is Changing",
        img: slide_img2,
        tag: "Technology",
        author_img: author_img,
        author_name: "Rina Maria",
        date: "July, 2021",
    },

    {
        // Id is included
        // id: Id will come from database
        title: "The Impact of Technology on the Workplace: How Technology is Changing",
        img: slide_img2,
        tag: "Technology",
        author_img: author_img,
        author_name: "Rina Maria",
        date: "July, 2021",
    },
    {
        // Id is included
        // id: Id will come from database
        title: "The Impact of Technology on the Workplace: How Technology is Changing",
        img: slide_img2,
        tag: "Technology",
        author_img: author_img,
        author_name: "Rina Maria",
        date: "July, 2021",
    },
    {
        // Id is included
        // id: Id will come from database
        title: "The Impact of Technology on the Workplace: How Technology is Changing",
        img: slide_img2,
        tag: "Technology",
        author_img: author_img,
        author_name: "Rina Maria",
        date: "July, 2021",
    },
    {
        // Id is included
        // id: Id will come from database
        title: "The Impact of Technology on the Workplace: How Technology is Changing",
        img: slide_img2,
        tag: "Technology",
        author_img: author_img,
        author_name: "Rina Maria",
        date: "July, 2021",
    },
    {
        // Id is included
        // id: Id will come from database
        title: "The Impact of Technology on the Workplace: How Technology is Changing",
        img: slide_img2,
        tag: "Technology",
        author_img: author_img,
        author_name: "Rina Maria",
        date: "July, 2021",
    },
    {
        // Id is included
        // id: Id will come from database
        title: "The Impact of Technology on the Workplace: How Technology is Changing",
        img: slide_img2,
        tag: "Technology",
        author_img: author_img,
        author_name: "Rina Maria",
        date: "July, 2021",
    },
    {
        // Id is included
        // id: Id will come from database
        title: "The Impact of Technology on the Workplace: How Technology is Changing",
        img: slide_img2,
        tag: "Technology",
        author_img: author_img,
        author_name: "Rina Maria",
        date: "July, 2021",
    },
    {
        // Id is included
        // id: Id will come from database
        title: "The Impact of Technology on the Workplace: How Technology is Changing",
        img: slide_img2,
        tag: "Technology",
        author_img: author_img,
        author_name: "Rina Maria",
        date: "July, 2021",
    },
    {
        // Id is included
        // id: Id will come from database
        title: "The Impact of Technology on the Workplace: How Technology is Changing",
        img: slide_img2,
        tag: "Technology",
        author_img: author_img,
        author_name: "Rina Maria",
        date: "July, 2021",
    },
    {
        // Id is included
        // id: Id will come from database
        title: "The Impact of Technology on the Workplace: How Technology is Changing",
        img: slide_img2,
        tag: "Technology",
        author_img: author_img,
        author_name: "Rina Maria",
        date: "July, 2021",
    },
    {
        // Id is included
        // id: Id will come from database
        title: "The Impact of Technology on the Workplace: How Technology is Changing",
        img: slide_img2,
        tag: "Technology",
        author_img: author_img,
        author_name: "Rina Maria",
        date: "July, 2021",
    },
    {
        // Id is included
        // id: Id will come from database
        title: "The Impact of Technology on the Workplace: How Technology is Changing",
        img: slide_img2,
        tag: "Technology",
        author_img: author_img,
        author_name: "Rina Maria",
        date: "July, 2021",
    },
    {
        // Id is included
        // id: Id will come from database
        title: "The Impact of Technology on the Workplace: How Technology is Changing",
        img: slide_img2,
        tag: "Technology",
        author_img: author_img,
        author_name: "Rina Maria",
        date: "July, 2021",
    },
    {
        // Id is included
        // id: Id will come from database
        title: "The Impact of Technology on the Workplace: How Technology is Changing",
        img: slide_img2,
        tag: "Technology",
        author_img: author_img,
        author_name: "Rina Maria",
        date: "July, 2021",
    },
    {
        // Id is included
        // id: Id will come from database
        title: "The Impact of Technology on the Workplace: How Technology is Changing",
        img: slide_img2,
        tag: "Technology",
        author_img: author_img,
        author_name: "Rina Maria",
        date: "July, 2021",
    },
    {
        // Id is included
        // id: Id will come from database
        title: "The Impact of Technology on the Workplace: How Technology is Changing",
        img: slide_img2,
        tag: "Technology",
        author_img: author_img,
        author_name: "Rina Maria",
        date: "July, 2021",
    },
    {
        // Id is included
        // id: Id will come from database
        title: "The Impact of Technology on the Workplace: How Technology is Changing",
        img: slide_img2,
        tag: "Technology",
        author_img: author_img,
        author_name: "Rina Maria",
        date: "July, 2021",
    },
];

const truncateTitle = (title: string, maxLength: number) => {
    return title.length > maxLength ? `${title.slice(0, maxLength)}...` : title;
};

const BlogCard: React.FC = () => {
    const [visiblePosts, setVisiblePosts] = useState(10); // Number of posts initially visible

    const loadMorePosts = () => {
        setVisiblePosts((prevVisiblePosts) => prevVisiblePosts + 6); // Increase the number of visible posts by 9 when "Load More" is clicked
    };

    return (
        <div className="flex flex-col gap-5 justify-center items-center">
            <div className="flex flex-wrap gap-8 justify-center">
                {cardData?.slice(0, visiblePosts).map((item, i) => {
                    if ((i + 1) % 7 === 0 && i !== 0) {
                        // Render the ad content after every 3 blog cards (excluding the first one)
                        return (
                            <div
                                key={i}
                                className="w-[100%] rounded-md h-20 lg:h-40 bg-red-600  "
                            >
                                {/* Add your Ads content here */}
                                <Image
                                    src="https://img.freepik.com/premium-photo/landscape-long-banner-panorama-blue-lake-summer-europe-nature-background_362376-331.jpg?w=2000"
                                    width={200}
                                    height={200}
                                    alt="Ad"
                                    className="h-20 lg:h-40 w-full rounded-md"
                                />
                            </div>
                        );
                    }

                    // Render the regular blog card content
                    const _id = 23;
                    const { author_img, author_name, date, img, tag, title } =
                        item;
                    const truncatedTitle = truncateTitle(title, 50); // Change 50 to your desired maximum length

                    return (
                        <Link
                            href={`/blog/${_id}`}
                            key={i}
                            className="max-w-xs font-roboto shadow-lg hover:shadow-2xl rounded-lg overflow-hidden"
                        >
                            <Image
                                src={img}
                                alt={title}
                                width={200}
                                height={200}
                                className="w-full h-48 object-cover p-2 rounded-2xl"
                            />
                            <div className="p-4">
                                <span className="bg-[rgba(75,107,251,0.05)] text-primaryColor text-xs font-bold px-2 py-1 rounded tracking-wide">
                                    {tag}
                                </span>
                                <h2 className="mt-2 text-gray-900 text-xl font-semibold">
                                    {truncatedTitle}
                                </h2>
                                <div className="flex items-center mt-4">
                                    <Image
                                        src={author_img}
                                        alt={author_name}
                                        width={200}
                                        height={200}
                                        className="w-10 h-10 rounded-full mr-4 object-cover"
                                    />
                                    <div
                                        className="flex gap-2 md:gap-3 lg:gap-5 xl:gap-6
                                     items-center"
                                    >
                                        <p className="text-secondaryColor text-sm">
                                            {author_name}
                                        </p>
                                        <p className="text-secondaryColor text-sm">
                                            {date}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </Link>
                    );
                })}

                {/* "Load More" button */}
            </div>
            {visiblePosts < cardData.length && (
                <button
                    className="bg-primaryColor text-white px-4 py-2 rounded-lg mt-4"
                    onClick={loadMorePosts}
                >
                    Load More
                </button>
            )}
        </div>
    );
};

export default BlogCard;
