"use client"

import Image from 'next/image'

import '@/styles/spin-logo.css'
import { savePaths } from '@/common/localDataManager';
import getSubRoutes from '@/common/routeManager';
import { useEffect } from 'react';

export default function SpinLogo({ 
    size,
} : {
    size : number;
}) {

    useEffect(() => {
        getSubRoutes('member/[slug]').then((routes) => savePaths(routes));      
    },[])

    
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