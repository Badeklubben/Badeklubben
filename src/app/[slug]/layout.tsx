export const revalidate = 60;          // 👈 revalidate every 60 s

import { LoadMember, LoadProjects } from "@/common/sanityLoader";
import { redirect } from "next/navigation";
import { MemberProvider } from "@/context/MemberContext";
import Toolbar from "@/app/commponents/Toolbar";
import Footer from '../commponents/Footer';


export default async function MemberLayout({ 
    children,
    params,
} : {
    children: React.ReactNode,
    params: { slug: string }
}) {
    var active = "about";
    const member = await LoadMember(params.slug);
    if (!member) {
        redirect("/"); // ⬅️ Go to home page if member not found
    }
    
    const projects = await LoadProjects(member);

    return (
        <MemberProvider member={member} projects={projects}>
            <Toolbar slug={params.slug} has_projects={Object.keys(projects).length !== 0}/>
            <main className="content">
            {children}
            </main>
            <Footer member={member}/>
        </MemberProvider>
    )
}
