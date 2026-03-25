import { LoadMember, LoadProjects } from "@/common/sanityLoader";
import { headers } from "next/headers";
import MemberPage from "./MemberPage";
import { Metadata } from "next";

export async function generateMetadata(): Promise<Metadata> {
    const headerList = headers();
    const path = headerList.get("x-current-path");
    const id = path && path.split('/').at(2);
    const member = await LoadMember(id || "no member");
    return {
        title: member?.name ?? 'Badeklubben',
        description: member?.about,
    };
}

export default async function MemberLayoutPage() {

    const headerList = headers();
    const path = headerList.get("x-current-path");
    const id = path && path.split('/').at(2);

    const member = await LoadMember(id || "no member");
    const projects = member ? await LoadProjects(member) : null;

    return (
        <div className="member-page">
            {member && <MemberPage projects={projects} member={member}></MemberPage>}
        </div>
    )
}
