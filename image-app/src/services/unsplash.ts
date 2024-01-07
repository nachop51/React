import { UnsplashAPI } from '../constants'
import type { UnsplashAPIReposponse } from '../types'

export const unsplashApi = async ({ query }: { query: string }) => {
  const url = UnsplashAPI + '/search/photos?' + new URLSearchParams({
    query,
    orientation: 'landscape'
  }).toString()

  try {
    const res = await fetch(url, {
      headers: {
        Authorization: 'Client-ID' + ' ' + 'G4HBkfaZWGoOyZjQezKy89u_D35bcwWeLxXCvEK5nuw'
      }
    })

    if (!res.ok) throw new Error('Something went wrong.')

    const data = await res.json() as UnsplashAPIReposponse

    return data.results
  } catch (err) {
    console.error(err)
  }

  return []
}
