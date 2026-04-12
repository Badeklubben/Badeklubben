import LoadMembers, { LoadMember, LoadProjects } from '@/common/sanityLoader';
import MemberPage from './MemberPage';
import { Metadata } from 'next';
import fs from 'fs';
import path from 'path';

export async function generateStaticParams() {
    // Fetch members from Sanity (the source of truth)
    const members = await LoadMembers();
    if (members.length > 0) {
        return members.map((member) => ({ slug: member.id }));
    }
    // Fallback to filesystem if Sanity is unreachable
    const projectsDir = path.join(process.cwd(), 'src/app/projects');
    const dirs = fs.readdirSync(projectsDir).filter((name) =>
        fs.statSync(path.join(projectsDir, name)).isDirectory()
    );
    return dirs.map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
    const { slug } = await params;
    const member = await LoadMember(slug);
    return {
        title: member ? member.name : 'Medlem ikke funnet',
        description: member?.about,
    };
}

export default async function MemberLayoutPage({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params;
    const member = await LoadMember(slug);
    if (!member) {
        return (
            <div className="min-h-screen flex items-center justify-center">
                <p className="text-gray-400">Kunne ikke laste medlemsdata.</p>
            </div>
        );
    }

    const projects = await LoadProjects(member);

    return <MemberPage projects={projects} member={member} />;
}
