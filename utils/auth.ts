import { db } from "@/lib/db";
import { PrismaAdapter } from "@next-auth/prisma-adapter";
import { NextAuthOptions, User, getServerSession } from "next-auth";
import GoogleProvider from "next-auth/providers/google";

declare module "next-auth" {
  interface Session {
    user: User & {
      isAdmin: Boolean;
      //new
      id: string;
    };
  }
}
declare module "next-auth/jwt" {
  interface JWT {
    isAdmin: Boolean;
    //new
    id: string;
  }
}

export const authOptions: NextAuthOptions = {
  adapter: PrismaAdapter(db),
  session: {
    strategy: "jwt",
  },
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_ID as string,
      clientSecret: process.env.GOOGLE_SECRET as string,
    }),
  ],
  callbacks: {
    async session({ token, session }) {
      if (token) {
        session.user.isAdmin = token.isAdmin;
        //new
        session.user.id = token.id;
      }
      return session;
    },
    async jwt({ token }) {
      const userInDb = await db.user.findUnique({
        where: {
          email: token.email!,
        },
      });
      token.isAdmin = userInDb?.isAdmin!;
      token.id = userInDb?.id!;
      return token;
    },
  },
};

export const getAuthSession = () => getServerSession(authOptions);
