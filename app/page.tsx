"use client";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import styles from "./page.module.css";

function Home() {
  return (
    <main>
      <div className={styles.allbox}>
        <div className={styles.resultsection}>
          <p>Your Result</p>
          <p>76</p>
          <p>of 100</p>
          <p>Great</p>
          <p>
            your scored higher than 65% of the people who have taken these tests
          </p>
        </div>
        <div className={styles.summarysection}>
          <p>summary</p>
          <div className="reaction"></div>
          <div className="memory"></div>
          <div className="verbal"></div>
          <div className="visual"></div>
          <div className="visual"></div>
          <button className="continue">continue</button>
        </div>
      </div>
    </main>
  );
}

export default Home;
