"use client";

import { useState } from "react";
import { projects } from "@/data/projects";
import ProjectCard from "./ProjectCard";
import ProjectModal from "./ProjectModal";
import { Project } from "@/types/project";

import styles from "./Projects.module.scss";

export default function Projects() {
  const [selected, setSelected] = useState<Project | null>(null);

  return (
    <section className={styles.projects}>
      <h2>Projects</h2>

      <div>
        {projects.map((project) => (
          <ProjectCard key={project.title} project={project} onClick={() => setSelected(project)} />
        ))}
      </div>

      <ProjectModal project={selected} onClose={() => setSelected(null)} />
    </section>
  );
}
