'use client';

import { useEffect, useMemo, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Project } from '@/types';
import ProjectCard from '@/app/components/ProjectCard';
import ProjectFilter from '@/app/components/ProjectFilter';
import Footer from '@/app/components/Footer';

type FileSystemProjects = { projects: { [memberId: string]: string[] } };

export default function AllProjectsClient({ sanityProjects }: { sanityProjects: Project[] }) {
    const [fsProjects, setFsProjects] = useState<FileSystemProjects | null>(null);
    const [activeTech, setActiveTech] = useState<Set<string>>(new Set());
    const [activeCategory, setActiveCategory] = useState('');
    const [activeMember, setActiveMember] = useState('');

    useEffect(() => {
        fetch('/projects.json')
            .then((r) => r.json())
            .then((data: FileSystemProjects) => setFsProjects(data))
            .catch(() => {});
    }, []);

    // Build a lookup: projectId -> Sanity project data
    const sanityLookup = useMemo(() => {
        const map: Record<string, Project> = {};
        sanityProjects.forEach((p) => {
            map[`${p.ownerId}/${p.id}`] = p;
        });
        return map;
    }, [sanityProjects]);

    // Build flat list of all projects from filesystem (source of truth for which pages exist)
    const allEntries = useMemo(() => {
        if (!fsProjects) return [];
        const entries: { memberId: string; projectId: string; project: Project | null }[] = [];
        Object.entries(fsProjects.projects).forEach(([memberId, projectIds]) => {
            projectIds.forEach((projectId) => {
                entries.push({
                    memberId,
                    projectId,
                    project: sanityLookup[`${memberId}/${projectId}`] ?? null,
                });
            });
        });
        return entries;
    }, [fsProjects, sanityLookup]);

    // Collect unique filters
    const { allTechStack, allCategories, allMembers } = useMemo(() => {
        const techSet = new Set<string>();
        const catSet = new Set<string>();
        const memberSet = new Set<string>();
        allEntries.forEach(({ memberId, project }) => {
            memberSet.add(memberId);
            project?.techStack?.forEach((t) => techSet.add(t));
            if (project?.category) catSet.add(project.category);
        });
        return {
            allTechStack: [...techSet].sort(),
            allCategories: [...catSet].sort(),
            allMembers: [...memberSet].sort(),
        };
    }, [allEntries]);

    // Apply filters
    const filtered = useMemo(() => {
        return allEntries.filter(({ memberId, project }) => {
            if (activeMember && memberId !== activeMember) return false;
            if (activeCategory && project?.category !== activeCategory) return false;
            if (activeTech.size > 0) {
                if (!project?.techStack) return false;
                const hasAll = [...activeTech].every((t) => project.techStack!.includes(t));
                if (!hasAll) return false;
            }
            return true;
        });
    }, [allEntries, activeMember, activeCategory, activeTech]);

    const handleTechToggle = (tech: string) => {
        setActiveTech((prev) => {
            const next = new Set(prev);
            if (next.has(tech)) next.delete(tech);
            else next.add(tech);
            return next;
        });
    };

    return (
        <div className="min-h-screen flex flex-col">
            {/* Header */}
            <header className="sticky top-0 z-10 bg-white border-b border-gray-200 shadow-sm" style={{ borderTop: '3px solid var(--bk-color-blue)' }}>
                <div className="max-w-6xl mx-auto px-4 flex items-center justify-between h-14">
                    <div className="flex items-center gap-3">
                        <Link href="/">
                            <Image src="/logo.svg" alt="Badeklubben" width={32} height={32} className="h-8 w-auto" />
                        </Link>
                        <span className="font-bold text-lg">Prosjekter</span>
                    </div>
                    <Link href="/" className="text-sm text-gray-500 hover:text-gray-800 transition-colors">
                        ← Hjem
                    </Link>
                </div>
            </header>

            <main className="flex-1 max-w-6xl w-full mx-auto px-4 py-6">
                {/* Member filter */}
                {allMembers.length > 1 && (
                    <div className="flex flex-wrap items-center gap-2 pb-3">
                        <span className="text-xs text-gray-400 uppercase tracking-wide mr-1">Medlem:</span>
                        <button
                            onClick={() => setActiveMember('')}
                            className={`px-3 py-1 rounded-full text-xs font-medium transition-colors border ${
                                activeMember === ''
                                    ? 'bg-gray-800 text-white border-gray-800'
                                    : 'bg-white text-gray-600 border-gray-300 hover:bg-gray-100'
                            }`}
                        >
                            Alle
                        </button>
                        {allMembers.map((m) => (
                            <button
                                key={m}
                                onClick={() => setActiveMember(m === activeMember ? '' : m)}
                                className={`px-3 py-1 rounded-full text-xs font-medium transition-colors border capitalize ${
                                    m === activeMember
                                        ? 'bg-gray-800 text-white border-gray-800'
                                        : 'bg-white text-gray-600 border-gray-300 hover:bg-gray-100'
                                }`}
                            >
                                {m}
                            </button>
                        ))}
                    </div>
                )}

                <ProjectFilter
                    allTechStack={allTechStack}
                    allCategories={allCategories}
                    activeTech={activeTech}
                    activeCategory={activeCategory}
                    onTechToggle={handleTechToggle}
                    onCategoryChange={setActiveCategory}
                />

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-4">
                    {filtered.map(({ memberId, projectId, project }) => (
                        <ProjectCard
                            key={`${memberId}/${projectId}`}
                            project={project}
                            href={`/projects/${memberId}/${projectId}`}
                            color={project?.color || 'var(--bk-color-red)'}
                            projectId={projectId}
                            showOwner
                        />
                    ))}
                </div>

                {filtered.length === 0 && (
                    <p className="text-gray-400 text-sm text-center mt-8">Ingen prosjekter matcher filteret.</p>
                )}
            </main>
            <Footer />
        </div>
    );
}
