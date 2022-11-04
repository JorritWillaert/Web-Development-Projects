import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";

export const authOptions = {
  // Configure one or more authentication providers
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    }),
    // ...add more providers here
  ],

  // The standard next auth page is this:
  // theme: {
  //   logo: "https://links.papareact.com/sq0",
  //   brandColor: "#f13287",
  //   colorScheme: "auto",
  // },
  pages: {
    signIn: "/auth/signin",
  },
  callbacks: {
    async session({ session, token, user }) {
      session.user.username = session.user.name
        .split(" ")
        .join("")
        .toLowerCase();
      session.user.uid = token.sub; // Google's user ID
      return session;
    },
  },
};
export default NextAuth(authOptions);
