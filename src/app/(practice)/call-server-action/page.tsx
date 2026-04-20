import React from 'react'
import { ERROR_MESSAGE } from '../../../constants'
import Box from '@/components/Box'
import ActionWithServer from '@/components/ActionWithServer'
import ActionWitheClient from '@/components/ActionWithClient'
import ActionWithActionState from '@/components/ActionWithActionState'
import { refreshTodo } from '@/actions/refresh-todo'

type PropsType = {
  searchParams: Promise<{
    errors: (keyof typeof ERROR_MESSAGE) | (keyof typeof ERROR_MESSAGE)[]
  }>
}

const CallServerAction = ({ searchParams }: PropsType) => {
  return (
    <Box>
      <h1>Call Server Action Page</h1>
      <ActionWithServer searchParams={searchParams} />
      <ActionWitheClient />
      <ActionWithActionState />
      <form action={refreshTodo}>
        <button type="submit">Refresh Todo</button>
      </form>
    </Box>
  )
}

export default CallServerAction
