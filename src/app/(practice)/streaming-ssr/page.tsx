import Box from '@/components/Box'
import DelayServerDataFetch from '@/components/DelayServerDataFetch'
// import React, { Suspense } from 'react'

const StreamingSsrPage = () => {
  // throw new Error('Error in Streaming SSR Page')
  return (
    <Box>
      <h1>Streaming SSR Page</h1>
      {/* <Suspense fallback={<p>Loading...</p>}> */}
        <DelayServerDataFetch />
      {/* </Suspense> */}
    </Box>
  )
}

export default StreamingSsrPage
