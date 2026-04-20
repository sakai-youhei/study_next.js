"use client";

import React from 'react'
import Box from './Box';

type PropsType = {
  children: React.ReactNode
}

const ClientBoundary = ({ children }: PropsType) => {
  const[isVisible, setIsVisible] = React.useState(false)
  const toggleVisible = () => {
    setIsVisible((prevIsVisible) => !prevIsVisible)
  }
  return (
    <Box>
      <h2>Client Boundary</h2>
      <button onClick={toggleVisible}>{isVisible ? "非表示にする" : "表示する"}</button>
      {isVisible && children}
    </Box>
  )
}

export default ClientBoundary


