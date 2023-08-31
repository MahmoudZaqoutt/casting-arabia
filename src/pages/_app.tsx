import Footer from "@/components/Footer/Footer";
import Header from "@/components/Header/Header";
import "@/styles/globals.css";
import type { AppProps } from "next/app";
import "./index.css";
import Head from "next/head";
import { useRouter } from "next/router";

export default function App({ Component, pageProps }: AppProps) {
  const router = useRouter();
  const path = router.pathname;

  const testPath = ["login", "register", "forgetPassword"];
  const isAuth = testPath.includes(path.split("/").pop() || "");

  return (
    <>
      <Head>
        <title>Casting Arabia</title>
      </Head>
      <Header isAuthorized={!isAuth} />;
      <Component {...pageProps} />
      <Footer />
    </>
  );
}
