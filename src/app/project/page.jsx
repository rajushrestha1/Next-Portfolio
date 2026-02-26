import { client } from "@/sanity/lib/client";
import { urlFor } from "@/sanity/lib/image";
import Link from 'next/link'

async function getProjects() {
  return await client.fetch(`
    *[_type == "project"] | order(_createdAt desc){
      _id,
      topic,
      shortDescription,
      livePreview,
      githubLink,
      image
    }
  `)
}

export default async function ProjectsPage() {
  const projects = await getProjects()

  return (
    <div className="min-h-screen bg-gradient-to-t from-slate-900 to-slate-800 text-white px-6 py-16">
      
      <h1 className="text-4xl font-bold text-center mb-12">
        My Projects
      </h1>

      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {projects.map((project) => (
          <div
            key={project._id}
            className="bg-gray-900 rounded-2xl overflow-hidden shadow-lg hover:scale-105 transition duration-300"
          >
            {project.image && (
              <img
                src={urlFor(project.image).width(600).url()}
                alt={project.topic}
                className="w-full h-52 object-cover"
              />
            )}

            <div className="p-6">
              <h2 className="text-xl font-semibold mb-3">
                {project.topic}
              </h2>

              <p className="text-gray-400 text-sm mb-6">
                {project.shortDescription}
              </p>

              <div className="flex gap-4">
                {project.livePreview && (
                  <Link
                    href={project.livePreview}
                    target="_blank"
                    className="bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded-lg text-sm"
                  >
                    Live Preview
                  </Link>
                )}

                {project.githubLink && (
                  <Link
                    href={project.githubLink}
                    target="_blank"
                    className="bg-gray-700 hover:bg-gray-800 px-4 py-2 rounded-lg text-sm"
                  >
                    GitHub
                  </Link>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>

    </div>
  )
}