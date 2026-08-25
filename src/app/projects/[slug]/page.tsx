import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";

import { Container } from "@/components/layout/Container/Container";
import { FinalCtaSection } from "@/components/sections/FinalCtaSection/FinalCtaSection";
import { getProjectBySlug, projects } from "@/data/projects";
import { createOpenGraphMetadata } from "@/data/seo";

import styles from "./page.module.css";

export const dynamicParams = false;

export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({
  params,
}: PageProps<"/projects/[slug]">): Promise<Metadata> {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) {
    return {};
  }

  const title = `${project.title} | ШИБО`;

  return {
    title: { absolute: title },
    description: project.description,
    alternates: { canonical: `/projects/${project.slug}` },
    openGraph: createOpenGraphMetadata({
      title,
      description: project.description,
      path: `/projects/${project.slug}`,
      images: [
        {
          url: project.coverImage.src,
          width: project.coverImage.width,
          height: project.coverImage.height,
          alt: project.coverImage.alt,
        },
      ],
    }),
  };
}

export default async function ProjectDetailPage({
  params,
}: PageProps<"/projects/[slug]">) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) {
    notFound();
  }

  return (
    <>
      <article>
        <header className={styles.header}>
          <Container>
            <nav className={styles.breadcrumbs} aria-label="Хлібні крихти">
              <ol>
                <li>
                  <Link href="/">Головна</Link>
                </li>
                <li>
                  <Link href="/projects">Проєкти</Link>
                </li>
                <li aria-current="page">{project.title}</li>
              </ol>
            </nav>

            <div className={styles.intro}>
              <p className={styles.direction}>{project.direction}</p>
              <h1>{project.title}</h1>
              <p className={styles.description}>{project.description}</p>
            </div>
          </Container>
        </header>

        <section className={styles.gallerySection} aria-labelledby="gallery-title">
          <Container>
            <div className={styles.galleryHeading}>
              <h2 id="gallery-title">Фотографії проєкту</h2>
              <p>{project.galleryImages.length} фотографій</p>
            </div>

            <div className={styles.gallery}>
              {project.galleryImages.map((image, index) => {
                const orientation = image.width >= image.height ? "landscape" : "portrait";

                return (
                  <figure
                    className={`${styles.galleryItem} ${styles[orientation]} ${index === 0 ? styles.featured : ""}`}
                    key={image.src}
                  >
                    <Image
                      className={styles.galleryImage}
                      src={image.src}
                      alt={image.alt}
                      fill
                      sizes={
                        index === 0
                          ? "(max-width: 767px) calc(100vw - 32px), (max-width: 1279px) calc(100vw - 48px), 1320px"
                          : "(max-width: 767px) calc(100vw - 32px), (max-width: 1279px) calc(50vw - 36px), 644px"
                      }
                      style={{ objectPosition: image.objectPosition }}
                      preload={index === 0}
                    />
                  </figure>
                );
              })}
            </div>

            <Link className={styles.backLink} href="/projects">
              <span aria-hidden="true">←</span> Усі проєкти
            </Link>
          </Container>
        </section>
      </article>

      <FinalCtaSection
        title="Обговорімо ваш будівельний проєкт"
        description="Зв’яжіться з ШИБО, щоб уточнити завдання, обсяг робіт і вимоги до результату."
        actionLabel="Обговорити проєкт"
      />
    </>
  );
}
