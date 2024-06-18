'use client'

import { Editor } from '@monaco-editor/react'
import type { Snippet } from '@prisma/client'
import { useState } from 'react'
import * as actions from '@/actions'

interface SnippetEditFormProps {
  snippet: Snippet
}

const SnippetEditForm = ({ snippet }: SnippetEditFormProps) => {
  const [code, setCode] = useState(snippet.code)

  function handleEditorChange (value: string = '') {
    setCode(value)
  }

  const editSnippetAction = actions.updateSnippet.bind(null, snippet.id, code)

  return (
    <div>
      <Editor
        height='40vh'
        theme='vs-dark'
        language='javascript'
        defaultValue={snippet.code}
        options={{
          minimap: {
            enabled: false
          },
          'semanticHighlighting.enabled': true
        }}
        onChange={handleEditorChange}
      />
      <form action={editSnippetAction}>
        <button type='submit' className='py-2 px-4 m-2 border rounded'>Save</button>
      </form>
    </div>
  )
}

export default SnippetEditForm
