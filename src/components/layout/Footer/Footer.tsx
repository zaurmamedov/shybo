import Link from "next/link";

import { Logo } from "@/components/ui/Logo/Logo";

import { Container } from "../Container/Container";
import styles from "./Footer.module.css";

const footerNavigation = [
  { href: "/", label: "Головна" },
  { href: "/services", label: "Послуги" },
  { href: "/projects", label: "Проєкти" },
  { href: "/about", label: "Про компанію" },
  { href: "/contacts", label: "Контакти" },
] as const;

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      <Container>
        <div className={styles.content}>
          <div className={styles.about}>
            <Logo className={styles.logo} />
            <p>Опис будівельної компанії буде додано після узгодження матеріалів.</p>
          </div>

          <nav aria-label="Навігація в підвалі">
            <h2 className={styles.heading}>Навігація</h2>
            <ul className={styles.list}>
              {footerNavigation.map((item) => (
                <li key={item.href}>
                  <Link href={item.href}>{item.label}</Link>
                </li>
              ))}
            </ul>
          </nav>

          <section aria-labelledby="footer-contacts">
            <h2 className={styles.heading} id="footer-contacts">
              Контакти
            </h2>
            <ul className={styles.list}>
              <li>Телефон буде додано</li>
              <li>Email буде додано</li>
              <li>Адресу буде додано</li>
            </ul>
          </section>
        </div>

        <div className={styles.bottom}>
          <p>
            © <time dateTime={String(currentYear)}>{currentYear}</time> SHYBO. Усі права захищені.
          </p>
        </div>
      </Container>
    </footer>
  );
}
