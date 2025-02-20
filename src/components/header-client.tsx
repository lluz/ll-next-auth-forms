'use client'

import Image from 'next/image';
import { authClient } from '@appLib/auth2/auth-client';

// import { SignInAction, SignOutAction } from '@appLib/auth2/actions';

export default function MainHeaderClient() {

  // const { data: session } = authClient.useSession();

  const { 
    data: session, 
    isPending, //loading state
    error, //error object
    refetch //refetch the session
} = authClient.useSession();

  let authContent: React.ReactNode;
  
  if (session?.user) {

    authContent = (
      <>
        {/* <SignOutAction /> */}

        <button onClick={async () => {
          await authClient.signOut({
            fetchOptions: {
              onSuccess: () => {
                window.location.href = "/logged-out"; // redirect to login page
              },
            },
          });
        }}>Sign OUT</button>


        <Image src={session.user.image || ''} width={60} height={60} alt={'avatar'} />
      </>
    );

  } 
  else {

    authContent = (
      <>
        {/* <SignInAction /> */}

        <button onClick={async () => {
          await authClient.signIn.social({
            provider: "github",
            callbackURL: "/my-account", 
            errorCallbackURL: "/error",
        });
        }}>Sign INnn</button>

      </>
    );

  }

  return (
    <fieldset>
      {authContent}
    </fieldset>
  );
}
