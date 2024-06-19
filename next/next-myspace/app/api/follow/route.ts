import { NextRequest, NextResponse } from 'next/server'
import { getServerSession } from 'next-auth'
import { prisma } from '@/lib/prisma'
import { authOptions } from '../auth/[...nextauth]/route'

export async function POST(req: Request) {
  const session = await getServerSession(authOptions)
  const currentUser = session?.user?.email!

  const { targetUserId } = await req.json()

  const currentUserId = await prisma.user.findUnique({
    where: { email: currentUser },
  })

  if (!currentUserId) return

  const record = await prisma.follows.create({
    data: {
      followerId: currentUserId.id,
      followingId: targetUserId,
    },
  })

  return NextResponse.json(record)
}

export async function DELETE(req: NextRequest) {
  const session = await getServerSession(authOptions)
  const currentUser = session?.user?.email!
  const targetUserId = req.nextUrl.searchParams.get('targetUserId')

  const currentUserId = await prisma.user.findUnique({
    where: { email: currentUser },
  })

  const record = await prisma.follows.delete({
    where: {
      followerId_followingId: {
        followerId: currentUserId?.id!,
        followingId: targetUserId!,
      },
    },
  })

  return NextResponse.json(record)
}
