import React, { useEffect } from "react";
import { useRouter } from "next/router";

const user = {
    username: "jhon",
    email: "jhon@gmail.com",
    role: "client", // Example role, replace with actual logic to get user role
};

const RootProfile: React.FC = () => {
    const router = useRouter();

    useEffect(() => {
        if (user.role === "client") {
            router.push("/client/profile");
        } else if (user.role === "creative") {
            router.push("/creative/profile");
        }
    }, [user, router]);

    return null; // This component doesn't render anything
};

export default RootProfile;


