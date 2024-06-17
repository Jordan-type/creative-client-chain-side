import { Inter } from "next/font/google";

import SignIn from "@/components/auth/SignIn";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
    return (
        <div className="font-garamond">
            <SignIn/>
        </div>
    );
};

