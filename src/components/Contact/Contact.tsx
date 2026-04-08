"use client";

import { useState, useEffect, useRef } from "react";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import ScrambleText from "../ScrumbleText/ScrumbleText";

import styles from "./Contact.module.scss";

gsap.registerPlugin(ScrollTrigger);

export default function Contact() {
  // 텍스트 스플릿 및 애니메이션
  const containerRef = useRef<HTMLDivElement>(null);
  const [triggerKey, setTriggerKey] = useState(0);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    ScrollTrigger.create({
      trigger: el,
      start: "top 80%",
      onEnter: () => {
        setTriggerKey((prev) => prev + 1);
      },
      onEnterBack: () => {
        setTriggerKey((prev) => prev + 1);
      },
    });
  }, []);

  // 토스트 메시지
  const [active, setActive] = useState<"mail" | "phone" | null>(null);
  const [toast, setToast] = useState<string | null>(null);

  const handleCopy = (text: string, label: string) => {
    navigator.clipboard.writeText(text);
    setToast(`복사 된 이메일로 연락 주세요! ☺️`);
    setTimeout(() => setToast(null), 1500);
  };

  return (
    <section className={styles.contact} ref={containerRef}>
      <div className={styles.title}>
        <div className={styles.text}>
          <ScrambleText key={triggerKey + "-1"} text="let's build" />
        </div>
        <span className={styles.line}></span>
        <div className={styles.text}>
          <ScrambleText key={triggerKey + "-2"} text="something" />
        </div>
        <span className={styles.line}></span>
        <div className={styles.text}>
          <ScrambleText key={triggerKey + "-3"} text="together!" />
        </div>
        <span className={styles.line}></span>
      </div>
      <div className={styles.content}>
        <p className={styles.bubble}>
          <span className={styles.web}>마우스를 올려 보세요! 👀</span>
          <span className={styles.mob}>터치 해보세요! 👀</span>
        </p>
        <ul className={styles.info}>
          <li onMouseEnter={() => setActive("mail")} onMouseLeave={() => setActive(null)} onClick={() => handleCopy("ttubiny@gmail.com", "Email")}>
            <p className={styles.icon}>📧</p>
            <p className={styles.text}>ttubiny@gmail.com</p>
          </li>
          <li onMouseEnter={() => setActive("phone")} onMouseLeave={() => setActive(null)}>
            <p className={styles.icon}>📱</p>
            <p className={styles.text}>010-3214-7407</p>
          </li>
        </ul>
        {toast && <div className={styles.toast}>{toast}</div>}
        <p className={styles.text}>PORTFOLIO</p>
      </div>
    </section>
  );
}
