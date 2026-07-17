import type { Metadata } from "next";

import { Container } from "@/components/layout/Container/Container";

import styles from "../route-placeholder.module.css";

export const metadata: Metadata = {
  title: "Про компанію",
  description: "Сторінка про будівельну компанію SHYBO перебуває в розробці.",
};

export default function AboutPage() {
  return (
    <section className={styles.placeholder} aria-labelledby="about-title">
      <Container>
        <div className={styles.content}>
          <h1 id="about-title">Про компанію</h1>
          <p>Інформацію про компанію буде додано після узгодження офіційних матеріалів.</p>
        </div>
      </Container>
    </section>
  );
}
