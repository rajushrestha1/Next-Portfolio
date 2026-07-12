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
  try {
    return await client.fetch(query, { decodedSlug, normalizedSlug });
  } catch (error) {
    console.error("Failed to load blog post:", error);
    return null;
  }
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
      <div className="min-h-screen bg-white text-black">
        <div className="max-w-6xl mx-auto px-5 py-10 grid md:grid-cols-3 gap-10 blog-times">
          {/* Main blog content */}
          <div className="md:col-span-2">
          <Breadcrumbs
            items={[
              { label: "Home", href: "/" },
              { label: "Blog", href: "/blog" },
              { label: post.title },
            ]}
          />

          <h1
            className="text-3xl md:text-4xl font-bold text-gray-900 leading-tight mb-4"
            style={{ fontFamily: '"Times New Roman", Times, serif' }}
          >
            {post.title}
          </h1>

          <p className="text-gray-500 mb-6 text-sm">
            By {post.author?.name} •{" "}
            {new Date(post.publishedAt).toDateString()}
          </p>

          {post.mainImage && (
            <div className="mt-2 mb-8 rounded-2xl overflow-hidden border border-gray-100">
              <img
                src={urlFor(post.mainImage).width(800).url()}
                alt={post.title}
                className="w-full h-auto object-cover"
              />
            </div>
          )}

            <div className="blog-content max-w-none">
              <PortableText value={post.body} components={ptComponents} />
            </div>
          </div>

          {/* Table of Contents */}
          <div className="hidden md:block">
            <TableOfContents headings={headings} />
          </div>
        </div>
      </div>

      <style>{`
        .blog-content {
          font-family: "Times New Roman", Times, serif;
          font-size: 1.0625rem;
          line-height: 1.8;
          color: #111827;
        }

        .blog-content h1 {
          font-family: "Times New Roman", Times, serif;
          font-size: 2.25rem;
          font-weight: 700;
          line-height: 1.25;
          margin-top: 2.5rem;
          margin-bottom: 1.25rem;
          color: #000000;
        }

        .blog-content h2 {
          font-family: "Times New Roman", Times, serif;
          font-size: 1.875rem;
          font-weight: 700;
          line-height: 1.3;
          margin-top: 2.25rem;
          margin-bottom: 1rem;
          color: #000000;
          border-bottom: 2px solid #e5e7eb;
          padding-bottom: 0.5rem;
        }

        .blog-content h3 {
          font-family: "Times New Roman", Times, serif;
          font-size: 1.5rem;
          font-weight: 700;
          line-height: 1.35;
          margin-top: 2rem;
          margin-bottom: 0.875rem;
          color: #111827;
        }

        .blog-content h4 {
          font-family: "Times New Roman", Times, serif;
          font-size: 1.25rem;
          font-weight: 700;
          line-height: 1.4;
          margin-top: 1.75rem;
          margin-bottom: 0.75rem;
          color: #111827;
        }

        .blog-content h5 {
          font-family: "Times New Roman", Times, serif;
          font-size: 1.0625rem;
          font-weight: 700;
          line-height: 1.45;
          margin-top: 1.5rem;
          margin-bottom: 0.625rem;
          color: #111827;
          text-transform: uppercase;
          letter-spacing: 0.03em;
        }

        .blog-content h6 {
          font-family: "Times New Roman", Times, serif;
          font-size: 0.9375rem;
          font-weight: 700;
          line-height: 1.45;
          margin-top: 1.5rem;
          margin-bottom: 0.5rem;
          color: #111827;
          text-transform: uppercase;
          letter-spacing: 0.05em;
        }

        .blog-content p {
          margin-top: 0;
          margin-bottom: 1.25rem;
        }

        .blog-content a {
          color: #111827;
          text-decoration: underline;
          text-underline-offset: 2px;
        }

        .blog-content a:hover {
          color: #4b5563;
        }

        .blog-content ul,
        .blog-content ol {
          margin-top: 0;
          margin-bottom: 1.25rem;
          padding-left: 1.5rem;
        }

        .blog-content ul {
          list-style-type: disc;
        }

        .blog-content ol {
          list-style-type: decimal;
        }

        .blog-content li {
          margin-bottom: 0.5rem;
        }

        .blog-content blockquote {
          border-left: 4px solid #d1d5db;
          padding-left: 1.25rem;
          margin: 1.5rem 0;
          font-style: italic;
          color: #111827;
        }

        .blog-content img {
          max-width: 100%;
          height: auto;
          border-radius: 0.75rem;
          margin: 1.5rem 0;
        }

        .blog-content strong {
          font-weight: 700;
        }

        .blog-content code {
          font-family: "Courier New", Courier, monospace;
          background-color: #f3f4f6;
          padding: 0.15rem 0.4rem;
          border-radius: 0.25rem;
          font-size: 0.9em;
        }

        .blog-content pre {
          background-color: #f9fafb;
          color: #111827;
          padding: 1.25rem;
          border-radius: 0.75rem;
          overflow-x: auto;
          margin: 1.5rem 0;
        }

        .blog-content pre code {
          background-color: transparent;
          padding: 0;
          color: inherit;
        }

        .blog-content table {
          width: 100%;
          border-collapse: collapse;
          margin: 1.5rem 0;
        }

        .blog-content th,
        .blog-content td {
          border: 1px solid #e5e7eb;
          padding: 0.6rem 0.9rem;
          text-align: left;
        }

        .blog-content th {
          background-color: #f9fafb;
          font-weight: 700;
        }
      `}</style>
    </>
  );
}