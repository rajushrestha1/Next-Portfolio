// src/app/blog/[slug]/page.jsx

import { client } from "@/sanity/lib/client";
import { PortableText } from "@portabletext/react";
import Breadcrumbs from "@/components/Breadcrumbs";
import TableOfContents from "@/components/TableOfContents";
import { ptComponents } from "@/lib/ptComponents";
import { urlFor } from "@/sanity/lib/image";
import JsonLd from "@/components/JsonLd";
import { generateDynamicMetadata } from "@/lib/seoUtils";
import { BASE_URL } from "@/lib/seoConfig";
// ── Sanity Fetch ─────────────────────────────────────────────
async function getPost(slugParam) {
  const decodedSlug = decodeURIComponent(slugParam || "");
  const normalizedSlug = decodedSlug.toLowerCase().trim().replace(/\s+/g, "-");

  const query = `
    *[_type == "post" && (
      slug.current == $decodedSlug ||
      slug.current == $normalizedSlug ||
      title == $decodedSlug
    )][0]{
      title,
      slug,
      mainImage,
      body,
      publishedAt,
      _updatedAt,
      "excerpt": array::join(string::split(pt::text(body), "")[0..160], ""),
      author->{
        name
      },
      seo {
        metaTitle,
        metaDescription,
        "ogImageUrl": ogImage.asset->url,
        noIndex
      }
    }
  `;
  return await client.fetch(query, { decodedSlug, normalizedSlug });
}

// ── Extract Headings for ToC ──────────────────────────────────
function generateToc(body) {
  const headings = [];
  body.forEach((block) => {
    if (block._type === "block" && ["h2", "h3", "h4"].includes(block.style)) {
      const text = block.children.map((c) => c.text).join("");
      const id = text.toLowerCase().replace(/\s+/g, "-");
      headings.push({ text, style: block.style, id });
    }
  });
  return headings;
}

// ── Dynamic Metadata (SEO) ────────────────────────────────────
export async function generateMetadata({ params }) {
  const { slug } = await params;
  const post = await getPost(slug);

  if (!post) {
    return {
      title: "Post Not Found",
      description: "This blog post could not be found.",
      robots: { index: false, follow: false },
    };
  }

  // Resolve OG image: Sanity seo.ogImage → mainImage → site default
  const ogImage =
    post.seo?.ogImageUrl ||
    (post.mainImage ? urlFor(post.mainImage).width(1200).height(630).url() : null);

  return generateDynamicMetadata({
    title: post.seo?.metaTitle || post.title,
    description: post.seo?.metaDescription || post.excerpt,
    slug,
    basePath: "/blog",
    image: ogImage,
    type: "article",
    publishedAt: post.publishedAt,
    author: post.author?.name,
    // Respect the "Hide from search engines" toggle in Sanity
    ...(post.seo?.noIndex && {
      robots: { index: false, follow: false },
    }),
  });
}

// ── Page Component ────────────────────────────────────────────
export default async function SinglePost({ params }) {
  const { slug } = await params;
  const post = await getPost(slug);

  if (!post) return <div className="text-center py-20">Post not found</div>;

  const headings = generateToc(post.body);

  // Resolve OG image for JSON-LD (same priority as metadata above)
  const ogImage =
    post.seo?.ogImageUrl ||
    (post.mainImage ? urlFor(post.mainImage).width(1200).height(630).url() : null);

  return (
    <>
      {/* ── Structured Data ── */}
      <JsonLd
        type="article"
        data={{
          title: post.title,
          description: post.seo?.metaDescription || post.excerpt,
          slug,
          publishedAt: post.publishedAt,
          updatedAt: post._updatedAt,
          image: ogImage,
          authorName: post.author?.name,
        }}
      />
      <JsonLd
        type="breadcrumb"
        breadcrumbs={[
          { name: "Home", url: "/" },
          { name: "Blog", url: "/blog" },
          { name: post.title, url: `/blog/${slug}` },
        ]}
      />

      {/* ── Page Layout ── */}
      <div className="max-w-6xl mx-auto px-5 py-10 grid md:grid-cols-3 gap-10">
        {/* Main blog content */}
        <div className="md:col-span-2">
          <Breadcrumbs
            items={[
              { label: "Home", href: "/" },
              { label: "Blog", href: "/blog" },
              { label: post.title },
            ]}
          />

          <h1 className="text-3xl font-bold mb-4 ibm-plex-mono-bold">
            {post.title}
          </h1>

          <p className="text-gray-500 mb-6 ibm-plex-mono-regular">
            By {post.author?.name} •{" "}
            {new Date(post.publishedAt).toDateString()}
          </p>

          {post.mainImage && (
            <img
              src={urlFor(post.mainImage).width(800).url()}
              alt={post.title}
              className="rounded-xl mb-8"
            />
          )}

          <div className="max-w-none ibm-plex-mono-regular">
            <PortableText value={post.body} components={ptComponents} />
          </div>
        </div>

        {/* Table of Contents */}
        <div className="hidden md:block">
          <TableOfContents headings={headings} />
        </div>
      </div>
    </>
  );
}