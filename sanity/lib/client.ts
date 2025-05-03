import { createClient, type QueryParams } from 'next-sanity'
import { apiVersion, dataset, projectId, useCdn } from '../env'

// For Edge runtime compatibility, use fetch-based client
export const client = createClient({
  projectId,
  dataset,
  apiVersion,
  useCdn: false, // Must be false for Edge runtime
  perspective: 'published',
  // Disable Node.js-specific features
  stega: false,
  withCredentials: false,
})

export async function sanityFetch<QueryResponse>({
  query,
  params = {},
  tags,
}: {
  query: string;
  params?: QueryParams;
  tags?: string[];
}) {
  // Use the plain fetch for Edge runtime compatibility
  const url = `https://${projectId}.api.sanity.io/v${apiVersion.replace('v', '')}/data/query/${dataset}?query=${encodeURIComponent(query)}`
  
  const headers = {
    'Content-Type': 'application/json',
    'Accept': 'application/json',
  }

  const response = await fetch(url, {
    method: 'POST',
    headers,
    body: JSON.stringify({ params }),
    next: {
      revalidate: process.env.NODE_ENV === 'development' ? 30 : 3600,
      tags,
    },
  })

  if (!response.ok) {
    throw new Error(`Sanity query failed: ${response.statusText}`)
  }

  const data = await response.json()
  return data.result as QueryResponse
}