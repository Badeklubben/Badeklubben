import { LoadMember } from "@/common/sanityLoader";
import { headers } from "next/headers";
import MemberPage from "./MemberPage";


export default function MemberLayoutPage() {

    const headerList = headers();
    const path = headerList.get("x-current-path");
    const id = path && path.split('/').at(2);
    
    return (
        <div className="member-page">
            {LoadMember(id || "no member").then((member) => 
            <div>
                <title>{member?.name}</title>
                {member && <MemberPage member={member}></MemberPage>}
            </div>)}
 
        </div>
    )
}
