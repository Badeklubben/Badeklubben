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

    // Collect all unique tech stacks and categories from Sanity data
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

    // Filter projects
    const filteredProjects = useMemo(() => {
        return loadedProjects.filter((projectId) => {
            const p = projects?.[projectId];
            if (activeCategory && p?.category !== activeCategory) return false;
            if (activeTech.size > 0 && p?.techStack) {
                const hasAll = [...activeTech].every((t) => p.techStack!.includes(t));
                if (!hasAll) return false;
            }
            if (activeTech.size > 0 && !p?.techStack) return false;
            return true;
        });
    }, [loadedProjects, projects, activeCategory, activeTech]);

    const handleTechToggle = (tech: string) => {
        setActiveTech((prev) => {
            const next = new Set(prev);
            if (next.has(tech)) next.delete(tech);
            else next.add(tech);
            return next;
        });
    };

    if (error) return <p className="text-red-500">{error}</p>;
    if (loadedProjects.length === 0) return <p className="text-gray-400 text-sm">Ingen prosjekter ennå.</p>;

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
                {filteredProjects.map((projectId) => (
                    <ProjectCard
                        key={projectId}
                        project={projects?.[projectId] ?? null}
                        href={`/projects/${member.id}/${projectId}`}
                        color={projects?.[projectId]?.color || member.color || 'var(--bk-color-red)'}
                        projectId={projectId}
                    />
                ))}
            </div>
            {filteredProjects.length === 0 && (
                <p className="text-gray-400 text-sm text-center mt-4">Ingen prosjekter matcher filteret.</p>
            )}
        </div>
    );
}
