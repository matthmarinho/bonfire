"use server"

import { db } from "../_lib/prisma"
import { getUser } from "./get-user"

interface CreateDungeonMasterParams {
  clerkUserId: string
}

const getDMSessions = async ({ clerkUserId }: CreateDungeonMasterParams) => {
  const user = await getUser({ clerkUserId })
  if (!user) {
    throw new Error("Usuário não identificado")
  }

  return db.session.findMany({
    where: {
      adventure: {
        dungeonMasterId: user.dungeonMaster?.id,
      },
    },
    include: {
      adventure: true,
    },
    orderBy: {
      date: "asc",
    },
  })
}

export default getDMSessions
