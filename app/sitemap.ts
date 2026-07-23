import type { MetadataRoute } from "next";
import { experiences } from "@/data/experiences";
import { getSiteUrl } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = getSiteUrl();
  const lastModified = new Date();

  const staticRoutes: MetadataRoute.Sitemap = [
    "",
    "/experience",
    "/projects",
    "/stack",
    "/contact",
  ].map((path) => ({
    url: `${base}${path}`,
    lastModified,
    changeFrequency: path === "" ? "weekly" : "monthly",
    priority: path === "" ? 1 : 0.8,
  }));

  const experienceRoutes: MetadataRoute.Sitemap = experiences.map((project) => ({
    url: `${base}/experience/${project.id}`,
    lastModified,
    changeFrequency: "monthly",
    priority: 0.7,
  }));

  return [...staticRoutes, ...experienceRoutes];
}
