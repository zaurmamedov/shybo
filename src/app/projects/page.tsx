import type { Metadata } from "next";

import { Container } from "@/components/layout/Container/Container";

import styles from "../route-placeholder.module.css";

export const metadata: Metadata = {
  title: "Проєкти",
  description: "Сторінка проєктів будівельної компанії SHYBO перебуває в розробці.",
};

export default function ProjectsPage() {
  return (
    <section className={styles.placeholder} aria-labelledby="projects-title">
      <Container>
        <div className={styles.content}>
          <h1 id="projects-title">Проєкти</h1>
          <p>Матеріали про виконані проєкти буде додано після їх підготовки та погодження.</p>
        </div>
      </Container>
    </section>
  );
}
