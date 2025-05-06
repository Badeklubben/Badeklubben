import type { Member, Members } from "@/types/member";
import { Project } from "@/types/project";
import { client } from "./client";

export async function LoadProjectsByMemberId(
  member: Member | Members | string,
): Promise<Project[]> {
  const memberId = typeof member === "string" ? member : member.id;

  return await client.fetch(
    `
    *[_type == "projects" && owner._ref in *[_type=="members" && id==$memberId]._id] {
      _id,
      _type,
      _createdAt,
      _updatedAt,
      _rev,
      name,
      description,
      link,
      "owner": owner->{
        _id,
        name,
        id
      },
      "icon": icon.svg,
      color
    }
  `,
    { memberId },
  );
}

export async function LoadProjects(): Promise<Project[]> {
  return await client.fetch(`
    *[_type == "projects"] {
      _id,
      _type,
      _createdAt,
      _updatedAt,
      _rev,
      name,
      description,
      link,
      "owner": owner->{
        _id,
        name,
        id
      },
      "icon": icon.svg,
      color
    }
  `);
}

export default LoadProjects;
