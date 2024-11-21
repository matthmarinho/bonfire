"use server"

import { revalidatePath } from "next/cache"
import { db } from "../_lib/prisma"
import { getUser } from "./get-user"

interface CreateAdventureParams {
  title: string
  description: string
  system: string
  format: string
  imageUrl: string
  clerkUserId: string
}

const createAdventure = async ({
  title,
  description,
  system,
  format,
  imageUrl,
  clerkUserId,
}: CreateAdventureParams) => {
  try {
    const user = await getUser({ clerkUserId })
    if (!user) {
      throw new Error("Usuário não identificado")
    }

    await db.adventure.create({
      data: {
        title,
        description,
        system,
        format,
        imageUrl: imageUrl,
        dungeonMasterId: user.dungeonMaster?.id as string,
      },
    })
    revalidatePath("/dm")
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
  } catch (error: any) {
    throw new Error("Something went wrong")
  }
}

export default createAdventure
