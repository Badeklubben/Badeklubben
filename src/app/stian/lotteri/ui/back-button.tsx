import { useRouter } from 'next/navigation';
import "./back-button.css"
export default function BackButton() {
    const router = useRouter();
    return (
        <div>
            <button className="back-button" type="button" onClick={() => router.back()}>
                Click here to go back
            </button>
        </div>
    );
}