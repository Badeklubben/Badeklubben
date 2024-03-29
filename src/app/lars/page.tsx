import Link from 'next/link';

import DefaultNavbar from "@/app/shared/components/DefaultNavbar";


export default function Lars() {
    return (
        <div>
            <DefaultNavbar/>
            <div style={{fontSize:'xx-large', marginBottom:10}}>This is the Lars page</div>
            <Link href="/lars/grapher">
                <h1>The Grapher project</h1>
            </Link>
            <Link href="/" style={{color:'orange'}}>
                <h1>Return</h1>
            </Link>
        </div>
    );
}