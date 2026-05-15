import Hero from "@/components/Hero/Hero";
import MarqueeWrapper from "@/components/MarqueeWrapper";
import ContactSection from "@/app/contact/ContactSection";
import Link from "next/link";
import { client } from "@/sanity/lib/client";
import { urlFor } from "@/sanity/lib/image";
import { Github } from "lucide-react";

/* -------------------- */
/* Fetch Latest Projects */
/* -------------------- */
async function getLatestProjects() {
  const query = `
    *[_type == "project"] | order(_createdAt desc)[0...3]{
      _id,
      topic,
      shortDescription,
      livePreview,
      githubLink,
      image,
      badge,
      badgeEmoji,
      metadata
    }
  `;
  return await client.fetch(query);
}

/* -------------------- */
/* Fetch Latest Posts */
/* -------------------- */
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

/* -------------------- */
/* Fetch Testimonials */
/* -------------------- */
async function getTestimonials() {
  const query = `
    *[_type == "testimonial"] | order(_createdAt desc){
      _id,
      name,
      rating,
      message,
      image
    }
  `;
  return await client.fetch(query);
}

/* -------------------- */
/* Star Component */
function Star({ filled }) {
  return (
    <span className={`text-yellow-400 ${filled ? "opacity-100" : "opacity-30"}`}>
      ★
    </span>
  );
}

