import type { UnsplashAPIReposponse } from '../types'

export const localApi = async ({ query }: { query: string }) => {
  const url = 'http://localhost:5173/images.json'

  try {
    const res = await fetch(url)

    if (!res.ok) throw new Error('Something went wrong.')

    const data = await res.json() as UnsplashAPIReposponse

    return data.results
  } catch (err) {
    console.error(err)
  }

  return []
}
