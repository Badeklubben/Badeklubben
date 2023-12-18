'use client'
import { useRouter } from 'next/navigation';
import { useAuth } from '../../lib/authentication';

export default function Navbar() {
    const { logOut } = useAuth();
    const router = useRouter();

    const handleLogout = async () => {
        try{
            await logOut();
            router.push('/stian/brygging');
        } catch (error) {
            console.error(error);
        }
    }

    return (
        <div>
            <ul>
                <li>
                    Home
                </li>
                <li>
                    About
                </li>
            </ul>

            <ul>
                <li>
                    <button onClick={handleLogout}>Log out</button>
                </li>
            </ul>
        </div>
    );
}