/* -------------------- */
/* Home Page Component */
export default async function Home() {
  const projects = await getLatestProjects();
  const posts = await getLatestPosts();
  const testimonials = await getTestimonials();

  return (
    <div>
      <Hero />
      <MarqueeWrapper />

      {/* ===================== */}
      {/* 🔥 Latest Projects */}
      {/* ===================== */}
      <section className="w-full px-5 md:px-10 py-20 bg-[#021426] text-white">
  {/* Heading */}
  <div className="max-w-7xl mx-auto mb-14 flex items-center justify-between">
    <h2 className="text-xl md:text-2xl font-bold text-[#7aa2d6] tracking-wide font-mono">
      // Latest Projects
    </h2>

    <Link
      href="/project"
      className="
        text-cyan-300
        hover:text-cyan-200
        text-lg
        font-mono
        underline
        underline-offset-4
      "
    >
      View All
    </Link>
  </div>

  {/* Grid */}
  <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10">
    {projects.map((project) => (
      <div
        key={project._id}
        className="
          relative
          border border-[#17304a]
          rounded-[22px]
          bg-[#03192e]
          p-6
          overflow-hidden
          hover:border-cyan-400/40
          transition-all
          duration-300
        "
      >
        {/* Top */}
        <div className="flex items-start justify-between gap-5">
          {/* Left */}
          <div className="flex-1">
            <h3 className="text-[30px] md:text-[36px] font-bold text-[#4f6fff] font-mono mb-4 leading-none">
              {project.topic}
            </h3>

            {/* Badge */}
            {project.badge && (
              <div className="inline-flex items-center gap-2 bg-[#08253f] border border-[#113c60] px-3 py-1 rounded-md mb-5">
                <span className="text-cyan-300 text-sm font-semibold font-mono">
                  {project.badge}
                </span>

                {project.badgeEmoji && (
                  <span className="text-sm">{project.badgeEmoji}</span>
                )}
              </div>
            )}

            {/* Metadata */}
            {project.metadata && project.metadata.length > 0 && (
              <div className="flex flex-wrap gap-5 mb-6">
                {project.metadata.map((item, idx) => (
                  <div
                    key={idx}
                    className="flex items-center gap-2 text-[#f6f6f6] text-lg font-mono"
                  >
                    <span className="text-[#d8ff36] text-xl">
                      {item.icon}
                    </span>
                    <span>{item.label}</span>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Image */}
          {project.image && (
            <div
              className="
                w-40 md:w-44
                h-24
                rounded-xl
                overflow-hidden
                border border-[#1f3953]
                shrink-0
                mt-1
              "
            >
              <img
                src={urlFor(project.image).width(600).url()}
                alt={project.topic}
                className="w-full h-full object-cover"
              />
            </div>
          )}
        </div>

        {/* Description */}
        <div
          className="
            mt-4
            bg-[#06203a]
            border border-[#0d2b46]
            rounded-2xl
            p-5
            min-h-[145px]
          "
        >
          <p
            className="
              text-[#7c9ac0]
              text-[20px] md:text-[22px]
              leading-[1.8]
              font-mono
            "
          >
            {project.shortDescription}
          </p>
        </div>

        {/* Links */}
        <div className="flex items-center gap-7 mt-6 flex-wrap">
          {project.livePreview && (
            <Link
              href={project.livePreview}
              target="_blank"
              rel="noopener noreferrer"
              className="
                flex items-center gap-2
                text-cyan-300
                hover:text-cyan-200
                text-[22px] md:text-[24px]
                font-bold
                font-mono
                underline
                underline-offset-4
              "
            >
              <span className="text-[22px]">⦿</span>
              Live Preview
            </Link>
          )}

          {project.githubLink && (
            <Link
              href={project.githubLink}
              target="_blank"
              rel="noopener noreferrer"
              className="
                flex items-center gap-2
                text-cyan-300
                hover:text-cyan-200
                text-[22px] md:text-[24px]
                font-bold
                font-mono
                underline
                underline-offset-4
              "
            >
              <Github className="h-6 w-6 shrink-0" />
              Github Link
            </Link>
          )}
        </div>

        {/* Glow */}
        <div className="absolute inset-0 rounded-[22px] pointer-events-none shadow-[0_0_40px_rgba(0,255,255,0.03)]" />
      </div>
    ))}
  </div>
</section>
      {/* ===================== */}
      {/* 📰 Latest Blogs */}
      {/* ===================== */}
      <section className="w-full bg-[#020d1b] text-white px-6 md:px-14 py-20">
  <div className="max-w-7xl mx-auto">
    {/* Heading */}
    <div className="mb-14">
      <p className="text-slate-500 text-2xl font-bold tracking-widest">
        // Latest Blogs
      </p>
    </div>

    <div className="grid lg:grid-cols-3 gap-10">
      {/* Left Featured Blog */}
      <div className="lg:col-span-2">
        {/* Featured Image */}
        <div className="bg-white rounded-sm overflow-hidden">
          <div className="grid grid-cols-3 gap-4 p-4">
            {posts.slice(0, 6).map((post) => (
              <div key={post._id}>
                {post.mainImage && (
                  <img
                    src={urlFor(post.mainImage).width(400).url()}
                    alt={post.title}
                    className="h-32 w-full object-cover rounded-md"
                  />
                )}

                <h4 className="text-black text-sm font-semibold mt-2 line-clamp-2">
                  {post.title}
                </h4>
              </div>
            ))}
          </div>
        </div>

        {/* Tags */}
        <div className="flex flex-wrap gap-3 mt-8">
          <span className="px-4 py-1 bg-[#0d1a2d] border border-slate-700 rounded-md text-yellow-400 text-sm">
            Component
          </span>

          <span className="px-4 py-1 bg-[#0d1a2d] border border-slate-700 rounded-md text-yellow-400 text-sm">
            React
          </span>

          <span className="px-4 py-1 bg-[#0d1a2d] border border-slate-700 rounded-md text-yellow-400 text-sm">
            Tailwind
          </span>
        </div>

        {/* Featured Content */}
        {posts[0] && (
          <Link
            href={`/blog/${encodeURIComponent(
              posts[0].slug?.current || posts[0].title
            )}`}
          >
            <div className="mt-6 group cursor-pointer">
              <h2 className="text-4xl md:text-5xl font-extrabold text-cyan-400 leading-tight group-hover:text-cyan-300 transition">
                {posts[0].title}
              </h2>

              <p className="text-slate-400 mt-5 max-w-2xl leading-relaxed">
                {posts[0].excerpt ||
                  "Learn how to build modern responsive UI components using React and Tailwind CSS."}
              </p>

              <div className="mt-6 text-slate-500 text-sm">
                {new Date(posts[0]._createdAt).toDateString()} · 2 min read
              </div>
            </div>
          </Link>
        )}
      </div>

      {/* Right Sidebar Blogs */}
      <div>
        <p className="text-slate-500 text-2xl font-bold tracking-widest mb-10">
          // Other Blogs
        </p>

        <div className="space-y-12">
          {posts.slice(1, 4).map((post, index) => {
            const slugValue = post.slug?.current || post.title;

            return (
              <Link
                key={post._id}
                href={`/blog/${encodeURIComponent(slugValue)}`}
              >
                <div className="group cursor-pointer border-b border-dashed border-slate-700 pb-10">
                  <div className="flex gap-6">
                    {/* Number */}
                    <span className="text-6xl font-extrabold text-slate-700">
                      {String(index + 1).padStart(2, "0")}
                    </span>

                    {/* Content */}
                    <div>
                      <h3 className="text-2xl font-bold text-cyan-400 group-hover:text-cyan-300 transition leading-snug">
                        {post.title}
                      </h3>

                      <p className="text-slate-400 mt-3 leading-relaxed line-clamp-3">
                        {post.excerpt ||
                          "Deep dive into modern web development concepts and best practices."}
                      </p>

                      {/* Tags */}
                      <div className="flex flex-wrap gap-2 mt-4">
                        <span className="px-3 py-1 text-xs rounded-md bg-[#0d1a2d] text-yellow-400 border border-slate-700">
                          Next.js
                        </span>

                        <span className="px-3 py-1 text-xs rounded-md bg-[#0d1a2d] text-yellow-400 border border-slate-700">
                          JavaScript
                        </span>
                      </div>

                      <div className="mt-5 text-slate-500 text-sm">
                        {new Date(post._createdAt).toDateString()} · 1 min read
                      </div>
                    </div>
                  </div>
                </div>
              </Link>
            );
          })}
        </div>

        {/* Button */}
        <div className="mt-10">
          <Link
            href="/blog"
            className="inline-flex items-center px-6 py-3 border border-cyan-500 text-cyan-400 rounded-lg hover:bg-cyan-500 hover:text-black transition duration-300"
          >
            View All Blogs
          </Link>
        </div>
      </div>
    </div>
  </div>
</section>

      {/* ===================== */}
      {/* ⭐ Testimonials */}
      {/* ===================== */}
      <section className="w-full px-5 py-16 bg-linear-to-br from-slate-900 via-slate-800 to-indigo-900 text-white">
        <h2 className="text-3xl font-bold mb-12 text-center">Testimonials</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((t) => (
            <div
              key={t._id}
              className="bg-gray-900 rounded-xl p-6 flex flex-col items-center text-center shadow-lg hover:scale-105 transition duration-300"
            >
              {t.image && (
                <img
                  src={urlFor(t.image).width(150).url()}
                  alt={t.name}
                  className="w-24 h-24 object-cover rounded-full mb-4"
                />
              )}
              <h3 className="text-xl font-semibold mb-2">{t.name}</h3>
              <div className="flex justify-center mb-4">
                {[1, 2, 3, 4, 5].map((i) => (
                  <span key={i} className={`text-yellow-400 ${i <= t.rating ? "opacity-100" : "opacity-30"}`}>
                    ★
                  </span>
                ))}
              </div>
              <p className="text-gray-400 text-sm">{t.message}</p>
            </div>
          ))}
        </div>
      </section>

      <ContactSection />
    </div>
  );
}