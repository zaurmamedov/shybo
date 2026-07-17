import Link from "next/link";

import { Container } from "@/components/layout/Container/Container";
import { ButtonLink } from "@/components/ui/Button/Button";
import { ServiceIcon } from "@/components/ui/ServiceIcon/ServiceIcon";
import { services } from "@/data/services";

import styles from "./ServicesSection.module.css";

export function ServicesSection() {
  return (
    <section className={styles.section} aria-labelledby="services-title">
      <Container>
        <div className={styles.header}>
          <h2 id="services-title">Наші послуги</h2>
        </div>

        <div className={styles.grid}>
          {services.map((service) => (
            <article className={styles.card} key={service.id}>
              <ServiceIcon name={service.icon} />
              <h3>{service.title}</h3>
              <p>{service.description}</p>
              <Link
                className={styles.cardLink}
                href="/services"
                aria-label={`Переглянути послуги: ${service.title}`}
              >
                <span aria-hidden="true">→</span>
              </Link>
            </article>
          ))}
        </div>

        <div className={styles.action}>
          <ButtonLink href="/services" size="large">
            Переглянути всі послуги
          </ButtonLink>
        </div>
      </Container>
    </section>
  );
}
