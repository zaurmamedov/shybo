import type { Metadata } from "next";
import Link from "next/link";

import { Container } from "@/components/layout/Container/Container";
import { companyContacts } from "@/data/company";
import { createOpenGraphMetadata } from "@/data/seo";

import styles from "./page.module.css";

const pageDescription =
  "Політика конфіденційності сайту ШИБО та інформація про використання сторонніх сервісів.";
const pageTitle = "Політика конфіденційності | ШИБО";

export const metadata: Metadata = {
  title: { absolute: pageTitle },
  description: pageDescription,
  alternates: { canonical: "/privacy" },
  openGraph: createOpenGraphMetadata({
    title: pageTitle,
    description: pageDescription,
    path: "/privacy",
  }),
};

export default function PrivacyPage() {
  return (
    <>
      <header className={styles.header}>
        <Container>
          <nav className={styles.breadcrumbs} aria-label="Хлібні крихти">
            <ol>
              <li>
                <Link href="/">Головна</Link>
              </li>
              <li aria-current="page">Політика конфіденційності</li>
            </ol>
          </nav>

          <div className={styles.intro}>
            <h1>Політика конфіденційності</h1>
            <p>{pageDescription}</p>
          </div>
        </Container>
      </header>

      <article className={styles.policy}>
        <Container className={styles.policyContainer}>
          <section>
            <h2>Загальні положення</h2>
            <p>
              Цей сайт надає інформацію про послуги та проєкти ШИБО, а також
              контактні дані компанії.
            </p>
          </section>

          <section>
            <h2>Дані, які сайт не збирає</h2>
            <p>У поточній версії сайт не містить:</p>
            <ul>
              <li>реєстрації та облікових записів користувачів;</li>
              <li>форм зворотного зв’язку або контактних форм;</li>
              <li>підписок і розсилок;</li>
              <li>системи онлайн-платежів.</li>
            </ul>
            <p>
              Сайт не запитує персональні дані через власні форми. Водночас технічна
              інформація може оброблятися постачальником хостингу або сторонніми
              сервісами під час завантаження сторінок.
            </p>
            <p>
              На сайті не налаштовано Google Analytics, Meta Pixel або рекламне
              відстеження з боку ШИБО.
            </p>
          </section>

          <section>
            <h2>Сторонні сервіси</h2>
            <p>
              На сторінці «Контакти» використовується вбудована карта Google Maps.
              Під час її завантаження або використання Google може обробляти технічну
              інформацію відповідно до власних умов і правил конфіденційності.
            </p>
          </section>

          <section>
            <h2>Зовнішні посилання</h2>
            <p>
              Натискання на номер телефону, адресу електронної пошти або посилання
              Google Maps може відкрити сторонній застосунок чи сервіс. Подальша
              обробка інформації визначається правилами відповідного сервісу.
            </p>
          </section>

          <section>
            <h2>Зміни до політики</h2>
            <p>
              Цю політику може бути оновлено, якщо зміниться функціональність сайту
              або склад підключених сторонніх сервісів.
            </p>
          </section>

          <section>
            <h2>Контакти</h2>
            <address className={styles.contacts}>
              <ul>
                {companyContacts.phones.map((phone) => (
                  <li key={phone.href}>
                    <a href={phone.href} aria-label={phone.ariaLabel}>
                      {phone.value}
                    </a>
                  </li>
                ))}
                <li>
                  <a
                    href={companyContacts.email.href}
                    aria-label={companyContacts.email.ariaLabel}
                  >
                    {companyContacts.email.value}
                  </a>
                </li>
                <li>
                  <a
                    href={companyContacts.address.href}
                    aria-label={companyContacts.address.ariaLabel}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {companyContacts.address.value}
                  </a>
                </li>
              </ul>
            </address>
          </section>
        </Container>
      </article>
    </>
  );
}
