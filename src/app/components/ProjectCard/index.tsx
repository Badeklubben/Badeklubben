import Link from 'next/link';
import { RiLockPasswordFill } from 'react-icons/ri';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';
import { Project, CATEGORIES } from '@/types';
import Badge from '@/app/components/Badge';

export default function ProjectCard({
    project,
    href,
    color,
    projectId,
    showOwner,
}: {
    project: Project | null;
    href: string;
    color: string;
    projectId: string;
    showOwner?: boolean;
}) {
    const name = project?.name || projectId;
    const icon = project?.icon;

    return (
        <div className="relative flex flex-col w-full rounded-[30px] overflow-hidden shadow-[0px_5px_5px_rgba(0,0,0,0.3)] transition-transform duration-200 hover:scale-[1.02]">
            {/* Icon area — clickable to project */}
            <Link
                href={href}
                className="flex h-28 w-full items-center justify-center"
                style={{ backgroundColor: color }}
            >
                {icon ? (
                    /* eslint-disable-next-line @next/next/no-img-element */
                    <img
                        alt={name}
                        className="opacity-40 w-16 h-16"
                        src={`data:image/svg+xml,${encodeURIComponent(icon)}`}
                    />
                ) : (
                    <RiLockPasswordFill className="opacity-40 w-16 h-16 text-white" />
                )}
            </Link>

            {/* Info area */}
            <div className="bg-white px-5 py-4 flex flex-col gap-2 flex-1">
                <Link href={href}>
                    <div className="font-bold text-sm hover:underline">{name}</div>
                </Link>

                {showOwner && project?.ownerName && (
                    <div className="text-xs text-gray-400">{project.ownerName}</div>
                )}

                {project?.category && (
                    <span className="text-xs text-gray-500">{CATEGORIES[project.category] ?? project.category}</span>
                )}

                {project?.description && (
                    <div className="font-light text-xs text-gray-600 line-clamp-2">{project.description}</div>
                )}

                {/* Tech stack badges */}
                {project?.techStack && project.techStack.length > 0 && (
                    <div className="flex flex-wrap gap-1 mt-1">
                        {project.techStack.map((tech) => (
                            <Badge key={tech} label={tech} color={color} />
                        ))}
                    </div>
                )}

                {/* External links */}
                {(project?.githubUrl || project?.liveUrl) && (
                    <div className="flex gap-3 mt-auto pt-2 border-t border-gray-100">
                        {project.githubUrl && (
                            <a href={project.githubUrl} target="_blank" rel="noopener noreferrer"
                               className="flex items-center gap-1 text-xs text-gray-500 hover:text-gray-800 transition-colors">
                                <FaGithub className="w-3.5 h-3.5" /> GitHub
                            </a>
                        )}
                        {project.liveUrl && (
                            <a href={project.liveUrl} target="_blank" rel="noopener noreferrer"
                               className="flex items-center gap-1 text-xs text-gray-500 hover:text-gray-800 transition-colors">
                                <FaExternalLinkAlt className="w-3 h-3" /> Live
                            </a>
                        )}
                    </div>
                )}
            </div>
        </div>
    );
}
