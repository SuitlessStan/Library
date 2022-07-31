import type { NextPage } from "next";
import styles from "../styles/Home.module.css";
import Nav from "../components/navbar";
import CaptionCarousel from "../components/carousel";
import RandomQuotes from "../components/quotes";
import Head from "next/head";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Library</title>
        <meta name="description" content="A library application to submit your favorite books" />
      </Head>
      <Nav />
      <div className={styles.container}>
        <main className={styles.main}>
          <CaptionCarousel />
          <RandomQuotes />
        </main>
      </div>
    </>
  );
};

export default Home;
