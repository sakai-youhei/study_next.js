"use server"

import { ERROR_MESSAGE } from "@/constants"
import { redirect } from "next/navigation"
import { revalidatePath } from "next/cache"
import prisma from "../../lib/prisma"
import { cookies } from "next/headers"
import { NextResponse } from "next/server"

export const actionCalledServer = async (formData: FormData) => {
  const nameEntry = formData.get("name") as string
  const emailEntry = formData.get("email") as string
  const name = typeof nameEntry === "string" ? nameEntry : ""
  const email = typeof emailEntry === "string" ? emailEntry : ""

  const errors: (keyof typeof ERROR_MESSAGE)[] = []
  if (name === "") {
    errors.push("empty_name")
  }
  if (email === "") {
    errors.push("empty_email")
  }

  if (errors.length > 0) {
    const params = new URLSearchParams()
    errors.forEach((error) => params.append("errors", error))
    revalidatePath("/call-server-action")
    redirect(`/call-server-action?${params.toString()}`)
  }

  let redirectTo: string
  try {
    await prisma.user.create({
      data: {
        name,
        email,
      },
    })
    redirectTo = "/get-data-from-server-component"
  } catch (error) {
    console.error(error)
    const params = new URLSearchParams()
    params.append("errors", "unexpected_error")
    redirectTo = `/call-server-action?${params.toString()}`
  }
  revalidatePath("/get-data-from-server-component")
  redirectTo = "/get-data-from-server-component"
}
