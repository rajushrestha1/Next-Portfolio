
import Image from 'next/image'
import { Code, Briefcase, GraduationCap } from 'lucide-react'
import { generateStaticMetadata } from "@/lib/seoUtils";
import { PAGE_SEO } from "@/lib/seoConfig";
import JsonLd from "@/components/JsonLd";
import ResumeDownloadButton from "@/components/ResumeDownloadButton"; 

export const metadata = generateStaticMetadata(PAGE_SEO.about);

export default function AboutPage() {
  return (
    <>
      <JsonLd
        type="breadcrumb"
        breadcrumbs={[
          { name: "Home", url: "/" },
          { name: "About", url: "/about" },
        ]}
      />

      <div className="min-h-screen bg-[#06203a] text-white px-6 md:px-16 py-16">

        <section>
          <h1 className="text-3xl font-bold mb-10">About Me</h1>

          <div className="grid md:grid-cols-2 gap-12 items-start">

            <div>
              <Image
                src="/aboutme.jpg"
                alt="Profile"
                width={450}
                height={100}
                className=""
              />
            </div>

            {/* About Content */}
            <div className="space-y-6 text-gray-300 leading-relaxed ibm-plex-mono-regular">
              <p>
                Junior Backend Developer with hands-on experience in building scalable MERN stack applications using
                Node.js, Express.js, and MongoDB. Skilled in designing RESTful APIs, handling database operations,
                and implementing real-time features with WebSockets. Passionate about clean code and backend problem solving.
                <br /><br />
                Full-stack developer experienced in building scalable and secure web applications using the MERN stack and Next.js ecosystem. Developed a secure Online Voting System with face recognition and "one person, one vote" enforcement along with real-time vote counting. Built a MERN-based e-commerce Book Store with full CRUD operations and payment integration. Created a real-time Chat App API using Node.js, Express, and WebSockets for instant messaging. Also developed a Company Asset Management System using Next.js, Node.js, MongoDB, Cloudinary, and ShadCN UI, featuring asset tracking, role-based authentication, employee management, and dashboard analytics.
                <br /><br />
                I have been working as an SEO Expert since 2025, helping websites improve their search visibility
                and rankings. I am experienced in using tools like Google Analytics, Google Search Console,
                SEMrush, and Ahrefs to optimize content, track performance, and implement effective SEO strategies.
              </p>

              {/* Buttons */}
              <div className="flex gap-4 pt-4">
 <ResumeDownloadButton />
                <button className="px-6 py-2 bg-gray-800 border border-gray-700 rounded-full hover:bg-gray-700 transition">
                  My Skills
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* ------------------ Achievements ------------------ */}
        <section className="mt-20">
          <h2 className="text-xl font-semibold mb-8">Achievements</h2>

          <div className="grid md:grid-cols-3 gap-6">

            <div className="bg-[#111] p-6 rounded-xl border border-gray-800 hover:border-gray-600 transition">
              <Code className="mb-4 text-gray-400" />
              <h3 className="font-semibold text-white">10+ Projects</h3>
              <p className="text-sm text-gray-400 mt-1">
                Completed full-stack web applications
              </p>
            </div>

            <div className="bg-[#111] p-6 rounded-xl border border-gray-800 hover:border-gray-600 transition">
              <Briefcase className="mb-4 text-gray-400" />
              <h3 className="font-semibold text-white">1 Internships</h3>
              <p className="text-sm text-gray-400 mt-1">
                Professional work experience
              </p>
            </div>

            <div className="bg-[#111] p-6 rounded-xl border border-gray-800 hover:border-gray-600 transition">
              <GraduationCap className="mb-4 text-gray-400" />
              <h3 className="font-semibold text-white">Bsc CSIT</h3>
              <p className="text-sm text-gray-400 mt-1">
                Academic excellence
              </p>
            </div>

          </div>
        </section>

      </div>
    </>
  )
}