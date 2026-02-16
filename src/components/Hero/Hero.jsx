'use client';

import Link from 'next/link';
import Image from 'next/image';
import { TypeAnimation } from 'react-type-animation';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';

import Ellipse, { useRotatingAnimation } from './Ellipse';

const Hero = () => {
  const ellipseRef = useRotatingAnimation(0.01); // slower rotation

  return (
    <div className="h-screen w-full lg:pl-44 bg-gradient-to-b from-black via-black to-gray-800 relative">
      <div className="max-w-screen-lg flex flex-col mx-auto items-center justify-center h-full px-4 md:flex-row">
        
        {/* Left */}
        <div className="flex flex-col justify-center h-full">
          <h1 className="text-4xl md:text-7xl font-bold text-yellow-500">
            <TypeAnimation
              sequence={['I Am A Web Developer', 1000, 'I Am Backend Developer', 1000]}
              wrapper="span"
              speed={5}
              repeat={Infinity}
            />
          </h1>
          <p className="text-gray-500 py-4 max-w-md">
            I am a motivated and versatile individual, always eager to take on new challenges, 
            with a passion for learning. I am ready to make meaningful contributions and achieve great things.
          </p>
          <Link
            href="/portfolio"
            className="text-white group w-fit m-3 px-5 py-1 flex items-center rounded-full bg-blue-500 hover:bg-gray-800 hover:text-white hover:scale-110 duration-500 cursor-pointer hover:border-blue-950"
          >
            Portfolio
            <span className="group-hover:rotate-90 duration-500">
              <ChevronRightIcon />
            </span>
          </Link>
        </div>

        {/* Right */}
        <div className="relative flex items-center justify-center w-full md:w-1/2 h-full">
          {/* Rotating Ellipse behind */}
          <Ellipse
            ref={ellipseRef}
            className="absolute w-80 h-80 md:w-96 md:h-96 lg:w-[25.75rem] lg:h-[25.75rem] text-blue-500"
          />

          {/* Image in the center */}
          <Image
            src="/home.png"
            alt="home"
            width={300}
            height={300}
            className="rounded-full relative z-10"
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;
