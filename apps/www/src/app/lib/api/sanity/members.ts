import { client } from './client';
import { Member } from '@/types/member';

export async function LoadMembers(): Promise<Member[]> {
	const members = await client.fetch(`
    *[_type == "members"] {
      _id,
      _type,
      _createdAt,
      _updatedAt,
      _rev,
      name,
      id,
      role,
      about,
      "imageSrc": imageURL.asset->url,
      "icon": icon.svg,
      cv,
      linkedin,
      mail,
      color
    }
  `);

	// Transform to ensure all required properties exist
	return members.map((m) => ({
		...m,
		imageSrc: m.imageSrc || m.imageURL?.asset?.url || '',
		icon: m.icon || null
	}));
}

export async function LoadMember(id: string): Promise<Member | null> {
	const memberData = await client.fetch(
		`
    *[_type == "members" && id == $id][0] {
      _id,
      _type,
      _createdAt,
      _updatedAt,
      _rev,
      name,
      id,
      role,
      about,
      "imageSrc": imageURL.asset->url,
      cv,
      linkedin,
      mail,
      color
    }
  `,
		{ id }
	);

	if (!memberData) return null;

	return {
		...memberData,
		imageSrc: memberData.imageSrc || memberData.imageUrl || ''
	};
}
export default LoadMembers;
