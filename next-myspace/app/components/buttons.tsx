'use client'

import { useSession, signIn, signOut } from 'next-auth/react'
import Link from 'next/link'
import Image from 'next/image'

export function SignInButton() {
  const { data: session, status } = useSession()

  if (status === 'loading') return <>...</>

  if (status === 'authenticated')
    return (
      <div className="flex items-center gap-2">
        <Link href={'/dashboard'}>
          <Image
            src={session.user?.image ?? '/mememan.webp'}
            width={32}
            height={32}
            alt={session.user?.name ?? 'Your name'}
          />
        </Link>
        <SignOutButton />
      </div>
    )

  return <button onClick={() => signIn()}>Sign in</button>
}

export function SignOutButton() {
  return <button onClick={() => signOut()}>Sign out</button>
}
