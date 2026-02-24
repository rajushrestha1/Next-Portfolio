import { client } from "@/sanity/lib/client";
import { urlFor } from "@/sanity/lib/image";
import { PortableText } from "@portabletext/react";
import Breadcrumbs from "@/components/Breadcrumbs";

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

export default async function SinglePost({ params }) {
  const { slug } = await params;   // ✅ unwrap params first
  const post = await getPost(slug);

  if (!post) {
    return <div className="text-center py-20">Post not found</div>;
  }

  return (
    <div className="max-w-3xl mx-auto px-5 py-10">
      
      <Breadcrumbs
        items={[
          { label: "Home", href: "/" },
          { label: "Blog", href: "/blog" },
          { label: post.title }
        ]}
      />

      <h1 className="text-4xl font-bold mb-4">{post.title}</h1>

      <p className="text-gray-500 mb-6">
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

      <div className="prose max-w-none">
        <PortableText value={post.body} />
      </div>
    </div>
  );
}