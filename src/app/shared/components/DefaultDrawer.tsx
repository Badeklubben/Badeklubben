'use client';

import Link from 'next/link';

export default function DefaultDrawer() {
    return (
        <nav className="p-2">
            <Link href="/" className="text-sm hover:underline">
                ← Tilbake til Badeklubben
            </Link>
        </nav>
    );
}
