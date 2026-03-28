import { LoadMember, LoadProjects } from '@/common/sanityLoader';
import MemberPage from './MemberPage';
import { Metadata } from 'next';
import fs from 'fs';
import path from 'path';

export async function generateStaticParams() {
    const projectsDir = path.join(process.cwd(), 'src/app/projects');
    const members = fs.readdirSync(projectsDir).filter((name) =>
        fs.statSync(path.join(projectsDir, name)).isDirectory()
    );
    return members.map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
    const member = await LoadMember(params.slug);
    return {
        title: member ? member.name : 'Medlem ikke funnet',
        description: member?.about,
    };
}

export default async function MemberLayoutPage({ params }: { params: { slug: string } }) {
    const member = await LoadMember(params.slug);
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
