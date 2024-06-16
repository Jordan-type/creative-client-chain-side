//  import Link
import { HiOutlineArrowNarrowRight } from "react-icons/hi";
import { BiLogoFacebook } from "react-icons/bi";
import { BiLogoLinkedin } from "react-icons/bi";
import { BiLogoTwitter } from "react-icons/bi";
import Link from "next/link"

type Props = {
    className?: string
}


  export default function Footer() {
    return (
<footer className="bg-white font-roboto">
            <div className="flex flex-col py-24 px-14">
                <div className="container mx-auto">
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
                        <div className="mb-4">
                            <h3 className="text-xl font-bold mb-2 text-black">
                                About
                            </h3>
                            <ul>
                                <li className="mb-2 text-[#848997]">
                                    About us
                                </li>
                                <li className="mb-2 text-[#848997]">
                                    Contact us
                                </li>
                                <li className="mb-2 text-[#848997]">
                                    Press & news
                                </li>
                                <li className="mb-2 text-[#848997]">
                                    Platform Reviews
                                </li>
                                <li className="mb-2 text-[#848997]">FAQs</li>
                            </ul>
                        </div>
                        <div className="mb-4">
                            <h3 className="text-xl font-bold mb-2 text-black">
                                Community
                            </h3>
                            <ul>
                                <li className="mb-2 text-[#848997]">
                                    Social Links
                                </li>
                                <li className="mb-2 text-[#848997]">Blog</li>
                                <li className="mb-2 text-[#848997]">FORUM</li>
                                <li className="mb-2 text-[#848997]">
                                    Magazine
                                </li>
                            </ul>
                        </div>
                        <div className="mb-4">
                            <h3 className="text-xl font-bold mb-2 text-black">
                                Product
                            </h3>
                            <ul>
                                <li className="mb-2 text-[#848997]">
                                    For Creatives
                                </li>

                                <li className="mb-2 text-[#848997]">
                                    For Clients
                                </li>
                            </ul>
                        </div>

                        <div className="bg-[#F4F5F9] p-5 md:p-5 lg:p-8 sm:-mt-10">
                            <h3 className="text-xl font-bold mb-2 text-black">
                                Subscribe
                            </h3>
                            <div className="flex w-full bg-white items-center mb-2 border-2 my-5 border-[#E7E8F2] rounded-md">
                                <input
                                    type="text"
                                    placeholder="Email address"
                                    className=" bg-transparent p-2 w-full h-full outline-none border-none"
                                />
                                <button className=" bg-blue-500 text-white rounded-r-md p-2">
                                    <HiOutlineArrowNarrowRight className="text-white text-2xl font-bold" />
                                </button>
                            </div>
                            <p className="text-sm text-[#848997] mt-2">
                                Hello, we are CreativeList. Our goal is to
                                translate the positive effects from
                                revolutionizing how companies engage with their
                                clients & their team.
                            </p>
                        </div>
                    </div>
                </div>
                <div className="pt-20">
                    <hr />
                    <div className="mt-10 flex md:flex-row flex-col gap-y-5 justify-between items-center">
                        <h1 className="text-primaryColor text-xl inline-flex">
                            creative
                            <p className="text-secondaryColor text-xl">list</p>
                        </h1>
                        <ul className="flex items-center gap-10  duration-200">

                            <Link                      
                                 href={"/"}
                                className="font-bold text-sm text-gray-400 hover:text-primaryColor "
                            >
                                Terms
                            </Link>
                            <Link
                                href={"/"}
                                className="font-bold text-sm text-gray-400 hover:text-primaryColor"
                            >
                                Privacy
                            </Link>
                            <Link
                                href={"/"}
                                className="font-bold text-sm text-gray-400 hover:text-primaryColor"
                            >
                                Cookies
                            </Link>
                        </ul>
                        <div className="flex items-center gap-4">
                            <div className="border border-[#E7E8F2] rounded-full p-3 hover:bg-[#1877F2] hover:text-white cursor-pointer duration-200">
                                <BiLogoFacebook className="text-xl" />
                            </div>
                            <div className="border border-[#E7E8F2] rounded-full p-3 hover:bg-[#0072b1] hover:text-white cursor-pointer duration-200">
                                <BiLogoLinkedin className="text-xl" />
                            </div>
                            <div className="border border-[#E7E8F2] rounded-full p-3 hover:bg-[#00acee] hover:text-white cursor-pointer duration-200">
                                <BiLogoTwitter className="text-xl" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
  }