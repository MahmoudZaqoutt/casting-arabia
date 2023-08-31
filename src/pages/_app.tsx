import Footer from "@/components/Footer/Footer";
import Header from "@/components/Header/Header";
import "@/styles/globals.css";
import type { AppProps } from "next/app";
import "./index.css";
import Head from "next/head";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import LinearProgress from "@mui/material/LinearProgress";

export default function App({ Component, pageProps }: AppProps) {
  const router = useRouter();
  const path = router.pathname;
  const testPath = ["login", "register", "forgetPassword"];
  const isAuth = testPath.includes(path.split("/").pop() || "");
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const startLoading = () => setIsLoading(true);
    const stopLoading = () => setIsLoading(false);

    router.events.on("routeChangeStart", startLoading);
    router.events.on("routeChangeComplete", stopLoading);
    router.events.on("routeChangeError", stopLoading);

    return () => {
      router.events.off("routeChangeStart", startLoading);
      router.events.off("routeChangeComplete", stopLoading);
      router.events.off("routeChangeError", stopLoading);
    };
  }, []);

  return (
    <>
      <div>
        {isLoading && (
          <LinearProgress className="!h-[2px]" variant="indeterminate" />
        )}
      </div>
      <Head>
        <title>Casting Arabia</title>
      </Head>
      <Header isAuthorized={!isAuth} />
      <Component {...pageProps} />
      <Footer />
    </>
  );
}
