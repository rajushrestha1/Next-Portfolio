'use client';
import Image from 'next/image';
import { useRoleSwitcher } from "@/hooks/useRoleSwitcher";
import DownloadIcon from '@mui/icons-material/Download';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import Ellipse, { useRotatingAnimation } from './Ellipse';

const Hero = () => {
  const ellipseRef = useRotatingAnimation(0.01);
  const role = useRoleSwitcher({
    roles: ['Full Stack Developer', 'Backend Developer', 'SEO Expert'],
  });

  return (
    <div className="min-h-screen w-full lg:pl-44 bg-linear-to-br from-slate-900 via-slate-800 to-indigo-900">
      <div className="max-w-5xl flex flex-col mx-auto items-center justify-center min-h-screen px-4 md:flex-row gap-8">

        {/* Left */}
        <div className="flex flex-col justify-center h-full py-12 md:py-0">

          {/* ✅ H1 contains the target keyword */}
          <h1>
            <span className="text-neutral mb-2 block text-3xl font-bold">
              Hi, I&apos;m Raju Shrestha
            </span>
            <span className="text-accent block text-[1.75rem] font-bold">
              {role}
            </span>
          </h1>

          {/* ✅ Subtitle with keyword */}
          <p className="text-cyan-400 text-sm font-semibold mt-2 mb-1 ibm-plex-mono-regular tracking-wide">
            Web Developer in Nepal · Based in Kathmandu
          </p>

          {/* ✅ Description with natural keyword usage */}
          <p className="text-slate-300 py-4 max-w-md text-lg leading-relaxed ibm-plex-mono-regular">
            Full Stack Web Developer in Nepal specializing in Next.js, React,
            Node.js, and MongoDB. I build fast, scalable, and modern web
            applications — from RESTful APIs to real-time features with
            WebSockets. Based in Kathmandu, available for freelance and
            full-time opportunities.
          </p>

          {/* Buttons */}
          <div className="flex gap-4 pt-4 flex-wrap">
            <a
              href="resume.pdf"
              download="resume.pdf"
              className="flex items-center space-x-2 px-6 py-2 bg-gradient-to-r from-cyan-500/10 to-blue-500/10 hover:from-cyan-500/20 hover:to-blue-500/20 rounded-lg text-slate-300 hover:text-cyan-400 transition-all duration-300 border border-cyan-500/30"
            >
              <DownloadIcon />
              <span className="font-medium">Resume</span>
            </a>
            <a
              href="https://www.linkedin.com/in/raju-shrestha-6b5070245/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-2 px-6 py-2 bg-gradient-to-r from-cyan-500/10 to-blue-500/10 hover:from-cyan-500/20 hover:to-blue-500/20 rounded-lg text-slate-300 hover:text-cyan-400 transition-all duration-300 border border-cyan-500/30"
            >
              <LinkedInIcon />
              <span className="font-medium">LinkedIn</span>
            </a>
          </div>
        </div>

        {/* Right */}
        <div className="relative flex items-center justify-center w-full md:w-1/2 h-full min-h-96">
          <Ellipse
            ref={ellipseRef}
            className="absolute w-80 h-80 md:w-96 md:h-96 lg:w-103 lg:h-103 text-cyan-400 opacity-60"
          />
          <Image
            src="/home1.png"
            alt="Raju Shrestha - Web Developer in Nepal"
            width={300}
            height={1000}
            className="rounded-full relative z-10 shadow-2xl"
            priority
          />
        </div>

      </div>
    </div>
  );
};

export default Hero;