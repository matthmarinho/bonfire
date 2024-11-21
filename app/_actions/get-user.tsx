"use server"

import { db } from "../_lib/prisma"

interface GetUserProps {
  clerkUserId: string
}

export const getUser = ({ clerkUserId }: GetUserProps) => {
  return db.user.findUnique({
    where: {
      clerkUserId,
    },
    include: {
      dungeonMaster: true,
    },
  })
}
