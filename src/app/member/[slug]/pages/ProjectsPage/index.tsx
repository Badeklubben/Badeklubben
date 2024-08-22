"use client"

import { Member, Project } from "@/common/sanityLoader";
import { capitalize } from "@/common/tools";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";


type ApiResponse = {
    projects: {[key: string]: string[] };
  };

export default function ProjectsPage({ 
    member,
    projects,
} : {
    member: Member
    projects: {[key: string]: Project } | null
})   {

    const [loadedProjects, setLoadedProjects] = useState<string[]>([]);
    const [error, setError] = useState<string | null>(null);
  
    useEffect(() => {
        fetch('/projects.json')
          .then((response) => response.json())
          .then((data: ApiResponse) => setLoadedProjects(data.projects[member.id]))
          .catch(() => setError('Error fetching subfolders'));
      }, []);

  
    if (error) {
      return <p>{error}</p>;
    }

    return (
        loadedProjects.map(my_path => {
            return <Link key={member.id + my_path} href={'/projects/' + member.id + '/' + my_path}>
                {capitalize(my_path)}
                {projects && projects[my_path].description}
                </Link>
        })
    );
}