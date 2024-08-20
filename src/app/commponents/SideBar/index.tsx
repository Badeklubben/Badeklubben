"use client"

import '@/styles/sidebar.css'
import { Dispatch, SetStateAction } from 'react';

export default function SideBar({ 
    pages,
    activePage,
    setActivePage,
} : {
    pages: string[],
    activePage: string,
    setActivePage: Dispatch<SetStateAction<string>>;
}) {
    

    return (
        <div className='sidebar-page-link'>
            {pages.map((page_name:string) => <div className={page_name == activePage ? 'sidebar-link active' : 'sidebar-link'} key={'id_' + page_name} onClick={() => setActivePage(() => page_name)}>{page_name}</div>)}
        </div>
  )
}