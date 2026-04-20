import Box from '@/components/Box'
import React from 'react'
import { login } from '@/actions/login'

const LoginPage = () => {
  return (
    <Box>
      <h1>Login Page</h1>
      <form action={login}>
        <button type="submit">Login</button>
      </form>
    </Box>
  )
}

export default LoginPage
