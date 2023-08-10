import Image from "next/image";
import React from "react";
import img from "../../assets/Logo.png";
import Link from "next/link";
const Logo = () => {
  return (
    <Link href={"/"}>
      <Image
        src={img}
        alt="LogoImage"
        className="max-w-[140px] lg:ml-0 -ml-10"
      />
    </Link>
  );
};

export default Logo;
