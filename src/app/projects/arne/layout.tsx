import { LoadMember } from '@/common/sanityLoader';
import ProjectShell from '@/app/components/ProjectShell';

export default async function ArneProjectLayout({ children }: { children: React.ReactNode }) {
    const member = await LoadMember('arne');
    return <ProjectShell memberColor={member?.color || 'var(--bk-color-red)'}>{children}</ProjectShell>;
}
