import Footer from "@/components/Footer/Footer";
import Header from "@/components/Header/Header";
import InternalHeader from "@/components/InternalHeader/InternalHeader";
import "@/styles/globals.css";
import type { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Header />
      <InternalHeader />
      <Component {...pageProps} />;
      <Footer />
    </>
  );
}
