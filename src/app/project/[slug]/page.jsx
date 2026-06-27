import { generateDynamicMetadata } from "@/lib/seoUtils";
import JsonLd from "@/components/JsonLd";
// import { getProjectBySlug } from "@/lib/sanityQueries"; // your Sanity fetch
 
export async function generateMetadata({ params }) {
  // const project = await getProjectBySlug(params.slug);
  const project = { /* fetched project data from Sanity */ };
 
  return generateDynamicMetadata({
    title: project.seo?.metaTitle || project.title,
    description: project.seo?.metaDescription || project.description,
    slug: params.slug,
    basePath: "/project",
    image: project.seo?.ogImage?.url || project.thumbnail?.url,
    type: "website",
  });
}
 
export default async function ProjectPage({ params }) {
  // const project = await getProjectBySlug(params.slug);
 
  return (
    <>
      <JsonLd
        type="project"
        data={{
          title: project.title,
          description: project.description,
          slug: params.slug,
          image: project.thumbnail?.url,
          liveUrl: project.liveUrl,
          technologies: project.technologies,
        }}
      />
      <JsonLd
        type="breadcrumb"
        breadcrumbs={[
          { name: "Home", url: "/" },
          { name: "Projects", url: "/project" },
          { name: project.title, url: `/project/${params.slug}` },
        ]}
      />
      {/* your existing page content */}
    </>
  );
}