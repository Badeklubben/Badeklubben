import { SanityDocument } from "next-sanity";
import { sanityFetch } from "../../sanity/lib/client";
import { urlForImage } from "../../sanity/lib/image";

const MEMBERS_QUERY = `*[_type == "members"]`;

export type Member = {
    name:string;
    role:string;
    landscapeId:number;
    about:string;
    imageSrc: string;
    id: string;
    projects: string[];
};

export default async function LoadMembers() {
    const members = await sanityFetch<SanityDocument[]>({query: MEMBERS_QUERY});
    return members.map((member) => {
        return {
            name: member.name,
            role:member.role,
            landscapeId:member.landscapeid,
            about:member.about,
            imageSrc: member.imageURL && urlForImage(member.imageURL),
            id: member.id,
            projects: [],
        }
    });

}

export async function LoadText(id: string) {
    return (await sanityFetch<SanityDocument[]>({query: `*[_id == "` + id + `"]`})).at(0);
}