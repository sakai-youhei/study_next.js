"use client"

import { actionCalledClientWithActionState } from '@/actions/action-called-client-with-action-state'
import React, { use, useEffect } from 'react'
import { useRouter } from 'next/navigation'
import Box from './Box'
import { ERROR_MESSAGE } from '@/constants'

const initialState = {
  success: false,
  data: {
    name: "",
    email: "",
  },
  errors: [],
}

const ActionWithActionState = () => {
  const router = useRouter()
  const [state, formAction, isPending] = React.useActionState(
    actionCalledClientWithActionState,
    initialState
  )
  useEffect(() => {
    if (state.success) {
      // 送信成功後の処理
      router.push('/static-rendering')
    }
  }, [state.success, router])

  return (
    <Box>
      <h2>Action With Action State</h2>
      <form action={formAction} className="flex flex-col gap-4">
        <input type="text" name='name' className='border' defaultValue={state.data.name}/>
        <input type="email" name='email' className='border' defaultValue={state.data.email}/>
        {state.errors && state.errors.length > 0 && (
          <ul className='text-red-500'>
            {state.errors.map((error) => (
              <li key={error}>{ERROR_MESSAGE[error]}</li>
            ))}
          </ul>
        )}
        <button type="submit" className='border' disabled={isPending} >
          {isPending ? "Loading..." : "Create"}
        </button>
      </form>
    </Box>
  )
}

export default ActionWithActionState

