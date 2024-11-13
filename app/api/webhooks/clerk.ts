import { db } from "@/app/_lib/prisma"
import type { WebhookEvent } from "@clerk/nextjs/server"
import { NextResponse } from "next/server"

// Clerk Webhook: create or delete a user in the database by Clerk ID
export async function POST(req: Request) {
  try {
    // Parse the Clerk Webhook event
    const evt = (await req.json()) as WebhookEvent

    const { id: clerkUserId } = evt.data
    if (!clerkUserId)
      return NextResponse.json(
        { error: "No user ID provided" },
        { status: 400 },
      )

    // Create or delete a user in the database based on the Clerk Webhook event
    let user = null
    switch (evt.type) {
      case "user.created": {
        user = await db.user.upsert({
          where: {
            clerkUserId,
          },
          update: {
            clerkUserId,
          },
          create: {
            clerkUserId,
          },
        })
        break
      }
      case "user.deleted": {
        user = await db.user.delete({
          where: {
            clerkUserId,
          },
        })
        break
      }
      default:
        break
    }

    return NextResponse.json({ user })
  } catch (error) {
    return NextResponse.json({ error }, { status: 500 })
  }
}
