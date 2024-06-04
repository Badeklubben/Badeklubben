import Link from "next/link";
import Image from 'next/image'

export default function Home() {
  return (
    <div>
      <title>Velkommen til Badeklubben!</title>

      <div className="header-tmp">
        <div className="spin-logo-container">
          <div className="spin-logo-mask">
            <div className="spin-logo">
              <Image src="logo_b.svg" priority width={1000} height={0} alt="logo"/>
            </div>
          </div>
          <div className="spin-logo-text">
            <Image src="logo_text.svg" priority width={1000} height={0} alt="logo"/>
          </div>
        </div>
      </div>

      <h1>Home Page</h1>
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