import Image from 'next/image'
import Link from "next/link";
import { RiLockPasswordFill } from "react-icons/ri";

import '../../styles/member-card.css'
import { IconType } from 'react-icons';

export default function MemberCard({ 
    name,
    image_path,
    role,
    text,
    path
} : {
    name: string;
    image_path: string;
    role: string;
    text: string;
    path: string;
}) {
    return (
        <div className="member-card">
        <Link href={path}>
          <div className="member-card-landscape">
            <RiLockPasswordFill className="member-card-icon"/>
          </div>
          <div className="member-card-body">
            <div className="member-info">
              <div className="member-name">{name}</div>
              <div className="member-role">{role}</div>
            </div>
            <div className="member-card-body-text">{text}</div>
          </div>
          <div className="member-card-img-container">
            <div className="member-card-img">
              <Image src={image_path} alt={name} width={1000} height={0} ></Image>
            </div>
          </div>
        </Link>
      </div>
    )
}