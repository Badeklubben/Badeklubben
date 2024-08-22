import ReactMarkdown from 'react-markdown';
import { Member } from "@/common/sanityLoader";
import Image from "next/image";

export default function AboutPage({ 
    member
} : {
    member: Member
})  {
    return (
        <div>
            <Image src={member.imageSrc} alt={member.name} width={100} height={0}></Image>
            {member?.about}
            <ReactMarkdown>{member.cv}</ReactMarkdown>
        </div> 
    );
}
