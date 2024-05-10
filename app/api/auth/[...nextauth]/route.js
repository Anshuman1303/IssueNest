import NextAuth from "next-auth/next";
import GitHubProvider from "next-auth/providers/github";
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
      // console.log(account, user, profile, credentials);
      /* try {
        await connectToDB();
        const existingUser = await User.findOne({ email: profile.email });
      } catch (error) {
        console.log(error);
        return false;
      } */
      return true;
    },
    async session({ session, token, user }) {
      // console.log("SESSION:\n", session);
      // console.log("TOKEN:\n", token);
      // console.log("USER:\n", user);
      session.user.id = token.id;
      session.accessToken = token.accessToken;
      // session.XYZ = token.XYZ;
      return session;
    },
    async jwt({ token, user, account, profile, isNewUser }) {
      if (user) {
        token.id = user.id;
      }
      if (account) {
        token.accessToken = account.access_token;
        // token.XYZ = "ABC";
      }
      return token;
    },
  },
};

export const handler = NextAuth(authOptions);
export { handler as GET, handler as POST };
