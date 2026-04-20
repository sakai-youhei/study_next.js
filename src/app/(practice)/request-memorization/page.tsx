import Box from '@/components/Box'
import ClientDataFetch from '@/components/ClientDataFetch'
import DynamicServerDataFetch from '@/components/DynamicServerDataFetch'
import RequestMemorization from '@/components/RequestMemorization'
import React from 'react'

const RequestMemorizationPage = () => {
  return (
    <Box>
      <h1>Request Memorization Page</h1>
      <DynamicServerDataFetch />
      <RequestMemorization />
      <ClientDataFetch />
    </Box>
  )
}

export default RequestMemorizationPage
