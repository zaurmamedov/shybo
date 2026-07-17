import Image from "next/image";

import { Container } from "@/components/layout/Container/Container";
import { ButtonLink } from "@/components/ui/Button/Button";

import styles from "./HeroSection.module.css";

export function HeroSection() {
  return (
    <section className={styles.hero} aria-labelledby="hero-title">
      <Container className={styles.container}>
        <div className={styles.content}>
          <h1 id="hero-title">
            Будівельні рішення для житлових, комерційних і промислових об’єктів
          </h1>
          <p>
            ШИБО виконує комплекс будівельних, ремонтних та оздоблювальних робіт із
            чіткою організацією процесу.
          </p>
          <div className={styles.actions}>
            <ButtonLink href="/services" size="large">
              Наші послуги
            </ButtonLink>
            <ButtonLink href="/contacts" variant="secondary" size="large">
              Зв’язатися з нами
            </ButtonLink>
          </div>
        </div>

        <div className={styles.media}>
          <Image
            className={styles.image}
            src="/images/hero/hero.jpg"
            alt="Будівельні крани та каркас споруди на будівельному майданчику"
            fill
            sizes="(max-width: 767px) calc(100vw - 32px), (max-width: 1279px) 52vw, 680px"
            preload
          />
        </div>
      </Container>
    </section>
  );
}
