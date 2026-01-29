"use client";

import Link from "next/link";


export default function Navbar() {
return (
<nav className="fixed top-0 w-full bg-black text-white shadow-lg z-50 lg:pl-44">
<div className="max-w-7xl mx-auto px-4 py-4 flex gap-8">
<Link href="/" className="hover:text-yellow-500 transition">Home</Link>
<Link href="/about" className="hover:text-yellow-500 transition">About</Link>
<Link href="/portfolio" className="hover:text-yellow-500 transition">Portfolio</Link>
<Link href="/blog" className="hover:text-yellow-500 transition">Blog</Link>
<Link href="/testimonials" className="hover:text-yellow-500 transition">Testimonials</Link>
<Link href="/contact" className="hover:text-yellow-500 transition">Contact</Link>
</div>
</nav>
);
}