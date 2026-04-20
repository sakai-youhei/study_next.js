"use client"

import React from 'react'
import { usePathname, useRouter } from 'next/navigation'
import Box from './Box'

const NavigationHooks = () => {
  const router = useRouter()
  const pathname = usePathname()
  const pushStaticRendering = () => {
    router.push('/static-rendering')
  }

  const replaceStaticRendering = () => {
    router.replace('/static-rendering')
  }

  const refresh = () => {
    router.refresh()
  }

  return (
    <Box>
      <h2>Navigation Hooks</h2>
      <button onClick={pushStaticRendering} className={pathname === "/static-rendering" ? "underline" : ""}>
        Push Static Rendering
      </button>
      <button onClick={replaceStaticRendering}>Replace Static Rendering</button>
      <button onClick={refresh}>Refresh</button>
    </Box>
  )
}

export default NavigationHooks
