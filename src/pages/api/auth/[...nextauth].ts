import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import { CREATIVE_BACKEND } from "@/constants/constant";

export default NextAuth({
  providers: [
    CredentialsProvider({
      id: "credentials",
      name: "Credentials",
      credentials: {
        email: { label: "email", type: "text" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials: any, req) {
        try {
          const res = await fetch(`${CREATIVE_BACKEND}/signin`, {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              email: credentials.email,
              password: credentials.password,
            }),
          });

          const data = await res.json();

          if (res.ok && data.user) {
            return data; // Return the whole response data
          } else {
            console.log("data", data)
            throw new Error(data.error || 'Authentication failed');
          }
        } catch (err: any) {
          throw new Error(err.message || 'Internal server error');
        }
      },
    }),
    // Other providers...
  ],
  callbacks: {
    async jwt({ token, user }: any) {
      console.log("<===user===>", user)
      if (user) {
        token.accessToken = user.accessToken;
        token.refreshToken = user.refreshToken;
        token.user = user.user;
      }
      return token;
    },
    async session({ session, token }: any) {
      session.user = token.user;
      session.accessToken = token.accessToken;
      session.refreshToken = token.refreshToken;
      return session;
    },
  },
  secret: "your_generated_secret",
  session: {
    strategy: "jwt",
  },
  pages: {
    signIn: "/auth/signin",
    signOut: "/auth/signout",
    error: "/auth/error",
    verifyRequest: "/auth/verify-request",
  }
});
