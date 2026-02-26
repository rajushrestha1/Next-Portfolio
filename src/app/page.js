import Hero from "@/components/Hero/Hero";
import MarqueeWrapper from "@/components/MarqueeWrapper";
import ContactSection from "@/app/contact/ContactSection";
import Link from "next/link";
import { client } from "@/sanity/lib/client";
import { urlFor } from "@/sanity/lib/image";

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
      image
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
      <section className="w-full px-5 py-16 bg-linear-to-br from-slate-900 via-slate-800 to-indigo-900 text-white">
        <h2 className="text-3xl font-bold mb-10 text-center">Latest Projects</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div
              key={project._id}
              className="border border-slate-700 rounded-xl overflow-hidden hover:shadow-xl hover:scale-105 transition duration-300"
            >
              {project.image && (
                <img
                  src={urlFor(project.image).width(600).url()}
                  alt={project.topic}
                  className="w-full h-60 object-cover"
                />
              )}
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-3">{project.topic}</h3>
                <p className="text-sm text-gray-400 mb-6">{project.shortDescription}</p>
                <div className="flex gap-4">
                  {project.livePreview && (
                    <Link
                      href={project.livePreview}
                      target="_blank"
                      className="text-sm px-4 py-2 bg-blue-600 hover:bg-blue-700 rounded-lg transition"
                    >
                      Live Preview
                    </Link>
                  )}
                  {project.githubLink && (
                    <Link
                      href={project.githubLink}
                      target="_blank"
                      className="text-sm px-4 py-2 bg-gray-700 hover:bg-gray-800 rounded-lg transition"
                    >
                      GitHub
                    </Link>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="mt-10 text-center">
          <Link
            href="/project"
            className="px-6 py-2 bg-white text-black rounded-lg font-medium hover:bg-gray-200 transition"
          >
            View All Projects
          </Link>
        </div>
      </section>

      {/* ===================== */}
      {/* 📰 Latest Blogs */}
      {/* ===================== */}
      <section className="w-full px-5 py-16 bg-linear-to-br from-slate-900 via-slate-800 to-indigo-900 text-white">
        <h2 className="text-3xl font-bold mb-8 text-center">Latest Blogs</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {posts.map((post) => {
            const slugValue = post.slug?.current || post.title;
            return (
              <Link key={post._id} href={`/blog/${encodeURIComponent(slugValue)}`}>
                <div className="border border-slate-700 rounded-xl overflow-hidden hover:shadow-lg hover:scale-105 transition duration-300">
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
        <div className="mt-8 text-center">
          <Link
            href="/blog"
            className="px-6 py-2 bg-black text-white rounded-lg hover:bg-gray-800 transition"
          >
            View All Blogs
          </Link>
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