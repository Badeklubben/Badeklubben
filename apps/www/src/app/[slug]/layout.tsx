import { LoadMember, LoadProjects } from "@/api/sanity/";
import { redirect } from "next/navigation";
import { MemberProvider } from "@/context/MemberContext";
import Toolbar from "@/components/Toolbar";
import Footer from "@/components/Footer";

// The promised params type
type Params = Promise<{ slug: string }>;

export default async function MemberLayout({
  children,
  params, // params is now a *Promise*
}: {
  children: React.ReactNode;
  params: Params;
}) {
  // Destructure after awaiting
  const { slug } = await params;

  const member = await LoadMember(slug);
  if (!member) redirect("/");

  const projects = await LoadProjects(member);

  return (
    <MemberProvider member={member} projects={projects}>
      <Toolbar slug={slug} has_projects={Object.keys(projects).length !== 0} />
      <main className="content">{children}</main>
      <Footer member={member} />
    </MemberProvider>
  );
}
