import Hero from "@/components/Hero/Hero";
import MarqueeWrapper from "@/components/MarqueeWrapper";
import ContactSection from "@/components/contact/ContactSection";
import Link from "next/link";
import { client } from "@/sanity/lib/client";
import { urlFor } from "@/sanity/lib/image";

async function getLatestPosts() {
  const query = `
    *[_type == "post"] | order(publishedAt desc)[0...3]{
      _id,
      title,
      slug,
      mainImage
    }
  `;
  return await client.fetch(query);
}

export default async function Home() {
  const posts = await getLatestPosts();

  return (
    <div>
      <Hero />
      <MarqueeWrapper />

      {/* Latest Blogs */}
      <section className="max-w-6xl mx-auto px-5 py-16">
        <h2 className="text-3xl font-bold mb-8">Latest Blogs</h2>

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
                    <h3 className="text-lg font-semibold">{post.title}</h3>
                  </div>
                </div>
              </Link>
            );
          })}
        </div>

        <div className="mt-8">
          <Link
            href="/blog"
            className="px-6 py-2 bg-black text-white rounded-lg"
          >
            View All Blogs
          </Link>
        </div>
      </section>

      <ContactSection />
    </div>
  );
}