"use server"

import { db } from "../_lib/prisma"

interface GetAdventureParams {
  adventureId: string
}

const GetAdventure = async ({ adventureId }: GetAdventureParams) => {
  return db.adventure.findUnique({
    where: {
      id: adventureId,
    },
    include: {
      players: true,
      sessions: true,
    },
  })
}

export default GetAdventure
