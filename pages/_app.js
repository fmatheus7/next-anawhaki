import { useEffect } from "react";
import Navbar from "../components/Navbar";
import "../styles/globals.css";
import Footer from "./../components/Footer";
import { ApolloProvider } from "@apollo/client";
import client from "../apollo-client";
function MyApp({ Component, pageProps }) {
  useEffect(() => {
    import("tw-elements");
  }, []);
  return (
    <ApolloProvider client={client}>
      <Navbar />
      <Component {...pageProps} />
      <Footer />
    </ApolloProvider>
  );
}

export default MyApp;
