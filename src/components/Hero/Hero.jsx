'use client';
import { Button } from "@/components/ui/button"
import Link from 'next/link';
import Image from 'next/image';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import { useRoleSwitcher } from "@/hooks/useRoleSwitcher";

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
            I am a motivated and versatile individual, always eager to take on new challenges, 
            with a passion for learning. I am ready to make meaningful contributions and achieve great things.
          </p>
          <Button asChild>
            <Link
              href="/portfolio"
              className="text-white group w-fit px-6 py-3 flex items-center rounded-lg bg-linear-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 transition-all duration-500 cursor-pointer hover:shadow-lg hover:shadow-cyan-500/50 transform hover:scale-105"
            >
              Portfolio
              <span className="group-hover:translate-x-1 duration-500 ml-2">
                <ChevronRightIcon />
              </span>
            </Link>
          </Button>
          
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
