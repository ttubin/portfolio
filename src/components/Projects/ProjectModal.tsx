"use client";

import { Project } from "@/types/project";

type Props = {
  project: Project | null;
  onClose: () => void;
};

export default function ProjectModal({ project, onClose }: Props) {
  if (!project) return null;

  return (
    <div className="modal">
      <div className="modal-content">
        <h2>{project.title}</h2>
        <p>{project.desc}</p>
        <p>{project.period}</p>
        <p>{project.role}</p>

        <div>
          {project.stack.map((s) => (
            <span key={s}>{s}</span>
          ))}
        </div>

        {project.link && (
          <a href={project.link} target="_blank">
            사이트 보기
          </a>
        )}

        <button onClick={onClose}>닫기</button>
      </div>
    </div>
  );
}
