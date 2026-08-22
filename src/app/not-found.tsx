import { Container } from "@/components/layout/Container/Container";
import { ButtonLink } from "@/components/ui/Button/Button";

import styles from "./not-found.module.css";

export default function NotFound() {
  return (
    <section className={styles.section} aria-labelledby="not-found-title">
      <Container className={styles.container}>
        <p className={styles.code} aria-hidden="true">
          404
        </p>
        <h1 id="not-found-title">Сторінку не знайдено</h1>
        <p className={styles.description}>
          Можливо, сторінку було переміщено або адреса введена неправильно.
        </p>
        <ButtonLink href="/" size="large">
          Повернутися на головну
        </ButtonLink>
      </Container>
    </section>
  );
}
