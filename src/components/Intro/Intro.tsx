"use client";

import { useState, useEffect, useRef } from "react";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import ScrambleText from "../ScrumbleText/ScrumbleText";

import styles from "./Intro.module.scss";

gsap.registerPlugin(ScrollTrigger);

export default function Intro() {
  // 텍스트 스플릿 및 애니메이션
  const containerRef = useRef<HTMLDivElement>(null);
  const [triggerKey, setTriggerKey] = useState(0);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    ScrollTrigger.create({
      trigger: el,
      start: "top 0%",
      onEnter: () => {
        setTriggerKey((prev) => prev + 1);
      },
      onEnterBack: () => {
        setTriggerKey((prev) => prev + 1);
      },
    });
  }, []);

  return (
    <section className={styles.intro} ref={containerRef}>
      <div className={styles.title}>
        <div className={styles.text}>
          <ScrambleText key={triggerKey + "-1"} text="from publisher" />
        </div>
        <span className={styles.line}></span>
        <div className={styles.text}>
          <ScrambleText key={triggerKey + "-2"} text="to frontend" />
        </div>
        <span className={styles.line}></span>
        <div className={styles.text}>
          <ScrambleText key={triggerKey + "-3"} text="in progress" />
        </div>
        <span className={styles.line}></span>
      </div>
      <div className={styles.desc}>
        <p className={styles.year}>2026</p>
        <p className={styles.text}>portfolio</p>
      </div>
    </section>
  );
}
