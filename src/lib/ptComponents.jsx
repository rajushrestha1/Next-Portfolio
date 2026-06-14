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
    h2: ({ children }) => {
  const id = children.join("").toLowerCase().replace(/\s+/g, "-");
  return <h2 id={id} className="text-3xl font-bold mb-5 mt-10 text-white">{children}</h2>;
},
h3: ({ children }) => {
  const id = children.join("").toLowerCase().replace(/\s+/g, "-");
  return <h3 id={id} className="text-2xl font-bold mb-4 mt-8 text-white">{children}</h3>;
},
h4: ({ children }) => {
  const id = children.join("").toLowerCase().replace(/\s+/g, "-");
  return <h4 id={id} className="text-xl font-semibold mb-3 mt-6 text-white">{children}</h4>;
},
normal: ({ children }) => <p className="mb-6 leading-relaxed text-base text-gray-300">{children}</p>,
    ul: ({ children }) => <ul className="list-disc pl-8 mb-6">{children}</ul>,
    ol: ({ children }) => <ol className="list-decimal pl-8 mb-6">{children}</ol>,
  },
};