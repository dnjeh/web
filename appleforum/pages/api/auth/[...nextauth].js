import { connectDB } from "@/util/database";
import { MongoDBAdapter } from "@next-auth/mongodb-adapter";
import NextAuth from "next-auth";
import GithubProvider from "next-auth/providers/github";

export const authOptions = {
  providers: [
    GithubProvider({
      clientId: 'a6340bdc5b92ddf8d01b',
      clientSecret: 'e449b9a00687d291bec48b6baf4dc0b2c10fecf5',
    }),
  ],
  secret : 'appleforummm',
  adapter : MongoDBAdapter(connectDB)
};
export default NextAuth(authOptions); 