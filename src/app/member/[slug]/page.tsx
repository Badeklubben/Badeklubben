import { LoadMember } from "@/common/sanityLoader";
import { headers } from "next/headers";
import MemberPage from "./MemberPage";


export default async function MemberLayoutPage() {

    const headerList = headers();
    const path = headerList.get("x-current-path");
    const id = path && path.split('/').at(2);
    const member = await LoadMember(id || "no member");

    return (
        <div className="member-page">
            <title>{member?.name}</title>
            {member && <MemberPage member={member}></MemberPage>}
        </div>
    )
}
