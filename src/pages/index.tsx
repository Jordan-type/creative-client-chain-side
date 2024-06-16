// import Image from "next/image";
import { Inter } from "next/font/google";
import Blogs from "../components/sections/home/Blogs";
import Expertise from "../components/sections/home/Expertise";
import Hero from "../components/sections/home/Hero";
import Quality from "../components/sections/home/Quality";
import Services from "../components/sections/home/Services";

// const inter = Inter({ subsets: ["latin"] });

// export default function Home() {
//   return (
//     <>
//     <SignIn />
   
//     </>
//   );
// }

export default function Home() {
    return (
        <div className="font-garamond">
            <Hero />
            <Services />
            <Expertise />
            <Quality />
            <Blogs />
        </div>
    );
};

