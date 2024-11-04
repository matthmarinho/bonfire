"use server"

import { db } from "../_lib/prisma"
import { getServerSession } from "next-auth"
import { authOptions } from "../_lib/auth"

interface UpdateUserParams {
  username: string
  experienceLevel: string
  favoriteSystems: string[]
  gameStyle: string[]
  safety: string[]
  goals: string[]
  logistics: string[]
}

export const updateUser = async (data: UpdateUserParams) => {
  const session = await getServerSession(authOptions)
  if (!session?.user) {
    throw new Error("Usuário não autenticado")
  }
  await db.user.update({
    where: {
      id: session?.user?.id,
    },
    data: data,
  })
}
