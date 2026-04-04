'use client';

import { Member, Project } from '@/types';
import AboutPage from '../pages/AboutPage';
import ProjectsPage from '../pages/ProjectsPage';
import MemberNav from '@/app/components/MemberNav';
import Footer from '@/app/components/Footer';
import { useState } from 'react';
import ContactPage from '../pages/ContactPage';

export default function MemberPage({
    member,
    projects,
}: {
    member: Member;
    projects: { [key: string]: Project } | null;
}) {
    const [activePage, setActivePage] = useState<string>('Meg');

    return (
        <div className="min-h-screen flex flex-col">
            <MemberNav
                activePage={activePage}
                color={member.color || 'var(--bk-color-red)'}
                setActivePage={setActivePage}
                memberName={member.name}
                hasProjects={!!projects && Object.keys(projects).length > 0}
            />
            <main className="flex-1 max-w-6xl w-full mx-auto px-4 py-6">
                {activePage === 'Meg' && <AboutPage member={member} />}
                {activePage === 'Prosjekt' && <ProjectsPage projects={projects} member={member} />}
                {activePage === 'Kontakt' && <ContactPage member={member} />}
            </main>
            <Footer />
        </div>
    );
}
