import Link from "next/link";
import DefaultNavbar from "@/app/shared/components/DefaultNavbar";

export default function Home() {
  return (
    <div>
      <DefaultNavbar/>
      <h2>Click a name to go to their page</h2>

      
      <Link href="/stian">
        <p>Stian</p>
      </Link>
      <Link href="/lars">
        <p>Lars</p>
      </Link>
      <Link href="/arne">
        <p>Arne</p>
      </Link>
      <Link href="/gard">
        <p>Gard</p>
      </Link>
      <Link href="/oskar">
        <p>Oskar</p>
      </Link>
      <Link href="/osten">
        <p>Osten</p>
      </Link>

    </div>
  );
}