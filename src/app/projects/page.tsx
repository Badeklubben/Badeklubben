import { LoadAllProjects } from '@/common/sanityLoader';
import AllProjectsClient from './AllProjectsClient';

export const metadata = {
    title: 'Prosjekter',
    description: 'Alle hobby-prosjekter fra Badeklubben',
};

export default async function AllProjectsPage() {
    const sanityProjects = await LoadAllProjects();
    return <AllProjectsClient sanityProjects={sanityProjects} />;
}
