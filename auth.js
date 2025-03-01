
import Google from "next-auth/providers/google"
import Facebook from "next-auth/providers/facebook"
import NextAuth from "next-auth"

export const { handlers, signIn, signOut, auth } = NextAuth({
  providers: [Google, Facebook],
})