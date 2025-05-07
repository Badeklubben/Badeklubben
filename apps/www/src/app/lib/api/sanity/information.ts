import { client } from './client';
import type { Information } from '../../../../../sanity.types.ts';

export async function LoadText(documentId = ''): Promise<string> {
	const query = documentId
		? `*[_type == "information" && _id == $documentId][0].text`
		: `*[_type == "information"][0].text`;

	return await client.fetch(query, { documentId });
}

export default LoadText;
