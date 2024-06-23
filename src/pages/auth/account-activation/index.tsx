import { Inter } from "next/font/google";

import AccountActivation from "@/components/auth/AccountActivation";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
    return (
        <div className="font-garamond">
            <AccountActivation/>
        </div>
    );
};

