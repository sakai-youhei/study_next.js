"use server"

import { ERROR_MESSAGE } from "@/constants"
import { redirect } from "next/navigation"
import { revalidatePath } from "next/cache"
import prisma from "../../lib/prisma"

export const actionCalledClient = async (name: string, email: string): Promise<{ success: false, errors: (keyof typeof ERROR_MESSAGE)[] } | { success: true }
> => {
  try {
  const errors: (keyof typeof ERROR_MESSAGE)[] = []
   if (name === "") {
     errors.push("empty_name")
   }
   if (email === "") {
     errors.push("empty_email")
   }

   if (errors.length > 0) {
     return { success: false, errors }
   }
   await prisma.user.create({
     data: {
       name,
       email,
     },
   })
   return { success: true }
  } catch (error) {
    console.error(error)
    return { success: false, errors: ["unexpected_error"] }
  }
}
