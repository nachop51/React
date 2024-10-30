'use server'

import { revalidatePath } from 'next/cache'
import { redirect } from 'next/navigation'
import { db } from '@/db'

export async function createSnippet(
  formState: { message: string },
  formData: FormData
) {
  const title = formData.get('title')
  const code = formData.get('code')

  if (typeof title !== 'string' || title.length < 3) {
    return {
      message: 'Title must be at least 3 characters long'
    }
  }

  if (typeof code !== 'string' || code.length < 2) {
    return {
      message: 'Code must be at least 2 characters long'
    }
  }

  try {
    await db.snippet.create({
      data: {
        title,
        code
      }
    })
  } catch (error: any) {
    return {
      message: error?.message
    }
  }

  revalidatePath('/')
  redirect('/')
}

export async function updateSnippet(id: number, code: string) {
  await db.snippet.update({
    where: { id },
    data: { code }
  })

  revalidatePath(`/snippets/${id}`)
  redirect(`/snippets/${id}`)
}

export async function deleteSnippet(id: number) {
  await db.snippet.delete({ where: { id } })

  revalidatePath('/')
  redirect('/')
}
