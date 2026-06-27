// ============================================================
// robots.js — Next.js App Router
// Place this file at: src/app/robots.js
// Accessible at: https://rajushrestha1.com.np/robots.txt
// ============================================================

import { BASE_URL } from "@/lib/seoConfig";

export default function robots() {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: [
          "/studio/",     // Sanity Studio — keep private
          "/api/",        // API routes
          "/_next/",      // Next.js internals
        ],
      },
    ],
    sitemap: `${BASE_URL}/sitemap.xml`,
    host: BASE_URL,
  };
}