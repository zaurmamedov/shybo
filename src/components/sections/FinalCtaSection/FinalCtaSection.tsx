import { Container } from "@/components/layout/Container/Container";
import { ButtonLink } from "@/components/ui/Button/Button";

import styles from "./FinalCtaSection.module.css";

type FinalCtaSectionProps = {
  title?: string;
  description?: string;
  actionLabel?: string;
};

export function FinalCtaSection({
  title = "Не знайшли потрібну послугу?",
  description = "Зв’яжіться з нами, і ми підберемо оптимальне рішення для вашого проєкту.",
  actionLabel = "Зв’язатися з нами",
}: FinalCtaSectionProps) {
  return (
    <section className={styles.section} aria-labelledby="final-cta-title">
      <Container className={styles.container}>
        <div className={styles.content}>
          <h2 id="final-cta-title">{title}</h2>
          <p>{description}</p>
        </div>
        <ButtonLink className={styles.button} href="/contacts" size="large">
          {actionLabel}
        </ButtonLink>
      </Container>
    </section>
  );
}
