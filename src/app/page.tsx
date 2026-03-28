import MemberCard from '@/app/components/MemberCard';
import Footer from '@/app/components/Footer';
import LoadMembers, { LoadText } from '@/common/sanityLoader';
import Image from 'next/image';
import Link from 'next/link';

export default function Home() {
    return (
        <div className="min-h-screen flex flex-col">
            {/* Hero */}
            <header className="relative flex flex-col items-center gap-6 pt-20 pb-14 px-4 text-center overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-bk-blue/[0.07] via-transparent to-bk-green/[0.07]" />
                <Image
                    src="/logo_gif.svg"
                    priority
                    width={320}
                    height={0}
                    alt="Badeklubben logo"
                    className="relative"
                    style={{ width: 'auto', height: 'auto', maxWidth: '320px' }}
                />
                <div className="relative max-w-xl text-gray-600 font-medium text-lg">
                    {LoadText('19692804-94c1-4f11-aeae-9a0f2536d356').then((text) => text?.text)}
                </div>
                <Link
                    href="/projects"
                    className="relative mt-2 px-6 py-2.5 rounded-full text-sm font-medium bg-bk-blue text-white hover:bg-bk-green transition-colors"
                >
                    Se alle prosjekter →
                </Link>
            </header>

            {/* Member grid */}
            <main className="flex-1 px-4 pb-20 pt-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
                    {LoadMembers().then((members) =>
                        members.map((member) => <MemberCard key={member.name + 'ID'} member={member} />)
                    )}
                </div>
            </main>

            <Footer />
        </div>
    );
}
