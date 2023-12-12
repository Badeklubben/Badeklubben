import Link from "next/link";

export default function Stian() {
    return (
        <div>
        <h1>This is the Stian page</h1>

        <Link href="/stian/lotto">
            <p>Lotto</p>
        </Link>

        </div>
    );
}