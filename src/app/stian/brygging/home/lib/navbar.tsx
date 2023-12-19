"use client";
import { useRouter } from "next/navigation";
import { useAuth } from "../../lib/authentication";
import Link from "next/link";

export default function Navbar() {
    const { logOut } = useAuth();
    const router = useRouter();

    const handleLogout = async () => {
        try {
            await logOut();
            router.push("/stian/brygging");
        } catch (error) {
            console.error(error);
        }
    };

    return (
        <div>
            <ul>
                <li>
                    <Link href="/stian/brygging/home">Home</Link>
                </li>
                <li>About</li>
            </ul>

            <ul>
                <li>
                    <button onClick={handleLogout}>Log out</button>
                </li>
                <li>
                    <Link href="/stian/brygging/home/profile">Profile</Link>
                </li>
            </ul>
        </div>
    );
}
