'use client';

import Image from 'next/image';
import Link from 'next/link';
import { RiLockPasswordFill } from 'react-icons/ri';
import { Member } from '@/types';

export default function MemberCard({ member }: { member: Member }) {
    return (
        <Link href={'member/' + member.id} className="block group">
            <div
                className="relative flex flex-col w-full rounded-[30px] overflow-hidden shadow-[0px_5px_5px_rgba(0,0,0,0.3)] transition-transform duration-200 group-hover:scale-[1.02]"
                style={{ backgroundColor: member.color || 'var(--bk-color-red)' }}
            >
                {/* Icon area — top half */}
                <div className="flex h-48 w-full items-center justify-center">
                    {member.icon ? (
                        /* eslint-disable-next-line @next/next/no-img-element */
                        <img
                            alt="icon"
                            className="opacity-40 w-24 h-24"
                            src={`data:image/svg+xml,${encodeURIComponent(member.icon)}`}
                        />
                    ) : (
                        <RiLockPasswordFill className="opacity-40 w-24 h-24" />
                    )}
                </div>

                {/* Info area — bottom */}
                <div className="bg-white pt-8 pb-5 px-5 min-h-[120px]">
                    <div className="ml-[30%]">
                        <div className="font-bold text-base">{member.name}</div>
                        <div className="text-sm text-gray-600">{member.role}</div>
                    </div>
                    <div className="mt-3 font-light text-sm text-gray-700 line-clamp-3">{member.about}</div>
                </div>

                {/* Profile photo — absolute circle overlapping icon/info border */}
                {member.imageSrc && (
                    <div className="absolute left-4 top-[calc(192px-40px)] w-20 h-20 rounded-full overflow-hidden outline outline-4 outline-white shadow-md">
                        <Image src={member.imageSrc} alt={member.name} fill className="object-cover" />
                    </div>
                )}
            </div>
        </Link>
    );
}
