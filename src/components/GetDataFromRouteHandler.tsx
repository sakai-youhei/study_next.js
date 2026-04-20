"use client";
import type { User } from '@/generated/prisma/client';
import React, { useEffect } from 'react'
import Box from './Box';
import { useSearchParams } from 'next/navigation';

const GetDataFromRouteHandler = () => {
  const [users, setUsers] = React.useState<User[]>([])
  const searchParams = useSearchParams()
  const q = searchParams.get('q')

  useEffect(() => {
    const fetchUsers = async () => {
      const res = await fetch('/api/sample')
      const data = await res.json()
      setUsers(q === null ? data : data.filter((user: User) => user.name?.includes(q)))
    }
    fetchUsers()
  }, [])
  return (
    <Box>
      <h2>Get Data From Route Handler</h2>
      <ul>
        {users.map(user => (
          <li key={user.id}>{user.name}</li>
        ))}
      </ul>
    </Box>
  )
}

export default GetDataFromRouteHandler

