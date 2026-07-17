import { readdirSync } from "node:fs";
import path from "node:path";

import Image from "next/image";

import { Container } from "@/components/layout/Container/Container";

import styles from "./TrustedCompaniesSection.module.css";

const supportedImageExtensions = new Set([".jpg", ".jpeg", ".png", ".webp", ".avif"]);

const partnerNames: Readonly<Record<string, string>> = {
  privat: "ПриватБанк",
  shpnd: "Широківський центр ПМД",
  silpo: "Сільпо",
};

function getPartnerLogos() {
  const directory = path.join(process.cwd(), "public", "images", "partners");

  return readdirSync(directory, { withFileTypes: true })
    .filter(
      (entry) =>
        entry.isFile() && supportedImageExtensions.has(path.extname(entry.name).toLowerCase()),
    )
    .map((entry) => {
      const fileName = path.parse(entry.name).name;

      return {
        src: `/images/partners/${entry.name}`,
        alt: partnerNames[fileName.toLowerCase()] ?? fileName.replaceAll(/[-_]/g, " "),
      };
    })
    .sort((first, second) => first.alt.localeCompare(second.alt, "uk"));
}

export function TrustedCompaniesSection() {
  const partnerLogos = getPartnerLogos();

  return (
    <section className={styles.section} aria-labelledby="trusted-companies-title">
      <Container>
        <h2 className={styles.title} id="trusted-companies-title">
          Нам довіряють
        </h2>

        <ul className={styles.logos}>
          {partnerLogos.map((logo) => (
            <li className={styles.logoItem} key={logo.src}>
              <Image
                className={styles.logo}
                src={logo.src}
                alt={logo.alt}
                fill
                sizes="(max-width: 639px) 40vw, (max-width: 1023px) 28vw, 240px"
              />
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}
