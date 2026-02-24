
import Link from "next/link";

export default function Breadcrumbs({ items }) {
  return (
    <nav className="text-sm mb-6">
      <ol className="flex gap-2 text-gray-500">
        {items.map((item, index) => (
          <li key={index} className="flex items-center gap-2">
            {index !== 0 && <span>/</span>}
            {item.href ? (
              <Link href={item.href} className="hover:text-black">
                {item.label}
              </Link>
            ) : (
              <span className="text-black font-medium">
                {item.label}
              </span>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
}