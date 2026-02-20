import Link from 'next/link'

export default function Breadcrumbs({ breadcrumbs }) {
  return (
    <nav className="my-4 inline-block">
      <ol className="flex flex-wrap">
        {breadcrumbs.map(({ label, href }, idx) => (
          <li key={href}>
            <Link href={href}>
              {label}
            </Link>
            {idx < breadcrumbs.length - 1 && <span>/</span>}
          </li>
        ))}
      </ol>
    </nav>
  )
}