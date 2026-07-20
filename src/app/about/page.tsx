import type { Metadata } from "next";
import Link from "next/link";

import { Container } from "@/components/layout/Container/Container";
import { FinalCtaSection } from "@/components/sections/FinalCtaSection/FinalCtaSection";
import { InternalPageHero } from "@/components/sections/InternalPageHero/InternalPageHero";
import { ButtonLink } from "@/components/ui/Button/Button";
import { ServiceIcon } from "@/components/ui/ServiceIcon/ServiceIcon";
import { company, companyPrinciples, companyWorkSteps } from "@/data/company";
import { services } from "@/data/services";

import styles from "./page.module.css";

const pageDescription =
  "ШИБО виконує будівельні, ремонтні та оздоблювальні роботи для житлових, комерційних і промислових об’єктів із чіткою організацією процесу.";

const contentNavigation = [
  {
    href: "/services",
    title: "Послуги",
    description:
      "Перегляньте підтверджені напрями будівельних, ремонтних та оздоблювальних робіт компанії.",
    label: "Переглянути послуги",
  },
  {
    href: "/projects",
    title: "Проєкти",
    description:
      "Ознайомтеся із задокументованими роботами, виконаними на об’єктах.",
    label: "Переглянути проєкти",
  },
] as const;

export const metadata: Metadata = {
  title: { absolute: "Про компанію | ШИБО" },
  description: pageDescription,
  openGraph: {
    title: "Про компанію | ШИБО",
    description: pageDescription,
  },
};

export default function AboutPage() {
  return (
    <>
      <InternalPageHero
        title="Про компанію"
        description={company.heroDescription}
        imageSrc="/images/hero/hero-about.jpg"
        imageAlt="Будівельні спеціалісти обговорюють роботи на об’єкті"
        breadcrumbs={[
          { label: "Головна", href: "/" },
          { label: "Про компанію" },
        ]}
      />

      <section className={styles.introduction} aria-labelledby="company-intro-title">
        <Container className={styles.introductionContainer}>
          <div className={styles.introductionContent}>
            <h2 id="company-intro-title">Будівельна компанія ШИБО</h2>
            {company.introduction.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>

          <aside className={styles.focus} aria-label="Фокус компанії">
            <span aria-hidden="true">Фокус роботи</span>
            <p>{company.focus}</p>
          </aside>
        </Container>
      </section>

      <section className={styles.activities} aria-labelledby="activities-title">
        <Container>
          <div className={styles.sectionHeader}>
            <h2 id="activities-title">Напрями діяльності</h2>
            <p>
              Основні категорії робіт, які виконує ШИБО для об’єктів різного
              призначення.
            </p>
          </div>

          <div className={styles.activityGrid}>
            {services.map((service) => (
              <article className={styles.activityItem} key={service.id}>
                <ServiceIcon name={service.icon} />
                <div>
                  <h3>{service.title}</h3>
                  <p>{service.description}</p>
                </div>
              </article>
            ))}
          </div>

          <ButtonLink href="/services" size="large">
            Переглянути всі послуги
          </ButtonLink>
        </Container>
      </section>

      <section className={styles.principlesSection} aria-labelledby="principles-title">
        <Container>
          <div className={styles.sectionHeader}>
            <h2 id="principles-title">Наші принципи</h2>
            <p>
              Орієнтири, які визначають організацію робіт і взаємодію із замовником.
            </p>
          </div>

          <ol className={styles.principles}>
            {companyPrinciples.map((principle, index) => (
              <li key={principle.title}>
                <span aria-hidden="true">{String(index + 1).padStart(2, "0")}</span>
                <h3>{principle.title}</h3>
                <p>{principle.description}</p>
              </li>
            ))}
          </ol>
        </Container>
      </section>

      <section className={styles.processSection} aria-labelledby="process-title">
        <Container>
          <div className={styles.sectionHeader}>
            <h2 id="process-title">Як ми працюємо</h2>
            <p>
              Послідовність роботи допомагає заздалегідь визначити завдання, умови
              та порядок взаємодії.
            </p>
          </div>

          <ol className={styles.process}>
            {companyWorkSteps.map((step, index) => (
              <li key={step.title}>
                <span className={styles.stepNumber} aria-hidden="true">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <div>
                  <h3>{step.title}</h3>
                  <p>{step.description}</p>
                </div>
              </li>
            ))}
          </ol>
        </Container>
      </section>

      <section className={styles.navigationSection} aria-labelledby="navigation-title">
        <Container>
          <div className={styles.sectionHeader}>
            <h2 id="navigation-title">Послуги та виконані роботи</h2>
            <p>
              Перейдіть до основних розділів, щоб ознайомитися з напрямами роботи та
              матеріалами про реалізовані проєкти.
            </p>
          </div>

          <div className={styles.navigationGrid}>
            {contentNavigation.map((item, index) => (
              <Link className={styles.navigationCard} href={item.href} key={item.href}>
                <span className={styles.navigationNumber} aria-hidden="true">
                  0{index + 1}
                </span>
                <div>
                  <h3>{item.title}</h3>
                  <p>{item.description}</p>
                </div>
                <span className={styles.navigationAction}>
                  {item.label}
                  <span aria-hidden="true">→</span>
                </span>
              </Link>
            ))}
          </div>
        </Container>
      </section>

      <FinalCtaSection
        title="Обговорімо майбутню співпрацю"
        description="Зв’яжіться з ШИБО, щоб розповісти про об’єкт, необхідні роботи та вимоги до результату."
        actionLabel="Зв’язатися з нами"
      />
    </>
  );
}
