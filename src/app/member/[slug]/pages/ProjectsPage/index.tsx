"use client"

import { Member } from "@/common/sanityLoader";
import { capitalize } from "@/common/tools";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";


type ApiResponse = {
    projects: string[];
  };

export default function ProjectsPage({ 
    member
} : {
    member: Member
})   {

    const [projects, setProjects] = useState<string[]>([]);
    const [error, setError] = useState<string | null>(null);
  
    useEffect(() => {
        fetch(`/api/fetch_projects?id=${member.id}`)
            .then((response) => response.json())
            .then((data: ApiResponse) => setProjects(data.projects))
            .catch((error) => setError('Error fetching projects'));
    }, []);
  
    if (error) {
      return <p>{error}</p>;
    }

    return (
        projects.map(my_path => {
            return <Link key={member.id + my_path} href={'/projects/' + member.id + '/' + my_path}>{capitalize(my_path)}</Link>
        })
    );
}