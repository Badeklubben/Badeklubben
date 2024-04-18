import Link from 'next/link';

export default function Lars() {
    return (
        <div>
            <div style={{fontSize:'xx-large', marginBottom:10}}>This is the Lars page</div>
            <Link href="/lars/grapher">
                <h1>The Grapher project</h1>
            </Link>
            <Link href="/lars/latexplot">
                <h1>LaTeX plotter</h1>
            </Link>
            <Link href="/" style={{color:'orange'}}>
                <h1>Return</h1>
            </Link>
        </div>
    );
}