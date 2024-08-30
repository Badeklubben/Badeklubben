"use client"

import { Member, Project } from "@/common/sanityLoader";
import { capitalize } from "@/common/tools";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import './style.css';
import { RiLockPasswordFill } from "react-icons/ri";


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
        <div className="project-tmp">

        { loadedProjects.map(my_path => {

            return <div key={member.id + my_path} className="project-card" style={{backgroundColor: member.color || 'var(--bk-color-red)'}}>
                <Link href={'/projects/' + member.id + '/' + my_path}>
                    <div className="project-card-landscape">
                    {(projects && projects[my_path]?.icon) ? <img className="project-card-icon" src={`data:image/svg+xml,${encodeURIComponent(projects[my_path]?.icon)}`}></img> : <RiLockPasswordFill className="project-card-icon"/>}
                    </div>
                    <div className="project-card-body">
                    <div className="project-info">
                        <div className="project-name">{projects && projects[my_path]?.name || capitalize(my_path)}</div>
                    </div>
                    <div className="project-card-body-text">{projects ? projects[my_path]?.description : ""}</div>
                    </div>
                </Link>
            </div>

        })}
        </div>

    );
}