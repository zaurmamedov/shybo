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
          {services.slice(0, 4).map((service) => (
            <Link
              className={styles.card}
              href={`/services/${service.slug}`}
              key={service.slug}
            >
              <ServiceIcon name={service.icon} />
              <h3>{service.title}</h3>
              <p>{service.description}</p>
              <span className={styles.cardLink} aria-hidden="true">→</span>
            </Link>
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
