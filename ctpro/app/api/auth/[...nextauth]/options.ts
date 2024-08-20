import client from "@/services/rest";
import { NextAuthOptions } from "next-auth";
import FacebookProvider from "next-auth/providers/facebook";
import CredentialsProvider from "next-auth/providers/credentials";
declare module "next-auth" {
  interface User {
    access_token: string;
  }
  interface Session {
    id: string;
    full_name: string;
    email: string;
    phone: string;
    birthday: string;
    gender: string;
    country: string;
    address: string;
    access_token: string;
    alias: string;
    avatar: string;
  }
}

export const options: NextAuthOptions = {
  secret: process.env.AUTH_TOKEN_KEY,
  session: {
    strategy: "jwt",
    maxAge: 30 * 24 * 60 * 60 // 30 days
  },
  providers: [
    CredentialsProvider({
      name: "Credentials",

      credentials: {
        email: { label: "Email", type: "text", placeholder: "jsmith" },
        password: { label: "Password", type: "password" },
      },

      async authorize(credentials) {
        if (credentials === undefined || credentials.email === undefined)
          return null;

        return await client.users
          .login({
            email: credentials.email,
            password: credentials.password,
          })
          .then(({ data }) => {
            return {
              ...data,
              id: data.user_id.toString(),
              access_token: data.token,
            };
          })
          .catch((response) => {
            throw Error(JSON.stringify(response.response.data));
          });
      },
    }),
    FacebookProvider({
      clientId: process.env.FACEBOOK_CLIENT_ID as string,
      clientSecret: process.env.FACEBOOK_CLIENT_SECRET as string,
    }),
  ],

  callbacks: {
    async jwt({ token, user }) {
      return { ...token, ...user };
    },

    async session({ session, token }) {
      session.user = token;
      if (token) session.access_token = token.token as string;
      return { ...session, ...token };
    },
  },

  pages: {
    signIn: "/login",
  },
};
