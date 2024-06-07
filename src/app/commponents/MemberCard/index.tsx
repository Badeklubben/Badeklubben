"use client"

import Image from 'next/image'
import Link from "next/link";
import { RiLockPasswordFill } from "react-icons/ri";
import { PiCodeBlock,PiGraph } from "react-icons/pi";
import { BsIncognito } from "react-icons/bs";
import { GrDatabase } from "react-icons/gr";

import '@/styles/member-card.css'
import { Member } from '@/common/sanityLoader';
import { useEffect } from 'react';
import { saveMember } from '@/common/localDataManager';
import getSubRoutes from '@/common/routeManager';

export default function MemberCard({ 
    member
} : {
    member: Member
}) {
  

  useEffect(() => { 
    getSubRoutes('projects/' + member.id).then((routes) => {
      console.log(routes);
      
      member.projects = routes;
      saveMember(member) 
    });
  },[]);

  const get_landscape = () => {
    switch (member.landscapeId) {
      case 1:
        return {
          icon: <RiLockPasswordFill className="member-card-icon"/>,
          color: "var(--bk-color-red)"
        }
      case 2:
        return {
          icon: <PiCodeBlock className="member-card-icon"/>,
          color: "var(--bk-color-orange)"
        }
      case 3:
        return {
          icon: <GrDatabase className="member-card-icon"/>,
          color: "var(--bk-color-yellow)"
        }
      case 4:
        return {
          icon: <BsIncognito className="member-card-icon"/>,
          color: "var(--bk-color-blue)"
        }
      default:
        return {
          icon: <PiGraph className="member-card-icon"/>,
          color: "var(--bk-color-green)"
        }
    }
  }
  const landscape = get_landscape();

  return (
      <div className="member-card" style={{backgroundColor: landscape.color}}>
      <Link href={'member/' + member.id}>
        <div className="member-card-landscape">
          {landscape.icon}
        </div>
        <div className="member-card-body">
          <div className="member-info">
            <div className="member-name">{member.name}</div>
            <div className="member-role">{member.role}</div>
          </div>
          <div className="member-card-body-text">{member.about}</div>
        </div>
        <div className="member-card-img-container">
          <div className="member-card-img">
            <Image src={member.imageSrc} alt={member.name} width={1000} height={0} ></Image>
          </div>
        </div>
      </Link>
    </div>
  )
}