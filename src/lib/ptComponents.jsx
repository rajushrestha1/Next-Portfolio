// lib/ptComponents.js
import { urlFor } from "@/sanity/lib/image";

export const ptComponents = {
  types: {
    code: ({ value }) => (
      <pre className="bg-gray-900 text-gray-100 p-6 rounded-md overflow-x-auto my-6">
        <code className={`language-${value.language || "text"}`}>{value.code}</code>
      </pre>
    ),
    image: ({ value }) => (
      <img
        src={urlFor(value).width(800).url()}
        alt={value.alt || "Blog Image"}
        className="my-6 rounded-xl"
      />
    ),
  },
  block: {
    normal: ({ children }) => <p className="mb-6 leading-relaxed">{children}</p>,
    h1: ({ children }) => {
      const id = children.join("").toLowerCase().replace(/\s+/g, "-");
      return <h1 id={id} className="text-3xl font-bold mb-6">{children}</h1>;
    },
    h2: ({ children }) => {
      const id = children.join("").toLowerCase().replace(/\s+/g, "-");
      return <h2 id={id} className="text-2xl font-semibold mb-5">{children}</h2>;
    },
    h3: ({ children }) => {
      const id = children.join("").toLowerCase().replace(/\s+/g, "-");
      return <h3 id={id} className="text-xl font-semibold mb-4">{children}</h3>;
    },
    blockquote: ({ children }) => (
      <blockquote className="border-l-4 border-gray-400 pl-4 italic mb-6">{children}</blockquote>
    ),
    ul: ({ children }) => <ul className="list-disc pl-8 mb-6">{children}</ul>,
    ol: ({ children }) => <ol className="list-decimal pl-8 mb-6">{children}</ol>,
  },
};