import Link from 'next/link';
import Image from 'next/image';

export default function NotFound() {
    return (
        <div className="min-h-screen flex flex-col items-center justify-center gap-6 px-4 text-center">
            <Image src="/logo.svg" alt="Badeklubben" width={80} height={80} />
            <h1 className="text-2xl font-bold">Siden ble ikke funnet</h1>
            <p className="text-gray-500 max-w-md">
                Beklager, vi finner ikke siden du leter etter.
            </p>
            <Link
                href="/"
                className="px-5 py-2 rounded-full text-sm font-medium bg-gray-800 text-white hover:bg-gray-700 transition-colors"
            >
                ← Tilbake til forsiden
            </Link>
        </div>
    );
}
