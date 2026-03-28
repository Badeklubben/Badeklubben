'use client';

import { CATEGORIES } from '@/types';
import Badge from '@/app/components/Badge';

export default function ProjectFilter({
    allTechStack,
    allCategories,
    activeTech,
    activeCategory,
    onTechToggle,
    onCategoryChange,
}: {
    allTechStack: string[];
    allCategories: string[];
    activeTech: Set<string>;
    activeCategory: string;
    onTechToggle: (tech: string) => void;
    onCategoryChange: (cat: string) => void;
}) {
    if (allTechStack.length === 0 && allCategories.length === 0) return null;

    return (
        <div className="flex flex-col gap-3 pb-4">
            {/* Category filter */}
            {allCategories.length > 0 && (
                <div className="flex flex-wrap items-center gap-2">
                    <span className="text-xs text-gray-400 uppercase tracking-wide mr-1">Kategori:</span>
                    <button
                        onClick={() => onCategoryChange('')}
                        className={`px-3 py-1 rounded-full text-xs font-medium transition-colors border ${
                            activeCategory === ''
                                ? 'bg-gray-800 text-white border-gray-800'
                                : 'bg-white text-gray-600 border-gray-300 hover:bg-gray-100'
                        }`}
                    >
                        Alle
                    </button>
                    {allCategories.map((cat) => (
                        <button
                            key={cat}
                            onClick={() => onCategoryChange(cat === activeCategory ? '' : cat)}
                            className={`px-3 py-1 rounded-full text-xs font-medium transition-colors border ${
                                cat === activeCategory
                                    ? 'bg-gray-800 text-white border-gray-800'
                                    : 'bg-white text-gray-600 border-gray-300 hover:bg-gray-100'
                            }`}
                        >
                            {CATEGORIES[cat] ?? cat}
                        </button>
                    ))}
                </div>
            )}

            {/* Tech stack filter */}
            {allTechStack.length > 0 && (
                <div className="flex flex-wrap items-center gap-2">
                    <span className="text-xs text-gray-400 uppercase tracking-wide mr-1">Tech:</span>
                    {allTechStack.map((tech) => (
                        <button
                            key={tech}
                            onClick={() => onTechToggle(tech)}
                            className={`px-2 py-0.5 rounded-full text-xs font-medium transition-colors border ${
                                activeTech.has(tech)
                                    ? 'bg-gray-800 text-white border-gray-800'
                                    : 'bg-white text-gray-500 border-gray-300 hover:bg-gray-100'
                            }`}
                        >
                            {tech}
                        </button>
                    ))}
                    {activeTech.size > 0 && (
                        <button
                            onClick={() => activeTech.forEach((t) => onTechToggle(t))}
                            className="text-xs text-gray-400 hover:text-gray-600 underline"
                        >
                            Nullstill
                        </button>
                    )}
                </div>
            )}
        </div>
    );
}
