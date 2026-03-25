import { Member } from "@/common/sanityLoader";
import Link from "next/link";
import { FaLinkedin, FaEnvelope  } from "react-icons/fa";
import './style.css'

export default function ContactPage({ 
    member
} : {
    member: Member
})   {
    return (
        <div className="contact-tmp">
        {member.linkedin && <Link href={member.linkedin} target="_blank" rel="noopener noreferrer"><div className="contact-item"><FaLinkedin className="icon"/>{member.linkedin}</div></Link>}
        {member.mail && <Link href={`mailto:${member.mail}`}><div className="contact-item"><FaEnvelope className="icon"/>{member.mail}</div></Link>}
        </div>
    );
}