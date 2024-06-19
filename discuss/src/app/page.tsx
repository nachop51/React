import { Button } from '@nextui-org/react'
import * as actions from '@/actions'
import { auth } from '@/auth'

export default async function Home () {
  const session = await auth()

  return (
    <div>
      {session
        ? (
          <p>{JSON.stringify(session.user, null, 2)}</p>
          )
        : (
          <p>Not authenticated</p>
          )}
      <form action={actions.signIn}>
        <Button variant='faded' type='submit'>Sign In</Button>
      </form>
      <form action={actions.signOut}>
        <Button variant='faded' type='submit'>Sign out</Button>
      </form>
    </div>
  )
}
