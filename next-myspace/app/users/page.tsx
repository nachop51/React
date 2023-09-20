import UserCard from '@/app/components/UserCard'
import { prisma } from '@/lib/prisma'

export default async function Users() {
  const users = await prisma.user.findMany()

  return (
    <div>
      {users.map((user) => {
        return <UserCard key={user.id} {...user} />
      })}
    </div>
  )
}
