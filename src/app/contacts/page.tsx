import type { Metadata } from "next";

import { Container } from "@/components/layout/Container/Container";
import { InternalPageHero } from "@/components/sections/InternalPageHero/InternalPageHero";

import styles from "./page.module.css";

const pageDescription =
  "Контактна інформація будівельної компанії ШИБО. Телефон, електронна пошта, адреса та розташування на карті.";

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
    title: "Телефон",
    value: "068 465 95 67",
    href: "tel:+380684659567",
    icon: "phone",
    ariaLabel: "Зателефонувати за номером 068 465 95 67",
  },
  {
    title: "Електронна пошта",
    value: "shibokr@ukr.net",
    href: "mailto:shibokr@ukr.net",
    icon: "email",
    ariaLabel: "Написати на електронну пошту shibokr@ukr.net",
  },
  {
    title: "Адреса",
    value: "50065, м. Кривий Ріг, вул. Соборності, 66а",
    href: "https://www.google.com/maps/search/?api=1&query=50065%20%D0%BC.%20%D0%9A%D1%80%D0%B8%D0%B2%D0%B8%D0%B9%20%D0%A0%D1%96%D0%B3%20%D0%B2%D1%83%D0%BB.%20%D0%A1%D0%BE%D0%B1%D0%BE%D1%80%D0%BD%D0%BE%D1%81%D1%82%D1%96%2066%D0%B0",
    icon: "location",
    external: true,
    ariaLabel: "Відкрити адресу компанії ШИБО в Google Maps",
  },
];

const mapEmbedUrl =
  "https://www.google.com/maps?q=50065%2C%20%D0%BC.%20%D0%9A%D1%80%D0%B8%D0%B2%D0%B8%D0%B9%20%D0%A0%D1%96%D0%B3%2C%20%D0%B2%D1%83%D0%BB.%20%D0%A1%D0%BE%D0%B1%D0%BE%D1%80%D0%BD%D0%BE%D1%81%D1%82%D1%96%2C%2066%D0%B0&output=embed";

export const metadata: Metadata = {
  title: { absolute: "Контакти | ШИБО" },
  description: pageDescription,
  openGraph: {
    title: "Контакти | ШИБО",
    description: pageDescription,
  },
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
        imageSrc="/images/hero/hero-contacts.jpg"
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
                  <span className={styles.cardValue}>{item.value}</span>
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
