"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import MenuIcon from "@mui/icons-material/Menu";
import MenuOpenIcon from "@mui/icons-material/MenuOpen";
import { useState } from "react";

// List every route that has a WHITE page background here.
// Any route NOT in this list is assumed to have a black background.
const LIGHT_PAGES = ["/about", "/contact"];

const NavBar = () => {
  const [nav, setNav] = useState(false);
  const pathname = usePathname();
  const isLight = LIGHT_PAGES.includes(pathname);

  const centerLinks = [
    { id: 1, label: "Home", href: "/" },
    { id: 2, label: "About", href: "/about" },
    { id: 3, label: "Portfolio", href: "/project" },
    { id: 4, label: "Blog", href: "/blog" },
  ];

  return (
    <div
      className={`fixed top-0 left-0 z-50 w-full border-b backdrop-blur-lg transition-colors duration-300 ${isLight ? "bg-black/60 border-white/10" : "bg-white/5 border-white/10"
        }`}
    >
      <div className="flex items-center justify-between h-15 px-6 md:px-12">
        {/* Logo */}
        <div className="flex items-center">
          <img src="/logo1.png" alt="logo" className="h-50 w-auto" />
        </div>

        {/* Center Menu */}
        <ul className="hidden md:flex absolute left-1/2 -translate-x-1/2 items-center gap-3">
          {centerLinks.map(({ id, label, href }) => (
            <li key={id}>
              <Link
                href={href}
                className={`relative px-5 py-2 text-sm font-medium uppercase tracking-wider transition-all duration-300 rounded-full hover:text-cyan-400 hover:bg-slate-800 group ${isLight ? "text-white" : "text-slate-300"
                  }`}
              >
                {label}
                <span className="absolute left-1/2 bottom-1 h-[2px] w-0 bg-cyan-400 transition-all duration-300 group-hover:w-3/4 group-hover:left-[12%]"></span>
              </Link>
            </li>
          ))}
        </ul>

        {/* Contact Button Right */}
        <div className="hidden md:flex items-center gap-4">
          <Link
            href="/contact"
            className="relative overflow-hidden px-5 py-2 rounded-full border text-sm border-cyan-400 text-cyan-400 font-medium uppercase tracking-wide transition-all duration-300 hover:text-white group"
          >
            <span className="absolute inset-0 w-0 bg-cyan-400 transition-all duration-500 group-hover:w-full"></span>
            <span className="relative z-10">Contact</span>
          </Link>
        </div>

        {/* Mobile Menu Icon */}
        <div
          onClick={() => setNav(!nav)}
          className={`md:hidden cursor-pointer z-50 ${isLight ? "text-white" : "text-slate-300"
            }`}
        >
          {nav ? <MenuOpenIcon /> : <MenuIcon />}
        </div>
      </div>

      {/* Mobile Menu */}
      {nav && (
        <ul
          className={`md:hidden flex flex-col justify-center items-center gap-8 h-screen backdrop-blur-lg ${isLight ? "bg-black/80 text-white" : "bg-slate-900/80 text-slate-300"
            }`}
        >
          {[...centerLinks, { id: 5, label: "Contact", href: "/contact" }].map(
            ({ id, label, href }) => (
              <li key={id}>
                <Link
                  href={href}
                  onClick={() => setNav(false)}
                  className="text-2xl font-medium hover:text-cyan-400 transition-colors duration-300"
                >
                  {label}
                </Link>
              </li>
            )
          )}
        </ul>
      )}
    </div>
  );
};

export default NavBar;