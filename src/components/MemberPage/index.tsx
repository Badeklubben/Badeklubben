"use client"

import { loadData } from '@/common/localDataManager';
import { Member } from '@/common/sanityLoader';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname  } from 'next/navigation';
import { useEffect, useState } from 'react';
import '../../styles/member-page.css'

export default function MemberPage({ 
    children
} : {
    children: React.ReactNode
}) {
    
    const [page,setPage] = useState<number>(0);
    const [member,setMember] = useState<Member|null>(null); 
    const path = usePathname();

    useEffect(() => {
        const member: Member | null =  loadData(path);
        member && setMember(member);
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
                    <div className={page == 0 ? 'member-page-link active': 'member-page-link'} onClick={() => setPage(0)}>Om meg</div>
                    <div className={page == 1 ? 'member-page-link active': 'member-page-link'} onClick={() => setPage(1)}>Mine prosjekter</div>
                    <div className={page == 2 ? 'member-page-link active': 'member-page-link'} onClick={() => setPage(2)}>Kontakt</div>
                    <Link href="/" className='member-page-link return'>Tilbake</Link>
                </div>
                <div className='member-page-content'>
                    {page == 0 && <div>
                        <div className='member-page-image'>
                        <Image src={member.imageSrc} alt={member.name} width={200} height={0}></Image>
                        </div>
                            {member.about}
                        </div>}
                    {page == 1 && children}
                    {page == 2 && <div>Legg til noko kontakt greier i sanity</div>}
                </div>
            </div>
        </div> : < h1> Member not found... </h1>
    )
}
