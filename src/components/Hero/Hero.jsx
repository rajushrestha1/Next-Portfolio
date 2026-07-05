"use client";

import Image from "next/image";
import { useRoleSwitcher } from "@/hooks/useRoleSwitcher";
import DownloadIcon from "@mui/icons-material/Download";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import Ellipse, { useRotatingAnimation } from "./Ellipse";

const Hero = () => {
  const ellipseRef = useRotatingAnimation(0.01);

  const role = useRoleSwitcher({
    roles: [
      "Full Stack Developer",
      "Backend Developer",
      "SEO Expert",
    ],
  });

  return (
    <section className="w-full min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-indigo-900 overflow-hidden">
      <div className="max-w-7xl mx-auto min-h-screen flex flex-col-reverse lg:flex-row items-center justify-center px-6 sm:px-8 md:px-10 lg:px-16 xl:px-20 py-12 lg:py-0 gap-12">

        {/* Left Content */}
        <div className="w-full lg:w-1/2 flex flex-col justify-center text-center lg:text-left">

          <h1>
            <span className="block text-neutral font-bold text-3xl sm:text-4xl md:text-5xl leading-tight">
              Hi, I&apos;m Raju Shrestha
            </span>

            <span className="block mt-2 text-cyan-400 font-bold text-2xl sm:text-3xl md:text-4xl min-h-[48px]">
              {role}
            </span>
          </h1>

          <p className="mt-4 text-cyan-400 font-semibold tracking-wide text-sm sm:text-base ibm-plex-mono-regular">
            Web Developer in Nepal • Based in Kathmandu
          </p>

          <p className="mt-6 text-slate-300 text-base sm:text-lg leading-8 max-w-xl mx-auto lg:mx-0 ibm-plex-mono-regular">
            Full Stack Web Developer in Nepal specializing in Next.js, React,
            Node.js, and MongoDB. I build fast, scalable, and modern web
            applications—from RESTful APIs to real-time features with
            WebSockets. Based in Kathmandu, available for freelance and
            full-time opportunities.
          </p>

          {/* Buttons */}
          <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">

            <a
              href="/resume.pdf"
              download
              className="flex items-center justify-center gap-2 px-6 py-3 rounded-lg border border-cyan-500/30 bg-cyan-500/10 hover:bg-cyan-500/20 text-slate-200 hover:text-cyan-400 transition duration-300"
            >
              <DownloadIcon />
              <span className="font-medium">Resume</span>
            </a>

            <a
              href="https://www.linkedin.com/in/raju-shrestha-6b5070245/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 px-6 py-3 rounded-lg border border-cyan-500/30 bg-cyan-500/10 hover:bg-cyan-500/20 text-slate-200 hover:text-cyan-400 transition duration-300"
            >
              <LinkedInIcon />
              <span className="font-medium">LinkedIn</span>
            </a>

          </div>
        </div>

        {/* Right Image */}
        <div className="w-full lg:w-1/2 flex items-center justify-center relative">

          <Ellipse
            ref={ellipseRef}
            className="absolute w-60 h-60 sm:w-72 sm:h-72 md:w-80 md:h-80 lg:w-[420px] lg:h-[420px] text-cyan-400 opacity-60"
          />

          <Image
            src="/home1.png"
            alt="Raju Shrestha - Web Developer in Nepal"
            width={420}
            height={420}
            priority
            className="relative z-10 w-52 sm:w-64 md:w-72 lg:w-[360px] xl:w-[420px] h-auto"
          />

        </div>

      </div>
    </section>
  );
};

export default Hero;