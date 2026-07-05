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
        {/* Right */}
{/* Right */}
<div className="w-full lg:w-1/2 flex justify-center items-center py-8 lg:py-0">
  <div
    className="
      relative
      w-[260px] h-[260px]
      sm:w-[320px] sm:h-[320px]
      md:w-[380px] md:h-[380px]
      lg:w-[500px] lg:h-[500px]
      xl:w-[560px] xl:h-[560px]
    "
  >
    {/* Rotating Ellipse */}
    <Ellipse
      ref={ellipseRef}
      className="absolute inset-0 w-full h-full text-cyan-400 opacity-60"
    />

    {/* Image */}
    <div className="absolute inset-0 flex items-end justify-center z-10">
      <Image
        src="/home1.png"
        alt="Raju Shrestha - Web Developer in Nepal"
        width={420}
        height={700}
        priority
        className="
          h-[180px]
          sm:h-[220px]
          md:h-[280px]
          lg:h-[360px]
          xl:h-[420px]
          w-auto
          object-contain
        "
      />
    </div>
  </div>
</div>

      </div>
    </section>
  );
};

export default Hero;