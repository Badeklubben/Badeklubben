"use client"

import { loadMember, loadPaths } from '@/common/localDataManager';
import { Member } from '@/common/sanityLoader';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname  } from 'next/navigation';
import { useEffect, useState } from 'react';
import '@/styles/member-page.css';
import { capitalize } from '@/common/tools';


export const runtime = 'edge';
export default function MemberLayout({ 
    children
} : {
    children: React.ReactNode
}) {
    
    const [member,setMember] = useState<Member|null>(null); 
    const [paths,setPaths] = useState<string[]|null>([]); 
    const path = usePathname();
    const id = path.split('/').at(2)!;

    useEffect(() => {
        const member: Member | null =  loadMember(id);
        member && setMember(member);
        setPaths(loadPaths());      
    },[])

    return (
        member ? <div className="member-page">
            <title>{member.name}</title>
            <div className='member-page-header'>
                <div className='member-page-icon'>
                    <Image src={"/logo.svg"} alt='logo' width={100} height={0}></Image>
                </div>
                <div className='member-page-title'>{member.name}</div>
            </div>
            <div className='member-page-body'>
                <div className='member-page-menu'>
                    {paths && paths.map((subpath:string) => {
                        const local_path = "/member/" + id + "/" + subpath;
                        return <Link key={id + subpath} href={local_path} className={path==local_path ? 'member-page-link active': 'member-page-link'}>{capitalize(subpath)}</Link>
                    })}
                    <Link href="/" className='member-page-link return'>Tilbake</Link>
                </div>
                <div className='member-page-content'>
                    {children}
                </div>
            </div>
        </div> : < h1> Member not found... </h1>
    )
}
