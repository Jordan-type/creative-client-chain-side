import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const RootDashboard = () => {
    const navigate = useNavigate();

    const user = {
        role: "client",
    };

    useEffect(() => {
        if (user.role === "client") {
            navigate("/client/dashboard");
        }

        if (user.role === "creative") {
            navigate("/creative/dashboard");
        }
    }, [user]);
};

export default RootDashboard;
