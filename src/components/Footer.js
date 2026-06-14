"use client";

import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import DownloadIcon from "@mui/icons-material/Download";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import PhoneIcon from "@mui/icons-material/Phone";

const Footer = () => {
  const currentDateTime = new Date().toLocaleDateString();

  return (
    <div
      name="footer"
      className="w-full bg-linear-to-br from-slate-900 via-slate-800 to-indigo-900 lg:pl-44 py-16 px-6 text-slate-200 border-t border-slate-700/50"
    >
      <div className="max-w-6xl mx-auto">

        {/* ===== Top 3 Column Section ===== */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">

          {/* About Section */}
          <div>
            <h2 className="text-2xl font-bold text-cyan-400 mb-4">
              Raju Shrestha - Web Developer
            </h2>
            <p className="text-slate-300 leading-7 text-sm">
              Looking for a reliable web developer in Nepal? With 3+ years of
              experience, I specialize in building fast, secure, and scalable
              websites and web applications tailored to real business needs.
              Learn more about me and how I help businesses build future-ready
              digital platforms.
            </p>
            <p className="text-xs text-slate-500 mt-4">
              Date: {currentDateTime}
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold text-cyan-400 mb-6">
              Quick Links
            </h3>
            <ul className="space-y-3 text-slate-300 text-sm">
              <li className="hover:text-cyan-400 cursor-pointer transition">
                About Me
              </li>
              <li className="hover:text-cyan-400 cursor-pointer transition">
                Portfolio
              </li>
              <li className="hover:text-cyan-400 cursor-pointer transition">
                Services
              </li>
              <li className="hover:text-cyan-400 cursor-pointer transition">
                Customer Reviews
              </li>
              <li className="hover:text-cyan-400 cursor-pointer transition">
                Contact
              </li>
            </ul>
          </div>

          {/* Contact Section */}
          <div>
            <h3 className="text-lg font-semibold text-cyan-400 mb-6">
              Contact
            </h3>

            <div className="space-y-4 text-sm">

              <div className="flex items-center gap-3">
                <MailOutlineIcon className="text-cyan-400" />
                <span>shrestharaju010101@gmail.com</span>
              </div>

              <div className="flex items-center gap-3">
                <LocationOnIcon className="text-cyan-400" />
                <span>Babarmahal, Kathmandu, Nepal</span>
              </div>

              <div className="flex items-center gap-3">
                <PhoneIcon className="text-cyan-400" />
                <span>+977-9825821351</span>
              </div>
            </div>

            {/* Social Icons */}
            <div className="flex space-x-5 mt-6 text-slate-300">
              <a
                href="https://github.com/rajushrestha1"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-cyan-400 transition"
              >
                <GitHubIcon />
              </a>

              <a
                href="https://www.linkedin.com/in/raju-shrestha-6b5070245/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-cyan-400 transition"
              >
                <LinkedInIcon />
              </a>

              <a
                href="https://www.facebook.com/raju.stha.123829"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-cyan-400 transition"
              >
                <FacebookIcon />
              </a>

              <a
                href="https://www.instagram.com/rajushrestha67/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-cyan-400 transition"
              >
                <InstagramIcon />
              </a>
            </div>
          </div>
        </div>

        {/* ===== Divider ===== */}
        <div className="border-t border-slate-700/50 my-10"></div>

        {/* ===== Resume Button ===== */}
        <div className="flex justify-center mb-8">
          <a
            href="resume.pdf"
            download="resume.pdf"
            className="flex items-center space-x-2 px-6 py-2 bg-gradient-to-r from-cyan-500/10 to-blue-500/10 hover:from-cyan-500/20 hover:to-blue-500/20 rounded-lg text-slate-300 hover:text-cyan-400 transition-all duration-300 border border-cyan-500/30"
          >
            <DownloadIcon />
            <span className="font-medium">Download Resume</span>
          </a>
        </div>

        {/* ===== Bottom Copyright ===== */}
        <div className="text-center pt-6 border-t border-slate-700/50">
          <p className="text-xs text-slate-500">
            © 2026 • All Rights Reserved • Built with{" "}
            
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;