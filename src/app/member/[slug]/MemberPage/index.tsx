'use client'

import { Member, Project } from "@/common/sanityLoader";
import Image from "next/image";
import AboutPage from "../pages/AboutPage";
import ProjectsPage from "../pages/ProjectsPage";
import SideBar from "@/app/commponents/SideBar";
import { useState } from "react";
import ContactPage from "../pages/ContactPage";
import Link from "next/link";

export default function MemberPage({ 
    member,
    projects
} : {
    member: Member,
    projects: {[key: string]: Project } | null
})  {

    const [activePage, setActivePage] = useState<string>('Meg');
    const pages = ['Meg','Prosjekt','Kontakt'];

    return (
        <div className="member-page">
        <div className='member-page-header'>
        <div className='member-page-icon'>
            <Link href={'/'}><Image src={"/logo.svg"} alt='logo' width={100} height={0}></Image></Link>
        </div>
        <div className='member-page-title'>{member.name}</div>
        </div>
        <div className='member-page-body'>
        <div className='member-page-menu'>
        <SideBar activePage={activePage} color={member.color || 'var(--bk-color-red)'} setActivePage={setActivePage} pages={pages}></SideBar>
        </div>
        <div className='member-page-content'>
            {activePage == 'Meg' && <AboutPage member={member}></AboutPage>}
            {activePage == 'Prosjekt' && <ProjectsPage projects={projects} member={member}></ProjectsPage>}
            {activePage == 'Kontakt' && <ContactPage member={member}></ContactPage>}
        </div>
        </div> 
        </div>
    );
}