import Link from 'next/link'
import { db } from '@/db'

export default async function Home() {
  const snippets = await db.snippet.findMany({
    select: {
      id: true,
      title: true
    }
  })

  const renderedSnippets = snippets.map((snippet) => (
    <Link
      key={snippet.id}
      className="border rounded p-2 m-2"
      href={`/snippets/${snippet.id}`}
    >
      {snippet.title}
    </Link>
  ))

  return (
    <div>
      <div className="flex m-2 justify-between items-center">
        <h1 className="text-2xl font-bold">Snippets</h1>
        <Link href="/snippets/new" className="border p-2 rounded">
          Create a new snippet
        </Link>
      </div>

      <div className="flex flex-col gap-2 w-full">{renderedSnippets}</div>
    </div>
  )
}
