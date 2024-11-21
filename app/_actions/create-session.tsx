"use server"

import { revalidatePath } from "next/cache"
import { db } from "../_lib/prisma"

interface CreateSessionParams {
  title: string
  date: Date
  duration: string
  location: string
  adventureId: string
}

const createSession = async ({
  title,
  date,
  duration,
  adventureId,
  location,
}: CreateSessionParams) => {
  try {
    await db.session.create({
      data: {
        title,
        date,
        duration,
        adventureId,
        location,
      },
    })
    revalidatePath("/dm")
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
  } catch (error: any) {
    throw new Error("Something went wrong")
  }
}

export default createSession
