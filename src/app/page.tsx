import type { Metadata } from "next";

import { FinalCtaSection } from "@/components/sections/FinalCtaSection/FinalCtaSection";
import { HeroSection } from "@/components/sections/HeroSection/HeroSection";
import { ProjectsSection } from "@/components/sections/ProjectsSection/ProjectsSection";
import { ServicesSection } from "@/components/sections/ServicesSection/ServicesSection";
import { TrustedCompaniesSection } from "@/components/sections/TrustedCompaniesSection/TrustedCompaniesSection";

export const metadata: Metadata = {
  title: "Будівельна компанія",
  description:
    "SHYBO виконує будівельні, ремонтні та оздоблювальні роботи для житлових, комерційних і промислових об’єктів.",
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
