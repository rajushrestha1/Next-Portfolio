// components/TableOfContents.jsx
export default function TableOfContents({ headings }) {
  return (
    <div className="sticky top-20 p-4 bg-gray-50 rounded-xl border">
      <h3 className="font-bold mb-4 text-blue-700">Contents</h3>
      <ul className="space-y-2">
        {headings.map((heading) => (
          <li
            key={heading.id}
            className={`ml-${heading.style === "h2" ? "4" : heading.style === "h3" ? "8" : "0"}`}
          >
            <a href={`#${heading.id}`} className="text-blue-600 hover:underline">
              {heading.text}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}