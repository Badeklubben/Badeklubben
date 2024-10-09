import { SanityDocument } from "next-sanity";
import { sanityFetch } from "../../sanity/lib/client";
import { urlForImage } from "../../sanity/lib/image";

const MEMBERS_QUERY = `*[_type == "members"]`;

export type Member = {
    name:string;
    role:string;
    icon: string;
    color: string;
    about:string;
    cv: string;
    imageSrc: string;
    id: string;
    _id: string;
    mail: string;
    linkedin: string;
};

export type Project = {
    name:string;
    icon: string;
    id: string;
    color: string;
    description:string;
};

export default async function LoadMembers() {
    const members = await sanityFetch<SanityDocument[]>({query: MEMBERS_QUERY});
    return members.map((member) => {
        return {
            name: member.name,
            role:member.role,
            icon: member.icon?.svg,
            color: member.color?.value,
            about:member.about,
            cv:member.cv,
            imageSrc: member.imageURL && urlForImage(member.imageURL),
            id: member.id,
            _id: member.id,
            mail: member.mail,
            linkedin: member.linkedin
        }
    });

}

export async function LoadMember(id: string) {
    const member = (await sanityFetch<SanityDocument[]>({query: `*[_type == "members" && id == "` + id + `"]`})).at(0);
    return member ? {
        name: member.name,
        role:member.role,
        icon: member.icon?.svg,
        color: member.color?.value,
        about:member.about,
        cv:member.cv,
        imageSrc: member.imageURL && urlForImage(member.imageURL),
        id: member.id,
        _id: member._id,
        mail: member.mail,
        linkedin: member.linkedin
    } : undefined;
}


export async function LoadProjects(member: Member) {
    const projects = (await sanityFetch<SanityDocument[]>({query: `*[_type == "projects" && owner._ref == "` + member._id + `" ]`}));   
    return Object.fromEntries(projects.map(project => [project.id, {
        name: project.name,
        id: project.id,
        icon: project.icon?.svg,
        color: project.color?.value,
        description: project.description,
    }]))
}


export async function LoadText(id: string) {
    return (await sanityFetch<SanityDocument[]>({query: `*[_id == "` + id + `"]`})).at(0);
}
