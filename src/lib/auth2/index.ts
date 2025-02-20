import { cache } from "react";
import { headers } from "next/headers";

import { betterAuth } from "better-auth";
import { nextCookies } from "better-auth/next-js";

import * as appServerConfig from "@appLib/constants/server-config";
 
export const auth = betterAuth({
  socialProviders: { 
    github: { 
      clientId: appServerConfig.authClientId!, 
      clientSecret: appServerConfig.authClientSecret!, 
    } 
  }, 
  plugins: [
    nextCookies()
  ],
});

export const getSession = cache(async () => {

  console.log("getSession_____________________");

  return await auth.api.getSession({
    headers: await headers()
  })
})