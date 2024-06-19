async function getNote(noteId: string) {
  const response = await fetch(`http://localhost:8090/api/collections/notes/records/${noteId}`,
    {
      next: { revalidate: 10 }
    }
  )
  const data = await response.json()

  console.log(data);


  return data
}

export default async function NotePage({ params }: any) {

  const note = await getNote(params.id)

  return (
    <div>
      <h1>notes/{note.id}</h1>
      <div>
        <h2 className="text-lg font-semibold">{note.title}</h2>
        <p className="text-sm text-gray-500">{note.created}</p>
        <p className="text-sm">{note.content}</p>
      </div>
    </div>
  )
}