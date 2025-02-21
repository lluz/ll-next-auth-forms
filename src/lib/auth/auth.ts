import NextAuth from "next-auth";
import Github from "next-auth/providers/github";
import * as appServerConfig from "@appLib/constants/server-config";

if (!appServerConfig.authProviderClientId || !appServerConfig.authProviderClientSecret) {
  throw new Error('Missing github oauth credentials');
}

export const { 
  handlers: { GET, POST }, 
  auth,
  signOut,
  signIn,
} = NextAuth({
  providers: [
    Github({
      clientId: appServerConfig.authProviderClientId,
      clientSecret: appServerConfig.authProviderClientSecret,
    }),
  ],
  session: {
    strategy: "jwt", // Use JWT for sessions
  },
  cookies: {
    sessionToken: {
      name: process.env.NODE_ENV === "development"
        ? "authjs.session-token"
        : "__Secure-next-auth.session-token",
      options: {
        secure: process.env.NODE_ENV !== "development",
      },
    },
    callbackUrl: {
      name: process.env.NODE_ENV === "development"
        ? "authjs.callback-url"
        : "__Secure-next-auth.callback-token",
      options: {
        secure: process.env.NODE_ENV !== "development",
      },
    },
    csrfToken: {
      name: process.env.NODE_ENV === "development"
        ? "authjs.csrf-token"
        : "__Secure-next-auth.csrf-token",
      options: {
        secure: process.env.NODE_ENV !== "development",
      },
    },
  },
});

// Use this function to get the session in Server Components
export async function getSession() {
  return await auth();
}