import { useRouter, usePathname } from "next/navigation";
export default function BackButton() {
    const router = useRouter();
    const pathName = usePathname();

    const goBackOnePage = () => {
        const pathSegments = pathName.split("/").slice(0, -1);
        const newPath = pathSegments.length > 1 ? pathSegments.join("/") : "/";
        console.log(pathSegments.length);
        console.log(newPath);
        router.push(newPath);
    };

    return (
        <div>
            <button onClick={goBackOnePage}>Click here to go back</button>
        </div>
    );
}
