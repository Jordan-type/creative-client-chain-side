import Image, { StaticImageData } from "next/image";

// types.ts
export interface UserInbox {
    sender: string;
    message: string;
    timestamp: string;
    avatar: string;
}

export interface UserReview {
    reviewer: string;
    rating: number;
    reviewText: string;
    timestamp: string;
    avatar: string;
}

export interface UserPost {
    id: number;
    title: string;
    content: string;
    timestamp: string;
    postImage: string;
    mentions: {
        username: string;
        avatar: string;
    }[];
    liked: boolean;
    likes: number;
}

export interface SocialLink {
    platform: string;
    link: string;
}

export interface User {
    username: string;
    userImage: StaticImageData | string;
    userRating: number;
    userInbox: UserInbox[];
    userReview: UserReview[];
    userPosts: UserPost[];
    socialLinks: SocialLink[];
}

export interface CreativeData {
    profile_icon: StaticImageData | string;
    name: string;
    seller_level: string;
}

export interface ReviewData {
    rating: number;
    sold_count: number;
}

export interface CardDataItem {
    gig_img: StaticImageData | string;
    title: string;
    creative_data: CreativeData;
    review_data: ReviewData;
    gig_price: string;
}

// interface InboxMessage {
//     sender: string;
//     message: string;
//     timestamp: string;
//     avatar: string;
// }

// interface UserReview {
//     reviewer: string;
//     rating: number;
//     reviewText: string;
//     timestamp: string;
//     avatar: string;
// }

// interface Mention {
//     username: string;
//     avatar: string;
// }

// interface UserPost {
//     id: number;
//     title: string;
//     content: string;
//     timestamp: string;
//     postImage: string | StaticImageData;
//     mentions: Mention[];
//     liked: boolean;
//     likes: number;
// }

// interface SocialLink {
//     platform: string;
//     link: string;
// }

// interface User {
//     username: string;
//     userImage: string | StaticImageData;
//     userRating: number;
//     userInbox: InboxMessage[];
//     userReview: UserReview[];
//     userPosts: UserPost[];
//     socialLinks: SocialLink[];
// }

// export interface User {
//     username: string;
//     userReview: {
//         avatar: string;
//         reviewer: string;
//         rating: number; // Changed from string to number
//         reviewText: string;
//         timestamp: string;
//     }[];
//     userImage: string | StaticImageData; 
//     userRating: number; // Ensure userRating is a number too
//     userInbox: {
//         avatar: string;
//         sender: string;
//         message: string;
//         timestamp: string;
//     }[];
//     socialLinks: {
//         platform: string;
//         link: string;
//     }[];
// }

// interface Mention {
//     username: string;
//     avatar: string;
// }

// interface Post {
//     id: number;
//     title: string;
//     content: string;
//     mentions: Mention[];
//     postImage: string;
//     liked: boolean;
//     likes: number;
// }
