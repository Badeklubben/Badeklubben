"use client"

import Image from 'next/image'

import '@/styles/spin-logo.css'
import { savePaths } from '@/common/localDataManager';
import { useEffect } from 'react';

export default function SpinLogo({ 
    size,
} : {
    size : number;
}) {

    useEffect(() => { 
        async function fetchSubRoutes() {
            const response = await fetch(`/api?baseRoute=${'member/[slug]'}`);    
            const data = await response.json();
            savePaths(data)
        }
        fetchSubRoutes();
      },[]);
    


    
    return (
        <div className="spin-logo-container" style={{width:size}}>
            <div className="spin-logo-mask">
                <div className="spin-logo">
                    <Image src="logo_b.svg" priority width={2*size} height={0} alt="logo"/>
                </div>
            </div>
            <div className="spin-logo-text">
                <Image src="logo_text.svg" priority width={2*size} height={0} alt="logo"/>
            </div>
      </div>
    )
}