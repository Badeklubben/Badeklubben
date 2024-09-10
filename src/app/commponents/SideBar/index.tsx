"use client"

import '@/styles/sidebar.css'
import Link from 'next/link';
import { Dispatch, SetStateAction } from 'react';

export default function SideBar({ 
    pages,
    activePage,
    color,
    setActivePage,
} : {
    pages: string[],
    activePage: string,
    color: string,
    setActivePage: Dispatch<SetStateAction<string>>;
}) {
    

    return (
        <div className='sidebar-page-link'>
            {pages.map((page_name:string) => <div style={{backgroundColor: page_name == activePage ? color : ''}} className={page_name == activePage ? 'sidebar-link active' : 'sidebar-link'} key={'id_' + page_name} onClick={() => setActivePage(() => page_name)}>{page_name}</div>)}
            <div className='sidebar-link return'><Link href={'/'}>Tilbake</Link></div>
        </div>
  )
}