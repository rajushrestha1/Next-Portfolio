'use client'

// src/lib/ptComponents.jsx
import { urlFor } from "@/sanity/lib/image";

export const ptComponents = {
  types: {
    code: ({ value }) => (
      <pre
        suppressHydrationWarning
        className="bg-gray-50 text-black border border-gray-200 p-6 rounded-md overflow-x-auto my-6 font-mono text-sm"
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
        <h1 id={id} className="text-4xl font-bold mb-6 mt-12 text-black font-serif">
          {children}
        </h1>
      );
    },
    h2: ({ children }) => {
      const id = children.join("").toLowerCase().replace(/\s+/g, "-");
      return (
        <h2 id={id} className="text-3xl font-bold mb-5 mt-10 text-black font-serif">
          {children}
        </h2>
      );
    },
    h3: ({ children }) => {
      const id = children.join("").toLowerCase().replace(/\s+/g, "-");
      return (
        <h3 id={id} className="text-2xl font-bold mb-4 mt-8 text-black font-serif">
          {children}
        </h3>
      );
    },
    h4: ({ children }) => {
      const id = children.join("").toLowerCase().replace(/\s+/g, "-");
      return (
        <h4 id={id} className="text-xl font-semibold mb-3 mt-6 text-black font-serif">
          {children}
        </h4>
      );
    },

    // ── Normal paragraph ────────────────────────────────────
    normal: ({ children }) => (
      <p className="mb-6 leading-relaxed text-lg text-black font-serif">{children}</p>
    ),

    // ── Blockquote → "Quick answer" style callout box ───────
    blockquote: ({ children }) => (
      <blockquote className="bg-gray-50 border border-gray-200 rounded-lg pl-6 pr-6 py-5 my-8 text-black font-serif not-italic">
        {children}
      </blockquote>
    ),

    // ✅ Text alignment styles
    alignLeft: ({ children }) => (
      <p className="mb-6 leading-relaxed text-lg text-black font-serif text-left">
        {children}
      </p>
    ),
    alignCenter: ({ children }) => (
      <p className="mb-6 leading-relaxed text-lg text-black font-serif text-center">
        {children}
      </p>
    ),
    alignRight: ({ children }) => (
      <p className="mb-6 leading-relaxed text-lg text-black font-serif text-right">
        {children}
      </p>
    ),
    alignJustify: ({ children }) => (
      <p className="mb-6 leading-relaxed text-lg text-black font-serif text-justify">
        {children}
      </p>
    ),
  },

  // ── List types ───────────────────────────────────────────
  list: {
    bullet: ({ children }) => (
      <ul className="list-disc pl-8 mb-6 text-black font-serif text-lg space-y-2">{children}</ul>
    ),
    number: ({ children }) => (
      <ol className="list-decimal pl-8 mb-6 text-black font-serif text-lg space-y-2">{children}</ol>
    ),
  },
  listItem: {
    bullet: ({ children }) => <li className="leading-relaxed">{children}</li>,
    number: ({ children }) => <li className="leading-relaxed">{children}</li>,
  },

  // ── Inline marks ─────────────────────────────────────────
  marks: {
    strong: ({ children }) => (
      <strong className="font-bold text-black">{children}</strong>
    ),
    em: ({ children }) => (
      <em className="italic text-black">{children}</em>
    ),
    code: ({ children }) => (
      <code className="bg-gray-100 text-black px-2 py-0.5 rounded text-sm font-mono">
        {children}
      </code>
    ),
    link: ({ value, children }) => (
      <a
        href={value && value.href}
        target="_blank"
        rel="noopener noreferrer"
        className="text-black underline underline-offset-2 hover:text-gray-700 transition"
      >
        {children}
      </a>
    ),
  },
};