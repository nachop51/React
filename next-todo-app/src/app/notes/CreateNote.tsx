"use client";

import { useRouter } from "next/navigation"
import { useState } from "react"

export default function CreateNote() {

  const [title, setTitle] = useState("")
  const [content, setContent] = useState("")

  const router = useRouter()

  const create = async () => {
    await fetch("http://localhost:8090/api/collections/notes/records", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        title,
        content
      })
    })

    setTitle("")
    setContent("")

    router.refresh()
  }

  return (
    <form onSubmit={create} className="flex flex-col gap-4 text-black max-w-lg">
      <input type="text"
        placeholder="Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <textarea
        placeholder="Content"
        value={content}
        onChange={(e) => setContent(e.target.value)}
      />
      <button type="submit" className="text-white border border-solid border-white">Create note</button>
    </form>
  )
}