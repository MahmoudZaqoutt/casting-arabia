import { List } from "../Shared/List/List";
import Logo from "../Logo/Logo";
import * as React from "react";
import MenuIcon from "@mui/icons-material/Menu";
import Head from "next/head";
import MenuItems from "../Shared/MenuItems/MenuItems";
import Container from "../Shared/Container/Container";
import ToolTip from "../Shared/ToolTip/ToolTip";
import Modall from "../Shared/Modal/Modal";
import SeekerRegister from "../SeekerRegister/SeekerRegister";

const Header = () => {
  return (
    <header className=" h-20 border-b-2 bg-white shadow-md ">
      <Head>
        <title>Casting Arabia</title>
      </Head>
      <Container>
        <div className="w-full flex items-center justify-between h-full pt-4">
          <div className="flex items-center gap-5  ">
            <Logo />
            <List
              className=" gap-5 text-blue-600 hidden lg:flex"
              options={[
                {
                  id: 1,
                  href: "/#Opportunities",
                  content: "Opportunities",
                  classNameOfLI:
                    "hover:bg-blue-50 ease-in-out duration-150 p-2",
                },
                {
                  id: 2,
                  href: "/#News",
                  content: "News",
                  classNameOfLI:
                    "hover:bg-blue-50 ease-in-out duration-150 p-2",
                },
                {
                  id: 3,
                  href: "/#LearningCenter",
                  content: "Learning Center",
                  classNameOfLI:
                    "hover:bg-blue-50 ease-in-out duration-150 p-2",
                },
              ]}
            />
          </div>

          <div className="text-blue-600 flex items-center">
            <List
              className="flex sm:gap-5 gap-2 items-center  "
              options={[
                {
                  href: "/Login",
                  content: "Log In",
                  classNameOfLI:
                    "hover:bg-blue-50 ease-in-out duration-150 p-2 sm:block hidden",
                },
                {
                  href: "",
                  modal: "modal",
                  content: (
                    <Modall
                      modalName={"Post opportunity"}
                      modalContent={<SeekerRegister />}
                      buttonClassName="hover:bg-blue-50 ease-in-out duration-150 p-2 hidden sm:block"
                      modalClassName="!w-[85%] -mt-10"
                    />
                  ),
                  classNameOfLI:
                    "hover:bg-blue-50 ease-in-out duration-150 p-2 hidden sm:block",
                },
                {
                  href: "",
                  content: (
                    <ToolTip
                      className="hover:bg-blue-50 ease-in-out duration-150  text-blue-500 font-semibold text-xl"
                      toolTipContent={"العربية"}
                      toolTipToShow="Languages"
                    />
                  ),
                },
                {
                  href: "/TalentRegister",
                  content: "Create account",
                  classNameOfLI:
                    "bg-blue-500 text-white p-3 hidden sm:block rounded-xl !w-full hover:bg-opacity-90 ease-in-out duration-150",
                },
              ]}
            />
            <MenuItems
              className="sm:hidden"
              shape={<MenuIcon className="text-4xl " />}
              Items={[
                { href: "/TalentRegister", content: "Create account" },
                { href: "/Login", content: "Log In" },
              ]}
            />
          </div>
        </div>
      </Container>
    </header>
  );
};

export default Header;
