"use client"

import { loadMember } from "@/common/localDataManager";
import { Member } from "@/common/sanityLoader";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

export default function Meg() {

    const [member,setMember] = useState<Member|null>(null); 
    const path = usePathname();
    const id = path.split('/').at(2)!;

    useEffect(() => {
        const member: Member | null =  loadMember(id);
        member && setMember(member);
    },[])

    return (
        member ? <div>
        <h1>This is the {member.name} page</h1>
        {member?.about}
        <Image src={member.imageSrc} alt={member.name} width={100} height={0}></Image>
        </div> : "Not a valid member"
    );
}