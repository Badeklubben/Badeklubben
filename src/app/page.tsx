import MemberCard from "@/app/commponents/MemberCard";
import LoadMembers, { LoadText } from "@/common/sanityLoader";
import Image from 'next/image'

export default function Home() {
    return (
        <div>
            <title>Velkommen til Badeklubben!</title>

            <div className="header-tmp">
                <Image style={{width:'auto', height:'auto'}} src="/logo_gif.svg" priority width={600} height={0} alt="logo"/>
            </div>
            <div className="info-tmp">
                {LoadText("19692804-94c1-4f11-aeae-9a0f2536d356").then((text) => text?.text )}
            </div>
            <div className="members-tmp">
                {LoadMembers().then((members) => members.map(member => <MemberCard key={member.name + "ID"} member={member}></MemberCard>))}
            </div>
        </div>
    );
}