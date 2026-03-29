import { LoadMember } from '@/common/sanityLoader';
import ProjectShell from '@/app/components/ProjectShell';

export default async function StianProjectLayout({ children }: { children: React.ReactNode }) {
    const member = await LoadMember('stian');
    return <ProjectShell memberColor={member?.color || 'var(--bk-color-orange)'}>{children}</ProjectShell>;
}
