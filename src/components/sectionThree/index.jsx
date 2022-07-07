import React from "react";
import styles from "./Three.module.css";

import onex from "../../Photo/blue-slide-images.png";
import twox from "../../Photo/Yellow-slides-images.png";
import threex from "../../Photo/red-03.png";

import { useInView } from "react-intersection-observer";

function SectionThree() {
  const { ref, inView, entry } = useInView({
    threshold: 0.2
  });

  return (
    // Using Image when in view  Scroll,  cause animation   Animaton

    <div className={styles.Three}>
      <img
        ref={ref}
        className={inView ? styles.Move : styles.MoveX}
        src={twox}
      />
      <img className={inView ? styles.MoveX : styles.Move} src={onex} />
      <img className={inView ? styles.Move : styles.MoveX} src={threex} />
    </div>
  );
}

export default SectionThree;
