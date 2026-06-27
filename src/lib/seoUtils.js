// ============================================================
// SEO Utilities — generateMetadata helpers
// Place this file at: src/lib/seoUtils.js
// ============================================================

import { BASE_URL, DEFAULT_SEO } from "./seoConfig";

/**
 * Generates a full Next.js `metadata` object for static pages.
 * Usage: export const metadata = generateMetadata({ title, description, path })
 */
export function generateStaticMetadata({
  title,
  description,
  path = "/",
  image,
  type = "website",
  keywords,
}) {
  const url = `${BASE_URL}${path}`;
  const ogImage = image || `${BASE_URL}/og-default.png`; // Add an og-default.png to /public

  return {
    metadataBase: new URL(BASE_URL),
    title,
    description,
    keywords: keywords || DEFAULT_SEO.keywords,
    authors: [{ name: DEFAULT_SEO.author, url: BASE_URL }],
    creator: DEFAULT_SEO.author,
    publisher: DEFAULT_SEO.author,

    // Open Graph
    openGraph: {
      title,
      description,
      url,
      siteName: DEFAULT_SEO.siteName,
      locale: DEFAULT_SEO.locale,
      type,
      images: [
        {
          url: ogImage,
          width: 1200,
          height: 630,
          alt: title,
        },
      ],
    },

    // Twitter Card
    twitter: {
      card: "summary_large_image",
      title,
      description,
      creator: DEFAULT_SEO.twitterHandle,
      images: [ogImage],
    },

    // Canonical
    alternates: {
      canonical: url,
    },

    // Robots
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        "max-video-preview": -1,
        "max-image-preview": "large",
        "max-snippet": -1,
      },
    },
  };
}

/**
 * Generates metadata for dynamic pages (blog posts, projects)
 * fetched from Sanity CMS.
 */
export function generateDynamicMetadata({
  title,
  description,
  slug,
  basePath, // e.g. "/blog" or "/project"
  image,
  type = "article",
  publishedAt,
  author,
}) {
  const path = `${basePath}/${slug}`;
  const url = `${BASE_URL}${path}`;
  const ogImage = image || `${BASE_URL}/og-default.png`;
  const pageTitle = `${title} | ${DEFAULT_SEO.siteName}`;

  const metadata = {
    metadataBase: new URL(BASE_URL),
    title: pageTitle,
    description,
    authors: [{ name: author || DEFAULT_SEO.author, url: BASE_URL }],
    creator: DEFAULT_SEO.author,

    openGraph: {
      title: pageTitle,
      description,
      url,
      siteName: DEFAULT_SEO.siteName,
      locale: DEFAULT_SEO.locale,
      type,
      images: [
        {
          url: ogImage,
          width: 1200,
          height: 630,
          alt: title,
        },
      ],
    },

    twitter: {
      card: "summary_large_image",
      title: pageTitle,
      description,
      creator: DEFAULT_SEO.twitterHandle,
      images: [ogImage],
    },

    alternates: {
      canonical: url,
    },

    robots: {
      index: true,
      follow: true,
    },
  };

  // Add article-specific OG fields for blog posts
  if (type === "article" && publishedAt) {
    metadata.openGraph.publishedTime = publishedAt;
    metadata.openGraph.authors = [author || DEFAULT_SEO.author];
  }

  return metadata;
}