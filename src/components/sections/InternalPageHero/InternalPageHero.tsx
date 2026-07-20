import Image from "next/image";
import Link from "next/link";

import { Container } from "@/components/layout/Container/Container";

import styles from "./InternalPageHero.module.css";

export type InternalPageBreadcrumb = {
  label: string;
  href?: string;
};

type InternalPageHeroProps = {
  title: string;
  description: string;
  breadcrumbs: readonly InternalPageBreadcrumb[];
  imageSrc?: string;
  imageAlt?: string;
  imagePosition?: string;
};

export function InternalPageHero({
  title,
  description,
  breadcrumbs,
  imageSrc,
  imageAlt = "",
  imagePosition = "center center",
}: InternalPageHeroProps) {
  return (
    <section className={styles.hero} aria-labelledby="internal-page-title">
      {imageSrc ? (
        <Image
          className={styles.image}
          src={imageSrc}
          alt={imageAlt}
          fill
          preload
          sizes="100vw"
          style={{ objectPosition: imagePosition }}
        />
      ) : (
        <div className={styles.graphic} aria-hidden="true">
          <span />
          <span />
          <span />
        </div>
      )}

      <div className={styles.overlay} aria-hidden="true" />

      <Container className={styles.container}>
        <div className={styles.content}>
          <nav className={styles.breadcrumbs} aria-label="Хлібні крихти">
            <ol>
              {breadcrumbs.map((item, index) => {
                const isCurrent = index === breadcrumbs.length - 1;

                return (
                  <li aria-current={isCurrent ? "page" : undefined} key={item.label}>
                    {item.href ? <Link href={item.href}>{item.label}</Link> : item.label}
                  </li>
                );
              })}
            </ol>
          </nav>

          <h1 id="internal-page-title">{title}</h1>
          <p>{description}</p>
        </div>
      </Container>
    </section>
  );
}
