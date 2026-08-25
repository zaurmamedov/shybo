import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

import { Container } from "@/components/layout/Container/Container";
import { FinalCtaSection } from "@/components/sections/FinalCtaSection/FinalCtaSection";
import { InternalPageHero } from "@/components/sections/InternalPageHero/InternalPageHero";
import { createOpenGraphMetadata } from "@/data/seo";
import { projects } from "@/data/projects";

import styles from "./page.module.css";

const pageDescription =
  "Проєкти ШИБО: внутрішня перегородка, металеві огорожі, облаштування приміщення та вхідна група.";
const pageTitle = "Проєкти | ШИБО";

export const metadata: Metadata = {
  title: { absolute: pageTitle },
  description: pageDescription,
  alternates: { canonical: "/projects" },
  openGraph: createOpenGraphMetadata({
    title: pageTitle,
    description: pageDescription,
    path: "/projects",
  }),
};

export default function ProjectsPage() {
  return (
    <>
      <InternalPageHero
        title="Проєкти"
        description="Задокументовані роботи з облаштування внутрішніх і зовнішніх зон об’єктів."
        imageSrc="/images/hero/hero-projects.webp"
        imageAlt="Облаштована вхідна група з металевими поручнями"
        breadcrumbs={[
          { label: "Головна", href: "/" },
          { label: "Проєкти" },
        ]}
      />

      <section className={styles.portfolio} aria-labelledby="portfolio-title">
        <Container>
          <div className={styles.portfolioHeader}>
            <h2 id="portfolio-title">Виконані роботи</h2>
            <p>
              Перегляньте окремі проєкти та фотографії виконаних робіт.
            </p>
          </div>

          <div className={styles.projectGrid}>
            {projects.map((project) => (
              <article className={styles.projectCard} key={project.slug}>
                <Link
                  className={styles.cardLink}
                  href={`/projects/${project.slug}`}
                  aria-label={`Переглянути ${project.title}: ${project.direction}`}
                >
                  <div className={styles.imageFrame}>
                    <Image
                      className={styles.projectImage}
                      src={project.coverImage.src}
                      alt={project.coverImage.alt}
                      fill
                      sizes="(max-width: 767px) calc(100vw - 32px), (max-width: 1279px) calc(50vw - 36px), 620px"
                      style={{ objectPosition: project.coverImage.objectPosition }}
                    />
                  </div>

                  <div className={styles.projectContent}>
                    <p className={styles.direction}>{project.direction}</p>
                    <h3>{project.title}</h3>
                    <p className={styles.description}>{project.description}</p>
                    <span className={styles.details} aria-hidden="true">
                      Детальніше <span>→</span>
                    </span>
                  </div>
                </Link>
              </article>
            ))}
          </div>
        </Container>
      </section>

      <FinalCtaSection
        title="Обговорімо ваш будівельний проєкт"
        description="Зв’яжіться з ШИБО, щоб уточнити завдання, обсяг робіт і вимоги до результату."
        actionLabel="Обговорити проєкт"
      />
    </>
  );
}
