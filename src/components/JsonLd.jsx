// ============================================================
// JSON-LD Structured Data Components
// Place this file at: src/components/JsonLd.jsx
// Usage: <JsonLd type="person" /> or <JsonLd type="article" data={...} />
// ============================================================

import { BASE_URL, DEFAULT_SEO } from "@/lib/seoConfig";

// ── Person Schema (used on Home & About pages) ──────────────
function PersonJsonLd() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Raju Shrestha",
    url: BASE_URL,
    image: `${BASE_URL}/icon.jpeg`,
    jobTitle: "Web Developer In Nepal | Full Stack Developer & Designer",
    description: DEFAULT_SEO.description,
    sameAs: [
      // Add your actual social profile URLs below
      "https://github.com/rajushrestha1",       // update
      "https://www.linkedin.com/in/raju-shrestha-6b5070245",  // update
      "https://www.pinterest.com/shrestharaju010101", 
            "https://www.facebook.com/raju.stha.123829",
     // update
    ],
    address: {
      "@type": "PostalAddress",
      addressCountry: "NP",
      addressRegion: "Bagmati Province",
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

// ── Website Schema (used on Home page) ──────────────────────
function WebsiteJsonLd() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: DEFAULT_SEO.siteName,
    url: BASE_URL,
    description: DEFAULT_SEO.description,
    author: {
      "@type": "Person",
      name: "Raju Shrestha",
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

// ── Article Schema (used on Blog post pages) ─────────────────
// Props: title, description, slug, publishedAt, updatedAt, image, authorName
function ArticleJsonLd({ data }) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: data.title,
    description: data.description,
    image: data.image || `${BASE_URL}/og-default.png`,
    datePublished: data.publishedAt,
    dateModified: data.updatedAt || data.publishedAt,
    url: `${BASE_URL}/blog/${data.slug}`,
    author: {
      "@type": "Person",
      name: data.authorName || "Raju Shrestha",
      url: BASE_URL,
    },
    publisher: {
      "@type": "Person",
      name: "Raju Shrestha",
      url: BASE_URL,
      logo: {
        "@type": "ImageObject",
        url: `${BASE_URL}/icon.png`,
      },
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `${BASE_URL}/blog/${data.slug}`,
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

// ── CreativeWork Schema (used on Project pages) ──────────────
// Props: title, description, slug, image, url (live URL), technologies
function ProjectJsonLd({ data }) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "CreativeWork",
    name: data.title,
    description: data.description,
    image: data.image || `${BASE_URL}/og-default.png`,
    url: `${BASE_URL}/project/${data.slug}`,
    author: {
      "@type": "Person",
      name: "Raju Shrestha",
      url: BASE_URL,
    },
    ...(data.liveUrl && { sameAs: data.liveUrl }),
    ...(data.technologies && {
      keywords: data.technologies.join(", "),
    }),
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

// ── BreadcrumbList Schema ─────────────────────────────────────
// Props: items = [{ name: "Home", url: "/" }, { name: "Blog", url: "/blog" }, ...]
function BreadcrumbJsonLd({ items }) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: `${BASE_URL}${item.url}`,
    })),
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

// ── Main Export (convenience wrapper) ────────────────────────
export default function JsonLd({ type, data, breadcrumbs }) {
  switch (type) {
    case "person":
      return <PersonJsonLd />;
    case "website":
      return <WebsiteJsonLd />;
    case "article":
      return <ArticleJsonLd data={data} />;
    case "project":
      return <ProjectJsonLd data={data} />;
    case "breadcrumb":
      return <BreadcrumbJsonLd items={breadcrumbs} />;
    default:
      return null;
  }
}

// Named exports for direct use
export { PersonJsonLd, WebsiteJsonLd, ArticleJsonLd, ProjectJsonLd, BreadcrumbJsonLd };