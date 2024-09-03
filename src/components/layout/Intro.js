import React from "react";
import styles from "../style/IntroBox.module.css";

export default function Intro() {
  return (
    <>
      <section className={styles.introBox} id="introBox">
        <div className={`${styles.wave} ${styles["wave-1"]}`}></div>
        <div className={`${styles.wave} ${styles["wave-2"]}`}></div>
        <div className={`${styles.wave} ${styles["wave-3"]}`}></div>
        <div className={styles.title}>
          <div className={styles.myName}>HaHyeon's</div>
          <div>Frontend</div>
          <div>portfolio</div>
        </div>
      </section>
    </>
  );
}
