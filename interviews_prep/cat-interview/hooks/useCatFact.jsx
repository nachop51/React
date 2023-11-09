import { useEffect, useState } from 'react'
import { fetchFact } from '../components/services/facts'

const useCatFact = () => {
  const [fact, setFact] = useState(null)

  const getFactAndUpdate = () => {
    fetchFact().then((fact) => setFact(fact))
  }

  useEffect(() => {
    getFactAndUpdate()
  }, [])

  return { fact, getFactAndUpdate }
}

export default useCatFact
