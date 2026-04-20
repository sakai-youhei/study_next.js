"use server"

import { updateTag } from "next/cache"
import { redirect } from "next/navigation"

export const refreshTodo = async () => {
  updateTag("todo")
  redirect("/data-cache-1")
}
