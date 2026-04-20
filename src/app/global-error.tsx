'use client'
import Box from "@/components/Box"

 // Error boundaries must be Client Components
 
export default function GlobalError({
  error,
  unstable_retry,
}: {
  error: Error & { digest?: string }
  unstable_retry: () => void
}) {
  return (
    // global-error must include html and body tags
    <html>
      <body>
        <Box>
           <span>Global Error</span>
           <p>{error.message}</p>
           <button onClick={() => unstable_retry()}>Try again</button>
        </Box>
      </body>
    </html>
  )
}
