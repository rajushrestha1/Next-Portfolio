// ============================================================
// Dynamic Sitemap — Next.js App Router
// Place this file at: src/app/sitemap.js
// Accessible at: https://rajushrestha1.com.np/sitemap.xml
// ============================================================

import { BASE_URL } from "@/lib/seoConfig";

// ── Replace these with your actual Sanity fetch functions ────
// import { getAllBlogSlugs, getAllProjectSlugs } from "@/lib/sanityQueries";

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
  // Uncomment and update once you have your Sanity query ready:
  //
  // const blogSlugs = await getAllBlogSlugs(); // returns [{ slug: "post-1", updatedAt: "..." }]
  // const blogPages = blogSlugs.map((post) => ({
  //   url: `${BASE_URL}/blog/${post.slug}`,
  //   lastModified: post.updatedAt ? new Date(post.updatedAt) : new Date(),
  //   changeFrequency: "weekly",
  //   priority: 0.7,
  // }));

  // ── Dynamic Project Pages (from Sanity) ──────────────────
  // const projectSlugs = await getAllProjectSlugs(); // returns [{ slug: "project-1", updatedAt: "..." }]
  // const projectPages = projectSlugs.map((project) => ({
  //   url: `${BASE_URL}/project/${project.slug}`,
  //   lastModified: project.updatedAt ? new Date(project.updatedAt) : new Date(),
  //   changeFrequency: "monthly",
  //   priority: 0.7,
  // }));

  return [
    ...staticPages,
    // ...blogPages,      // uncomment when ready
    // ...projectPages,   // uncomment when ready
  ];
}