// pages/blog/[slug].jsx
import { client } from "@/sanity/lib/client";
import { PortableText } from "@portabletext/react";
import Breadcrumbs from "@/components/Breadcrumbs";
import TableOfContents from "@/components/TableOfContents";
import { ptComponents } from "@/lib/ptComponents";
import { urlFor } from "@/sanity/lib/image";

// Fetch single post from Sanity
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
      author->{
        name
      }
    }
  `;
  return await client.fetch(query, { decodedSlug, normalizedSlug });
}

// Extract headings for ToC
function generateToc(body) {
  const headings = [];
  body.forEach((block) => {
    if (block._type === "block" && ["h2", "h3", "h4"].includes(block.style)) {
      const id = block.children.map(c => c.text).join("").toLowerCase().replace(/\s+/g, "-");
      headings.push({ text: block.children.map(c => c.text).join(""), style: block.style, id });
    }
  });
  return headings;
}

export default async function SinglePost({ params }) {
  const { slug } = await params;
  const post = await getPost(slug);

  if (!post) return <div className="text-center py-20">Post not found</div>;

  const headings = generateToc(post.body);

  return (
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

        <h1 className="text-3xl font-bold mb-4 ibm-plex-mono-bold">{post.title}</h1>

        <p className="text-gray-500 mb-6 ibm-plex-mono-regular">
          By {post.author?.name} • {new Date(post.publishedAt).toDateString()}
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
  );
}