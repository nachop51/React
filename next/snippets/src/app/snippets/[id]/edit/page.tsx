import SnippetEditForm from '@/components/snippet-edit-form'
import { db } from '@/db'
import { notFound } from 'next/navigation'
import React from 'react'

interface EditSnippetPageProps {
  params: {
    id: string
  }
}

const EditSnippetPage = async ({ params }: EditSnippetPageProps) => {
  const id = Number(params.id)

  const snippet = await db.snippet.findUnique({
    where: {
      id
    }
  })

  if (!snippet) {
    return notFound()
  }

  return (
    <main>
      <SnippetEditForm snippet={snippet} />
    </main>
  )
}

export default EditSnippetPage
