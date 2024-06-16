import NextAuth from "next-auth";
import { JwtPayload } from "next-auth/jwt";

declare module "next-auth" {
    interface Session {
        user: {
            _id: string;
            first_name: string;
            last_name: string;
            username: string;
            email: string;
            phone_number: string;
            userAddress: string;
            aboutMe: string;
            country: string;
            cover_image_url: string;
            image_url: string;
            userType: string;
            roleName: string;
            roleId: string;
            roleAlias: string;
            skills: string[];
            isEmailVerified: boolean;
            isPhoneNumberVerified: boolean;
            isVerified: boolean;
            isAdmin: boolean;
            resetVerified: boolean;
            isSuspended: boolean;
            profileState: string;
            preferences: any[];
            createdBy: string;
            updatedBy: string;
            createdAt: string;
            updatedAt: string;
            deletedAt: string;
            __v: number;
            accessToken: string;
            iat: number;
            exp: number;
            jti: string;
        };
    }
}

export interface TokenPayload extends JwtPayload {
    _id: string;
    first_name: string;
    last_name: string;
    username: string;
    email: string;
    phone_number: string;
    userAddress: string;
    aboutMe: string;
    country: string;
    cover_image_url: string;
    image_url: string;
    userType: string;
    roleName: string;
    roleId: string;
    roleAlias: string;
    skills: string[];
    isEmailVerified: boolean;
    isPhoneNumberVerified: boolean;
    isVerified: boolean;
    isAdmin: boolean;
    resetVerified: boolean;
    isSuspended: boolean;
    profileState: string;
    preferences: any[];
    createdBy: string;
    updatedBy: string;
    createdAt: string;
    updatedAt: string;
    deletedAt: string;
    __v: number;
    accessToken: string;
    iat: number;
    exp: number;
    jti: string;
}
