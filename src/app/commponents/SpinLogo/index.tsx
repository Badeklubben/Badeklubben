import Image from 'next/image'

import '@/styles/spin-logo.css'

export default function SpinLogo({ 
    size,
} : {
    size : number;
}) {
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