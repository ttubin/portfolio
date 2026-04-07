"use client";

import { useEffect, useRef } from "react";

const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

export default function ScrambleText({ text }: { text: string }) {
  const ref = useRef<HTMLParagraphElement>(null);

  useEffect(() => {
    let iteration = 0;

    const interval = setInterval(() => {
      if (!ref.current) return;

      ref.current.innerText = text
        .split("")
        .map((letter, index) => {
          if (index < iteration) return text[index];
          return letters[Math.floor(Math.random() * 26)];
        })
        .join("");

      if (iteration >= text.length) clearInterval(interval);

      iteration += 1 / 3;
    }, 60);

    return () => clearInterval(interval);
  }, []);

  return <p ref={ref}>{text}</p>;
}
