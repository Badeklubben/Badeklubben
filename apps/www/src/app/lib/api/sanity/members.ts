import { client } from "./client";
import type { Members } from "../../../../../sanity.types.ts";

export async function LoadMembers(): Promise<Members[]> {
  return await client.fetch(`
    *[_type == "members"] {
      _id,
      _type,
      _createdAt,
      _updatedAt,
      _rev,
      name,
      id,
      role,
      about,
      "imageSrc": imageURL.asset->url,
      cv,
      linkedin,
      mail,
      color
    }
  `);
}

export async function LoadMember(id: string): Promise<Members | null> {
  return await client.fetch(
    `
    *[_type == "members" && id == $id][0] {
      _id,
      _type,
      _createdAt,
      _updatedAt,
      _rev,
      name,
      id,
      role,
      about,
      "imageSrc": imageURL.asset->url,
      cv,
      linkedin,
      mail,
      color
    }
  `,
    { id },
  );
}

export default LoadMembers;
