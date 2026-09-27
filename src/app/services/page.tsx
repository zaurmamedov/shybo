import type { Metadata } from "next";
import Link from "next/link";

import { Container } from "@/components/layout/Container/Container";
import { FinalCtaSection } from "@/components/sections/FinalCtaSection/FinalCtaSection";
import { InternalPageHero } from "@/components/sections/InternalPageHero/InternalPageHero";
import { ServiceIcon } from "@/components/ui/ServiceIcon/ServiceIcon";
import { createOpenGraphMetadata } from "@/data/seo";
import { services, servicesOverview } from "@/data/services";

import styles from "./page.module.css";

const pageDescription =
  "Будівельні та ремонтні послуги ШИБО у Кривому Розі: будівництво, ремонт, оздоблення, покрівельні, фасадні, інженерні та інші роботи.";
const pageTitle = "Будівельні послуги у Кривому Розі | ШИБО";

export const metadata: Metadata = {
  title: { absolute: pageTitle },
  description: pageDescription,
  alternates: { canonical: "/services" },
  openGraph: createOpenGraphMetadata({
    title: pageTitle,
    description: pageDescription,
    path: "/services",
  }),
};

export default function ServicesPage() {
  return (
    <>
      <InternalPageHero
        title="Будівельні та ремонтні послуги у Кривому Розі"
        description={servicesOverview}
        imageSrc="/images/hero/hero-services.webp"
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
            <h2 id="all-services-title">Основні напрями робіт</h2>
            <p>
              Оберіть потрібний напрям, щоб переглянути склад робіт і пов’язані
              проєкти.
            </p>
          </div>

          <div className={styles.serviceGrid}>
            {services.map((service, index) => (
              <Link
                className={styles.serviceCard}
                href={`/services/${service.slug}`}
                key={service.slug}
              >
                <span className={styles.serviceNumber} aria-hidden="true">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <ServiceIcon name={service.icon} />
                <h3>{service.title}</h3>
                <p>{service.description}</p>
                <span className={styles.serviceLink}>
                  Переглянути послугу <span aria-hidden="true">→</span>
                </span>
              </Link>
            ))}
          </div>
        </Container>
      </section>

      <FinalCtaSection />
    </>
  );
}
