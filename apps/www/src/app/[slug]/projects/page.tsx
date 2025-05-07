'use client';
import Link from 'next/link';
import { RiLockPasswordFill } from 'react-icons/ri';
import { useMemberProject } from '@/context/MemberContext';
import Image from 'next/image';

export const runtime = 'edge';

export default function ProjectsPage() {
	const { member, projects } = useMemberProject();

	return (
		<div className="flex flex-wrap items-center justify-center gap-12 p-12">
			{projects &&
				Object.entries(projects).map(([id, project]) => {
					if (!project.link) return null;

					return (
						<div
							key={member.id + project.name + id}
							className="flex w-[370px] flex-col overflow-hidden rounded-3xl shadow-md"
							style={{
								backgroundColor: project.color || 'var(--bk-color-red)'
							}}
						>
							<Link href={project.link}>
								<div className="flex h-1/2 w-full items-center justify-center py-8">
									{project.icon ? (
										<Image
											className="h-1/2 w-1/2 opacity-40"
											src={`data:image/svg+xml,${encodeURIComponent(project.icon)}`}
											alt={`${project.name} icon`}
											width={100}
											height={100}
											unoptimized={true}
										/>
									) : (
										<RiLockPasswordFill className="h-1/2 w-1/2 opacity-40" />
									)}
								</div>
								<div className="bg-white p-5">
									<div className="mb-1 text-lg font-bold">{project.name || project.link}</div>
									<div className="text-sm text-gray-600">{project.description || ''}</div>
								</div>
							</Link>
						</div>
					);
				})}
		</div>
	);
}
