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
import { AiOutlineExclamationCircle, AiOutlineProfile } from "react-icons/ai";
import { BsChatSquareText, BsPerson } from "react-icons/bs";
import { MdLogout, MdOutlineSupervisorAccount } from "react-icons/md";
import Image from "next/image";
import img from "../../assets/images.png";
import { useRouter } from "next/router";
import Cookies from "js-cookie";
import Link from "next/link";

const Header = (props: any) => {
  const router = useRouter();

  return (
    <>
      {props.isAuthorized ? (
        <header className=" h-20 border-b-2 bg-white shadow-md ">
          <Container>
            <div className="w-full flex items-center justify-between h-full pt-4">
              <div className="flex items-center gap-5  ">
                <Logo link="creator" />
              </div>

              <div className="flex justify-between items-center">
                <List
                  className=" sm:flex  hidden gap-5 items-center  text-gray-500"
                  options={[
                    {
                      href: "/creator/review",
                      content: (
                        <ToolTip
                          className="hover:bg-blue-50 ease-in-out duration-150 p-2 text-2xl "
                          toolTipContent={<AiOutlineProfile />}
                          toolTipToShow="Review"
                        />
                      ),
                    },
                    {
                      href: "/chats",
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
                      href: "/creator/profile",
                      content: (
                        <div>
                          <button className="hover:bg-blue-50 ease-in-out duration-150 text-lg flex items-center justify-between gap-2">
                            <BsPerson />
                            <p>Profile</p>
                          </button>
                        </div>
                      ),
                    },
                    {
                      href: "/",
                      content: (
                        <div>
                          <button
                            onClick={() => {
                              Cookies.remove("token");
                              localStorage.removeItem("token");
                              router.push("/auth/login");
                            }}
                            className="hover:bg-blue-50 ease-in-out duration-150 text-lg flex items-center justify-between gap-2"
                          >
                            <MdLogout /> <p>Logout</p>
                          </button>
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
                      href: "/creator/review",
                      content: (
                        <div className="hover:bg-blue-50 ease-in-out duration-150 text-lg flex items-center justify-between gap-2">
                          <AiOutlineProfile className="text-2xl" />
                          <p>Review</p>
                        </div>
                      ),
                    },
                    {
                      href: "/chats",
                      content: (
                        <div className="hover:bg-blue-50 ease-in-out duration-150 text-lg flex items-center justify-between gap-2">
                          <BsChatSquareText className="text-2xl" />
                          <p>Chats</p>
                        </div>
                      ),
                    },
                    {
                      href: "/community",
                      content: (
                        <div className="hover:bg-blue-50 ease-in-out duration-150 text-lg flex items-center justify-between gap-2">
                          <MdOutlineSupervisorAccount className="text-2xl" />
                          <p>Community</p>
                        </div>
                      ),
                    },
                    {
                      href: "/about-us",
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
      ) : (
        <header className=" h-20 border-b-2 bg-white shadow-md ">
          <Head>
            <title>Casting Arabia</title>
          </Head>
          <Container>
            <div className="w-full flex items-center justify-between h-full pt-4">
              <div className="flex items-center gap-5  ">
                <Logo link="info" />
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
                      href: "/auth/login",
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
                      href: "/auth/register",
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
                    { href: "/auth/register", content: "Create account" },
                    { href: "/auth/login", content: "Log In" },
                  ]}
                />
              </div>
            </div>
          </Container>
        </header>
      )}
    </>
  );
};

export default Header;
