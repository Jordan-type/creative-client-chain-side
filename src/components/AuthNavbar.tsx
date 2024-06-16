import React, { useState } from "react";
import { IoMdNotificationsOutline } from "react-icons/io";
import { GoMail } from "react-icons/go";
import { MdOutlineFavoriteBorder } from "react-icons/md";
import { BiMenuAltRight } from "react-icons/bi";
import { RxAvatar, RxDashboard } from "react-icons/rx";
import { AiOutlineSetting } from "react-icons/ai";
import { Drawer } from "antd";
import Link from "next/link"
import Image from "next/image"
import avatar from "../assets/author.jpg";

const AuthNavbar: React.FC = () => {
  const profileData = {
    isNotification: true,
    user: {
      role: "client",
    },
  };

  const [open, setOpen] = useState<boolean>(false);
  const showDrawer = () => {
    setOpen(true);
  };
  const onClose = () => {
    setOpen(false);
  };

  return (
    <header className="w-full bg-white shadow-sm font-roboto">
      <div className="flex h-full w-full items-center justify-between px-4 py-5">
        <div>
          <Link
            href={profileData.user.role === "client" ? "/creatives/services" : "/"}
            className="text-2xl font-garamond font-bold text-primaryColor"
          >
            creative
            <span className="text-secondaryColor">list</span>
          </Link>
        </div>
        <BiMenuAltRight
          onClick={showDrawer}
          className="text-primaryColor text-3xl cursor-pointer lg:hidden block"
        />
        <div className="hidden lg:flex items-center text-2xl gap-5 lg:gap-8">
          {/* Notification */}
          <div className="relative cursor-pointer w-auto">
            <p className=" text-gray-500">
              <IoMdNotificationsOutline />
            </p>
            {profileData.isNotification && (
              <div className="h-2 w-2 rounded-full bg-[#FF62AD] animate-bounce absolute -top-1 -right-1 text-white text-xs flex items-center justify-center" />
            )}
          </div>
          {/* Message */}
          <div className="relative cursor-pointer w-auto">
            <p className=" text-gray-500">
              <GoMail />
            </p>
            {profileData.isNotification && (
              <div className="h-2 w-2 rounded-full bg-[#FF62AD] animate-bounce absolute -top-1 -right-[0.70rem] text-white text-xs flex items-center justify-center" />
            )}
          </div>
          {/* Favorite */}
          <div className="relative cursor-pointer w-auto">
            <p className=" text-gray-500">
              <MdOutlineFavoriteBorder />
            </p>
            {profileData.isNotification && (
              <div className="h-2 w-2 rounded-full bg-[#FF62AD] animate-bounce absolute -top-1 -right-1 text-white text-xs flex items-center justify-center" />
            )}
          </div>
          {/* Dashboard */}
          <div className=" cursor-pointer w-auto ">
            <Link
              href="/dashboard"
              className=" text-primaryColor bg-purple-200 rounded-md p-2 text-lg font-medium hover:bg-primaryColor hover:text-white duration-200"
            >
              Dashboard
            </Link>
          </div>
          {/* Profile Icon */}
          <div className=" cursor-pointer w-auto ">
            <Image
              src={avatar}
              alt="abc"
              className="rounded-full w-10 h-10"
            />
          </div>
        </div>
        <Drawer placement="right" onClose={onClose} open={open}>
          <div className="flex flex-col gap-8">
            <ul className="flex flex-col gap-8 text-secondaryColor">
              <Link
                href="/"
                className="flex gap-5 items-center text-xl justify-start"
              >
                <p className="">
                  <IoMdNotificationsOutline />
                </p>
                <p>Notification</p>
              </Link>
              <Link
                href="/"
                className="flex gap-5 items-center text-xl justify-start"
              >
                <p className="">
                  <GoMail />
                </p>
                <p>Message</p>
              </Link>
              <Link
                href="/"
                className="flex gap-5 items-center text-xl justify-start"
              >
                <p className="">
                  <MdOutlineFavoriteBorder />
                </p>
                <p>Favorite</p>
              </Link>
              <Link
                href="/profile"
                className="flex gap-5 items-center text-xl justify-start"
              >
                <p className="">
                  <RxAvatar />
                </p>
                <p>Profile</p>
              </Link>

              <Link
                href="/dashboard"
                className="flex gap-5 items-center text-xl justify-start"
              >
                <p className="">
                  <RxDashboard />
                </p>
                <p>Dashboard</p>
              </Link>
              <Link
                href="/"
                className="flex gap-5 items-center text-xl justify-start"
              >
                <p className="">
                  <AiOutlineSetting />
                </p>
                <p>Setting</p>
              </Link>
            </ul>
          </div>
        </Drawer>
      </div>
    </header>
  );
};

export default AuthNavbar;
