import Footer from "@/components/Footer/Footer";
import Header from "@/components/Header/Header";
import InternalHeader from "@/components/InternalHeader/InternalHeader";
import UserInfoForm from "@/components/UserInfoForm/UserInfoForm";
import "@/styles/globals.css";
import type { AppProps } from "next/app";
import "./index.css";
export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      {/* <Header /> */}

      <InternalHeader />
      {/* <UserInfoForm show={true}> */}
      <Component {...pageProps} />
      {/* </UserInfoForm> */}
      <Footer />
    </>
  );
}
