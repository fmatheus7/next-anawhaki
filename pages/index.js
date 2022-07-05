import Head from "next/head";
import AboutUs from "../components/AboutUs";
import Navbar from "./../components/Navbar";
import Main from "./../components/Main";
import Services from "./../components/Services";
import Cerimonies from "../components/Cerimonies";
import Medicines from "./../components/Medicines";
import Agenda from "./../components/Agenda";
import Retreats from "../components/Retreats";
import Footer from "./../components/Footer";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <meta name='description' content='Generated by create next app' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <Main />
      <Agenda />
      <Retreats />
      <Services />
      <AboutUs />
    </div>
  );
}
