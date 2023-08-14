import React from "react";
import { List } from "../Shared/List/List";
import Logo from "../Logo/Logo";
import Container from "../Shared/Container/Container";

const Footer = () => {
  return (
    <footer className="min-h-20 p-5 !bg-white ">
      <Container>
        <div className="flex flex-col md:flex-row md:items-center gap-3 h-full">
          <Logo />
          <List
            className=" sm:gap-5 text-gray-400 flex flex-col sm:flex-row md:ml-0 "
            options={[
              {
                id: 1,
                href: "/",
                content: "Contact Us",
                classNameOfLI: "hover:underline ease-in-out duration-150 p-2",
              },
              {
                id: 2,
                href: "/",
                content: "About Us",
                classNameOfLI: "hover:underline ease-in-out duration-150 p-2",
              },
              {
                id: 3,
                href: "/",
                content: "Terms of Service",
                classNameOfLI: "hover:underline ease-in-out duration-150 p-2",
              },
              {
                id: 4,
                href: "/",
                content: "Privacy Policy",
                classNameOfLI: "hover:underline ease-in-out duration-150 p-2",
              },
            ]}
          />
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
