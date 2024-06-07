"use client"

import { loadMember } from "@/common/localDataManager";
import getSubRoutes from "@/common/routeManager";
import { capitalize } from "@/common/tools";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

export default function Prosjekt() {
    const path = usePathname();
    const id = path.split('/').at(2)!;
    const [projects,setProjects] = useState<string[]>([]); 

    useEffect(() => {
        setProjects(loadMember(id)!.projects);
    },[])

    return (
        <div>
            {projects.map((prosjekt:string) => <Link key={id + prosjekt} href={'/projects/' + id + '/' + prosjekt}>{capitalize(prosjekt)}</Link>)}
        </div>
    );
}