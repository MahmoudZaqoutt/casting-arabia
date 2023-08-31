import React from "react";
import { List } from "../Shared/List/List";
import Logo from "../Logo/Logo";
import Container from "../Shared/Container/Container";
import { footerLinks } from "@/constants/footerLinks";

const Footer = () => {
  return (
    <footer className="min-h-20 p-5 !bg-white ">
      <Container>
        <div className="flex flex-col md:flex-row md:items-center gap-3 h-full">
          <Logo />
          <List
            className=" sm:gap-5 text-gray-400 flex flex-col sm:flex-row md:ml-0 "
            options={footerLinks}
          />
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
