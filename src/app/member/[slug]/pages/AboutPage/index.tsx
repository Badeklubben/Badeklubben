import ReactMarkdown from 'react-markdown';
import { Member } from "@/common/sanityLoader";
import Image from "next/image";
import './style.css';


export default function AboutPage({ 
    member
} : {
    member: Member
})  {
    return (
        <div className='about-container'>
            <Image className='about-image' src={member.imageSrc} alt={member.name} width={100} height={0}></Image>
            <div className='about-text'>{member?.about}</div>
            <ReactMarkdown className='about-md'>{member.cv}</ReactMarkdown>
        </div> 
    );
}
