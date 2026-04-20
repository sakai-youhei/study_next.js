import React from 'react'
import prisma from '../../lib/prisma'
import Box from './Box'

const GetDataFromServerComponent = async () => {
  const users = await prisma.user.findMany()

  return (
     <Box>
      <h2>Get Data From Server Component</h2>
      <ul>
        {users.map(user => (
          <li key={user.id}>{user.name}</li>
        ))}
      </ul>
    </Box>
  )
}

export default GetDataFromServerComponent
