import { Member } from "@/common/sanityLoader";
import Link from "next/link";
import { FaLinkedin, FaEnvelope  } from "react-icons/fa";


export default function ContactPage({ 
    member
} : {
    member: Member
})   {
    return (
        <div>
        <h1>Kontakt:</h1>
        <Link href={member.linkedin}><FaLinkedin /></Link>
        <Link href={member.mail}><FaEnvelope /></Link>
        </div>
    );
}