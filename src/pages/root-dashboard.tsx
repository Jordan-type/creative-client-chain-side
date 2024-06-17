import React, { useEffect } from "react";
import { useRouter } from "next/router";

const RootDashboard: React.FC = () => {
    const router = useRouter();

    const user = {
        role: "client", // Example role, replace with actual logic to get user role
    };

    useEffect(() => {
        if (user.role === "client") {
            router.push("/client/dashboard");
        } else if (user.role === "creative") {
            router.push("/creative/dashboard");
        }
    }, [user, router]);

    return null; // This component doesn't render anything
};

export default RootDashboard;

// import React, { useEffect } from "react";
// import { useNavigate } from "react-router-dom";

// const RootDashboard = () => {
//     const navigate = useNavigate();

//     const user = {
//         role: "client",
//     };

//     useEffect(() => {
//         if (user.role === "client") {
//             navigate("/client/dashboard");
//         }

//         if (user.role === "creative") {
//             navigate("/creative/dashboard");
//         }
//     }, [user]);
// };

// export default RootDashboard;


