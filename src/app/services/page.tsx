import type { Metadata } from "next";

import { Container } from "@/components/layout/Container/Container";

import styles from "../route-placeholder.module.css";

export const metadata: Metadata = {
  title: "Послуги",
  description: "Сторінка послуг будівельної компанії SHYBO перебуває в розробці.",
};

export default function ServicesPage() {
  return (
    <section className={styles.placeholder} aria-labelledby="services-title">
      <Container>
        <div className={styles.content}>
          <h1 id="services-title">Послуги</h1>
          <p>Інформацію про послуги компанії буде додано після узгодження матеріалів.</p>
        </div>
      </Container>
    </section>
  );
}
