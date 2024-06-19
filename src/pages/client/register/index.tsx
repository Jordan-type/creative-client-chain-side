import { Inter } from "next/font/google";

import Signup from "@/components/auth/SignUpClient";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
    return (
        <div className="font-garamond">
            <Signup/>
        </div>
    );
};

