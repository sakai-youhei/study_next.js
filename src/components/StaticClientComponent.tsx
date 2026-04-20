"use client"
import React, {useState} from 'react'
import Box from './Box'

type PropsType = {
   text: string
}
const StaticClientComponent =  ({ text }: PropsType) => {
  const [count, setCount] = React.useState(0)
  const onClickCountUp = () => {
    setCount(count + 1)
  }
  return (
    <Box>
      <h2>Static Client Component</h2>
      <p>{text}</p>
      <button onClick={onClickCountUp}>Count Up</button>
      <p>{count}</p>
    </Box>
  )
}

export default StaticClientComponent
