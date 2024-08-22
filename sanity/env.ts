export const apiVersion =
  process.env.SANITY_STUDIO_API_VERSION || '2024-06-06'

//Viss du prøver å oppdatere sanity og får feil, endre 
// NEXT_PUBLIC_   til     SANITY_STUDIO_
// Husk å bytte tilbake!

//SANITY_STUDIO_SANITY_DATASET
export const dataset = assertValue(
  process.env.NEXT_PUBLIC_SANITY_DATASET,
  'Missing environment variable: NEXT_PUBLIC_SANITY_DATASET'
)

//SANITY_STUDIO_PROJECT_ID
export const projectId = assertValue(
  process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  'Missing environment variable: NEXT_PUBLIC_SANITY_PROJECT_ID'
)

export const useCdn = false

function assertValue<T>(v: T | undefined, errorMessage: string): T {
  if (v === undefined) {
    throw new Error(errorMessage)
  }

  return v
}
