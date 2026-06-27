// ============================================================
// Sanity SEO Schema Object
// Place this file at: sanity/schemas/seoObject.js
// Then import and add it to your blog and project schemas
// ============================================================

// ── Reusable SEO Object ──────────────────────────────────────
export const seoObject = {
  name: "seo",
  title: "SEO Settings",
  type: "object",
  fields: [
    {
      name: "metaTitle",
      title: "Meta Title",
      type: "string",
      description: "Overrides the default title. Recommended: 50–60 characters.",
      validation: (Rule) =>
        Rule.max(60).warning("Meta title should be under 60 characters."),
    },
    {
      name: "metaDescription",
      title: "Meta Description",
      type: "text",
      rows: 3,
      description: "Overrides the default description. Recommended: 150–160 characters.",
      validation: (Rule) =>
        Rule.max(160).warning("Meta description should be under 160 characters."),
    },
    {
      name: "ogImage",
      title: "Open Graph Image",
      type: "image",
      description:
        "Image shown when shared on social media. Recommended: 1200×630px.",
      options: { hotspot: true },
    },
    {
      name: "noIndex",
      title: "Hide from search engines",
      type: "boolean",
      description: "Enable this to prevent search engines from indexing this page.",
      initialValue: false,
    },
  ],
};

// ============================================================
// HOW TO ADD TO YOUR BLOG POST SCHEMA:
// In your blog schema file, add the seo field like this:
//
// import { seoObject } from './seoObject'
//
// export default {
//   name: 'post',
//   title: 'Blog Post',
//   type: 'document',
//   fields: [
//     { name: 'title', type: 'string', title: 'Title' },
//     { name: 'slug', type: 'slug', title: 'Slug' },
//     // ... your existing fields ...
//     seoObject,   // <-- add this line
//   ],
// }
//
// ── Same pattern for your project schema ────────────────────
// ============================================================