'use client'

import { useSession } from 'next-auth/react'

export default function Profile () {
  const session = useSession()

  if (session.data?.user) {
    return (
      <p>{JSON.stringify(session.data.user, null, 2)}</p>
    )
  }

  return (
    <p>Not authenticated</p>
  )
}
