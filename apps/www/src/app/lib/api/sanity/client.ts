import { createClient } from '@sanity/client';

export const SANITY_PROJECT_ID = 'hnv33dlf';
export const SANITY_DATASET = 'production';

export const client = createClient({
	projectId: SANITY_PROJECT_ID,
	dataset: SANITY_DATASET,
	apiVersion: '2025-05-06',
	useCdn: true
});
