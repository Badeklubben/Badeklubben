import Link from "next/link";

export default function Stian() {
    return (
        <div>
        <h1>This is the Stian page</h1>

        <Link href="/stian/lotteri">
            <p>Lotteri</p>
        </Link>

        <Link href="/stian/brygging">
            <p>Brygging</p>
        </Link>

        </div>
    );
}