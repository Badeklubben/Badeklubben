import { LoadMember, LoadProjects, Member } from "@/common/sanityLoader";
import { headers } from "next/headers";
import MemberPage from "./MemberPage";


export default async function MemberLayoutPage() {

    const headerList = headers();
    const path = headerList.get("x-current-path");
    const id = path && path.split('/').at(2);
    
    const member = await LoadMember(id || "no member");
    const projects = member ? await LoadProjects(member) : null;
    
    console.log(projects);
    

    return (
        <div className="member-page">
           <div>
                <title>{member?.name}</title>
                {member && <MemberPage projects={projects} member={member}></MemberPage>}
            </div>
       
 
        </div>
    )
}
