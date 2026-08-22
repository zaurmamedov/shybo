import { Container } from "@/components/layout/Container/Container";

import styles from "./TrustedCompaniesSection.module.css";

const organizations = ["ПриватБанк", "Сільпо", "Широківський центр ПМД"] as const;

export function TrustedCompaniesSection() {
  return (
    <section className={styles.section} aria-labelledby="trusted-companies-title">
      <Container>
        <h2 className={styles.title} id="trusted-companies-title">
          Виконували роботи для
        </h2>

        <ul className={styles.organizations}>
          {organizations.map((organization) => (
            <li className={styles.organizationItem} key={organization}>
              {organization}
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}
