import MemberCard from "@/components/MemberCard";
import LoadText from "@/api/sanity/information";
import LoadMembers from "@/api/sanity/members";
import Image from "next/image";

export default async function Home() {
  const text = await LoadText("19692804-94c1-4f11-aeae-9a0f2536d356");
  const members = await LoadMembers();
  console.log("Members data:", members);
  return (
    <div>
      <header className="header-tmp">
        <Image
          src="/logo_gif.svg"
          alt="logo"
          width={600}
          height={150}
          priority
        />
      </header>

      <section className="info-tmp">{text}</section>

      <section className="members-tmp">
        {members.map((m) => (
          <MemberCard key={m._id} member={m} />
        ))}
      </section>
      <section
        className="debug"
        style={{ margin: "50px", padding: "20px", border: "1px solid #ccc" }}
      >
        <h2>Debug Information</h2>
        <pre style={{ whiteSpace: "pre-wrap" }}>
          {JSON.stringify(members, null, 2)}
        </pre>
      </section>
    </div>
  );
}
