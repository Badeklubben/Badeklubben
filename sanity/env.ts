
// Fallback API version (optional)
export const apiVersion =
  process.env.SANITY_STUDIO_API_VERSION || '2024-06-06'

// Use Sanity Studio-specific env vars (not NEXT_PUBLIC_*)
export const dataset = assertValue(
  process.env.SANITY_STUDIO_SANITY_DATASET,
  'Missing environment variable: SANITY_STUDIO_SANITY_DATASET'
)

export const projectId = assertValue(
  process.env.SANITY_STUDIO_SANITY_PROJECT_ID,
  'Missing environment variable: SANITY_STUDIO_SANITY_PROJECT_ID'
)

export const useCdn = false

function assertValue<T>(v: T | undefined, errorMessage: string): T {
  if (!v) {
    throw new Error(errorMessage)
  }
  return v
}
