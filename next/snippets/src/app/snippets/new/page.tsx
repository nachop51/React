'use client'

import { useFormState } from 'react-dom'
import * as actions from '@/actions'

const CreateSnippet = () => {
  const [formState, action] = useFormState(actions.createSnippet, { message: '' })

  return (
    <form action={action}>
      <h3 className='font-bold m-3'>
        Create a new snippet
      </h3>
      <div className='flex flex-col gap-4'>
        <div className='flex gap-4'>
          <label htmlFor='title' className='w-12'>
            Title
          </label>
          <input type='text' name='title' className='border rounded p-2 w-full' id='title' />
        </div>

        <div className='flex gap-4'>
          <label htmlFor='code' className='w-12'>
            Code
          </label>
          <textarea name='code' id='code' className='border rounded p-2 w-full' />
        </div>

        {formState.message && (
          <div className='text-red-500'>
            {formState.message}
          </div>
        )}

        <button type='submit' className='rounded p-2 bg-blue-200'>
          Create
        </button>
      </div>
    </form>
  )
}

export default CreateSnippet
