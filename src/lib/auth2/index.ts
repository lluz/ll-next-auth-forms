import { betterAuth } from "better-auth";

import * as appServerConfig from "@appLib/constants/server-config";
 
export const auth = betterAuth({
  socialProviders: { 
    github: { 
      clientId: appServerConfig.authClientId!, 
      clientSecret: appServerConfig.authClientSecret!, 
    } 
  }, 
});