import type { Metadata } from "next";

import { FinalCtaSection } from "@/components/sections/FinalCtaSection/FinalCtaSection";
import { HeroSection } from "@/components/sections/HeroSection/HeroSection";
import { ProjectsSection } from "@/components/sections/ProjectsSection/ProjectsSection";
import { ServicesSection } from "@/components/sections/ServicesSection/ServicesSection";
import { TrustedCompaniesSection } from "@/components/sections/TrustedCompaniesSection/TrustedCompaniesSection";
import {
  createOpenGraphMetadata,
  siteDescription,
  siteTitle,
  siteUrl,
} from "@/data/seo";

export const metadata: Metadata = {
  title: { absolute: siteTitle },
  description: siteDescription,
  alternates: { canonical: `${siteUrl}/` },
  openGraph: createOpenGraphMetadata({
    title: siteTitle,
    description: siteDescription,
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
