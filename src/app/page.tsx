import SpinLogo from "@/app/commponents/SpinLogo";
import MemberCard from "@/app/commponents/MemberCard";
import LoadMembers, { LoadMember, LoadText } from "@/common/sanityLoader";

export default function Home() {
    return (
        <div>
            <title>Velkommen til Badeklubben!</title>

            <div className="header-tmp">
                <SpinLogo size={300}/>
            </div>
            <div className="info-tmp">
                {LoadText("19692804-94c1-4f11-aeae-9a0f2536d356").then((text) => text?.text )}
            </div>
            <div className="members-tmp">
                {LoadMembers().then((members) => members.map(member => <MemberCard key={member.name + "ID"} member={member}></MemberCard>))}
                {LoadMember('stian').then((member) => member?.name)}
            </div>
        </div>
    );
}