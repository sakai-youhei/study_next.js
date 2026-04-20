"use client"

import React from 'react'
import { ERROR_MESSAGE } from '../constants'
import { useRouter } from 'next/navigation'
import Box from './Box'
import { actionCalledClient } from '../actions/action-called-client'

const ActionWithClient = () => {
  const router = useRouter()
  const [info, setInfo] = React.useState(
    {name: "",
    email: ""}
  )
  const [loading, setLoading] = React.useState(false)
  const [errors, setErrors] = React.useState<(keyof typeof ERROR_MESSAGE)[]>([])
  const onChangeInfo = (e: React.ChangeEvent<HTMLInputElement>) => {
    const {name, value} = e.target
    setInfo(({...info, [name]: value}))
  }
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setErrors([])
    setLoading(true)
    const {name, email} = info
    const newErrors: (keyof typeof ERROR_MESSAGE)[] = []
    if (name === "") {
     newErrors.push("empty_name")
   }
   if (email === "") {
     newErrors.push("empty_email")
   }

   if (newErrors.length > 0) {
     setErrors(newErrors)
      setLoading(false)
      return
   }
   const res = await actionCalledClient(name, email)
   setLoading(false)
   if (res.success) {
     router.push("/static-rendering")
   } else {
     setErrors(res.errors)
   }
  }
  return (
     <Box>
      <h2>Action With Cleient</h2>
      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
        <input type="text" name='name' className='border' value={info.name} onChange={onChangeInfo}/>
        <input type="email" name='email' className='border' value={info.email} onChange={onChangeInfo}/>
        {errors.length > 0 && (
          <ul className='text-red-500'>
            {errors.map((error) => (
              <li key={error}>{ERROR_MESSAGE[error]}</li>
            ))}
          </ul>
        )}
        <button type="submit" className='border' disabled={loading}>
          {loading ? "Loading..." : "Create"}
        </button>
      </form>
    </Box>
  )
}

export default ActionWithClient
