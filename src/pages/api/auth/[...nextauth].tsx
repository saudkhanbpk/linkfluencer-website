import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import FacebookProvider from "next-auth/providers/facebook";

export default NextAuth({
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID || "",
      clientSecret: process.env.GOOGLE_CLIENT_SECRET || "",
      authorization: {
        params: {
          scope: "openid email profile",
        },
      },
    }),

    FacebookProvider({
      clientId: process.env.FACEBOOK_CLIENT_ID as string,
      clientSecret: process.env.FACEBOOK_CLIENT_SECRET as string,
      authorization: { params: { scope: "profile" } },
    }),
  ],
  secret: process.env.NEXTAUTH_SECRET,
  pages: {
    signIn: "/auth/signin",
  },
  callbacks: {
    async redirect({ url, baseUrl }) {
      console.log("Redirect URL:", url); // Log the redirect URL
      return baseUrl;
    },
    async session({ session, token }) {
      console.log("Session:", session); // Log session details
      console.log("Token:", token); // Log token details
      return session;
    },
    async jwt({ token, account }) {
      console.log("JWT Token:", token); // Log JWT token details
      console.log("Account:", account); // Log account details
      return token;
    },
  },
});
