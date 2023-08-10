import { List } from "../Shared/List/List";
import Logo from "../Logo/Logo";
import * as React from "react";
import MenuIcon from "@mui/icons-material/Menu";
import SimpleDialogDemo from "../SimpleDialogDemo/SimpleDialogDemo";
import Head from "next/head";
import MenuItems from "../Shared/MenuItems/MenuItems";
import Container from "../Shared/Container/Container";
import Image from "next/image";
import { AiOutlineProfile, AiOutlineExclamationCircle } from "react-icons/ai";
import { BsChatSquareText } from "react-icons/bs";
import { MdOutlineSupervisorAccount } from "react-icons/md";

import img from "../../assets/Rectangle16.png";
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
          </div>

          <div className="flex justify-between items-center">
            <List
              className="md:flex gap-5 items-center hidden text-gray-500"
              options={[
                {
                  href: "/Login",
                  content: <AiOutlineProfile />,
                  classNameOfLI:
                    "hover:bg-blue-50 ease-in-out duration-150 p-2 text-3xl",
                },
                {
                  href: "",
                  content: <BsChatSquareText />,
                  classNameOfLI:
                    "hover:bg-blue-50 ease-in-out duration-150 p-2 text-3xl",
                },
                {
                  href: "",
                  content: <MdOutlineSupervisorAccount />,
                  classNameOfLI:
                    "hover:bg-blue-50 ease-in-out duration-150 p-2 text-3xl",
                },
                {
                  href: "/TalentRegister",
                  content: <AiOutlineExclamationCircle />,
                  classNameOfLI:
                    "hover:bg-blue-50 ease-in-out duration-150 p-2 text-3xl",
                },
                {
                  href: "/TalentRegister",
                  content: "العربية",
                  classNameOfLI:
                    "hover:bg-blue-50 ease-in-out duration-150 p-2 text-blue-500 font-semibold text-2xl",
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
                { href: "/Profile", content: "Profile" },
                { href: "/Login", content: "Logout" },
              ]}
            />
            <MenuItems
              className="md:hidden "
              shape={<MenuIcon className="text-4xl " />}
              Items={[
                { href: "/TalentRegister", content: <AiOutlineProfile /> },
                { href: "/TalentRegister", content: <BsChatSquareText /> },
                {
                  href: "/TalentRegister",
                  content: <MdOutlineSupervisorAccount />,
                },
                {
                  href: "/TalentRegister",
                  content: <AiOutlineExclamationCircle />,
                },
              ]}
            />
          </div>
        </div>
      </Container>
    </header>
  );
};

export default Header;

// .................................................................................

// import { List } from "../Shared/List/List";
// import Logo from "../Logo/Logo";
// import * as React from "react";
// import MenuIcon from "@mui/icons-material/Menu";
// import SimpleDialogDemo from "../SimpleDialogDemo/SimpleDialogDemo";
// import Head from "next/head";
// import MenuItems from "../Shared/MenuItems/MenuItems";
// import Container from "../Shared/Container/Container";

// const Header = () => {
//   return (
//     <header className=" h-20 border-b-2 bg-white shadow-md ">
//       <Head>
//         <title>Casting Arabia</title>
//       </Head>
//       <Container>
//         <div className="w-full flex items-center justify-between h-full pt-4">
//           <div className="flex items-center gap-5  ">
//             <Logo />
//             <List
//               className=" gap-5 text-blue-600 hidden lg:flex"
//               options={[
//                 {
//                   id: 1,
//                   href: "/#Opportunities",
//                   content: "Opportunities",
//                   classNameOfLI:
//                     "hover:bg-blue-50 ease-in-out duration-150 p-2",
//                 },
//                 {
//                   id: 2,
//                   href: "/#News",
//                   content: "News",
//                   classNameOfLI:
//                     "hover:bg-blue-50 ease-in-out duration-150 p-2",
//                 },
//                 {
//                   id: 3,
//                   href: "/#LearningCenter",
//                   content: "Learning Center",
//                   classNameOfLI:
//                     "hover:bg-blue-50 ease-in-out duration-150 p-2",
//                 },
//               ]}
//             />
//           </div>
//           <MenuItems
//             className="sm:hidden "
//             shape={<MenuIcon className="text-4xl " />}
//             Items={[
//               { href: "/TalentRegister", content: "Create account" },
//               { href: "/Login", content: "Log In" },
//             ]}
//           />

//           <div className="text-blue-600  hidden sm:block">
//             <List
//               className="sm:flex gap-5 items-center hidden "
//               options={[
//                 {
//                   href: "/Login",
//                   content: "Log In",
//                   classNameOfLI:
//                     "hover:bg-blue-50 ease-in-out duration-150 p-2",
//                 },
//                 {
//                   href: "",
//                   modal: "modal",
//                   content: (
//                     <SimpleDialogDemo
//                       content="Post opportunity "
//                       className="hover:bg-blue-50 ease-in-out duration-150 p-2"
//                     />
//                   ),
//                   classNameOfLI:
//                     "hover:bg-blue-50 ease-in-out duration-150 p-2",
//                 },
//                 {
//                   href: "",
//                   content: "العربية",
//                   classNameOfLI:
//                     "hover:bg-blue-50 ease-in-out duration-150 p-2",
//                 },
//                 {
//                   href: "/TalentRegister",
//                   content: "Create account",
//                   classNameOfLI:
//                     "bg-blue-500 text-white p-3 rounded-xl !w-full hover:bg-opacity-90 ease-in-out duration-150",
//                 },
//               ]}
//             />
//           </div>
//         </div>
//       </Container>
//     </header>
//   );
// };

// export default Header;
