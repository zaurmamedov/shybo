import Image from "next/image";

import { Container } from "@/components/layout/Container/Container";
import { ButtonLink } from "@/components/ui/Button/Button";
import { projects } from "@/data/projects";

import styles from "./ProjectsSection.module.css";

const featuredProjects = projects.filter((project) => project.featured);

export function ProjectsSection() {
  return (
    <section className={styles.section} aria-labelledby="projects-title">
      <Container>
        <div className={styles.header}>
          <h2 id="projects-title">Реалізовані проєкти</h2>
        </div>

        <div className={styles.grid}>
          {featuredProjects.map((project) => (
            <article className={styles.card} key={project.id}>
              <div className={styles.media}>
                <Image
                  className={styles.image}
                  src={project.imagePaths[0]}
                  alt={`${project.title}: ${project.description.toLocaleLowerCase("uk")}`}
                  fill
                  sizes="(max-width: 639px) calc(100vw - 32px), (max-width: 1023px) 50vw, 33vw"
                />
              </div>
              <div className={styles.content}>
                <p className={styles.category}>{project.category}</p>
                <h3>{project.title}</h3>
                <p className={styles.description}>{project.description}</p>
              </div>
            </article>
          ))}
        </div>

        <div className={styles.action}>
          <ButtonLink href="/projects" variant="secondary" size="large">
            Переглянути всі проєкти
          </ButtonLink>
        </div>
      </Container>
    </section>
  );
}
