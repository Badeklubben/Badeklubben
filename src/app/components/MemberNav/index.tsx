'use client';

import Link from 'next/link';
import { Dispatch, SetStateAction, useState } from 'react';

const TABS = ['Meg', 'Prosjekt', 'Kontakt'];

export default function MemberNav({
    activePage,
    color,
    memberName,
    setActivePage,
}: {
    activePage: string;
    color: string;
    memberName: string;
    setActivePage: Dispatch<SetStateAction<string>>;
}) {
    const [mobileOpen, setMobileOpen] = useState(false);

    return (
        <header className="sticky top-0 z-10 bg-white border-b border-gray-200 shadow-sm">
            <div className="max-w-6xl mx-auto px-4 flex items-center justify-between h-14">
                {/* Logo + member name */}
                <div className="flex items-center gap-3">
                    <Link href="/">
                        {/* eslint-disable-next-line @next/next/no-img-element */}
                        <img src="/logo.svg" alt="Badeklubben" className="h-8 w-auto" />
                    </Link>
                    <span className="font-bold text-lg">{memberName}</span>
                </div>

                {/* Desktop tabs */}
                <nav className="hidden sm:flex items-center gap-1">
                    {TABS.map((tab) => (
                        <button
                            key={tab}
                            onClick={() => setActivePage(tab)}
                            className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                                activePage === tab
                                    ? 'text-white'
                                    : 'text-gray-600 hover:bg-gray-100'
                            }`}
                            style={activePage === tab ? { backgroundColor: color } : undefined}
                        >
                            {tab}
                        </button>
                    ))}
                    <Link
                        href="/"
                        className="ml-2 px-4 py-2 rounded-full text-sm text-gray-500 hover:bg-gray-100 transition-colors"
                    >
                        ← Hjem
                    </Link>
                </nav>

                {/* Mobile hamburger */}
                <button
                    className="sm:hidden p-2 rounded-md text-gray-500 hover:bg-gray-100"
                    onClick={() => setMobileOpen((o) => !o)}
                    aria-label="Toggle navigation"
                >
                    <span className="block w-5 h-0.5 bg-current mb-1" />
                    <span className="block w-5 h-0.5 bg-current mb-1" />
                    <span className="block w-5 h-0.5 bg-current" />
                </button>
            </div>

            {/* Mobile dropdown */}
            {mobileOpen && (
                <div className="sm:hidden border-t border-gray-100 bg-white px-4 pb-3">
                    {TABS.map((tab) => (
                        <button
                            key={tab}
                            onClick={() => {
                                setActivePage(tab);
                                setMobileOpen(false);
                            }}
                            className={`block w-full text-left px-3 py-2 rounded-lg text-sm font-medium mt-1 transition-colors ${
                                activePage === tab ? 'text-white' : 'text-gray-700 hover:bg-gray-100'
                            }`}
                            style={activePage === tab ? { backgroundColor: color } : undefined}
                        >
                            {tab}
                        </button>
                    ))}
                    <Link
                        href="/"
                        className="block w-full text-left px-3 py-2 mt-1 text-sm text-gray-500 hover:bg-gray-100 rounded-lg"
                        onClick={() => setMobileOpen(false)}
                    >
                        ← Hjem
                    </Link>
                </div>
            )}
        </header>
    );
}
