"use server"

import { clerkClient } from "@clerk/nextjs/server"

interface RoleParams {
  id: string
  role: string
}

export async function setRole({ id, role }: RoleParams) {
  try {
    const res = await (
      await clerkClient()
    ).users.updateUser(id as string, {
      publicMetadata: { role: role },
    })
    return { message: res.publicMetadata }
  } catch (err) {
    return { message: err }
  }
}

// export async function removeRole(formData: FormData) {
//   try {
//     const res = await (await clerkClient()).users.updateUser(id as string, {
//       publicMetadata: { role: null },
//     })
//     return { message: res.publicMetadata }
//   } catch (err) {
//     return { message: err }
//   }
// }
