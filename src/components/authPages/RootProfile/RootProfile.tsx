import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const user = {
    username: "jhon",
    email: "jhon@gmail.com",
    role: "client",
};

const RootProfile = () => {
    const navigate = useNavigate();

    useEffect(() => {
        if (user.role === "client") {
            navigate("/client/profile");
        }

        if (user.role === "creative") {
            navigate("/creative/profile");
        }
    }, [user]);
};

export default RootProfile;
