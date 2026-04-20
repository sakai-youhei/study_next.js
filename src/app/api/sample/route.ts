import prisma from "../../../../lib/prisma"

export async function GET() {
  const users = await prisma.user.findMany()
  return Response.json(users)
}
export async function POST(request: Request) {
  const res = await request.json()
  await prisma.user.create({
    data: {name: res.name, email: res.email}
  })
  return Response.json({ message: "ユーザーを作成しました", status: 201 })
}

