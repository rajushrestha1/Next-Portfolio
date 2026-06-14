'use client';
import Image from 'next/image';
import { useRoleSwitcher } from "@/hooks/useRoleSwitcher";
import DownloadIcon from '@mui/icons-material/Download';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

import Ellipse, { useRotatingAnimation } from './Ellipse';

const Hero = () => {
  const ellipseRef = useRotatingAnimation(0.01); // slower rotation
  const role = useRoleSwitcher({ roles: ['FULLSTACK DEVELOPER', 'Backend Developer', 'SEO Expert'] })

  return (
    <div className="min-h-screen w-full lg:pl-44 bg-linear-to-br from-slate-900 via-slate-800 to-indigo-900">
      <div className="max-w-5xl flex flex-col mx-auto items-center justify-center min-h-screen px-4 md:flex-row gap-8">
        
        {/* Left */}
        <div className="flex flex-col justify-center h-full py-12 md:py-0">
          <h1>
            <span className="text-neutral mb-2 block text-3xl font-bold">Hi - I'm Raju Shrestha</span>
            <span className="text-accent block text-[1.75rem] font-bold">{role}</span>

          </h1>
          <p className="text-slate-300  py-6 max-w-md text-lg leading-relaxed ibm-plex-mono-regular">
Junior Backend Developer with hands-on experience in building scalable Next.js MERN stack applications using
Node.js, Express.js, nodemailer and MongoDB. Skilled in designing RESTful APIs, handling database operations,
and implementing real-time features with WebSockets. Passionate about clean code and backend problemsolving.          </p>
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
                className="hover:text-cyan-400 transition flex items-center space-x-2 px-6 py-2 bg-gradient-to-r from-cyan-500/10 to-blue-500/10 hover:from-cyan-500/20 hover:to-blue-500/20 rounded-lg text-slate-300 hover:text-cyan-400 transition-all duration-300 border border-cyan-500/30"
              >
                <LinkedInIcon />
                <span className="font-medium">LinkedIn</span>
              </a>
          </div>
          
        </div>

        {/* Right */}
        <div className="relative flex items-center justify-center w-full md:w-1/2 h-full min-h-96">
          {/* Rotating Ellipse behind */}
          <Ellipse
            ref={ellipseRef}
            className="absolute w-80 h-80 md:w-96 md:h-96 lg:w-103 lg:h-103 text-cyan-400 opacity-60"
          />

          {/* Image in the center */}
          <Image
            src="/home.png"
            alt="home"
            width={300}
            height={300}
            className="rounded-full relative z-10 shadow-2xl"
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;
