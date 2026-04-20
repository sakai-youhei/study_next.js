"use server"
import { redirect } from 'next/navigation'
import { cookies } from 'next/headers'

export const login = async () => {
  const cookieStore = await cookies()
  cookieStore.set("token", "abc")
  redirect("/static-rendering")
}
