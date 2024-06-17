'use client'

import { Editor } from '@monaco-editor/react'
import type { Snippet } from '@prisma/client'
import { useState } from 'react'

interface SnippetEditFormProps {
  snippet: Snippet
}

const SnippetEditForm = ({ snippet }: SnippetEditFormProps) => {
  const [code, setCode] = useState(snippet.code)

  function handleEditorChange (value: string = '') {
    setCode(value)
  }

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
    </div>
  )
}

export default SnippetEditForm
