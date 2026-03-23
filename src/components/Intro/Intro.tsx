"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";

import styles from "./Intro.module.scss";

export default function Intro() {
  // 타이틀 글자 하나씩 분리하여 애니메이션
  const splitText = (text: string) => {
    return text.split("").map((char: string, i: number) => (
      <span key={`${char}-${i}`} className="char">
        {char === " " ? "\u00A0" : char}
      </span>
    ));
  };

  const webRef = useRef<HTMLSpanElement | null>(null);
  const dashRef = useRef<HTMLSpanElement | null>(null);
  const devRef = useRef<HTMLSpanElement | null>(null);

  useEffect(() => {
    if (!webRef.current || !devRef.current) return;

    const webChars = webRef.current.querySelectorAll(".char");
    const devChars = devRef.current.querySelectorAll(".char");

    const tl = gsap.timeline();

    tl.from(webChars, {
      y: 100,
      opacity: 0,
      scale: 0.9,
      filter: "blur(8px)",
      stagger: 0.08,
      duration: 1,
      ease: "power3.out",
    })
      .from(
        dashRef.current,
        {
          scaleX: 0,
          duration: 0.6,
          ease: "power2.out",
        },
        "-=0.9",
      )
      .from(
        devChars,
        {
          y: 100,
          opacity: 0,
          scale: 0.9,
          filter: "blur(8px)",
          stagger: 0.05,
          duration: 1,
          ease: "power3.out",
        },
        "-=0.7",
      );
  }, []);

  return (
    <section className={styles.intro}>
      <h1 className={`${styles.title}`}>
        <span ref={webRef} className={styles.title__web}>
          {splitText("web")}
        </span>
        <span ref={dashRef} className={styles.title__dash}></span>
        <span ref={devRef} className={styles.title__dev}>
          {splitText("portfolio")}
        </span>
      </h1>
      <p className={`${styles.text} ${styles.text__m}`}>Frontend-focused Web Publisher</p>
      <p className={`${styles.text} ${styles.text__s}`}>
        <span>6년 이상의 UI 퍼블리싱 경험</span>으로 <br />
        <span>모바일 인앱, 디지털 카탈로그, 반응형 웹을 구축</span>해왔습니다. <br />
        사용자 경험을 고려한 UI 퍼블리싱을 지향합니다.
      </p>
    </section>
  );
}
