import Box from '@/components/Box'
import React from 'react'

type Props = {
  children: React.ReactNode
}

const StreamingSsrLayout = ({ children }: Props) => {
  return (
    <Box>
      <span>Streaming SSR Layout</span>
      {children}
    </Box>
  )
}

export default StreamingSsrLayout
