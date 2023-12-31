import Image from "next/image";
import React from "react";
import img from "../../assets/Logo.png";
import Link from "next/link";
const Logo = (props: any) => {
  return (
    <Link href={`/${props.link}`}>
      <Image src={img} alt="LogoImage" className="max-w-[140px] " />
    </Link>
  );
};

export default Logo;
