import NextAuth from "next-auth/next";
import GitHubProvider from "next-auth/providers/github";
import { connectToDB } from "@utils/database";
import User from "@models/user";
export const authOptions = {
  providers: [
    GitHubProvider({
      clientId: process.env.GITHUB_CLIENT_ID,
      clientSecret: process.env.GITHUB_SECRET,
    }),
  ],
  callbacks: {
    async signIn({ account, profile, user, credentials }) {
      console.log(account, user, profile, credentials);
      const providerAccountId = account.providerAccountId;
      try {
        await connectToDB();
        const existingUser = await User.findOne({ gh_id: providerAccountId });
        if (!existingUser) {
          await User.create({
            email: profile.email,
            rating: 0,
            gh_id: providerAccountId,
          });
        }
        return true;
      } catch (error) {
        console.log(error);
        return false;
      }
      return true;
    },
    async session({ session, token, user }) {
      // console.log("SESSION:\n", session);
      // console.log("TOKEN:\n", token);
      // console.log("USER:\n", user);
      session.user.id = token.id;
      session.accessToken = token.accessToken;
      return session;
    },
    async jwt({ token, user, account, profile, isNewUser }) {
      if (user) {
        token.id = user.id;
      }
      if (account) {
        token.accessToken = account.access_token;
      }
      return token;
    },
  },
};

export const handler = NextAuth(authOptions);
export { handler as GET, handler as POST };
