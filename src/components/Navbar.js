"use client";

import Link from "next/link";
import MenuIcon from "@mui/icons-material/Menu";
import MenuOpenIcon from "@mui/icons-material/MenuOpen";
import { useState } from "react";

const NavBar = () => {
  const [nav, setNav] = useState(false);

  const links = [
    { id: 1, label: "Home", href: "/" },
    { id: 2, label: "About Me", href: "/about" },
    { id: 3, label: "Portfolio", href: "/project" },
    { id: 4, label: "Blog", href: "/blog" },
    { id: 5, label: "Contact", href: "/contact" },
  ];

  return (
    <div className="flex justify-between items-center w-full h-15 bg-slate-500 text-white px-4 fixed top-0 left-0 z-50 border-b border-slate-700/50">
      <div>
        <h1><img src="/logo1.png" alt="logo" className="h-50 w-auto" /></h1>
      </div>

      <ul className="hidden md:flex gap-1">
        {links.map(({ id, label, href }) => (
          <li key={id} className="relative px-4 py-2 cursor-pointer capitalize text-slate-300 hover:text-cyan-400 transition-all duration-300 rounded-lg hover:bg-slate-700/50">
            <Link href={href} className="relative block font-medium text-sm uppercase tracking-wide">
              {label}
            </Link>
          </li>
        ))}
      </ul>

      <div
        onClick={() => setNav(!nav)}
        className="cursor-pointer pr-4 z-10 text-slate-300 md:hidden hover:text-cyan-400 transition-colors"
      >
        {nav ? <MenuOpenIcon /> : <MenuIcon />}
      </div>

      {nav && (
        <ul className="flex flex-col justify-center items-center absolute top-0 left-0 w-full h-screen bg-linear-to-b from-slate-900 to-slate-800 text-slate-300">
          {links.map(({ id, label, href }) => (
            <li key={id} className="px-4 py-6 text-2xl">
              <Link href={href} onClick={() => setNav(false)}>
                {label}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default NavBar;