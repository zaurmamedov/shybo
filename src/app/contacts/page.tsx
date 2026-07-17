import type { Metadata } from "next";

import { Container } from "@/components/layout/Container/Container";

import styles from "../route-placeholder.module.css";

export const metadata: Metadata = {
  title: "Контакти",
  description: "Контактна сторінка будівельної компанії SHYBO перебуває в розробці.",
};

export default function ContactsPage() {
  return (
    <section className={styles.placeholder} aria-labelledby="contacts-title">
      <Container>
        <div className={styles.content}>
          <h1 id="contacts-title">Контакти</h1>
          <p>Перевірені контактні дані компанії буде додано після їх надання.</p>
        </div>
      </Container>
    </section>
  );
}
