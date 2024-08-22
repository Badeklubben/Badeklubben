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
        {member.linkedin && <Link href={member.linkedin}><FaLinkedin className="icon"/></Link>}
        {member.mail && <Link href={member.mail}><FaEnvelope className="icon"/></Link>}
        </div>
    );
}