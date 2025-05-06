// components/MemberCard.tsx
"use client";
import Link from "next/link";
import { RiLockPasswordFill } from "react-icons/ri";
import { Member } from "@/types/member";

export default function MemberCard({ member }: { member: Member }) {
  const bgColor = member.color?.value || "var(--bk-color-blue)";
  const iconSvg =
    typeof member.icon === "string" ? member.icon : member.icon?.svg || null;

  return (
    <div
      className="
        relative flex flex-col
        w-[370px] h-[460px]
        rounded-[30px] overflow-hidden
        shadow-[0_5px_5px_rgba(0,0,0,0.3)]
      "
    >
      {/* Top half */}
      <div
        className="flex h-1/2 w-full items-center justify-center"
        style={{ backgroundColor: bgColor }}
      >
        {iconSvg ? (
          <div
            className="opacity-40 w-1/2 h-1/2"
            dangerouslySetInnerHTML={{
              __html: iconSvg
                .replace(/width="[^"]*"/, 'width="100%"')
                .replace(/height="[^"]*"/, 'height="100%"')
                .replace(
                  /style="[^"]*"/,
                  'style="width:100%;height:100%;opacity:0.4"',
                ),
            }}
          />
        ) : (
          <RiLockPasswordFill className="opacity-40 w-1/2 h-1/2" />
        )}
      </div>

      {/* Bottom half */}
      <div className="bg-white h-1/2">
        <div className="flex flex-col ml-[35%] overflow-visible">
          <Link href={`/${member.id}`} className="block font-bold">
            {member.name}
          </Link>
          <p className="text-sm text-gray-600 truncate">{member.role}</p>
        </div>
        <p className="p-5 font-light text-sm text-gray-700">{member.about}</p>
      </div>

      {/* Floating avatar */}
      <div className="absolute top-0 left-0 flex w-full h-full items-center justify-start pl-[5%]">
        <div className="w-[25%] aspect-square rounded-full ring-4 ring-white">
          <div className="w-full h-full rounded-full overflow-hidden">
            <img
              src={member.imageSrc}
              alt={member.name}
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
