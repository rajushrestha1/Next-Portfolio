import Link from "next/link";
import { client } from "@/sanity/lib/client";
import { urlFor } from "@/sanity/lib/image";
import { generateStaticMetadata } from "@/lib/seoUtils";
import { PAGE_SEO } from "@/lib/seoConfig";

async function getPosts() {
  const query = `
    *[_type == "post"] | order(publishedAt desc){
      _id,
      title,
      slug,
      mainImage,
      publishedAt,
      description, // Ensure your schema has a description field
      categories[]->{title}, // Fetch categories for the tags
      readTime // Ensure your schema has a readTime field
    }
  `;
  return await client.fetch(query);
}

export const metadata = generateStaticMetadata(PAGE_SEO.blog);

export default async function BlogPage() {
  const posts = await getPosts();

  return (
    <section className="min-h-screen bg-[#021426] text-white px-5 md:px-10 py-20">
      <div className="max-w-6xl mx-auto">
        
        {/* Page Heading */}
        <h1 className="text-2xl md:text-3xl font-bold text-[#7aa2d6] tracking-wide font-mono mb-16">
          // My Coding Blogs
        </h1>

        <div className="flex flex-col gap-12">
          {posts.map((post, index) => {
            const slugValue = post.slug?.current || post.title;

            return (
              <div key={post._id} className="group">
                {/* Blog Item Link Container */}
                <Link 
                  href={`/blog/${encodeURIComponent(slugValue)}`}
                  className="flex flex-col md:flex-row items-start md:items-center gap-6 md:gap-10 hover:opacity-90 transition-opacity"
                >
                  
                  {/* 1. Numbered Circle (Hidden on small mobile if needed, or shown) */}
                  <div className="hidden md:flex shrink-0 w-14 h-14 rounded-full border border-[#1e3a5a] items-center justify-center text-[#4b6a8e] font-mono text-xl">
                    {index + 1}
                  </div>

                  {/* 2. Text Content Area */}
                  <div className="flex-1 font-mono">
                    <h2 className="text-[22px] md:text-[28px] font-bold text-[#00f2ff] leading-tight mb-3">
                      {post.title}
                    </h2>
                    
                    {/* Description/Snippet */}
                    <p className="text-[#7c9ac0] text-lg leading-relaxed mb-4 line-clamp-2">
                      {post.description || "Learn how to build modern applications using the latest technologies and best practices."}
                    </p>

                    {/* Tags / Categories */}
                    <div className="flex flex-wrap gap-3 mb-6">
                      {(post.categories || ["React", "Tailwind"]).map((cat, i) => (
                        <span 
                          key={i} 
                          className="bg-[#112a45] text-[#d8ff36] px-3 py-1 rounded text-sm font-semibold border border-[#1e3a5a]"
                        >
                          {cat.title || cat}
                        </span>
                      ))}
                    </div>

                    {/* Metadata: Date and Read Time */}
                    <div className="text-[#4b6a8e] text-lg">
                      {new Date(post.publishedAt).toLocaleDateString('en-GB', {
                        day: 'numeric',
                        month: 'long',
                        year: 'numeric'
                      })}
                      <span className="mx-2">-</span>
                      {post.readTime || "2"} min read
                    </div>
                  </div>

                  {/* 3. Post Image */}
                  {post.mainImage && (
                    <div className="w-full md:w-[320px] h-[180px] shrink-0 rounded-xl overflow-hidden border border-[#1e3a5a]">
                      <img
                        src={urlFor(post.mainImage).width(600).url()}
                        alt={post.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                    </div>
                  )}
                </Link>

                {/* Dotted Divider */}
                {index !== posts.length - 1 && (
                  <div className="mt-12 border-t border-dotted border-[#334d6b] opacity-50" />
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}