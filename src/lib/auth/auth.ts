import NextAuth from 'next-auth';
import Github from "next-auth/providers/github";
import * as appServerConfig from "@appLib/constants/server-config";

if (!appServerConfig.authProviderClientId || !appServerConfig.authProviderClientSecret) {
  throw new Error('Missing github oauth credentials');
}

const authOptions = {
  trustHost: true,
  providers: [
    Github({
      clientId: appServerConfig.authProviderClientId,
      clientSecret: appServerConfig.authProviderClientSecret,
    }),
  ],
  callbacks: {
  },
};

export const {
  handlers,
  auth,
  signOut,
  signIn,
} = NextAuth(authOptions);
