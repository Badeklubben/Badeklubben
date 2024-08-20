'use client'

import { Member } from "@/common/sanityLoader";
import Image from "next/image";
import AboutPage from "../pages/AboutPage";
import ProjectsPage from "../pages/ProjectsPage";
import SideBar from "@/app/commponents/SideBar";
import { useState } from "react";
import ContactPage from "../pages/ContactPage";

export default function MemberPage({ 
    member
} : {
    member: Member
})  {

    const [activePage, setActivePage] = useState<string>('about');
    const pages = ['about','projects','contact'];

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
        <SideBar activePage={activePage} setActivePage={setActivePage} pages={pages}></SideBar>
        </div>
        <div className='member-page-content'>
            {activePage == 'about' && <AboutPage member={member}></AboutPage>}
            {activePage == 'projects' && <ProjectsPage member={member}></ProjectsPage>}
            {activePage == 'contact' && <ContactPage member={member}></ContactPage>}
        </div>
        </div> 
        </div>
    );
}