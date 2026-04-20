import { cookies } from 'next/headers'
import React from 'react'
import Box from './Box'

type PropsType = {
   text: string
}
const DynamicServerComponent = async ({ text }: PropsType) => {
  const cookieStore = await cookies()
  const username = cookieStore.get('username')?.value ?? "名無し"
  return (
    <Box>
      <h2>Dynamic Server Component</h2>
      <p>{text}</p>
      <h2>username: {username}</h2>
    </Box>
  )
}

export default DynamicServerComponent
