import Image from "next/image";
import Link from "next/link";

import { Container } from "@/components/layout/Container/Container";
import { ButtonLink } from "@/components/ui/Button/Button";
import { projects } from "@/data/projects";

import styles from "./ProjectsSection.module.css";

export function ProjectsSection() {
  return (
    <section className={styles.section} aria-labelledby="projects-title">
      <Container>
        <div className={styles.header}>
          <h2 id="projects-title">Реалізовані проєкти</h2>
        </div>

        <div className={styles.grid}>
          {projects.map((project) => (
            <article className={styles.card} key={project.slug}>
              <Link
                className={styles.cardLink}
                href={`/projects/${project.slug}`}
                aria-label={`Переглянути ${project.title}: ${project.direction}`}
              >
                <div className={styles.media}>
                  <Image
                    className={styles.image}
                    src={project.coverImage.src}
                    alt={project.coverImage.alt}
                    fill
                    sizes="(max-width: 639px) calc(100vw - 32px), (max-width: 1023px) 50vw, 25vw"
                    style={{ objectPosition: project.coverImage.objectPosition }}
                  />
                </div>
                <div className={styles.content}>
                  <p className={styles.category}>{project.direction}</p>
                  <h3>{project.title}</h3>
                  <p className={styles.description}>{project.description}</p>
                </div>
              </Link>
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
