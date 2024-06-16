import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { BiMenuAltRight } from "react-icons/bi";
import { Drawer } from "antd";
import Link from "next/link";

const mainMenuItems = [
    { name: 'Home', link: '/' },
    { name: 'Blog', link: '/blog' },
    { name: 'Gallery', link: '/gallery' },
    { name: 'About', link: '/about' },
    { name: 'Contact us', link: '/contact' }
];

const GetStartedMenuItems = [
    { name: 'Get Start', link: '/getStart' },
    { name: 'Login', link: '/login' }
]



const PublicNavbar: React.FC = () => {
    const router = useRouter();
    const { pathname } = router;
    const [isSticky, setIsSticky] = useState<boolean>(false);
    const [open, setOpen] = useState<boolean>(false);

    const showDrawer = () => {
        setOpen(true);
    };
    const onClose = () => {
        setOpen(false);
    };

    useEffect(() => {
        const handleScroll = () => {
            const offset = window.scrollY;
            if (offset > 40) {
                setIsSticky(true);
            } else {
                setIsSticky(false);
            }
        };

        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    return (
        <header
            className={`${isSticky && pathname === "/" ? "stick" : "navbar"} ${
                pathname !== "/" && "stick"
            } py-3 rounded-md px-6 font-roboto`}
        >
            <div className="flex items-center justify-between">
                <div>
                    <Link href="/" className="text-primaryColor text-2xl font-garamond font-bold inline-flex">
                        <span>
                            creative
                            <p className="text-secondaryColor">list</p>
                        </span>
                    </Link>
                </div>
                <BiMenuAltRight
                    onClick={showDrawer}
                    className="text-primaryColor text-3xl cursor-pointer lg:hidden block"
                />
                <div className="lg:flex hidden items-center gap-8">
                    <ul className="flex items-center gap-8">
                    {mainMenuItems.map(item => (
                            <li key={item.name}>
                                <Link href={item.link}>{item.name}</Link>
                            </li>
                        ))}
                    </ul>
                    <div className="flex items-center gap-4">
                    {GetStartedMenuItems.map(item => (
                            <Link href={item.link} key={item.name}>
                                <button className={`px-6 py-2 rounded-lg ${item.name === 'Get Start' ? 'bg-primaryColor text-white' : 'border-2 border-primaryColor text-primaryColor'}`}>
                                    {item.name}
                                </button>
                            </Link>
                        ))}
                    </div>
                </div>
            </div>
            <Drawer placement="right" onClose={onClose} open={open}>
                <div className="flex flex-col gap-8">
                    <ul className="flex flex-col gap-8">
                    {mainMenuItems.map(item => (
                            <li key={item.name}>
                                <Link href={item.link}>{item.name}</Link>
                            </li>
                        ))}
                    </ul>
                    <div className="flex flex-col gap-4">
                    {GetStartedMenuItems.map(item => (
                            <Link href={item.link} key={item.name}>
                                <button className={`px-6 py-2 rounded-lg ${item.name === 'Get Start' ? 'bg-primaryColor text-white' : 'border-2 border-primaryColor text-primaryColor'}`}>
                                    {item.name}
                                </button>
                            </Link>
                        ))}
                    </div>
                </div>
            </Drawer>
        </header>
    );
};

export default PublicNavbar;
