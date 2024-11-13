export {}

// Create a type for the roles
export type Roles = "admin" | "dungeon_master" | "player"

declare global {
  interface CustomJwtSessionClaims {
    metadata: {
      role?: Roles
    }
  }
}
