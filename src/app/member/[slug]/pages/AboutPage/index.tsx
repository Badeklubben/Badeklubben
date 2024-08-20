import { Member } from "@/common/sanityLoader";
import Image from "next/image";

export default async function AboutPage({ 
    member
} : {
    member: Member
})  {
    return (
        <div>
            <h1>This is the {member.name} page</h1>
            {member?.about}
            <Image src={member.imageSrc} alt={member.name} width={100} height={0}></Image>
        </div> 
    );
}