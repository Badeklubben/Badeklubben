import Link from 'next/link';
import Image from 'next/image';

export default function NotFound() {
    return (
        <div className="min-h-screen flex flex-col items-center justify-center gap-6 px-4 text-center">
            <Image src="/logo.svg" alt="Badeklubben" width={80} height={80} />
            <h1 className="text-2xl font-bold text-bk-red">Denne siden har dykket under!</h1>
            <p className="text-gray-500 max-w-md">
                Vi finner dessverre ikke siden du leter etter. Den kan ha svømt avgårde.
            </p>
            <Link
                href="/"
                className="px-6 py-2.5 rounded-full text-sm font-medium bg-bk-blue text-white hover:bg-bk-green transition-colors"
            >
                ← Svøm tilbake til forsiden
            </Link>
        </div>
    );
}
