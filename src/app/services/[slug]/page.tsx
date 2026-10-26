import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";

import { Container } from "@/components/layout/Container/Container";
import { FinalCtaSection } from "@/components/sections/FinalCtaSection/FinalCtaSection";
import { InternalPageHero } from "@/components/sections/InternalPageHero/InternalPageHero";
import { ServiceIcon } from "@/components/ui/ServiceIcon/ServiceIcon";
import { getProjectBySlug } from "@/data/projects";
import { createOpenGraphMetadata, siteUrl } from "@/data/seo";
import { getServiceBySlug, services } from "@/data/services";

import styles from "./page.module.css";

export const dynamicParams = false;

export function generateStaticParams() {
  return services.map((service) => ({ slug: service.slug }));
}

export async function generateMetadata({
  params,
}: PageProps<"/services/[slug]">): Promise<Metadata> {
  const { slug } = await params;
  const service = getServiceBySlug(slug);

  if (!service) {
    return {};
  }

  const path = `/services/${service.slug}`;

  return {
    title: { absolute: service.metaTitle },
    description: service.metaDescription,
    alternates: { canonical: path },
    openGraph: createOpenGraphMetadata({
      title: service.metaTitle,
      description: service.metaDescription,
      path,
    }),
  };
}

export default async function ServiceDetailPage({
  params,
}: PageProps<"/services/[slug]">) {
  const { slug } = await params;
  const service = getServiceBySlug(slug);

  if (!service) {
    notFound();
  }

  const relatedServices = service.relatedServiceSlugs
    .map(getServiceBySlug)
    .filter((item) => item !== undefined);
  const relatedProjects = service.relatedProjectSlugs
    .map(getProjectBySlug)
    .filter((item) => item !== undefined);
  const servicePath = `/services/${service.slug}`;
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Service",
        "@id": `${siteUrl}${servicePath}#service`,
        name: service.title,
        description: service.description,
        url: `${siteUrl}${servicePath}`,
        provider: { "@id": `${siteUrl}/#organization` },
        areaServed: {
          "@type": "City",
          name: "Кривий Ріг",
        },
      },
      {
        "@type": "BreadcrumbList",
        "@id": `${siteUrl}${servicePath}#breadcrumbs`,
        itemListElement: [
          {
            "@type": "ListItem",
            position: 1,
            name: "Головна",
            item: `${siteUrl}/`,
          },
          {
            "@type": "ListItem",
            position: 2,
            name: "Послуги",
            item: `${siteUrl}/services`,
          },
          {
            "@type": "ListItem",
            position: 3,
            name: service.title,
            item: `${siteUrl}${servicePath}`,
          },
        ],
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c"),
        }}
      />

      <InternalPageHero
        title={service.h1}
        description={service.description}
        breadcrumbs={[
          { label: "Головна", href: "/" },
          { label: "Послуги", href: "/services" },
          { label: service.title },
        ]}
      />

      <article>
        <section className={styles.overview} aria-labelledby="service-overview-title">
          <Container className={styles.overviewGrid}>
            <div className={styles.introduction}>
              <h2 id="service-overview-title">Про послугу</h2>
              {service.introduction.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
              <Link className={styles.backLink} href="/services">
                <span aria-hidden="true">←</span> Усі послуги
              </Link>
            </div>

            <div className={styles.workTypes}>
              <div className={styles.workTypesHeader}>
                <ServiceIcon name={service.icon} />
                <h2>Що може входити до робіт</h2>
              </div>
              <ul>
                {service.workTypes.map((workType) => (
                  <li key={workType}>{workType}</li>
                ))}
              </ul>
            </div>
          </Container>
        </section>

        <div className={styles.details}>
          {service.contentSections.map((contentSection, sectionIndex) => {
            const sectionId = `service-section-${sectionIndex + 1}`;

            return (
              <section
                className={styles.detailSection}
                aria-labelledby={sectionId}
                key={contentSection.title}
              >
                <Container className={styles.detailGrid}>
                  <div className={styles.detailHeader}>
                    <h2 id={sectionId}>{contentSection.title}</h2>
                    <p>{contentSection.description}</p>
                  </div>

                  <ul className={styles.cardGrid}>
                    {contentSection.items.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                </Container>
              </section>
            );
          })}
        </div>

        {relatedProjects.length > 0 && (
          <section className={styles.projects} aria-labelledby="related-projects-title">
            <Container>
              <div className={styles.sectionHeader}>
                <h2 id="related-projects-title">Пов’язані проєкти</h2>
                <p>Приклади виконаних робіт, що стосуються цього напряму.</p>
              </div>

              <div className={styles.projectGrid}>
                {relatedProjects.map((project) => (
                  <article className={styles.projectCard} key={project.slug}>
                    <Link href={`/projects/${project.slug}`}>
                      <div className={styles.projectMedia}>
                        <Image
                          src={project.coverImage.src}
                          alt={project.coverImage.alt}
                          fill
                          sizes="(max-width: 767px) calc(100vw - 32px), 50vw"
                          style={{ objectPosition: project.coverImage.objectPosition }}
                        />
                      </div>
                      <div className={styles.projectContent}>
                        <p>{project.direction}</p>
                        <h3>{project.title}</h3>
                        <span>
                          Переглянути проєкт <span aria-hidden="true">→</span>
                        </span>
                      </div>
                    </Link>
                  </article>
                ))}
              </div>
            </Container>
          </section>
        )}

        <section className={styles.related} aria-labelledby="related-services-title">
          <Container>
            <div className={styles.sectionHeader}>
              <h2 id="related-services-title">Пов’язані послуги</h2>
              <p>Суміжні напрями, які можуть бути частиною одного проєкту.</p>
            </div>

            <div className={styles.relatedGrid}>
              {relatedServices.map((relatedService) => (
                <Link
                  className={styles.relatedCard}
                  href={`/services/${relatedService.slug}`}
                  key={relatedService.slug}
                >
                  <ServiceIcon name={relatedService.icon} />
                  <div>
                    <h3>{relatedService.title}</h3>
                    <p>{relatedService.description}</p>
                  </div>
                  <span className={styles.relatedArrow} aria-hidden="true">
                    →
                  </span>
                </Link>
              ))}
            </div>
          </Container>
        </section>
      </article>

      <FinalCtaSection
        title="Обговорімо роботи на вашому об’єкті"
        description="Зв’яжіться з ШИБО, щоб уточнити завдання, обсяг робіт і наступний крок."
        actionLabel="Обговорити проєкт"
      />
    </>
  );
}
