import type { NextPage } from "next";
import styles from "../styles/Home.module.css";
import Nav from "../components/navbar";
import CaptionCarousel from "../components/carousel";
import RandomQuotes from "../components/quotes";

const Home: NextPage = () => {
  return (
    <>
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
