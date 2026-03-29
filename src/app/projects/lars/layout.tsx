import { LoadMember } from '@/common/sanityLoader';
import ProjectShell from '@/app/components/ProjectShell';

export default async function LarsProjectLayout({ children }: { children: React.ReactNode }) {
    const member = await LoadMember('lars');
    return <ProjectShell memberColor={member?.color || 'var(--bk-color-green)'}>{children}</ProjectShell>;
}
