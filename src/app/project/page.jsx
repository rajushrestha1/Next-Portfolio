import { client } from "@/sanity/lib/client";
import { urlFor } from "@/sanity/lib/image";
import Link from "next/link";
import { Github } from "lucide-react";
async function getProjects() {
  return await client.fetch(`
    *[_type == "project"] | order(_createdAt desc){
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
  `);
}

export default async function ProjectsPage() {
  const projects = await getProjects();

  return (
    <section className="min-h-screen bg-[#021426] text-white px-5 md:px-10 py-20">
      
      {/* Heading */}
      <div className="max-w-7xl mx-auto mb-14">
        <h1 className="text-4xl md:text-5xl font-bold text-[#7aa2d6] tracking-wide font-mono">
          // Projects
        </h1>
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
            {/* Top Row */}
            <div className="flex items-start justify-between gap-5">
              
              {/* Left */}
              <div className="flex-1">
                <h2 className="text-[34px] md:text-[36px] leading-none font-bold text-[#4f6fff] font-mono mb-4">
                  {project.topic}
                </h2>

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
                    w-44
                    h-24
                    rounded-xl
                    overflow-hidden
                    border border-[#1f3953]
                    shrink-0
                    mt-1
                  "
                >
                  <img
                    src={urlFor(project.image).width(500).url()}
                    alt={project.topic}
                    className="w-full h-full object-cover"
                  />
                </div>
              )}
            </div>

            {/* Description Box */}
            <div
              className="
                mt-4
                bg-[#06203a]
                border border-[#0d2b46]
                rounded-2xl
                p-5
                min-h-36
              "
            >
              <p
                className="
                  text-[#7c9ac0]
                  text-[22px]
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
                    text-[24px]
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
                    text-[24px]
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
  );
}