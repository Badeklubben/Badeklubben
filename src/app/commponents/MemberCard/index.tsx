"use client"

import Image from 'next/image'
import Link from "next/link";
import { RiLockPasswordFill } from "react-icons/ri";

import '@/styles/member-card.css'
import { Member } from '@/common/sanityLoader';

export default function MemberCard({ 
    member
} : {
    member: Member
}) {

  return (
      <div className="member-card" style={{backgroundColor: member.color || 'var(--bk-color-red)'}}>
      <Link href={'member/' + member.id}>
        <div className="member-card-landscape">
            {member.icon ? <Image fill={true} alt='icon' className="member-card-icon" src={`data:image/svg+xml,${encodeURIComponent(member.icon)}`}></Image> : <RiLockPasswordFill className="member-card-icon"/>}
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