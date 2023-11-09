const CAT_FACT_URL = 'https://catfact.ninja/fact'

export const fetchFact = async () => {
  try {
    const res = await fetch(CAT_FACT_URL)

    if (!res.ok) throw new Error('Error while fetching from fact API')

    const data = await res.json()

    const { fact } = data

    return fact
  } catch (err) {
    console.error(err)
  }
}
