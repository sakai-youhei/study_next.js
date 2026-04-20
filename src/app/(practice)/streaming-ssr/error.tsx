'use client' // Error boundaries must be Client Components
 
import Box from '@/components/Box'
import { useEffect } from 'react'
 
export default function StreamingSsrError({
  error,
  unstable_retry,
}: {
  error: Error & { digest?: string }
  unstable_retry: () => void
}) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error(error)
  }, [error])
 
  return (
    <Box>
      <span>Streaming SSR Error</span>
      <p>{error.message}</p>
      <button
        onClick={
          // Attempt to recover by re-fetching and re-rendering the segment
          () => unstable_retry()
        }
      >
        Try again
      </button>
    </Box>
  )
}
