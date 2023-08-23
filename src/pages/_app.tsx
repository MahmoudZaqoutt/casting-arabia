import Footer from "@/components/Footer/Footer";
import Header from "@/components/Header/Header";
import "@/styles/globals.css";
import type { AppProps } from "next/app";
import "./index.css";
import { useEffect, useState } from "react";
export default function App({ Component, pageProps }: AppProps) {
  // const [isAuthorized, setIsAuthorized] = useState(false);

  // useEffect(() => {
  //   const token = localStorage.getItem("token");
  //   token ? setIsAuthorized(true) : setIsAuthorized(false);
  // }, []);
  // <Header isAuthorized={isAuthorized} />;

  return (
    <>
      <Component {...pageProps} />
      <Footer />
    </>
  );
}
