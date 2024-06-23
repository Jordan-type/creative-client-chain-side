import { Inter } from "next/font/google";

import ResetPassword from "@/components/auth/ResetPassword";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
    return (
        <div className="font-garamond">
            <ResetPassword/>
        </div>
    );
};



