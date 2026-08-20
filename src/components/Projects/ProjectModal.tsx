"use client";

import { Project } from "@/types/project";
import { createPortal } from "react-dom";
import Image from "next/image";

import styles from "./Projects.module.scss";

type Props = {
  project: Project | null;
  onClose: () => void;
};

export default function ProjectModal({ project, onClose }: Props) {
  if (!project) return null;

  return createPortal(
    <div className={styles.modal} onClick={onClose}>
      <div className={styles.modal__box} onClick={(e) => e.stopPropagation()}>
        <button className={styles.modal__close} onClick={onClose}>
          <span></span>
          <span></span>
        </button>
        <div className={styles.modal__text}>
          <p className={styles.number}>{`0${project.num}`}</p>
          <p className={styles.title}>{project.title}</p>
          <p className={styles.summary}>{project.summary}</p>
          {project.link && (
            <a href={project.link} target="_blank" className={styles.link}>
              🔗website
            </a>
          )}
          <p className={styles.period}>
            <span>참여 기간</span>
            {project.period}
          </p>
          <p className={styles.company}>
            <span>근무 회사</span>
            {project.company}
          </p>
          <p className={styles.stack}>
            <span>주요 스택</span>
            {project.stack.join(", ")}
          </p>
          <p className={styles.tasks}>
            <span>주요 역할 및 기여</span>
          </p>
          <ul>
            {project.tasks.map((task) => (
              <li key={task}>{task}</li>
            ))}
          </ul>
          {/* <div className={styles.tasks}>
            <p>주요 역할 및 기여</p>
            <ul>
              {project.tasks.map((task) => (
                <li key={task}>{task}</li>
              ))}
            </ul>
          </div> */}
        </div>
        <div className={styles.modal__image}>
          <Image src={project.modal} alt={project.title} fill={true} priority />
        </div>
      </div>
    </div>,
    document.body,
  );
}
