'use client'

interface ErrorPageProps {
  error: Error
  reset: () => void
}

export default function ErrorPage ({ error }: ErrorPageProps) {
  return (
    <div className='border rounded p-2 m-2'>
      <h1 className='text-xl font-bold'>
        Error
      </h1>
      <pre className='p-3 border rounded bg-gray-200 border-gray-200'>
        <code>
          {error.message}
        </code>
      </pre>
    </div>
  )
}
