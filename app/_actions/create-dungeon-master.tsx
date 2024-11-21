"use server"

import { db } from "../_lib/prisma"
import { getUser } from "./get-user"
import { setRole } from "./update-clerk-user"

interface CreateDungeonMasterParams {
  clerkUserId: string
}

const createDungeonMaster = async ({
  clerkUserId,
}: CreateDungeonMasterParams) => {
  try {
    const user = await getUser({ clerkUserId })
    if (!user) {
      throw new Error("Usuário não identificado")
    }

    setRole({ id: clerkUserId, role: "dungeon_master" })

    await db.dungeonMaster.create({
      data: { userId: user.id },
    })
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
  } catch (error: any) {
    throw new Error("There is already a DM for this user", error)
  }
}

export default createDungeonMaster
