import Image from "next/image";
import { Inter } from "next/font/google";
import Login from "@/components/auth/SignIn"
import Header from "@/components/Header";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
    <Login />
    </>
  );
}
