import React from "react";
import styles from "./two.module.css";
import under from "../../Photo/Underline.png";
import gif from "../../Photo/Hero.gif";
import arrow from "../../Photo/Arrow.svg";
import arrowTwo from "../../Photo/Arrow-two.png";
import nftGif from "../../Photo/NFT-Gif.png";
import { Icons } from "../sectionOne";

function SectionTwo() {
  return (
    <div className={styles.Two}>
      {/* gif */}
      <img className={styles.Gif} src={gif} />
      <img src={nftGif} className={styles.GifTwo} />
      <div className={styles.TwoOne}>
        {/* Icons */}
        <div className={styles.Icon}>
          <Icons />
        </div>

        <About />
        <LargeText />
        <SmallText />
        <img className={styles.Arrow} src={arrow} />
        <img className={styles.ArrowTwo} src={arrowTwo} />
      </div>
    </div>
  );
}

export default SectionTwo;

// About Us
export function About() {
  return (
    <div className={styles.About}>
      <h1>About us</h1>
      <img src={under} alt="under line" className={styles.underline} />
    </div>
  );
}

// Large Text
export function LargeText() {
  return (
    <div className={styles.Large}>
      <div>
        {" "}
        <HollowT text={"5000 "} /> <FillT text={" unique wild"} />{" "}
      </div>
      <div>
        <FillTT text={"Round Wave NFT "} /> <HollowTT text={" living"} />{" "}
      </div>
      <div>
        {" "}
        <HollowT text={" on Solana "} /> <FillT text={" blockchain"} />{" "}
      </div>
    </div>
  );
}

// Small Text
export function SmallText() {
  return (
    <div className={styles.SmallText}>
      Welcome to the Round Wave Squad! Discover our collection of 5k unique
      Roundies. Don’t forget to join and support our community, fantastic prizes
      are waiting for you. Remember that “Nobody ever changed the world by doing
      what everyone one else was doing” 😊
    </div>
  );
}

// Hollow Text
export function HollowT({ text }) {
  return <h1 className={styles.Hollow}>{text}</h1>;
}

// Hollow Text
export function FillT({ text }) {
  return <h1 className={styles.Fill}>{text}</h1>;
}
export function FillTT({ text }) {
  return <h1 className={styles.FillTT}>{text}</h1>;
}
export function HollowTT({ text }) {
  return <h1 className={styles.HollowTT}>{text}</h1>;
}
