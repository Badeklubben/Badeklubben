import { LoadMember } from '@/common/sanityLoader';
import ProjectShell from '@/app/components/ProjectShell';

export default async function GardProjectLayout({ children }: { children: React.ReactNode }) {
    const member = await LoadMember('gard');
    return <ProjectShell memberColor={member?.color || 'var(--bk-color-blue)'}>{children}</ProjectShell>;
}
