import type { MetadataRoute } from "next";

import { projects } from "@/data/projects";
import { siteUrl } from "@/data/seo";

const staticRoutes = ["", "/services", "/projects"] as const;
const companyRoutes = ["/about", "/contacts"] as const;

export default function sitemap(): MetadataRoute.Sitemap {
  const projectRoutes = projects.map((project) => `/projects/${project.slug}`);

  return [...staticRoutes, ...projectRoutes, ...companyRoutes].map((route) => ({
    url: `${siteUrl}${route || "/"}`,
  }));
}
