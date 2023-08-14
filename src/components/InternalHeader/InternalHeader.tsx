import { List } from "../Shared/List/List";
import Logo from "../Logo/Logo";
import * as React from "react";
import MenuIcon from "@mui/icons-material/Menu";
import MenuItems from "../Shared/MenuItems/MenuItems";
import Container from "../Shared/Container/Container";
import Image from "next/image";
import { AiOutlineProfile, AiOutlineExclamationCircle } from "react-icons/ai";
import { BsChatSquareText, BsPerson } from "react-icons/bs";
import { MdOutlineSupervisorAccount, MdLogout } from "react-icons/md";

import img from "../../assets/Rectangle16.png";
import ToolTip from "../Shared/ToolTip/ToolTip";
const InternalHeader = () => {
  return (
    <header className=" h-20 border-b-2 bg-white shadow-md ">
      <Container>
        <div className="w-full flex items-center justify-between h-full pt-4">
          <div className="flex items-center gap-5  ">
            <Logo />
          </div>

          <div className="flex justify-between items-center">
            <List
              className=" sm:flex  hidden gap-5 items-center  text-gray-500"
              options={[
                {
                  href: "/Login",
                  content: (
                    <ToolTip
                      className="hover:bg-blue-50 ease-in-out duration-150 p-2 text-2xl "
                      toolTipContent={<AiOutlineProfile />}
                      toolTipToShow="Review"
                    />
                  ),
                },
                {
                  href: "",
                  content: (
                    <ToolTip
                      className="hover:bg-blue-50 ease-in-out duration-150 p-2 text-2xl "
                      toolTipContent={<BsChatSquareText />}
                      toolTipToShow="Chats"
                    />
                  ),
                },
                {
                  href: "/community",
                  content: (
                    <ToolTip
                      className="hover:bg-blue-50 ease-in-out duration-150 p-2 text-2xl "
                      toolTipContent={<MdOutlineSupervisorAccount />}
                      toolTipToShow="Community"
                    />
                  ),
                },
                {
                  href: "/about-us",
                  content: (
                    <ToolTip
                      className="hover:bg-blue-50 ease-in-out duration-150 p-2 text-2xl "
                      toolTipContent={<AiOutlineExclamationCircle />}
                      toolTipToShow="About Us"
                    />
                  ),
                },
              ]}
            />
            <List
              className="mx-2"
              options={[
                {
                  href: "/TalentRegister",
                  content: (
                    <ToolTip
                      className="hover:bg-blue-50 ease-in-out duration-150 p-2 text-blue-500 font-semibold text-xl"
                      toolTipContent={"العربية"}
                      toolTipToShow="Languages"
                    />
                  ),
                },
              ]}
            />
            <MenuItems
              shape={
                <Image
                  src={img}
                  alt="profileImage"
                  className="rounded-full w-8 h-8"
                />
              }
              Items={[
                {
                  href: "/Profile",
                  content: (
                    <div className="hover:bg-blue-50 ease-in-out duration-150 text-lg flex items-center justify-between gap-2">
                      <BsPerson />
                      <p>Profile</p>
                    </div>
                  ),
                },
                {
                  href: "/Login",
                  content: (
                    <div className="hover:bg-blue-50 ease-in-out duration-150 text-lg flex items-center justify-between gap-2">
                      <MdLogout />
                      <p>Logout</p>
                    </div>
                  ),
                },
              ]}
            />
            <MenuItems
              className="sm:hidden"
              shape={<MenuIcon className="text-4xl" />}
              Items={[
                {
                  href: "/TalentRegister",
                  content: (
                    <div className="hover:bg-blue-50 ease-in-out duration-150 text-lg flex items-center justify-between gap-2">
                      <AiOutlineProfile className="text-2xl" />
                      <p>Review</p>
                    </div>
                  ),
                },
                {
                  href: "/TalentRegister",
                  content: (
                    <div className="hover:bg-blue-50 ease-in-out duration-150 text-lg flex items-center justify-between gap-2">
                      <BsChatSquareText className="text-2xl" />
                      <p>Chats</p>
                    </div>
                  ),
                },
                {
                  href: "/TalentRegister",
                  content: (
                    <div className="hover:bg-blue-50 ease-in-out duration-150 text-lg flex items-center justify-between gap-2">
                      <MdOutlineSupervisorAccount className="text-2xl" />
                      <p>Community</p>
                    </div>
                  ),
                },
                {
                  href: "/TalentRegister",
                  content: (
                    <div className="hover:bg-blue-50 ease-in-out duration-150 text-lg flex items-center justify-between gap-2">
                      <AiOutlineExclamationCircle className="text-2xl" />
                      <p>About Us</p>
                    </div>
                  ),
                },
              ]}
            />
          </div>
        </div>
      </Container>
    </header>
  );
};

export default InternalHeader;
