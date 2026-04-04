import { SanityDocument } from "@sanity/client";
import { sanityFetch } from "../../sanity/lib/client";
import { urlForImage } from "../../sanity/lib/image";
import { Member, Project } from "@/types";

const MEMBERS_QUERY = `*[_type == "members"]`;

function mapProject(project: SanityDocument): Project {
    return {
        name: project.name,
        id: project.id,
        icon: project.icon?.svg,
        color: project.color?.value,
        description: project.description,
        techStack: project.techStack ?? [],
        category: project.category,
        githubUrl: project.githubUrl,
        liveUrl: project.liveUrl,
        screenshots: project.screenshots?.map((s: any) =>
            s?.asset?._ref ? urlForImage(s) : null
        ).filter(Boolean),
        longDescription: project.longDescription,
    };
}

export default async function LoadMembers(): Promise<Member[]> {
    try {
        const members = await sanityFetch<SanityDocument[]>({ query: MEMBERS_QUERY });
        return members.map((member) => ({
            name: member.name,
            role: member.role,
            icon: member.icon?.svg,
            color: member.color?.value,
            about: member.about,
            cv: member.cv,
            imageSrc: member.imageURL && urlForImage(member.imageURL),
            id: member.id,
            _id: member.id,
            mail: member.mail,
            linkedin: member.linkedin,
        }));
    } catch (e) {
        console.error('Failed to load members from Sanity:', e);
        return [];
    }
}

export async function LoadMember(id: string): Promise<Member | undefined> {
    try {
        const member = (
            await sanityFetch<SanityDocument[]>({
                query: `*[_type == "members" && id == $id]`,
                params: { id },
            })
        ).at(0);

        return member
            ? {
                  name: member.name,
                  role: member.role,
                  icon: member.icon?.svg,
                  color: member.color?.value,
                  about: member.about,
                  cv: member.cv,
                  imageSrc: member.imageURL && urlForImage(member.imageURL),
                  id: member.id,
                  _id: member._id,
                  mail: member.mail,
                  linkedin: member.linkedin,
              }
            : undefined;
    } catch (e) {
        console.error('Failed to load member from Sanity:', e);
        return undefined;
    }
}

export async function LoadProjects(member: Member): Promise<{ [key: string]: Project }> {
    try {
        const projects = await sanityFetch<SanityDocument[]>({
            query: `*[_type == "projects" && owner._ref == $ownerId]`,
            params: { ownerId: member._id },
        });
        return Object.fromEntries(
            projects.map((project) => [project.id || project.name, mapProject(project)])
        );
    } catch (e) {
        console.error('Failed to load projects from Sanity:', e);
        return {};
    }
}

export async function LoadAllProjects(): Promise<Project[]> {
    try {
        const projects = await sanityFetch<SanityDocument[]>({
            query: `*[_type == "projects"]{ ..., "ownerName": owner->name, "ownerId": owner->id }`,
        });
        return projects.map((project) => ({
            ...mapProject(project),
            ownerName: project.ownerName,
            ownerId: project.ownerId,
        }));
    } catch (e) {
        console.error('Failed to load projects from Sanity:', e);
        return [];
    }
}

export async function LoadText(id: string) {
    try {
        return (
            await sanityFetch<SanityDocument[]>({
                query: `*[_id == $id]`,
                params: { id },
            })
        ).at(0);
    } catch (e) {
        console.error('Failed to load text from Sanity:', e);
        return undefined;
    }
}
