import type { NextPage } from "next";
import Head from "next/head";
import Channels from "../components/templates/Channels";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Chat</title>
        <meta name="description" content="Generated by create-t3-app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Channels />
    </>
  );
};

export default Home;
