"use client";

import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import DownloadIcon from '@mui/icons-material/Download';

const Footer = () => {
    const currentDateTime = new Date().toLocaleDateString();

  return (
    <div name="footer" className="min-h-fit w-full bg-linear-to-t from-slate-900 to-slate-800 lg:pl-44 py-12 px-4 text-slate-200 border-t border-slate-700/50">
      <div className='max-w-6xl mx-auto'>
        {/* Contact Info and Social Links */}
        <div className='flex flex-col md:flex-row justify-between items-center mb-8'>
          <div className='mb-6 md:mb-0'>
            <h3 className='text-sm font-semibold text-cyan-400'>📞 Contact</h3>
            <p className='text-slate-300'>+977-9825821351</p>
            <p className='text-xs text-slate-500 mt-2'>Date & Time: {currentDateTime}</p>
          </div>

          {/* Social Media Links */}
          <div className='flex space-x-6'>
            <a href='https://github.com/rajushrestha1'
              className='text-slate-300 hover:text-cyan-400 transition-colors duration-300 text-2xl'
              target='_blank'
              rel='noopener noreferrer'
              title='GitHub'>
              <GitHubIcon />
            </a>
            <a href='https://www.linkedin.com/in/raju-shrestha-6b5070245/'
              className='text-slate-300 hover:text-cyan-400 transition-colors duration-300 text-2xl'
              target='_blank'
              rel='noopener noreferrer'
              title='LinkedIn'>
              <LinkedInIcon />
            </a>
            <a href='https://www.facebook.com/raju.stha.123829'
              className='text-slate-300 hover:text-cyan-400 transition-colors duration-300 text-2xl'
              target='_blank'
              rel='noopener noreferrer'
              title='Facebook'>
              <FacebookIcon />
            </a>
            <a href='https://www.instagram.com/rajushrestha67/'
              className='text-slate-300 hover:text-cyan-400 transition-colors duration-300 text-2xl'
              target='_blank'
              rel='noopener noreferrer'
              title='Instagram'>
              <InstagramIcon />
            </a>
          </div>
        </div>

        {/* Divider */}
        <div className='border-t border-slate-700/50 my-6'></div>

        {/* Resume Section */}
        <div className='flex justify-center items-center mb-6'>
          <a href="resume.pdf" download="resume.pdf" className="flex items-center space-x-2 px-6 py-2 bg-linear-to-r from-cyan-500/10 to-blue-500/10 hover:from-cyan-500/20 hover:to-blue-500/20 rounded-lg text-slate-300 hover:text-cyan-400 transition-all duration-300 border border-cyan-500/30">
            <DownloadIcon />
            <span className='font-medium'>Download Resume</span>
          </a>
        </div>

        {/* Copyright */}
        <div className='text-center pt-4 border-t border-slate-700/50'>
          <p className='text-xs text-slate-500'>© 2026 • All Rights Reserved • Built with <span className='text-cyan-400'>Next.js</span> & <span className='text-cyan-400'>Sanity CMS</span></p>
        </div>
      </div>
    </div>
  );
}

export default Footer;