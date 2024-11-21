"use server"

import { db } from "../_lib/prisma"
import { getUser } from "./get-user"

interface CreateDungeonMasterParams {
  clerkUserId: string
}

const getDMAdventures = async ({ clerkUserId }: CreateDungeonMasterParams) => {
  const user = await getUser({ clerkUserId })
  if (!user) {
    throw new Error("Usuário não identificado")
  }

  return db.adventure.findMany({
    include: {
      sessions: true,
    },
    where: {
      dungeonMasterId: user.dungeonMaster?.id,
    },
  })
}

export default getDMAdventures
