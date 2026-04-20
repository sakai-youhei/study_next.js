import React from 'react'
import { ERROR_MESSAGE } from '../constants'
import { actionCalledServer } from '../actions/action-called-sever'
import Box from './Box'

type PropsType = {
  searchParams: Promise<{
    errors: (keyof typeof ERROR_MESSAGE) | (keyof typeof ERROR_MESSAGE)[]
  }>
}

const ActionWithServer = async ({ searchParams }: PropsType) => {
  const {errors: queryErrors} = await searchParams
  let errors: (keyof typeof ERROR_MESSAGE)[] = []
  if (typeof queryErrors === "string") {
    errors = [queryErrors]
  }
  if(Array.isArray(queryErrors)) {
    errors = queryErrors
  }
  return (
    <Box>
      <h2>Action With Server</h2>
      <form action={actionCalledServer} className="flex flex-col gap-4">
        <input type="text" name='name' className='border'/>
        <input type="email" name='email' className='border'/>
        {errors.length > 0 && (
          <ul className='text-red-500'>
            {errors.map((error) => (
              <li key={error}>{ERROR_MESSAGE[error]}</li>
            ))}
          </ul>
        )}
        <button type="submit" className='border'>
          Create
        </button>
      </form>
    </Box>
  )
}

export default ActionWithServer
