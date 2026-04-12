"use client";

import { useState, useEffect, useRef } from "react";
import { projects } from "@/data/projects";
import { Project } from "@/types/project";
import ProjectCard from "./ProjectCard";
import ProjectModal from "./ProjectModal";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import styles from "./Projects.module.scss";

gsap.registerPlugin(ScrollTrigger);

export default function Projects() {
  // 프로젝트 카드 스크롤 인터랙션
  const containerRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    const cards = el.querySelector(`.${styles.cards}`);
    if (!cards) return;

    const gap = 60;
    const totalWidth = cards.scrollWidth;
    const scrollLength = totalWidth - window.innerWidth + gap;
    // const getScrollLength = () => cards.scrollWidth - el.offsetWidth;

    gsap.to(cards, {
      // x: () => -getScrollLength(),
      x: -scrollLength,
      ease: "none",
      scrollTrigger: {
        trigger: el,
        start: "top top",
        // end: () => `+=${getScrollLength()}`,
        end: () => `+=${scrollLength}`,
        scrub: 1,
        pin: true,
        invalidateOnRefresh: true,
      },
    });

    ScrollTrigger.matchMedia({
      "(min-width: 1024px)": () => {},
    });
  }, []);

  // 프로젝트 리스트
  const [selected, setSelected] = useState<Project | null>(null);

  return (
    <section className={styles.projects}>
      <div className={styles.scrollSection}>
        <div className={styles.wrapper} ref={containerRef}>
          <h1 className={styles.title}>projects</h1>
          <ul className={styles.cards}>
            {projects.map((project) => (
              <li className={styles.card} key={project.num} onClick={() => setSelected(project)}>
                <ProjectCard project={project} />
              </li>
            ))}
          </ul>
          {selected && <ProjectModal project={selected} onClose={() => setSelected(null)} />}
        </div>
      </div>
    </section>
  );
}
