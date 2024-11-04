import NextAuth from "next-auth" // eslint-disable-line no-unused-vars, @typescript-eslint/no-unused-vars

declare module "next-auth" {
  interface Session {
    user: {
      id: string
      name?: string | null
      email?: string | null
      image?: string | null
    }
  }
}
