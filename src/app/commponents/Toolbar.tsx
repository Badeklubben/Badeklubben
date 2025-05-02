// app/components/Toolbar.tsx
'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'

export default function Toolbar({ slug, has_projects }: { slug: string, has_projects: boolean }) {
  const pathname = usePathname()

  const links = [
    { href: `/${slug}`, label: 'About', hidden: false },
    { href: `/${slug}/projects`, label: 'Projects', hidden: !has_projects },
    { href: `/`, label: 'Return', hidden: false },
  ]

  return (
    <nav className="bg-white border-b border-gray-200 shadow-sm px-6 py-3 sticky top-0 z-50">
      <ul className="flex space-x-6 items-center">
        {links.map(link => {
          if (link.hidden) return null
          const isActive = pathname === link.href

          return (
            <li key={link.href}>
              <Link href={link.href}>
                <span
                  className={
                    'text-sm font-medium hover:text-blue-600 transition-colors ' +
                    (isActive ? 'text-red-600' : 'text-gray-800')
                  }
                >
                  {link.label}
                </span>
              </Link>
            </li>
          )
        })}
      </ul>
    </nav>
  )
}
