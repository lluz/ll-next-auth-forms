import Image from 'next/image';

import { betterFetch } from "@better-fetch/fetch";
import { getSession, getSessionByCookie, auth } from "@appLib/auth2";
import { headers } from "next/headers";

import { SignInAction, SignOutAction } from "@/lib/auth2/actions-server";

type Session = typeof auth.$Infer.Session;

export default async function MainHeader() {

  // const session = await getSession();
  // const session = await auth.api.listUserAccounts({
  //   headers: await headers()
  // })


  const { data: session } = await betterFetch<Session>("/api/auth/get-session", {
    baseURL: 'https://localhost:3333',
    // headers: {
    //   cookie: (await headers()).get("__Secure-better-auth.session_token") || "", // Forward the cookies from the request
    // },
    // credentials: 'include',
    method: 'GET',
  }).then(res => {
    console.log("MainHeader --- res", res);
    return res;
  });

  // console.log("----------------------MainHeader", session);

  let authContent: React.ReactNode;
  
  if (await getSessionByCookie()) {

    authContent = (
      <>
        <h1>MainHeader --- Welcome {session?.user.name}</h1>
        <Image src={session?.user.image || '/not-found.jpg'} width={60} height={60} alt={'avatar'} />
      </>
    );

  } 
  else {

    authContent = (
      <div>MainHeader --- Not authenticated</div>
    );

  }

  return (
    <fieldset>
      {authContent}

      <hr />
      
      {!session?.user ? (
        <SignInAction />
      ) : (
        <SignOutAction />
      )}

    </fieldset>
  );

}
