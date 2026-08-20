"use client";

import { Project } from "@/types/project";
import Image from "next/image";
import Link from "next/link";

import styles from "./Projects.module.scss";

type Props = {
  project: Project;
};

export default function ProjectCard({ project }: Props) {
  return (
    <div className={styles.card__box}>
      <div className={styles.card__text}>
        <p className={styles.number}>{`0${project.num}`}</p>
        <p className={styles.title}>{project.title}</p>
        <p className={styles.summary}>{project.summary}</p>
        <p className={styles.period}>
          <span>참여 기간&nbsp;|&nbsp;</span>
          {project.period}
        </p>
        <p className={styles.company}>
          <span>근무 회사&nbsp;|&nbsp;</span>
          {project.company}
        </p>
        <p className={styles.stack}>
          <span>주요 스택&nbsp;|&nbsp;</span>
          {project.stack.join(", ")}
        </p>
      </div>
      <div className={styles.card__image}>
        <Image src={project.image} alt={project.title} fill={true} priority />
      </div>
    </div>
  );
}
