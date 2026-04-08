"use client";

import { Project } from "@/types/project";
import Image from "next/image";
import Link from "next/link";

import styles from "./Projects.module.scss";

type Props = {
  project: Project;
  onClick: () => void;
};

export default function ProjectCard({ project, onClick }: Props) {
  return (
    <div className={styles.card__box} onClick={onClick}>
      <div className={styles.card__text}>
        <p className={styles.type}>{project.type}</p>
        <p className={styles.name}>{project.title}</p>
        <p className={styles.desc}>{project.desc}</p>
        {project.link && (
          <Link href={project.link} target="_blank" className={styles.link}>
            URL
          </Link>
        )}
        <p className={styles.role}>{project.role}</p>
      </div>
      <div className={styles.card__img}>
        <Image src={project.image} alt={project.title} fill={true} priority />
      </div>
    </div>
  );
}
