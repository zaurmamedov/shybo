import type { Metadata } from "next";

import { Container } from "@/components/layout/Container/Container";
import { InternalPageHero } from "@/components/sections/InternalPageHero/InternalPageHero";
import { companyContacts } from "@/data/company";
import { createOpenGraphMetadata } from "@/data/seo";

import styles from "./page.module.css";

const pageDescription =
  "Контакти будівельної компанії ШИБО (SHYBO) у Кривому Розі: телефони, електронна пошта, адреса та розташування на карті.";
const pageTitle = "Контакти | ШИБО (SHYBO)";

type ContactIconName = "phone" | "email" | "location";

type ContactItem = {
  title: string;
  value: string;
  href: string;
  icon: ContactIconName;
  external?: boolean;
  ariaLabel: string;
};

const contactItems: readonly ContactItem[] = [
  {
    title: "Електронна пошта",
    value: companyContacts.email.value,
    href: companyContacts.email.href,
    icon: "email",
    ariaLabel: companyContacts.email.ariaLabel,
  },
  {
    title: "Адреса",
    value: companyContacts.address.value,
    href: companyContacts.address.href,
    icon: "location",
    external: true,
    ariaLabel: companyContacts.address.ariaLabel,
  },
];

const mapEmbedUrl =
  "https://www.google.com/maps?q=50065%2C%20%D0%BC.%20%D0%9A%D1%80%D0%B8%D0%B2%D0%B8%D0%B9%20%D0%A0%D1%96%D0%B3%2C%20%D0%B2%D1%83%D0%BB.%20%D0%A1%D0%BE%D0%B1%D0%BE%D1%80%D0%BD%D0%BE%D1%81%D1%82%D1%96%2C%2066%D0%B0&output=embed";

export const metadata: Metadata = {
  title: { absolute: pageTitle },
  description: pageDescription,
  alternates: { canonical: "/contacts" },
  openGraph: createOpenGraphMetadata({
    title: pageTitle,
    description: pageDescription,
    path: "/contacts",
  }),
};

function ContactIcon({ name }: { name: ContactIconName }) {
  const commonProps = {
    "aria-hidden": true,
    fill: "none",
    focusable: false,
    viewBox: "0 0 24 24",
  } as const;

  if (name === "phone") {
    return (
      <svg {...commonProps}>
        <path d="M8.1 3.5 10 7.9 7.7 9.5a14.3 14.3 0 0 0 6.8 6.8l1.6-2.3 4.4 1.9v3a2 2 0 0 1-2 2A15.5 15.5 0 0 1 3 5.5a2 2 0 0 1 2-2h3.1Z" />
      </svg>
    );
  }

  if (name === "email") {
    return (
      <svg {...commonProps}>
        <rect x="3" y="5" width="18" height="14" rx="2" />
        <path d="m4 7 8 6 8-6" />
      </svg>
    );
  }

  return (
    <svg {...commonProps}>
      <path d="M20 10c0 5-8 11-8 11S4 15 4 10a8 8 0 1 1 16 0Z" />
      <circle cx="12" cy="10" r="2.5" />
    </svg>
  );
}

export default function ContactsPage() {
  return (
    <>
      <InternalPageHero
        title="Контакти"
        description="Зв’яжіться з ШИБО, щоб обговорити об’єкт, необхідні роботи та вимоги до результату."
        imageSrc="/images/hero/hero-contacts.webp"
        imageAlt="Фахівці працюють разом за столом"
        breadcrumbs={[
          { label: "Головна", href: "/" },
          { label: "Контакти" },
        ]}
      />

      <section className={styles.contacts} aria-labelledby="contact-details-title">
        <Container>
          <div className={styles.sectionHeader}>
            <h2 id="contact-details-title">Зв’яжіться з нами</h2>
            <p>Оберіть зручний спосіб зв’язку або перегляньте адресу на карті.</p>
          </div>

          <address className={styles.contactGrid}>
            <div className={styles.contactCard}>
              <span className={styles.icon}>
                <ContactIcon name="phone" />
              </span>
              <span className={styles.cardContent}>
                <span className={styles.cardTitle}>Телефони</span>
                {companyContacts.phones.map((phone) => (
                  <a
                    className={styles.cardValue}
                    href={phone.href}
                    aria-label={phone.ariaLabel}
                    key={phone.href}
                  >
                    {phone.value}
                  </a>
                ))}
              </span>
            </div>
            {contactItems.map((item) => (
              <a
                className={styles.contactCard}
                href={item.href}
                aria-label={item.ariaLabel}
                target={item.external ? "_blank" : undefined}
                rel={item.external ? "noopener noreferrer" : undefined}
                key={item.title}
              >
                <span className={styles.icon}>
                  <ContactIcon name={item.icon} />
                </span>
                <span className={styles.cardContent}>
                  <span className={styles.cardTitle}>{item.title}</span>
                  <span
                    className={`${styles.cardValue} ${item.icon === "email" ? styles.emailValue : ""}`}
                  >
                    {item.value}
                  </span>
                </span>
                <span className={styles.arrow} aria-hidden="true">
                  {item.external ? "↗" : "→"}
                </span>
              </a>
            ))}
          </address>
        </Container>
      </section>

      <section className={styles.mapSection} aria-labelledby="map-title">
        <Container>
          <div className={styles.mapHeader}>
            <h2 id="map-title">Розташування на карті</h2>
          </div>

          <div className={styles.mapFrame}>
            <iframe
              src={mapEmbedUrl}
              title="Розташування будівельної компанії ШИБО на Google Maps"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              allowFullScreen
            />
          </div>
        </Container>
      </section>
    </>
  );
}
