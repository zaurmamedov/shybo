import type { Metadata } from "next";
import Image from "next/image";

import { Container } from "@/components/layout/Container/Container";
import { FinalCtaSection } from "@/components/sections/FinalCtaSection/FinalCtaSection";
import { InternalPageHero } from "@/components/sections/InternalPageHero/InternalPageHero";
import { projects } from "@/data/projects";

import styles from "./page.module.css";

const pageDescription =
  "Задокументовані проєкти будівельної компанії ШИБО: встановлення перегородок, сходів і пандуса, каси та огорожі.";

export const metadata: Metadata = {
  title: { absolute: "Проєкти | ШИБО" },
  description: pageDescription,
  openGraph: {
    title: "Проєкти | ШИБО",
    description: pageDescription,
  },
};

export default function ProjectsPage() {
  return (
    <>
      <InternalPageHero
        title="Проєкти"
        description="Перегородки, сходи та пандуси, каса й огорожа — задокументовані роботи компанії ШИБО."
        imageSrc="/images/hero/hero-projects.png"
        imageAlt="Облаштований пандус із металевими поручнями"
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
              У портфоліо зібрані надані матеріали про встановлені конструкції та
              завершені роботи на об’єктах.
            </p>
          </div>

          <div className={styles.projectGrid}>
            {projects.map((project) => (
              <article className={styles.projectCard} key={project.id}>
                <div
                  className={`${styles.gallery} ${styles[`gallery${project.images.length}`]}`}
                >
                  {project.images.map((image) => (
                    <div className={styles.imageFrame} key={image.src}>
                      <Image
                        className={styles.projectImage}
                        src={image.src}
                        alt={image.alt}
                        width={image.width}
                        height={image.height}
                        sizes="(max-width: 767px) calc(100vw - 32px), (max-width: 1279px) calc(50vw - 36px), 620px"
                      />
                    </div>
                  ))}
                </div>

                <div className={styles.projectContent}>
                  <p className={styles.category}>{project.category}</p>
                  <h3>{project.title}</h3>
                  <p className={styles.description}>{project.description}</p>
                </div>
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
