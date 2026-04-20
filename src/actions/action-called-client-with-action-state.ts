"use server"

import { ERROR_MESSAGE } from "@/constants"
import { redirect } from "next/navigation"
import { revalidatePath } from "next/cache"
import prisma from "../../lib/prisma"


type State = {
  success: boolean
  data:{name: string, email: string}
  errors?: (keyof typeof ERROR_MESSAGE)[]
}

export const actionCalledClientWithActionState = async (
  _initialState: State,
   formData: FormData
  ): Promise<State> => {
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
      return {
        success: false,
        data: { name, email },
        errors,
      }
    }
    try {
    await prisma.user.create({
      data: {
        name,
        email,
      },
    })
  } catch (error) {
    console.error(error)
    return {
      success: false,
      data: { name, email },
      errors: ["unexpected_error"],
    }
  }
  return {
    success: true,
    data: { name, email },
  }
}
