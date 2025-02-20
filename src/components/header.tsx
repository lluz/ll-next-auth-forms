import Image from 'next/image';

import { getSession } from "@appLib/auth2";

import { SignInAction, SignOutAction } from "@/lib/auth2/actions-server";

export default async function MainHeader() {

  const session = await getSession();

  console.log("----------------------MainHeader", session);

  let authContent: React.ReactNode;
  
  if (session?.user) {

    authContent = (
      <>
        <h1>MainHeader --- Welcome {session.user.name}</h1>
        <Image src={session.user.image || ''} width={60} height={60} alt={'avatar'} />
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
