import Link from "next/link";
import { client } from "@/sanity/lib/client";
import { urlFor } from "@/sanity/lib/image";

async function getPosts() {
  const query = `
    *[_type == "post"] | order(publishedAt desc){
      _id,
      title,
      slug,
      mainImage,
      publishedAt
    }
  `;
  return await client.fetch(query);
}

export default async function BlogPage() {
  const posts = await getPosts();

  return (
    <div className="max-w-6xl mx-auto px-5 py-10">
      <h1 className="text-4xl font-bold mb-10">Blog</h1>

      <div className="grid md:grid-cols-3 gap-8">
        {posts.map((post) => {
          const slugValue = post.slug?.current || post.title;

          return (
            <Link key={post._id} href={`/blog/${encodeURIComponent(slugValue)}`}>
              <div className="border rounded-xl overflow-hidden hover:shadow-lg transition">
                {post.mainImage && (
                  <img
                    src={urlFor(post.mainImage).width(400).url()}
                    alt={post.title}
                    className="w-full h-60 object-cover"
                  />
                )}

                <div className="p-5">
                  <h2 className="text-xl font-semibold">{post.title}</h2>
                  <p className="text-gray-500 text-sm mt-2">
                    {new Date(post.publishedAt).toDateString()}
                  </p>
                </div>
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
}