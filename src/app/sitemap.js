// ============================================================
// Dynamic Sitemap — Next.js App Router
// src/app/sitemap.js
// Accessible at: http://rajushrestha1.com.np/sitemap.xml
// ============================================================

import { BASE_URL } from "@/lib/seoConfig";
import { client } from "@/sanity/lib/client";

export default async function sitemap() {
  // ── Static Pages ─────────────────────────────────────────
  const staticPages = [
    {
      url: BASE_URL,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 1.0,
    },
    {
      url: `${BASE_URL}/about`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${BASE_URL}/blog`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: `${BASE_URL}/project`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.9,
    },
    {
      url: `${BASE_URL}/contact`,
      lastModified: new Date(),
      changeFrequency: "yearly",
      priority: 0.6,
    },
    {
      url: `${BASE_URL}/testimonial`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.6,
    },
  ];

  // ── Dynamic Blog Pages (from Sanity) ─────────────────────
  let blogPages = [];
  try {
    const blogSlugs = await client.fetch(
      `*[_type == "post" && defined(slug.current)]{ "slug": slug.current, _updatedAt }`
    );
    blogPages = blogSlugs.map((post) => ({
      url: `${BASE_URL}/blog/${post.slug}`,
      lastModified: post._updatedAt ? new Date(post._updatedAt) : new Date(),
      changeFrequency: "weekly",
      priority: 0.7,
    }));
  } catch (e) {
    console.error("Sitemap: failed to fetch blog slugs", e);
  }

  // ── Dynamic Project Pages (from Sanity) ──────────────────
  let projectPages = [];
  try {
    const projectSlugs = await client.fetch(
      `*[_type == "project" && defined(slug.current)]{ "slug": slug.current, _updatedAt }`
    );
    projectPages = projectSlugs.map((project) => ({
      url: `${BASE_URL}/project/${project.slug}`,
      lastModified: project._updatedAt ? new Date(project._updatedAt) : new Date(),
      changeFrequency: "monthly",
      priority: 0.7,
    }));
  } catch (e) {
    console.error("Sitemap: failed to fetch project slugs", e);
  }

  return [...staticPages, ...blogPages, ...projectPages];
}