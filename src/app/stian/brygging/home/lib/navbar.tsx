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
        <div className="navbar">
            <ul>
                <li>
                    <button onClick={() => router.back()}>Back</button>
                </li>
                <li>
                    <button onClick={() => router.push("/stian/brygging/home")}>
                        Home
                    </button>
                </li>
                <li>
                    <button onClick={() => router.push("/stian/brygging/home")}>
                        What
                    </button>
                </li>
            </ul>

            <ul>
                <li>
                    <button onClick={handleLogout}>Log out</button>
                </li>
                <li>
                    <button
                        onClick={() =>
                            router.push("/stian/brygging/home/profile")
                        }
                    >
                        Profile
                    </button>
                </li>
            </ul>
        </div>
    );
}
