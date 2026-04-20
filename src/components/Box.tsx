import React, {ReactNode} from 'react'

type PropsType = {
  children: ReactNode
}
const Box = ({ children }: PropsType) => {
  return (
    <div className='p-5 m-5 border-2 border-gray-300 rounded-md flex flex-col items-center justify-center gap-2'>
      {children}
    </div>
  )
}

export default Box
