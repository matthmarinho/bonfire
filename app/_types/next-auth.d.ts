import NextAuth from "next-auth" // eslint-disable-line no-unused-vars, @typescript-eslint/no-unused-vars

declare module "next-auth" {
  interface Session {
    user: {
      id: string
      token: string
      name: string
      email: string
      role: string
      image: string
    }
  }
  interface User {
    id: string
    token: string
    name: string
    email: string
    role: string
    image: string
  }
}

declare module "next-auth/jwt" {
  interface JWT {
    user: {
      id: string
      token: string
      name: string
      email: string
      role: string
      image: string
    }
  }
}
