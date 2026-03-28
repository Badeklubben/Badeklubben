import MemberCard from '@/app/components/MemberCard';
import Footer from '@/app/components/Footer';
import LoadMembers, { LoadText } from '@/common/sanityLoader';
import Image from 'next/image';
import Link from 'next/link';

export default function Home() {
    return (
        <div className="min-h-screen flex flex-col">
            {/* Hero */}
            <header className="flex flex-col items-center gap-6 pt-16 pb-10 px-4 text-center">
                <Image
                    src="/logo_gif.svg"
                    priority
                    width={320}
                    height={0}
                    alt="Badeklubben logo"
                    style={{ width: 'auto', height: 'auto', maxWidth: '320px' }}
                />
                <div className="max-w-xl text-gray-700 font-medium text-lg">
                    {LoadText('19692804-94c1-4f11-aeae-9a0f2536d356').then((text) => text?.text)}
                </div>
                <Link
                    href="/projects"
                    className="mt-2 px-5 py-2 rounded-full text-sm font-medium bg-gray-800 text-white hover:bg-gray-700 transition-colors"
                >
                    Se alle prosjekter →
                </Link>
            </header>

            {/* Member grid */}
            <main className="flex-1 px-4 pb-16">
                <h2 className="text-center text-sm uppercase tracking-widest text-gray-400 mb-8">Medlemmer</h2>
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
