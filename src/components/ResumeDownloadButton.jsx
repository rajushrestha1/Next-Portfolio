'use client'

import DownloadIcon from '@mui/icons-material/Download';

export default function ResumeDownloadButton() {
  return (
    <a
      href="resume.pdf"
      download="resume.pdf"
      className="flex items-center space-x-2 px-6 py-2 bg-gradient-to-r from-cyan-500/10 to-blue-500/10 hover:from-cyan-500/20 hover:to-blue-500/20 rounded-lg text-slate-300 hover:text-cyan-400 transition-all duration-300 border border-cyan-500/30"
    >
      <DownloadIcon />
      <span className="font-medium">Download Resume</span>
    </a>
  );
}