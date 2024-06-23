import { Inter } from "next/font/google";

import ForgotPassword from "@/components/auth/ForgotPassword";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
    return (
        <div className="font-garamond">
            <ForgotPassword/>
        </div>
    );
};



