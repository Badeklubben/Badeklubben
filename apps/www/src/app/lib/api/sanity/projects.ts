import { client } from "./client";
import type { Projects } from "../../../../../sanity.types.ts";

export async function LoadProjects(): Promise<Projects[]> {
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
      icon,
      color
    }
  `);
}

export default LoadProjects;
