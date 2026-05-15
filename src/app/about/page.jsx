'use client'

import Image from 'next/image'
import { Code, Briefcase, GraduationCap } from 'lucide-react'
import DownloadIcon from '@mui/icons-material/Download';

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-black text-white px-6 md:px-16 py-16">
      
      {/* ------------------ About Section ------------------ */}
      <section>
        <h1 className="text-3xl font-bold mb-10">About Me</h1>

        <div className="grid md:grid-cols-2 gap-12 items-start">
          
          {/* Profile Image */}
          <div>
            <Image
              src="/aboutme.jpg" // put your image in public folder
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
<br />
<br />
I began my web development journey in 2023 as a frontend developer, building responsive and
user-friendly interfaces. Later, I started exploring backend technologies, gaining experience in
RESTful APIs, databases, and server-side development, becoming comfortable with full-stack
development.
<br />
<br />
I have been working as an SEO Expert since 2025, helping websites improve their search visibility
and rankings. I am experienced in using tools like Google Analytics, Google Search Console,
SEMrush, and Ahrefs to optimize content, track performance, and implement effective SEO
strategies.

            </p>

            

            

            {/* Buttons */}
            <div className="flex gap-4 pt-4">
              <a
            href="resume.pdf"
            download="resume.pdf"
            className="flex items-center space-x-2 px-6 py-2 bg-gradient-to-r from-cyan-500/10 to-blue-500/10 hover:from-cyan-500/20 hover:to-blue-500/20 rounded-lg text-slate-300 hover:text-cyan-400 transition-all duration-300 border border-cyan-500/30"
          >
            <DownloadIcon />
            <span className="font-medium">Download Resume</span>
          </a>

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
  )
}
