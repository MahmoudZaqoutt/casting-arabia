import { List } from "../Shared/List/List";
import Logo from "../Logo/Logo";

import * as React from "react";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import MenuIcon from "@mui/icons-material/Menu";
// import SimpleDialogDemo from "../SimpleDialogDemo/SimpleDialogDemo";
import Head from "next/head";

const Header = () => {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <header className=" h-20 border-b-2 bg-white shadow-md ">
      <Head>
        <title>Casting Arabia</title>
      </Head>
      <div className="max-w-[95rem]  mx-auto w-full   flex items-center justify-between h-full ">
        <div className="flex items-center gap-5 ml-16 ">
          <Logo />
          <List
            className=" gap-5 text-blue-600 hidden lg:flex"
            options={[
              {
                id: 1,
                href: "#Opportunities",
                content: "Opportunities",
                classNameOfLI: "hover:bg-blue-50 ease-in-out duration-150 p-2",
              },
              {
                id: 2,
                href: "#News",
                content: "News",
                classNameOfLI: "hover:bg-blue-50 ease-in-out duration-150 p-2",
              },
              {
                id: 3,
                href: "#LearningCenter",
                content: "Learning Center",
                classNameOfLI: "hover:bg-blue-50 ease-in-out duration-150 p-2",
              },
            ]}
          />
        </div>

        <div className="sm:hidden ">
          <Button
            id="basic-button"
            aria-controls={open ? "basic-menu" : undefined}
            aria-haspopup="true"
            aria-expanded={open ? "true" : undefined}
            onClick={handleClick}
          >
            <MenuIcon className="text-4xl " />
          </Button>
          <Menu
            id="basic-menu"
            anchorEl={anchorEl}
            open={open}
            onClose={handleClose}
            MenuListProps={{
              "aria-labelledby": "basic-button",
            }}
          >
            <MenuItem onClick={handleClose}>Create account</MenuItem>
            <MenuItem onClick={handleClose}>Log In</MenuItem>
          </Menu>
        </div>

        <div className="text-blue-600 lg:mr-20 mr-7 hidden sm:block">
          <List
            className="sm:flex gap-5 items-center hidden "
            options={[
              {
                id: 1,
                href: "/Login",
                content: "Log In",
                classNameOfLI: "hover:bg-blue-50 ease-in-out duration-150 p-2",
              },
              {
                id: 2,
                href: "",
                modal: "modal",
                content:
                  // (
                  //   <SimpleDialogDemo
                  //     content="Post opportunity "
                  //     className="hover:bg-blue-50 ease-in-out duration-150 p-2"
                  //   />
                  // )
                  "Post opportunity ",
                classNameOfLI: "hover:bg-blue-50 ease-in-out duration-150 p-2",
              },
              {
                id: 3,
                href: "/TalentRegister",
                content: "Create account",
                classNameOfLI:
                  "bg-blue-500 text-white p-3 rounded-xl !w-full hover:bg-opacity-90 ease-in-out duration-150",
              },
            ]}
          />
        </div>
      </div>
    </header>
  );
};

export default Header;
