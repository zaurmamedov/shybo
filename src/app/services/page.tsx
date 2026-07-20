import type { Metadata } from "next";

import { Container } from "@/components/layout/Container/Container";
import { FinalCtaSection } from "@/components/sections/FinalCtaSection/FinalCtaSection";
import { InternalPageHero } from "@/components/sections/InternalPageHero/InternalPageHero";
import { ServiceIcon } from "@/components/ui/ServiceIcon/ServiceIcon";
import { services } from "@/data/services";

import styles from "./page.module.css";

const pageDescription =
  "Послуги будівельної компанії ШИБО: будівництво житлових і нежитлових будівель, ремонт, оздоблення та будівництво доріг і автострад.";

export const metadata: Metadata = {
  title: { absolute: "Послуги | ШИБО" },
  description: pageDescription,
  openGraph: {
    title: "Послуги | ШИБО",
    description: pageDescription,
  },
};

export default function ServicesPage() {
  return (
    <>
      <InternalPageHero
        title="Послуги"
        description="Будівництво житлових і нежитлових будівель, ремонт, оздоблення та будівництво доріг і автострад."
        imageSrc="/images/hero/hero-services.jpg"
        imageAlt="Активні будівельні роботи на об’єкті"
        imagePosition="center 58%"
        breadcrumbs={[
          { label: "Головна", href: "/" },
          { label: "Послуги" },
        ]}
      />

      <section className={styles.services} aria-labelledby="all-services-title">
        <Container>
          <div className={styles.sectionHeader}>
            <h2 id="all-services-title">Будівельні послуги</h2>
            <p>Усі підтверджені напрями робіт компанії ШИБО.</p>
          </div>

          <div className={styles.serviceGrid}>
            {services.map((service, index) => (
              <article className={styles.serviceCard} key={service.id}>
                <span className={styles.serviceNumber} aria-hidden="true">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <ServiceIcon name={service.icon} />
                <h3>{service.title}</h3>
                <p>{service.description}</p>
              </article>
            ))}
          </div>
        </Container>
      </section>

      <FinalCtaSection />
    </>
  );
}
