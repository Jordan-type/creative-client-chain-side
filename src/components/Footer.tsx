//  import Link
import { HiOutlineArrowNarrowRight } from "react-icons/hi";
import { BiLogoFacebook } from "react-icons/bi";
import { BiLogoLinkedin } from "react-icons/bi";
import { BiLogoTwitter } from "react-icons/bi";
import Link from "next/link"

type Props = {
    className?: string
}

const navigation = [
    {
      name: 'Twitter',
      href: 'https://twitter.com/CeloDevs',
      icon: (props: Props) => (
        <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
          <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
        </svg>
      ),
    },
    {
      name: 'GitHub',
      href: 'https://github.com/celo-org/celo-composer',
      icon: (props: Props) => (
        <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
          <path
            fillRule="evenodd"
            d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
            clipRule="evenodd"
          />
        </svg>
      ),
    }
  ]
  
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