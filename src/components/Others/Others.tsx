"use client";

import { useState } from "react";

// import Image from "next/image";

import { projects } from "@/data/projects";
import { Project } from "@/types/project";

import styles from "./Others.module.scss";

type Props = {
  project: Project;
};

export default function Others({ project }: Props) {
  // 프로젝트 리스트
  const [selected, setSelected] = useState<Project | null>(null);

  return (
    <section className={styles.others}>
      <h1 className={styles.title}>other projects</h1>
      <div className={styles.content}>
        <p className={styles.summary}>대표 프로젝트 외에도 다양한 기업 웹사이트 구축 및 운영 프로젝트를 수행했습니다.</p>

        <div className={styles.others__list}>
          {projects
            .filter((project) => project.num >= 7)
            .map((project) => (
              <div className={styles.list} key={project.num}>
                {/* <p className={styles.num}>{project.num}</p> */}
                <div className={styles.title}>
                  <p>{project.title}</p>
                  {project.link && (
                    <a href={project.link} target="_blank" className={styles.link}>
                      🔗website
                    </a>
                  )}
                </div>
                <div className={styles.info}>
                  <p className={styles.period}>{project.period}</p>
                  <p className={styles.company}>{project.company}</p>
                  <p className={styles.stack}>{project.stack.join(" · ")}</p>
                </div>
              </div>
            ))}
        </div>
      </div>
    </section>
  );
}
