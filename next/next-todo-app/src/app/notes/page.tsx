import Link from "next/link"
import CreateNote from "./CreateNote"

export const dynamic = "auto",
  dynamicParams = true,
  revalidate = 0,
  fetchCache = "auto",
  runtime = "nodejs",
  preferredRegion = "auto"

async function fetchNotes() {

  // const db = new PocketBase("http://localhost:8090")
  // const data = await db.collections.getList("notes")
  // this is another option

  const response = await fetch("http://localhost:8090/api/collections/notes/records?page=1&perPage=30", { cache: "no-cache" })
  const data = await response.json()

  console.log(data)

  return data?.items as any[]
}


export default async function NotesPage() {

  const notes = await fetchNotes()

  return (
    <div>
      <h1>Notes</h1>
      <div className="">
        {notes?.map((note) => {
          return <Note key={note.id} note={note} />
        })}
      </div>
      <CreateNote />
    </div>
  )
}

function Note({ note }: any) {
  const { id, title, content, created } = note || {}

  return (
    <div className="border border-gray-200 rounded-md p-4 mb-4">
      <Link href={`/notes/${id}`}>
        <h2 className="text-lg font-semibold">{title}</h2>
        <p className="text-sm text-gray-500">{created}</p>
        <p className="text-sm">{content}</p>
      </Link>
    </div>
  )
}
