import MemberCard from "@/app/commponents/MemberCard";
import LoadMembers, { LoadText } from "@/common/sanityLoader";
import Image from 'next/image'
import { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Velkommen til Badeklubben!',
};

export default async function Home() {
    const infoText = await LoadText("19692804-94c1-4f11-aeae-9a0f2536d356");
    const members = await LoadMembers();

    return (
        <div>
            <div className="header-tmp">
                <Image style={{width:'auto', height:'auto'}} src="/logo_gif.svg" priority width={600} height={0} alt="logo"/>
            </div>
            {infoText?.text && (
                <div className="info-tmp">
                    {infoText.text}
                </div>
            )}
            <div className="members-tmp">
                {members.map(member => <MemberCard key={member.name + "ID"} member={member}></MemberCard>)}
            </div>
        </div>
    );
}
