import React from "react";
import { HashLoader } from "react-spinners";

const Loader: React.FC = () => {
    return (
        <div className="w-full m-10 flex justify-center items-center">
            <HashLoader color="#49326B" size={150} />
        </div>
    );
};

export default Loader;
