'use client';

import { Member, Project } from '@/types';
import { useEffect, useMemo, useState } from 'react';
import ProjectCard from '@/app/components/ProjectCard';
import ProjectFilter from '@/app/components/ProjectFilter';

type ApiResponse = {
    projects: { [key: string]: string[] };
};

export default function ProjectsPage({
    member,
    projects,
}: {
    member: Member;
    projects: { [key: string]: Project } | null;
}) {
    const [loadedProjects, setLoadedProjects] = useState<string[]>([]);
    const [error, setError] = useState<string | null>(null);
    const [activeTech, setActiveTech] = useState<Set<string>>(new Set());
    const [activeCategory, setActiveCategory] = useState('');

    useEffect(() => {
        fetch('/projects.json')
            .then((response) => response.json())
            .then((data: ApiResponse) => setLoadedProjects(data.projects[member.id] ?? []))
            .catch(() => setError('Error fetching projects'));
    }, [member.id]);

    // External projects: in Sanity for this member but not in filesystem
    const externalProjectIds = useMemo(() => {
        if (!projects) return [];
        return Object.entries(projects)
            .filter(([id, p]) => !loadedProjects.includes(id) && p.liveUrl)
            .map(([id]) => id);
    }, [projects, loadedProjects]);

    // All project IDs for filter options (internal + external)
    const { allTechStack, allCategories } = useMemo(() => {
        const techSet = new Set<string>();
        const catSet = new Set<string>();
        if (projects) {
            Object.values(projects).forEach((p) => {
                p.techStack?.forEach((t) => techSet.add(t));
                if (p.category) catSet.add(p.category);
            });
        }
        return { allTechStack: [...techSet].sort(), allCategories: [...catSet].sort() };
    }, [projects]);

    const passesFilter = (projectId: string) => {
        const p = projects?.[projectId];
        if (activeCategory && p?.category !== activeCategory) return false;
        if (activeTech.size > 0 && p?.techStack) {
            const hasAll = [...activeTech].every((t) => p.techStack!.includes(t));
            if (!hasAll) return false;
        }
        if (activeTech.size > 0 && !p?.techStack) return false;
        return true;
    };

    const filteredInternal = useMemo(() => loadedProjects.filter(passesFilter), [loadedProjects, activeCategory, activeTech]);
    const filteredExternal = useMemo(() => externalProjectIds.filter(passesFilter), [externalProjectIds, activeCategory, activeTech]);
    const total = filteredInternal.length + filteredExternal.length;

    const handleTechToggle = (tech: string) => {
        setActiveTech((prev) => {
            const next = new Set(prev);
            if (next.has(tech)) next.delete(tech);
            else next.add(tech);
            return next;
        });
    };

    if (error) return <p className="text-red-500">{error}</p>;
    if (loadedProjects.length === 0 && externalProjectIds.length === 0)
        return <p className="text-gray-400 text-sm">Ingen prosjekter ennå.</p>;

    return (
        <div className="py-6">
            <ProjectFilter
                allTechStack={allTechStack}
                allCategories={allCategories}
                activeTech={activeTech}
                activeCategory={activeCategory}
                onTechToggle={handleTechToggle}
                onCategoryChange={setActiveCategory}
            />
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredInternal.map((projectId) => (
                    <ProjectCard
                        key={projectId}
                        project={projects?.[projectId] ?? null}
                        href={`/projects/${member.id}/${projectId}`}
                        color={projects?.[projectId]?.color || member.color || 'var(--bk-color-red)'}
                        projectId={projectId}
                    />
                ))}
                {filteredExternal.map((projectId) => {
                    const p = projects?.[projectId];
                    return (
                        <ProjectCard
                            key={projectId}
                            project={p ?? null}
                            href={p?.liveUrl ?? '#'}
                            color={p?.color || member.color || 'var(--bk-color-red)'}
                            projectId={projectId}
                            isExternal
                        />
                    );
                })}
            </div>
            {total === 0 && (
                <p className="text-gray-400 text-sm text-center mt-4">Ingen prosjekter matcher filteret.</p>
            )}
        </div>
    );
}
