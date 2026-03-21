"use client";

import { useState } from "react";
import { gsap } from "gsap";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";

import Link from "next/link";
import styles from "./Header.module.css";

export default function Header() {
  // 최상단으로 스크롤
  gsap.registerPlugin(ScrollToPlugin);
  const scrollTop = () => {
    gsap.to(window, {
      duration: 0.8,
      scrollTo: 0,
      ease: "power2.out",
    });
  };

  // 메일 주소 복사 후 토스트 메시지
  const [showToast, setShowToast] = useState(false);
  const handleCopyEmail = async () => {
    await navigator.clipboard.writeText("ttubiny@gmail.com");
    setShowToast(true);

    setTimeout(() => {
      setShowToast(false);
    }, 2000);
  };

  return (
    <header className={styles.header}>
      <Link href={"/"} className={styles.name} onClick={scrollTop}>
        Soobin, Jeong
      </Link>
      <Link href={"/"} className={styles.mail} onClick={handleCopyEmail}>
        Contact me
      </Link>
      {showToast && (
        <p className={styles.toast}>
          복사 된 메일 주소로 <br />
          연락해주세요. ☺️
        </p>
      )}
    </header>
  );
}
