import type { MetadataRoute } from "next";

import { projects } from "@/data/projects";
import { siteUrl } from "@/data/seo";
import { services } from "@/data/services";

const staticRoutes = ["", "/services", "/projects", "/privacy"] as const;
const companyRoutes = ["/about", "/contacts"] as const;

export default function sitemap(): MetadataRoute.Sitemap {
  const projectRoutes = projects.map((project) => `/projects/${project.slug}`);
  const serviceRoutes = services.map((service) => `/services/${service.slug}`);

  return [
    ...staticRoutes,
    ...serviceRoutes,
    ...projectRoutes,
    ...companyRoutes,
  ].map((route) => ({
    url: `${siteUrl}${route || "/"}`,
  }));
}
