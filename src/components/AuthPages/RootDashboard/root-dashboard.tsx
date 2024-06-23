import React, { useEffect } from "react";
import { useRouter } from "next/router";
import { useSession } from "next-auth/react";

const RootDashboard: React.FC = () => {
    const router = useRouter();
    const { data,  } = useSession()
    
    const user = {
        roleName: "client", // Example role, replace with actual logic to get user role
    };

    useEffect(() => {
        if (data?.user.roleName === "client") {
            router.push("/client/dashboard");
        } else if (data?.user.roleName === "creative") {
            router.push("/creative/dashboard");
        }
    }, [user, router]);

    return null; // This component doesn't render anything
};

export default RootDashboard;


