import MemberCard from '@/components/cards/MemberCard';
import LoadText from '@/api/sanity/information';
import LoadMembers from '@/api/sanity/members';
import Image from 'next/image';

export default async function Home() {
	const text = await LoadText('19692804-94c1-4f11-aeae-9a0f2536d356');
	const members = await LoadMembers();

	return (
		<div>
			<header className="header-tmp">
				<Image src="/logo_gif.svg" alt="logo" width={600} height={150} priority />
			</header>

			<section className="info-tmp">{text}</section>

			<section className="members-tmp">
				{members.map((m) => (
					<MemberCard key={m._id} member={m} />
				))}
			</section>
		</div>
	);
}
