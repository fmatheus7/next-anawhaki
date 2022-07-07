import { useEffect } from "react";
import Navbar from "../components/Navbar";
import "../styles/globals.css";
import Footer from "./../components/Footer";

function MyApp({ Component, pageProps }) {
  useEffect(() => {
    import("tw-elements");
  }, []);
  return (
    <>
      <Navbar />
      <Component {...pageProps} />
      <Footer />
    </>
  );
}

export default MyApp;
