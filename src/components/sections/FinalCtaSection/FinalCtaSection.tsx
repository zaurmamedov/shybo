import { Container } from "@/components/layout/Container/Container";
import { ButtonLink } from "@/components/ui/Button/Button";

import styles from "./FinalCtaSection.module.css";

export function FinalCtaSection() {
  return (
    <section className={styles.section} aria-labelledby="final-cta-title">
      <Container className={styles.container}>
        <div className={styles.content}>
          <h2 id="final-cta-title">Не знайшли потрібну послугу?</h2>
          <p>
            Зв’яжіться з нами, і ми підберемо оптимальне рішення для вашого проєкту.
          </p>
        </div>
        <ButtonLink className={styles.button} href="/contacts" size="large">
          Зв’язатися з нами
        </ButtonLink>
      </Container>
    </section>
  );
}
