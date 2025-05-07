// components/MemberCard.tsx
'use client';
import Link from 'next/link';
import { RiLockPasswordFill } from 'react-icons/ri';
import { Member } from '@/types/member';

export default function MemberCard({ member }: { member: Member }) {
	const bgColor = member.color?.value || 'var(--bk-color-blue)';
	let iconSvg = null;
	if (typeof member.icon === 'string') {
		iconSvg = member.icon;
	} else if (member.icon && typeof member.icon === 'object' && 'svg' in member.icon) {
		iconSvg = member.icon.svg;
	}

	return (
		<div className="relative flex h-[460px] w-[370px] flex-col overflow-hidden rounded-[30px] shadow-[0_5px_5px_rgba(0,0,0,0.3)]">
			{/* Top half */}
			<div
				className="flex h-1/2 w-full items-center justify-center"
				style={{ backgroundColor: bgColor }}
			>
				{iconSvg ? (
					<div
						className="h-1/2 w-1/2 opacity-40"
						dangerouslySetInnerHTML={{
							__html: iconSvg
								.replace(/width="[^"]*"/, 'width="100%"')
								.replace(/height="[^"]*"/, 'height="100%"')
								.replace(/style="[^"]*"/, 'style="width:100%;height:100%;opacity:0.4"')
						}}
					/>
				) : (
					<RiLockPasswordFill className="h-1/2 w-1/2 opacity-40" />
				)}
			</div>

			{/* Bottom half */}
			<div className="h-1/2 bg-white">
				<div className="ml-[35%] flex flex-col overflow-visible">
					<Link href={`/${member.id}`} className="block font-bold">
						{member.name}
					</Link>
					<p className="truncate text-sm text-gray-600">{member.role}</p>
				</div>
				<p className="p-5 text-sm font-light text-gray-700">{member.about}</p>
			</div>

			{/* Floating avatar */}
			<div className="absolute left-0 top-0 flex h-full w-full items-center justify-start pl-[5%]">
				<div className="aspect-square w-[25%] rounded-full ring-4 ring-white">
					<div className="h-full w-full overflow-hidden rounded-full">
						<img src={member.imageSrc} alt={member.name} className="h-full w-full object-cover" />
					</div>
				</div>
			</div>
		</div>
	);
}
