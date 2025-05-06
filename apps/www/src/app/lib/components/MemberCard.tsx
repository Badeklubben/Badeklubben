"use client";
import Image from "next/image";
import Link from "next/link";
import { RiLockPasswordFill } from "react-icons/ri";
import { Member } from "@/types/member";

export default function MemberCard({ member }: { member: Member }) {
  return (
    <div
      className="relative flex flex-col w-[370px] h-[460px] rounded-[30px] overflow-hidden shadow-md"
      style={{ backgroundColor: member.color?.value || "var(--bk-color-red)" }}
    >
      <Link href={`/${member.id}`} className="block w-full h-full">
        {/* Top: Icon area */}
        <div className="flex items-center justify-center w-full h-1/2">
          {member.icon ? (
            <Image
              alt={`${member.name} icon`}
              src={`data:image/svg+xml,${encodeURIComponent(member.icon)}`}
              className="opacity-40 w-1/2 h-1/2"
              width={100}
              height={100}
              unoptimized={true}
            />
          ) : (
            <RiLockPasswordFill className="opacity-40 w-1/2 h-1/2" />
          )}
        </div>

        {/* Bottom: Body content */}
        <div className="bg-white h-1/2 pt-6">
          <div className="flex flex-col ml-[35%] overflow-hidden px-4">
            <div className="font-bold text-base">{member.name}</div>
            <div className="text-sm text-gray-600 truncate">{member.role}</div>
          </div>
          <div className="text-sm font-light text-gray-700 p-5 pt-3">
            {member.about}
          </div>
        </div>

        {/* Floating image */}
        <div className="absolute top-0 left-0 flex items-center h-full pl-[5%]">
          <div className="w-1/4 aspect-square rounded-full overflow-hidden outline outline-[5px] outline-white">
            <Image
              src={member.imageUrl}
              alt={member.name}
              width={300}
              height={300}
              className="object-cover"
            />
          </div>
        </div>
      </Link>
    </div>
  );
}
