'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function ProjectShell({
    memberColor,
    children,
}: {
    memberColor: string;
    children: React.ReactNode;
}) {
    const pathname = usePathname();
    // pathname = /projects/arne/echo_color
    const parts = pathname.split('/').filter(Boolean);
    const memberId = parts[1] ?? '';
    const projectId = parts[2] ?? '';

    return (
        <div className="min-h-screen flex flex-col">
            <nav
                className="sticky top-0 z-50 bg-white border-b border-gray-200 shadow-sm"
                style={{ borderTop: `3px solid ${memberColor}` }}
            >
                <div className="max-w-6xl mx-auto px-4 h-12 flex items-center justify-between gap-4">
                    <div className="flex items-center gap-1.5 text-sm text-gray-500 min-w-0">
                        <Link href="/" className="hover:text-gray-800 transition-colors shrink-0">
                            Badeklubben
                        </Link>
                        <span className="text-gray-300">/</span>
                        <Link
                            href={`/member/${memberId}`}
                            className="hover:text-gray-800 transition-colors capitalize shrink-0"
                        >
                            {memberId}
                        </Link>
                        <span className="text-gray-300">/</span>
                        <span className="font-medium truncate" style={{ color: memberColor }}>
                            {projectId}
                        </span>
                    </div>
                    <Link
                        href={`/member/${memberId}`}
                        className="text-xs text-gray-400 hover:text-gray-700 transition-colors shrink-0"
                    >
                        ← Tilbake
                    </Link>
                </div>
            </nav>
            <div className="flex-1">{children}</div>
        </div>
    );
}
