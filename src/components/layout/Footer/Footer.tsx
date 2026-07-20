import Link from "next/link";

import { Logo } from "@/components/ui/Logo/Logo";
import { services } from "@/data/services";

import { Container } from "../Container/Container";
import styles from "./Footer.module.css";

const footerNavigation = [
  { href: "/", label: "Головна" },
  { href: "/services", label: "Послуги" },
  { href: "/projects", label: "Проєкти" },
  { href: "/about", label: "Про компанію" },
  { href: "/contacts", label: "Контакти" },
] as const;

type FooterIconName = "phone" | "email" | "location";

type FooterIconProps = {
  name: FooterIconName;
};

function FooterIcon({ name }: FooterIconProps) {
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

export function Footer() {
  return (
    <footer className={styles.footer}>
      <Container>
        <div className={styles.content}>
          <div className={styles.about}>
            <Logo className={styles.logo} showName />
            <p>
              ШИБО — будівельна компанія, що виконує комплекс будівельних, ремонтних
              та оздоблювальних робіт для житлових, комерційних і промислових об’єктів.
            </p>
          </div>

          <nav aria-labelledby="footer-navigation-title">
            <h2 className={styles.heading} id="footer-navigation-title">
              Навігація
            </h2>
            <ul className={styles.list}>
              {footerNavigation.map((item) => (
                <li key={item.href}>
                  <Link className={styles.link} href={item.href}>
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <section aria-labelledby="footer-services-title">
            <h2 className={styles.heading} id="footer-services-title">
              Послуги
            </h2>
            <ul className={styles.list}>
              {services.map((service) => (
                <li key={service.id}>
                  <Link className={styles.link} href="/services">
                    {service.title}
                  </Link>
                </li>
              ))}
            </ul>
          </section>

          <section aria-labelledby="footer-contacts-title">
            <h2 className={styles.heading} id="footer-contacts-title">
              Контакти
            </h2>
            <address>
              <ul className={styles.contactList}>
                <li>
                  <a
                    className={styles.contactLink}
                    href="tel:+380684659567"
                    aria-label="Зателефонувати за номером 068 465 95 67"
                  >
                    <FooterIcon name="phone" />
                    <span>068 465 95 67</span>
                  </a>
                </li>
                <li>
                  <a className={styles.contactLink} href="mailto:shibokr@ukr.net">
                    <FooterIcon name="email" />
                    <span>shibokr@ukr.net</span>
                  </a>
                </li>
                <li>
                  <a
                    className={styles.contactLink}
                    href="https://www.google.com/maps/search/?api=1&query=50065%20%D0%BC.%20%D0%9A%D1%80%D0%B8%D0%B2%D0%B8%D0%B9%20%D0%A0%D1%96%D0%B3%20%D0%B2%D1%83%D0%BB.%20%D0%A1%D0%BE%D0%B1%D0%BE%D1%80%D0%BD%D0%BE%D1%81%D1%82%D1%96%2066%D0%B0"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <FooterIcon name="location" />
                    <span>50065, м. Кривий Ріг, вул. Соборності, 66а</span>
                  </a>
                </li>
              </ul>
            </address>
          </section>
        </div>

        <div className={styles.bottom}>
          <p>© 2026 ШИБО. Усі права захищені.</p>
        </div>
      </Container>
    </footer>
  );
}
