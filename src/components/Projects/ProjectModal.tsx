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
        <div className={styles.modal__image}>
          <Image src={project.modal} alt={project.title} fill={true} priority />
        </div>
        <div className={styles.modal__summary}>
          <h2 className={styles.name}>{project.title}</h2>
          <p className={styles.period}>{project.period}</p>
          <p className={styles.role}>{project.role}</p>
          <p className={styles.desc}>{project.desc}</p>
          <div className={styles.stack}>
            <p>사용 기술</p>
            <ul>
              {project.stack.map((skill) => (
                <li key={skill}>{skill}</li>
              ))}
            </ul>
          </div>
          <div className={styles.summary}>
            <p>주요 역할 및 기여</p>
            <ul>
              {project.summary.map((sum) => (
                <li key={sum}>{sum}</li>
              ))}
            </ul>
          </div>
          {project.link && (
            <a href={project.link} target="_blank" className={styles.link}>
              사이트 보기
            </a>
          )}
          <button className={styles.close} onClick={onClose}>
            닫기
          </button>
        </div>
      </div>
    </div>,
    document.body,
  );
}
