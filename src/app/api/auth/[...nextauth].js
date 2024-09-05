// pages/api/auth/[...nextauth].js
import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";

 const authOptions = {
     providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    }),
  ],
  callbacks:{
    async signIn() {
        return true
    }
  }
 }

const handler = NextAuth(authOptions)

export {handler as GET, handler as POST}