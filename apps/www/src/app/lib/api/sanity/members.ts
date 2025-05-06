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
      "imageUrl": imageURL.asset->url,
      cv,
      linkedin,
      mail,
      color
    }
  `);
}

export default LoadMembers;
