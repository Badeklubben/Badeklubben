import Link from 'next/link';

export default function Footer() {
    return (
        <footer className="mt-auto">
            <div className="h-1 bg-gradient-to-r from-bk-red via-bk-yellow to-bk-blue" />
            <div className="py-6 px-4">
            <div className="max-w-5xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-gray-400">
                <span>Badeklubben &copy; {new Date().getFullYear()}</span>
                <div className="flex gap-4">
                    <Link href="/" className="hover:text-gray-600 transition-colors">
                        Hjem
                    </Link>
                    <Link href="/projects" className="hover:text-gray-600 transition-colors">
                        Prosjekter
                    </Link>
                </div>
            </div>
            </div>
        </footer>
    );
}
