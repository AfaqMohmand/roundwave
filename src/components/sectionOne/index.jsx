import React from "react";
import styles from "./secO.module.css";
import Head from "../../Photo/Heading.svg";
// Icons
import Tw from "../../Photo/tw.png";
import In from "../../Photo/in.png";
import Di from "../../Photo/di.png";

function SectOne() {
  return (
    <div className={styles.Sone}>
      <img className={styles.Lima} src={Head} alt="logo" />
      <Bottom />
    </div>
  );
}

export default SectOne;

// Botttom
export function Bottom() {
  return (
    <div className={styles.Bottom}>
      <ul>
        A NEW WAVE OF <br></br>COLLECTIBLES IS ABOUT <br></br> TO HIT THE
        BLOCKCHAIN.
      </ul>
      {/* social Icons */}
      <Icons />
    </div>
  );
}

// Icons Group
export function Icons() {
  return (
    <div className={styles.Icons}>
      <div className="twitter-con" style={{ transform: "translateY(27px)" }}>
        <img src={Tw} alt="logo" />{" "}
        <span>
          <p className="res-twitter">TWITTER</p>
        </span>
      </div>
      <div className="linkedin-con">
        <img src={In} alt="logo" />
        <span className="span-element">
          <p>LINKEDIN</p>
        </span>
      </div>
      <div className="discord-con" style={{ transform: "translateY(-27px)" }}>
        <img src={Di} alt="logo" />
        <span>
          <p>DISCORD</p>
        </span>
      </div>
    </div>
  );
}
