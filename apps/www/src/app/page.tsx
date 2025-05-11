import MemberCard from '@/components/MemberCard';
import LoadText from '@/api/sanity/information';
import LoadMembers from '@/api/sanity/members';
import Image from 'next/image';

export default async function Home() {
	const text = await LoadText('19692804-94c1-4f11-aeae-9a0f2536d356');
	const members = await LoadMembers();

	return (
		<div>
			<header className="header-section flex flex-wrap justify-center">
				<Image src="/logo_gif.svg" alt="logo" width={600} height={150} priority />
			</header>

			<section className="info-section flex flex-wrap justify-center">{text}</section>

			<div className="members-section /* 4rem / 64px */ /* 5rem / 80px on ≥768px */ lg:gap-100 /* 6rem / 96px on ≥1024px */ flex flex-wrap justify-center gap-16 px-4 md:gap-20">
				{members.map((m) => (
					<MemberCard key={m._id} member={m} />
				))}
			</div>
		</div>
	);
}
