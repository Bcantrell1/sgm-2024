import NextAuth from "next-auth"
import GoogleProvider from "next-auth/providers/google"

const allowedEmails = ['bribri546@gmail.com', 'samsonsgm@gmail.com']

const handler = NextAuth({
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID!,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
    }),
  ],
  callbacks: {
    async signIn({ user }) {
      // Only allow sign-in if the user's email is in the allowedEmails list
      return allowedEmails.includes(user.email ?? "")
    },
    async jwt({ token, user }) {
      if (user) {
        token.email = user.email
      }
      return token
    },
    async session({ session, token }) {
      if (session.user) {
        session.user.email = token.email as string
      }
      return session
    }
  },
  pages: {
    signIn: '/admin',
    error: '/admin/error',
  },
})

export { handler as GET, handler as POST }

