"use client"
import React from 'react'
import Box from './Box'

const CreateDataWithRouteHandler = () => {
  const [info, setInfo] = React.useState(
    {name: "",
    email: ""}
  )
  const [message, setMessage] = React.useState<string | null>(null)
  const onChangeInfo = (e: React.ChangeEvent<HTMLInputElement>) => {
    const {name, value} = e.target
    setInfo(prev => ({...info, [name]: value}))
  }
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const res = await fetch("/api/sample", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(info)
    }).then(res => res.json()).then(data => setMessage(data.message))
  }
  return (
    <Box>
      <h2>Create Data With Route Handler</h2>
      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
        <div>
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            name="name"
            value={info.name}
            onChange={onChangeInfo}
          />
        </div>
        <div>
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            value={info.email}
            onChange={onChangeInfo}
          />
        </div>
        <button type="submit" className='border'>Create</button>
      </form>
      {message && <p>{message}</p>}
    </Box>
  )
}

export default CreateDataWithRouteHandler
