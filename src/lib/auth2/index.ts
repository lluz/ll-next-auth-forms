import { cache } from "react";
import { headers, cookies } from "next/headers";

import { betterAuth, getSessionCookie } from "better-auth";
import { betterFetch } from "@better-fetch/fetch";
import { nextCookies } from "better-auth/next-js";




import * as appServerConfig from "@appLib/constants/server-config";

 
export const auth = betterAuth({
  plugins: [
    nextCookies()
  ],
  socialProviders: { 
    github: { 
      clientId: appServerConfig.authClientId!, 
      clientSecret: appServerConfig.authClientSecret!, 
    } 
  },
  session: {
    expiresIn: 60 * 60 * 24 * 7, // 7 days
    updateAge: 60 * 60 * 24 // 1 day (every 1 day the session expiration is updated)
  },
  advanced: {
    // cookiePrefix: "my-app",
    // useSecureCookies: true,
    defaultCookieAttributes: {
      // secure: true,
      httpOnly: false,
    },
  },
});

export const getSession = cache(async () => {

  console.log("getSession_____________________");

  return await auth.api.getSession({
    headers: await headers()
  });
})

// export async function getSession() {
//   const requestHeaders = await headers();
//   console.log("Cookies received:", (await cookies()).getAll());

//   return await auth.api.getSession({
//     headers: Object.fromEntries(requestHeaders.entries()),
//   });
// }

export async function getSessionByCookie() {
  return (await cookies()).get("__Secure-better-auth.session_token") || null;
}

// export const getSession = cache(async () => {

//   const { data: session } = await betterFetch<Session>("/api/auth/get-session", {
//     baseURL: 'https://localhost:3333',
//   });

//   console.log("----------------------getSession ----------------------", session);

//   return session;

// })

// export const getSession = async () => {

//   const { data: session } = await betterFetch<Session>("/api/auth/get-session", {
//     baseURL: 'https://localhost:3333',
//   });

//   console.log("----------------------getSession ----------------------", session);

//   return session;

// };