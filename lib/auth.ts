import { PrismaAdapter } from "@next-auth/prisma-adapter";
import { prisma } from "./prisma";

import CredentialsProvider from "next-auth/providers/credentials";
import bcrypt from "bcrypt";
import type { AuthOptions } from "next-auth";

export const authConfig: AuthOptions = {
  adapter: PrismaAdapter(prisma),
  session: { strategy: "jwt" },
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: { label: "Email", type: "text" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials) {
        if (!credentials?.email || !credentials?.password) return null;

        const user = await prisma.user.findUnique({
          where: { email: credentials.email },
        });

        if (!user || !user.password) return null;

        const isValid = await bcrypt.compare(
          credentials.password,
          user.password
        );
        if (!isValid) return null;

        return user;
      },
    }),
  ],
  pages: {
    signIn: "/login",
  },
};
