import type { Metadata } from "next";

import { FinalCtaSection } from "@/components/sections/FinalCtaSection/FinalCtaSection";
import { HeroSection } from "@/components/sections/HeroSection/HeroSection";
import { ProjectsSection } from "@/components/sections/ProjectsSection/ProjectsSection";
import { ServicesSection } from "@/components/sections/ServicesSection/ServicesSection";
import { TrustedCompaniesSection } from "@/components/sections/TrustedCompaniesSection/TrustedCompaniesSection";
import { createOpenGraphMetadata, siteUrl } from "@/data/seo";

const pageTitle = "Будівельна компанія | ШИБО";
const pageDescription =
  "SHYBO виконує будівельні, ремонтні та оздоблювальні роботи для житлових, комерційних і промислових об’єктів.";

export const metadata: Metadata = {
  title: { absolute: pageTitle },
  description: pageDescription,
  alternates: { canonical: `${siteUrl}/` },
  openGraph: createOpenGraphMetadata({
    title: pageTitle,
    description: pageDescription,
    path: "/",
  }),
};

export default function Home() {
  return (
    <>
      <HeroSection />
      <ServicesSection />
      <ProjectsSection />
      <TrustedCompaniesSection />
      <FinalCtaSection />
    </>
  );
}
