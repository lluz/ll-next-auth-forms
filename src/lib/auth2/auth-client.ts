import { createAuthClient } from "better-auth/react"

export const authClient = createAuthClient({
    baseURL: "https://localhost:3333"
})