'use client'

// src/lib/ptComponents.jsx
import { urlFor } from "@/sanity/lib/image";

export const ptComponents = {
  types: {
    code: ({ value }) => (
      <pre
        suppressHydrationWarning
        className="bg-gray-900 text-gray-100 p-6 rounded-md overflow-x-auto my-6"
      >
        <code className={`language-${value.language || "text"}`}>
          {value.code}
        </code>
      </pre>
    ),
    image: ({ value }) => (
      <img
        src={urlFor(value).width(800).url()}
        alt={value.alt || "Blog Image"}
        className="my-6 rounded-xl w-full"
      />
    ),
  },
  block: {
    // ── Headings ────────────────────────────────────────────
    h1: ({ children }) => {
      const id = children.join("").toLowerCase().replace(/\s+/g, "-");
      return (
        <h1 id={id} className="text-4xl font-bold mb-6 mt-12 text-white">
          {children}
        </h1>
      );
    },
    h2: ({ children }) => {
      const id = children.join("").toLowerCase().replace(/\s+/g, "-");
      return (
        <h2 id={id} className="text-3xl font-bold mb-5 mt-10 text-white">
          {children}
        </h2>
      );
    },
    h3: ({ children }) => {
      const id = children.join("").toLowerCase().replace(/\s+/g, "-");
      return (
        <h3 id={id} className="text-2xl font-bold mb-4 mt-8 text-white">
          {children}
        </h3>
      );
    },
    h4: ({ children }) => {
      const id = children.join("").toLowerCase().replace(/\s+/g, "-");
      return (
        <h4 id={id} className="text-xl font-semibold mb-3 mt-6 text-white">
          {children}
        </h4>
      );
    },

    // ── Normal paragraph ────────────────────────────────────
    normal: ({ children }) => (
      <p className="mb-6 leading-relaxed text-base text-gray-300">{children}</p>
    ),

    // ── Blockquote ──────────────────────────────────────────
    blockquote: ({ children }) => (
      <blockquote className="border-l-4 border-cyan-500 pl-6 italic text-gray-400 my-6">
        {children}
      </blockquote>
    ),

    // ✅ Text alignment styles
    alignLeft: ({ children }) => (
      <p className="mb-6 leading-relaxed text-base text-gray-300 text-left">
        {children}
      </p>
    ),
    alignCenter: ({ children }) => (
      <p className="mb-6 leading-relaxed text-base text-gray-300 text-center">
        {children}
      </p>
    ),
    alignRight: ({ children }) => (
      <p className="mb-6 leading-relaxed text-base text-gray-300 text-right">
        {children}
      </p>
    ),
    alignJustify: ({ children }) => (
      <p className="mb-6 leading-relaxed text-base text-gray-300 text-justify">
        {children}
      </p>
    ),
  },

  // ── List types ───────────────────────────────────────────
  list: {
    bullet: ({ children }) => (
      <ul className="list-disc pl-8 mb-6 text-gray-300 space-y-2">{children}</ul>
    ),
    number: ({ children }) => (
      <ol className="list-decimal pl-8 mb-6 text-gray-300 space-y-2">{children}</ol>
    ),
  },
  listItem: {
    bullet: ({ children }) => <li className="leading-relaxed">{children}</li>,
    number: ({ children }) => <li className="leading-relaxed">{children}</li>,
  },

  // ── Inline marks ─────────────────────────────────────────
  marks: {
    strong: ({ children }) => (
      <strong className="font-bold text-white">{children}</strong>
    ),
    em: ({ children }) => (
      <em className="italic text-gray-300">{children}</em>
    ),
    code: ({ children }) => (
      <code className="bg-gray-800 text-cyan-300 px-2 py-0.5 rounded text-sm font-mono">
        {children}
      </code>
    ),
    link: ({ value, children }) => (
      <a
        href={value?.href}
        target="_blank"
        rel="noopener noreferrer"
        className="text-cyan-400 underline underline-offset-2 hover:text-cyan-300 transition"
      >
        {children}
      </a>
    ),
  },
};