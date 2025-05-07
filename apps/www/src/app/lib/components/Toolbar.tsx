'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Toolbar({ slug, has_projects }: { slug: string; has_projects: boolean }) {
	const pathname = usePathname();

	const links = [
		{ href: `/${slug}`, label: 'About', hidden: false },
		{ href: `/${slug}/projects`, label: 'Projects', hidden: !has_projects },
		{ href: `/`, label: 'Return', hidden: false }
	];

	return (
		<nav className="sticky top-0 z-50 border-b border-gray-200 bg-white px-6 py-3 shadow-sm">
			<ul className="flex items-center space-x-6">
				{links.map((link) => {
					if (link.hidden) return null;
					const isActive = pathname === link.href;

					return (
						<li key={link.href}>
							<Link href={link.href}>
								<span
									className={
										'text-sm font-medium transition-colors hover:text-blue-600 ' +
										(isActive ? 'text-red-600' : 'text-gray-800')
									}
								>
									{link.label}
								</span>
							</Link>
						</li>
					);
				})}
			</ul>
		</nav>
	);
}
