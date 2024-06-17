import { notFound } from 'next/navigation'
import { db } from '@/db'
import Link from 'next/link'

interface SnippetPageProps {
  params: {
    id: string
  }
}

export default async function SnippetPage ({ params }: SnippetPageProps) {
  const snippet = await db.snippet.findUnique({
    where: {
      id: Number(params.id)
    }
  })

  if (!snippet) {
    return notFound()
  }

  return (
    <div className='border rounded p-2 m-2'>
      <div className='flex m-4 justify-between items-center'>
        <h1 className='text-xl font-bold'>
          {snippet.title}
        </h1>
        <div className='flex gap-2'>
          <Link href={`/snippets/${snippet.id}/edit`} className='p-2 border rounded'>
            Edit
          </Link>
          <button className='p-2 border rounded'>Delete</button>
        </div>
      </div>
      <pre className='p-3 border rounded bg-gray-200 border-gray-200'>
        <code>
          {snippet.code}
        </code>
      </pre>
    </div>
  )
}
