import { Member } from "@/common/sanityLoader";
import Image from "next/image";
import AboutPage from "../pages/AboutPage";
import ProjectsPage from "../pages/ProjectsPage";

export default async function MemberPage({ 
    member
} : {
    member: Member
})  {
    return (
        <div>
        <div className='member-page-header'>
        <div className='member-page-icon'>
            <Image src={"/logo.svg"} alt='logo' width={100} height={0}></Image>
        </div>
        <div className='member-page-title'>{member.name}</div>
        </div>
        <div className='member-page-body'>
        <div className='member-page-menu'>

        </div>
        <div className='member-page-content'>
            <AboutPage member={member}></AboutPage>¨
            <ProjectsPage member={member}></ProjectsPage>
        </div>
        </div> 
        </div>
    );
}