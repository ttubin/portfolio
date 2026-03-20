"use client";

import { Project } from "@/types/project";

type Props = {
  project: Project;
  onClick: () => void;
};

export default function ProjectCard({ project, onClick }: Props) {
  return (
    <div onClick={onClick}>
      <h3>{project.title}</h3>
      <p>{project.description}</p>
      <p>{project.period}</p>
      <p>{project.stack}</p>
      <p>{project.role}</p>
    </div>
  );
}
