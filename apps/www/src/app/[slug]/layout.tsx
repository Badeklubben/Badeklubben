import { LoadMember } from "@/api/sanity/members";
import { LoadProjectsByMemberId } from "@/api/sanity/projects";
import { redirect } from "next/navigation";
import { MemberProvider } from "@/context/MemberContext";
import Toolbar from "@/components/Toolbar";
import Footer from "@/components/Footer";
import { Project } from "@/types/project";

type Params = Promise<{ slug: string }>;

export default async function MemberLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Params;
}) {
  const { slug } = await params;
  const member = await LoadMember(slug);
  if (!member) redirect("/");

  const projectsArray = await LoadProjectsByMemberId(member);

  const projects = projectsArray.reduce(
    (acc, project) => {
      acc[project.id] = project;
      return acc;
    },
    {} as Record<string, Project>,
  );

  return (
    <MemberProvider member={member} projects={projects}>
      <Toolbar slug={slug} has_projects={Object.keys(projects).length !== 0} />
      <main className="content">{children}</main>
      <Footer member={member} />
    </MemberProvider>
  );
}
