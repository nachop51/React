import { useEffect } from 'react'

interface useSEOProps {
  title: string
  description?: string
}

const useSEO = ({ title, description }: useSEOProps) => {
  useEffect(() => {
    document.title = title

    if (description == null) return

    const metaDescription = document.querySelector('meta[name="description"]')

    if (metaDescription != null) {
      metaDescription.setAttribute('content', description)
    } else {
      const meta = document.createElement('meta')
      meta.setAttribute('name', 'description')
      meta.setAttribute('content', title)
      document.head.appendChild(meta)
    }
  }, [])
}

export default useSEO
