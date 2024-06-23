import { Disclosure } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { ConnectButton } from "@rainbow-me/rainbowkit";
import Image from "next/image";
import { useEffect, useState } from "react";
import { useConnect } from "wagmi";
import { injected } from "wagmi/connectors";
import AuthNavbar from "./AuthNavbar";
import PublicNavbar from "./PublicNavbar";

interface HeaderProps {
    isAuthenticated?: boolean;
}

export default function Header({ isAuthenticated }: HeaderProps) {
    return (
        <>
        {isAuthenticated ? <AuthNavbar /> : <PublicNavbar /> }
        </>
    );
}
